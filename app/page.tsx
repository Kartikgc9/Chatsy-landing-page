"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bell, Smartphone, Zap, MessageSquare, Sparkles } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const handleJoinDiscord = () => {
    window.open('https://discord.gg/KRrNBHWc', '_blank')
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
              onClick={handleJoinDiscord}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Join Discord Community
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
              Join our community and
              <br />
              <span className="text-gradient" style={{ color: "oklch(0.75 0.25 41.85)" }}>
                shape the future of messaging.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Join our Discord community to connect with other users and stay updated on Chatsy's development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleJoinDiscord}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Join Discord Community
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
