"use client"

import { Linkedin, Twitter, Youtube, Mail, Phone } from "lucide-react"
import { useEffect, useRef } from "react"

export function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Robot animation
    class Robot {
      x: number
      y: number
      size: number
      speed: number

      constructor() {
        this.x = 50
        this.y = canvas.height / 2
        this.size = 20
        this.speed = 1.5
      }

      update() {
        this.x += this.speed

        if (this.x > canvas.width + this.size) {
          this.x = -this.size
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Body
        ctx.fillStyle = "#10b981"
        ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size)

        // Head
        ctx.fillRect(this.x - this.size / 4, this.y - this.size / 2 - this.size / 4, this.size / 2, this.size / 4)

        // Arms
        ctx.fillRect(this.x - this.size / 2 - this.size / 4, this.y - this.size / 4, this.size / 4, this.size / 2)
        ctx.fillRect(this.x + this.size / 2, this.y - this.size / 4, this.size / 4, this.size / 2)

        // Legs
        ctx.fillRect(this.x - this.size / 3, this.y + this.size / 2, this.size / 4, this.size / 3)
        ctx.fillRect(this.x + this.size / 12, this.y + this.size / 2, this.size / 4, this.size / 3)

        // Eyes
        ctx.fillStyle = "white"
        ctx.fillRect(
          this.x - this.size / 8 - this.size / 16,
          this.y - this.size / 2 - this.size / 8,
          this.size / 8,
          this.size / 16,
        )
        ctx.fillRect(this.x + this.size / 16, this.y - this.size / 2 - this.size / 8, this.size / 8, this.size / 16)
      }
    }

    const robot = new Robot()

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      robot.update()
      robot.draw(ctx)
      requestAnimationFrame(animate)
    }

    animate()

    // Resize handling
    function handleResize() {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">General Robotics</h3>
            <p className="text-gray-400 mb-6">Forging the Future of Work, One Robot at a Time</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-emerald-500" />
                <a href="mailto:info@generalrobotics.com" className="text-gray-400 hover:text-white transition-colors">
                  info@generalrobotics.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-emerald-500" />
                <a href="tel:+33123456789" className="text-gray-400 hover:text-white transition-colors">
                  +33 123 456 789
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  News & Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Marcel in Action</h3>
            <div className="h-24 bg-gray-800 rounded-lg overflow-hidden">
              <canvas ref={canvasRef} className="w-full h-full"></canvas>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} General Robotics. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
