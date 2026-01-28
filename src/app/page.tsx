"use client";

import { useState } from "react";

// Icons as simple SVG components
const MessageIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const InboxIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ScaleIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
);

const LinkIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const BellIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const ReplyIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
  </svg>
);

const MicIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// Navigation
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/80 backdrop-blur-md border-b border-[var(--warm-gray-200)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--coral)] to-[var(--purple)] flex items-center justify-center">
            <span className="text-white text-sm font-bold">F</span>
          </div>
          <span className="text-xl font-semibold text-[var(--warm-gray-900)]">FanThread</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#how-it-works" className="text-[var(--warm-gray-600)] hover:text-[var(--warm-gray-900)] transition-colors text-sm font-medium">
            How It Works
          </a>
          <a href="#for-creators" className="text-[var(--warm-gray-600)] hover:text-[var(--warm-gray-900)] transition-colors text-sm font-medium">
            For Creators
          </a>
          <a href="https://app.jabrium.com" className="px-5 py-2 bg-gradient-to-r from-[var(--coral)] to-[var(--purple)] text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[var(--coral)]/20 transition-all">
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[var(--coral)]/10 to-[var(--purple)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[var(--orange)]/10 to-[var(--coral)]/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[var(--warm-gray-200)] shadow-sm mb-8">
          <span className="w-2 h-2 bg-[var(--coral)] rounded-full animate-pulse" />
          <span className="text-sm text-[var(--warm-gray-600)]">Now accepting creator applications</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Real conversations</span>
          <br />
          <span className="text-[var(--warm-gray-900)]">with your fans.</span>
        </h1>

        <p className="text-xl md:text-2xl text-[var(--warm-gray-500)] mb-4 max-w-2xl mx-auto">
          Thousands of followers. Thousands of ongoing conversations.
        </p>
        <p className="text-xl md:text-2xl text-[var(--warm-gray-900)] font-medium mb-10">
          Zero burnout.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-1 px-6 py-4 rounded-full border border-[var(--warm-gray-200)] bg-white focus:outline-none focus:border-[var(--coral)] focus:ring-2 focus:ring-[var(--coral)]/20 transition-all text-[var(--warm-gray-900)]"
          />
          <a href="https://app.jabrium.com" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[var(--coral)] to-[var(--coral-dark)] text-white rounded-full font-semibold hover:shadow-xl hover:shadow-[var(--coral)]/30 transition-all hover:-translate-y-0.5 inline-block text-center">
            Join the Waitlist
          </a>
        </div>

        <p className="text-sm text-[var(--warm-gray-400)] mt-4">
          Join 2,400+ creators already on the waitlist
        </p>
      </div>
    </section>
  );
}

// The Problem Section
function TheProblemSection() {
  const problems = [
    {
      icon: <MessageIcon />,
      title: "Comments are chaos",
      description: "Thousands of comments, no real conversation. You respond once and it's lost in the scroll.",
    },
    {
      icon: <InboxIcon />,
      title: "DMs are overwhelming",
      description: "500 unread messages. You feel guilty ignoring fans but can't possibly reply to everyone.",
    },
    {
      icon: <ChartIcon />,
      title: "Algorithms control everything",
      description: "Platforms decide who sees your content. Your fans might never see your posts.",
    },
    {
      icon: <ScaleIcon />,
      title: "Real connection doesn't scale",
      description: "The more fans you have, the less connected you feel. Something's broken.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[var(--cream-dark)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--warm-gray-900)] mb-4">
            Sound familiar?
          </h2>
          <p className="text-lg text-[var(--warm-gray-500)] max-w-2xl mx-auto">
            Social platforms were built for broadcasting, not connecting. You&apos;ve outgrown them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="soft-card p-8 hover:scale-[1.02] transition-transform cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--coral)]/10 to-[var(--purple)]/10 flex items-center justify-center text-[var(--coral)] mb-5">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-[var(--warm-gray-900)] mb-3">
                {problem.title}
              </h3>
              <p className="text-[var(--warm-gray-500)] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: <LinkIcon />,
      title: "Invite your fans",
      description: "Share your unique FanThread link in your bio. Fans join with one tap — no app download required.",
    },
    {
      number: "02",
      icon: <UsersIcon />,
      title: "Fans join your thread",
      description: "Each fan gets their own private conversation with you. It's like a group chat, but personal.",
    },
    {
      number: "03",
      icon: <BellIcon />,
      title: "Send updates & prompts",
      description: "Share voice notes, questions, or updates with everyone at once. Fans respond on their time.",
    },
    {
      number: "04",
      icon: <ReplyIcon />,
      title: "Respond at your pace",
      description: "Reply when you want, how you want. Voice, text, or both. AI helps you stay on top of thousands of threads.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--warm-gray-900)] mb-4">
            How FanThread works
          </h2>
          <p className="text-lg text-[var(--warm-gray-500)] max-w-2xl mx-auto">
            Asynchronous, intimate, and designed for scale. Finally, a way to talk to your fans that actually works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[var(--warm-gray-200)] to-transparent" />
              )}
              <div className="text-5xl font-bold text-[var(--warm-gray-100)] mb-4">
                {step.number}
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--coral)] to-[var(--purple)] flex items-center justify-center text-white mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--warm-gray-900)] mb-2">
                {step.title}
              </h3>
              <p className="text-[var(--warm-gray-500)] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// For Fans Section
