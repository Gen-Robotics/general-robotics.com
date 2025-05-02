"use client";

import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} General Robotics. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a
              href="https://www.linkedin.com/company/general-robotics-2025"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@generalrobotics.com"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
