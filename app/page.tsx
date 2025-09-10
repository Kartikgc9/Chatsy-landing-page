"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bell, Smartphone, Zap, MessageSquare, Sparkles, X, Mail } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setShowWaitlistModal(false)
        setIsSubmitted(false)
        setEmail("")
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 liquid-glass-strong">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gradient" style={{ color: "oklch(0.7 0.22 264.05)" }}>
              chatsy.
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#notify" className="text-muted-foreground hover:text-foreground transition-colors">
                Get Notified
              </a>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Coming Soon
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-8">
            <Sparkles className="mr-2 h-4 w-4" />
            AI-Powered Text Suggestions
          </Badge>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-balance">
            <span className="text-gradient" style={{ color: "oklch(0.7 0.22 264.05)" }}>
              chatsy.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance">
            Transform your messaging with intelligent AI suggestions. Write better, faster, and more naturally across
            all your conversations.
          </p>

          {/* App Showcase */}
          <div className="relative max-w-5xl mx-auto mb-16">
            <div className="glass-strong rounded-3xl p-8 md:p-12">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arranged-YPmOPXGKoiQMePI9dsx3ZEW3Chy0nl.png"
                alt="Chatsy app interface showing AI text suggestions across multiple iPhone screens"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setShowWaitlistModal(true)}
            >
              <Bell className="mr-2 h-5 w-5" />
              Get Notified When Available
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-border/60 text-foreground hover:bg-background/20 bg-transparent"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Intelligent messaging.
              <br />
              <span className="text-gradient" style={{ color: "oklch(0.75 0.25 41.85)" }}>
                Effortlessly enhanced.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Experience the future of communication with AI that understands context, tone, and intent to help you
              express yourself perfectly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass p-8 hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Smart Suggestions</h3>
                <p className="text-muted-foreground">
                  Get contextually aware text suggestions that understand your conversation flow and personal style.
                </p>
              </div>
            </Card>

            <Card className="glass p-8 hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Universal Integration</h3>
                <p className="text-muted-foreground">
                  Works seamlessly across all your messaging apps, from WhatsApp to professional communications.
                </p>
              </div>
            </Card>

            <Card className="glass p-8 hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Adaptive Learning</h3>
                <p className="text-muted-foreground">
                  AI that learns from your writing patterns to provide increasingly personalized suggestions.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="notify" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass-strong p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Be the first to experience
              <br />
              <span className="text-gradient" style={{ color: "oklch(0.75 0.25 41.85)" }}>
                the future of messaging.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Join our waitlist to get early access when Chatsy launches. Be among the first to transform your
              conversations with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setShowWaitlistModal(true)}
              >
                <Bell className="mr-2 h-5 w-5" />
                Join Waitlist
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-border/60 text-foreground hover:bg-background/20 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Waitlist Modal */}
      {showWaitlistModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowWaitlistModal(false)} />

          {/* Modal */}
          <Card className="relative glass-strong p-8 w-full max-w-md mx-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowWaitlistModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-background/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full glass mx-auto mb-4 flex items-center justify-center">
                    <Bell className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Join the Waitlist</h3>
                  <p className="text-muted-foreground">
                    Be the first to know when Chatsy launches and get exclusive early access.
                  </p>
                </div>

                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl glass border border-border/20 bg-background/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-3 bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={!email}
                  >
                    <Bell className="mr-2 h-5 w-5" />
                    Join Waitlist
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  We'll only send you updates about Chatsy. No spam, ever.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/20 mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                <p className="text-muted-foreground">
                  Thanks for joining! We'll notify you as soon as Chatsy is ready.
                </p>
              </div>
            )}
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-gradient mb-4" style={{ color: "oklch(0.7 0.22 264.05)" }}>
            chatsy.
          </div>
          <p className="text-muted-foreground mb-6">AI-powered text suggestions for better communication</p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Support
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