function ForFansSection() {
  const benefits = [
    {
      icon: <HeartIcon />,
      title: "A real connection",
      description: "Not just a follower count. An actual ongoing conversation with someone you admire.",
    },
    {
      icon: <MicIcon />,
      title: "Your voice is heard",
      description: "Send voice notes, share your thoughts, and know the creator will actually see it.",
    },
    {
      icon: <ClockIcon />,
      title: "On your schedule",
      description: "No pressure to catch a live stream. Respond when it works for you.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[var(--purple)]/5 to-[var(--coral)]/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-[var(--purple)] uppercase tracking-wider mb-4 block">
              For Fans
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--warm-gray-900)] mb-6">
              Finally feel like you actually know them
            </h2>
            <p className="text-lg text-[var(--warm-gray-500)] mb-8">
              Comments get buried. DMs get ignored. With FanThread, you&apos;re part of an ongoing conversation — not just another notification.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[var(--warm-gray-200)] flex items-center justify-center text-[var(--purple)] flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--warm-gray-900)] mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-[var(--warm-gray-500)] text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual mockup */}
          <div className="relative">
            <div className="soft-card p-6 max-w-sm mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--coral)] to-[var(--orange)]" />
                <div>
                  <div className="font-medium text-[var(--warm-gray-900)]">@creativecreator</div>
                  <div className="text-xs text-[var(--warm-gray-400)]">Voice note • 2 min</div>
                </div>
              </div>
              <div className="bg-[var(--cream-dark)] rounded-2xl p-4 mb-4">
                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-[var(--coral)] flex items-center justify-center text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <div className="flex-1 flex items-center gap-1">
                    {[12, 18, 8, 22, 14, 10, 20, 16, 9, 24, 13, 19, 11, 15, 21, 8, 17, 23, 12, 16].map((h, i) => (
                      <div
                        key={i}
                        className="w-1 bg-[var(--coral)] rounded-full"
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[var(--warm-gray-400)]">2:34</span>
                </div>
              </div>
              <div className="text-sm text-[var(--warm-gray-600)]">
                &quot;Hey everyone! Just wanted to share something personal about why I started this journey...&quot;
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--coral)]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--purple)]/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

// For Creators Section
function ForCreatorsSection() {
  const benefits = [
    {
      icon: <UsersIcon />,
      title: "Manage thousands of threads",
      description: "AI helps you prioritize, suggest responses, and never let a fan slip through the cracks.",
    },
    {
      icon: <MicIcon />,
      title: "Voice-first",
      description: "Record a 30-second voice note. We transcribe and help you reach everyone.",
    },
    {
      icon: <ClockIcon />,
      title: "Your pace, not the algorithm's",
      description: "Respond when you have energy. Async means no pressure to be 'always on.'",
    },
    {
      icon: <ShieldIcon />,
      title: "Own your relationship",
      description: "No platform between you and your fans. They're your community, not rented audience.",
    },
  ];

  return (
    <section id="for-creators" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual mockup */}
          <div className="order-2 lg:order-1 relative">
            <div className="soft-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-[var(--warm-gray-900)]">Your Threads</h3>
                <span className="text-sm text-[var(--warm-gray-400)]">2,847 active</span>
              </div>

              {/* Thread previews */}
              <div className="space-y-3">
                {[
                  { name: "Sarah M.", message: "Your last video really helped me...", time: "2m", unread: true },
                  { name: "Alex K.", message: "Question about the course!", time: "15m", unread: true },
                  { name: "Jordan", message: "Thanks for the reply! That makes...", time: "1h", unread: false },
                  { name: "Taylor R.", message: "Would love your thoughts on...", time: "2h", unread: false },
                ].map((thread, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                      thread.unread ? "bg-[var(--coral)]/5" : "hover:bg-[var(--warm-gray-50)]"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--warm-gray-200)] to-[var(--warm-gray-300)]" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm ${thread.unread ? "font-semibold" : ""} text-[var(--warm-gray-900)]`}>
                          {thread.name}
                        </span>
                        <span className="text-xs text-[var(--warm-gray-400)]">{thread.time}</span>
                      </div>
                      <p className="text-sm text-[var(--warm-gray-500)] truncate">{thread.message}</p>
                    </div>
                    {thread.unread && (
                      <div className="w-2 h-2 rounded-full bg-[var(--coral)]" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[var(--warm-gray-100)]">
                <button className="w-full py-3 text-sm font-medium text-[var(--coral)] hover:bg-[var(--coral)]/5 rounded-xl transition-colors">
                  AI-suggested responses ready (12)
                </button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--purple)]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--coral)]/10 rounded-full blur-2xl" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold text-[var(--coral)] uppercase tracking-wider mb-4 block">
              For Creators
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--warm-gray-900)] mb-6">
              Scale your connection, not your workload
            </h2>
            <p className="text-lg text-[var(--warm-gray-500)] mb-8">
              You didn&apos;t become a creator to manage an inbox. FanThread lets you maintain thousands of genuine relationships without burning out.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--coral)]/10 to-[var(--purple)]/10 flex items-center justify-center text-[var(--coral)] flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--warm-gray-900)] mb-1 text-sm">
                      {benefit.title}
                    </h3>
                    <p className="text-[var(--warm-gray-500)] text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Social Proof Section
