"use client";

import React from "react";

const certifications = [
  {
    name: "Complete Web Application Hacking & Penetration Testing",
    issuer: "Udemy",
    date: "2025",
    credentialId: "UC-1acfd753-9f3f-4f9a-8722-ca858b3aada3",
    verifyUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-1acfd753-9f3f-4f9a-8722-ca858b3aada3.jpg",
    color: "#ec5252", // Udemy red
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", // Shield icon
  },
  {
    name: "Claude Code Fundamentals Certification",
    issuer: "Anthropic / Claude",
    date: "2025",
    verifyUrl: "https://drive.google.com/file/d/1eZMg7q0snJKtDkgPQ6_Di_VT2baws9SP/view",
    color: "#d97706", // Anthropic warm gold
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", // Layers/Code icon
  },
  {
    name: "AI-Powered Development: GitHub Copilot in Visual Studio Code",
    issuer: "GitHub / Microsoft",
    date: "2025",
    verifyUrl: "https://drive.google.com/file/d/1ECHSS7WKRm6Up2K-lhC9mD1OBPnMqGQt/view?usp=sharing",
    color: "#a855f7", // Copilot purple
    icon: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z", // Sparkles icon
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative min-h-screen py-24 bg-card/10">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            <span className="text-gradient-primary">Certifications</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Verifiable credentials validating my technical expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-border/60 bg-card/30 p-6 backdrop-blur-xs glow-card"
            >
              <div>
                {/* Header Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className="rounded-xl p-3 shrink-0"
                    style={{ backgroundColor: `${cert.color}15`, color: cert.color }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={cert.icon} />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground bg-background/55 border border-border/30 rounded-full px-3 py-1">
                    {cert.date}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-extrabold text-foreground mb-1 leading-snug">
                  {cert.name}
                </h3>
                <p className="text-sm font-bold text-primary mb-4">{cert.issuer}</p>
                
                {cert.credentialId && (
                  <p className="text-xs font-mono text-muted-foreground mb-6">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              {/* Verify Link */}
              <div className="border-t border-border/30 pt-4 mt-2">
                <a
                  href={cert.verifyUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Verify Credential
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-current mt-0.5"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
