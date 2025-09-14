// API client to replace Supabase functionality
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

interface WaitlistData {
  email: string;
  created_at?: string;
}

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  async request<T = any>(endpoint: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    const defaultOptions: RequestOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const config = { ...defaultOptions, ...options };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  }

  // Add email to waitlist
  async addToWaitlist(email: string): Promise<ApiResponse<WaitlistData>> {
    return this.request<WaitlistData>('/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Get waitlist stats
  async getWaitlistStats(): Promise<ApiResponse<{ count: number }>> {
    return this.request<{ count: number }>('/api/waitlist/stats');
  }

  // Health check
  async healthCheck(): Promise<ApiResponse> {
    return this.request('/health');
  }
}

// Create and export client instance
export const apiClient = new ApiClient();

// For backward compatibility with Supabase-style interface
export const getApiClient = () => {
  if (typeof window === 'undefined') {
    // Server-side: return null to prevent usage during SSR
    return null;
  }
  
  return {
    from: (table: string) => {
      if (table === 'waitlist') {
        return {
          insert: async (data: Array<{ email: string; created_at?: string }>) => {
            try {
              const result = await apiClient.addToWaitlist(data[0].email);
              return { data: result.data, error: null };
            } catch (error) {
              const errorMessage = error instanceof Error ? error.message : 'Unknown error';
              return { data: null, error: { message: errorMessage } };
            }
          }
        };
      }
      throw new Error(`Table ${table} not supported`);
    }
  };
};