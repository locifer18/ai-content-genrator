import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-8 h-8 text-purple-600" />
          <span className="text-2xl font-bold text-gray-900">AI Content Generator</span>
        </div>
        <Link href="/dashboard">
          <Button className="bg-purple-600 hover:bg-purple-700 cursor-pointer">Get Started</Button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Generate Amazing Content with
          <span className="text-purple-600"> AI Power</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Create blog posts, social media content, marketing copy, and more in seconds.
          Powered by advanced AI technology.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 mx-2 my-1 cursor-pointer">
              Start Creating <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" className="bg-white my-2 text-gray-900 cursor-pointer" variant="outline">
              View Templates
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-3 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI Generator?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Generate high-quality content in seconds, not hours.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">50+ Templates</h3>
            <p className="text-gray-600">Choose from a wide variety of content templates.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-600">Your data is safe and secure with enterprise-grade protection.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Content Creation?</h2>
        <p className="text-xl mb-8 opacity-90">Join thousands of creators using AI to boost their productivity</p>
        <Link href="/dashboard">
          <Button size="lg" className="bg-white text-purple-600 cursor-pointer hover:bg-gray-100">
            Get Started Free <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-gray-600">
        <p>&copy; 2024 AI Content Generator. All rights reserved.</p>
      </footer>
    </div>
  );
}