function SocialProofSection() {
  const testimonials = [
    {
      quote: "I finally feel like I know my fans again. It's like the early days when my community was small enough to actually talk to.",
      author: "Creator",
      handle: "@lifestyle_creator",
      followers: "1.2M followers",
    },
    {
      quote: "The AI suggestions are incredible. I can respond to 50 threads in the time it used to take me to answer 5 DMs.",
      author: "Podcaster",
      handle: "@true_crime_pod",
      followers: "500K subscribers",
    },
    {
      quote: "My fans love it. They actually get responses now instead of being lost in the void of comments.",
      author: "YouTuber",
      handle: "@tech_reviews",
      followers: "2.4M subscribers",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[var(--cream-dark)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--warm-gray-900)] mb-4">
            Creators are loving it
          </h2>
          <p className="text-lg text-[var(--warm-gray-500)]">
            Join thousands of creators building real relationships with their fans.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="soft-card p-8">
              <div className="text-[var(--warm-gray-600)] mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--coral)] to-[var(--purple)]" />
                <div>
                  <div className="font-medium text-[var(--warm-gray-900)]">{testimonial.author}</div>
                  <div className="text-sm text-[var(--warm-gray-400)]">{testimonial.handle}</div>
                  <div className="text-xs text-[var(--warm-gray-400)]">{testimonial.followers}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="gradient-border-warm p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--warm-gray-900)] mb-4">
            Ready to talk to your fans?
          </h2>
          <p className="text-lg text-[var(--warm-gray-500)] mb-8 max-w-xl mx-auto">
            Join the waitlist and be among the first creators to build real, scalable connections with your community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 px-6 py-4 rounded-full border border-[var(--warm-gray-200)] bg-white focus:outline-none focus:border-[var(--coral)] focus:ring-2 focus:ring-[var(--coral)]/20 transition-all text-[var(--warm-gray-900)]"
            />
            <a href="https://app.jabrium.com" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[var(--coral)] to-[var(--purple)] text-white rounded-full font-semibold hover:shadow-xl hover:shadow-[var(--coral)]/30 transition-all hover:-translate-y-0.5 inline-block text-center">
              Get Early Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[var(--warm-gray-200)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--coral)] to-[var(--purple)] flex items-center justify-center">
              <span className="text-white text-sm font-bold">F</span>
            </div>
            <span className="text-lg font-semibold text-[var(--warm-gray-900)]">FanThread</span>
          </div>

          <div className="text-sm text-[var(--warm-gray-400)]">
            A <span className="text-[var(--warm-gray-600)] font-medium">Jabrium</span> Engage Property
          </div>

          <div className="flex items-center gap-6 text-sm text-[var(--warm-gray-500)]">
            <a href="#" className="hover:text-[var(--warm-gray-900)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[var(--warm-gray-900)] transition-colors">Terms</a>
            <a href="#" className="hover:text-[var(--warm-gray-900)] transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--warm-gray-100)] text-center text-sm text-[var(--warm-gray-400)]">
          &copy; {new Date().getFullYear()} Jabrium. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navigation />
      <HeroSection />
      <TheProblemSection />
      <HowItWorksSection />
      <ForFansSection />
      <ForCreatorsSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </div>
  );
}
