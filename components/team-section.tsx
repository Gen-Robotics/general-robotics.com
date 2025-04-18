"use client";

import { Linkedin, Mail } from "lucide-react";
import { useState } from "react";

interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
    linkedin?: string;
    email?: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Cedric Loubiat",
        role: "CEO & Co-founder",
        image: "/Cedric.jpg?height=400&width=400",
        bio: "2 Startups founded, From 8 to 300 people in 4 years, 20 years in lithium battery industry.",
        linkedin: "https://www.linkedin.com/in/cedricloubiat/",
        email: "cedric@general-robotics.com",
    },
    {
        name: "Nicolas Rabault",
        role: "CTO & Co-founder",
        image: "/Nico_1000x1000.jpg?height=400&width=400",
        bio: "2 Startups founded, Skilled manager of tech projects, 18 years on humanoid robotics",
        linkedin: "https://www.linkedin.com/in/nicolas-rabault-/",
        email: "nico@general-robotics.com",
    },
    {
        name: "Pierre Alexandre Balland",
        role: "CMO",
        image: "/placeholder.svg?height=400&width=400",
        bio: "4 Startups founded, AI and data science & Harvard Professor",
        linkedin: "https://www.linkedin.com/in/pierre-alexandre-balland-20b75b13/",
        email: "pa@general-robotics.com",
    },
];

export function TeamSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    World-Class Team
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface TeamMemberCardProps {
    member: TeamMember;
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative bg-white rounded-lg shadow-lg overflow-hidden h-96"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-full object-cover"
            />

            <div
                className={`
          absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
          flex flex-col justify-end p-6
          transition-opacity duration-300
          ${isHovered ? "opacity-100" : "opacity-90"}
        `}
            >
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-emerald-400 mb-2">{member.role}</p>

                <div
                    className={`
            overflow-hidden transition-all duration-300
            ${isHovered ? "max-h-36 opacity-100" : "max-h-0 opacity-0"}
          `}
                >
                    <p className="text-white/80 text-sm mb-4">{member.bio}</p>

                    <div className="flex space-x-3">
                        {member.linkedin && (
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        )}

                        {member.email && (
                            <a
                                href={`mailto:${member.email}`}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
