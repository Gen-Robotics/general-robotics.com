"use client"

import { Linkedin, Twitter, Youtube, Mail, Phone } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center justify-center">
                                <Mail className="w-5 h-5 mr-3 text-emerald-500" />
                                <a href="mailto:info@generalrobotics.com" className="text-gray-400 hover:text-white transition-colors">
                                    info@generalrobotics.com
                                </a>
                            </li>
                        </ul>
                        <div className="flex space-x-4 justify-center mt-6">
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

                    <div className="text-center">
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
                        </ul>
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
