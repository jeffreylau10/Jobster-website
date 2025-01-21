"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"

const rotatingWords = ["Talent Solutions", "Workforce Success", "Team Growth"]

const testimonials = [
  {
    quote:
      "Jobster has streamlined our recruitment and payroll, saving us valuable time. Their reliable services allow us to focus on growing our business.",
    author: "Senior HR Manager, Public Sector",
  },
  {
    quote:
      "Jobster's flexible recruitment solutions help us quickly find the right candidates. Their reference checks ensure we hire top talent with confidence.",
    author: "Talent Acquisition Lead, Multinational Corporation",
  },
  {
    quote:
      "Jobster's professional staff search and payroll services have greatly improved our efficiency. We trust them as a vital partner in managing our workforce.",
    author: "Operations Director, Financial Services Firm",
  },
]

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentWord, setCurrentWord] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [progress, setProgress] = useState(0)

  const resetProgress = useCallback(() => {
    setProgress(0)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % rotatingWords.length)
        setIsAnimating(false)
      }, 500)
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          resetProgress()
          setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
          return 0
        }
        return Math.min(oldProgress + 1, 100)
      })
    }, 50) // Adjust this value to change the speed of the progress bar

    return () => clearInterval(timer)
  }, [resetProgress])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="geometric-circle w-[500px] h-[500px] -top-64 -right-64 opacity-50" />
      <div className="geometric-blob w-[600px] h-[600px] -bottom-64 -left-64 opacity-50" />

      <section className="py-20 px-4 md:px-0 relative">
        <div className="container mx-auto text-center">
          <div className="content-card max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down text-gray-800">
              Effortless Hiring, Smarter{" "}
              <span className="inline-block relative overflow-hidden min-w-[280px]">
                <span
                  className={`inline-block transition-all duration-500 ${
                    isAnimating ? "opacity-0 transform -translate-y-full" : "opacity-100 transform translate-y-0"
                  }`}
                >
                  {rotatingWords[currentWord]}
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up text-gray-600">
              Experience seamless recruitment with Jobster—empowering your business with expert staff search,
              hassle-free payroll management, and thorough reference checks.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 animate-fade-in shadow-lg"
            >
              Build Your Dream Team
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-0 relative">
        <div className="container mx-auto">
          <div className="content-card">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in text-gray-800">
              Our Trusted Partners
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12 animate-fade-in">
              {[
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo2x-E24KB1bu3fvaAd1c5zeaYeC5GE8KHv.png",
                  alt: "National Parks Singapore",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hpb-logo-ShPOghAij7ax6gQ6ZVIynEmQhexNjF.png",
                  alt: "Health Promotion Board Singapore",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nanyang-technological-university-logo-99C7E42213-seeklogo.com-nK3nKHLnjGY6UQ47jL3XQx106Bgxl3.png",
                  alt: "Nanyang Technological University",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Samsung-Logo-glc1M3P4j5aGA7u6H3WVn2UMIlD7PL.png",
                  alt: "Samsung",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/income_logo_full_colour_rgb-t2jRqh02YYeS9JkMYI7Jyhi9bOxxBO.png",
                  alt: "NTUC Income",
                },
              ].map((logo, index) => (
                <div key={index} className="w-1/2 md:w-1/3 lg:w-1/5 transform hover:scale-105 transition-transform">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={150}
                    height={75}
                    className="mx-auto object-contain h-16 w-full"
                  />
                </div>
              ))}
            </div>

            <div className="content-card bg-white/50 relative overflow-hidden h-64 p-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center max-w-2xl mx-auto animate-fade-in p-8 border-2 border-orange-300 rounded-2xl">
                  <p className="italic text-lg mb-4 text-gray-700">{testimonials[currentTestimonial].quote}</p>
                  <p className="font-semibold text-gray-900">— {testimonials[currentTestimonial].author}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
                <div
                  className="h-full bg-orange-500 transition-all duration-50 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

