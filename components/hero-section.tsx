"use client"

import Image from "next/image"
import { MusicPlayer } from "./music-player"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center">
      {/* Hero Image */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Bride's hand with traditional jewelry"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gold decorative line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-background" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      {/* Name and Title */}
      <div className="relative -mt-16 z-10 text-center px-4">
        <h1 
          className="text-6xl md:text-7xl text-primary mb-2"
          style={{ fontFamily: 'var(--font-balmoral)' }}
        >
          Асемгүл
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.3em] text-foreground mt-2">
          ҚЫЗ ҰЗАТУ
        </h2>
      </div>

      {/* Music Player */}
      <div className="mt-8">
        <MusicPlayer />
      </div>
    </section>
  )
}
