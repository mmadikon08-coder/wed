"use client"

import { useState, useEffect } from "react"

export function CountdownSection() {
  const weddingDate = new Date("2026-08-07T19:00:00")
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Decorative image placeholder - yurt image */}
        <div className="relative bg-secondary/50 rounded-lg p-6 mb-8">
          <p className="text-lg font-semibold text-foreground text-center tracking-wide mb-6">
            ТОЙ САЛТАНАТЫНА ДЕЙІН:
          </p>

          {/* Countdown */}
          <div className="flex justify-center items-center gap-2 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-light text-foreground">{timeLeft.days}</span>
              <span className="text-xs text-muted-foreground mt-1">КҮНБЕ</span>
            </div>
            <span className="text-3xl text-muted-foreground mb-4">:</span>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-light text-foreground">{timeLeft.hours}</span>
              <span className="text-xs text-muted-foreground mt-1">САҒАТ</span>
            </div>
            <span className="text-3xl text-muted-foreground mb-4">:</span>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-light text-foreground">{timeLeft.minutes}</span>
              <span className="text-xs text-muted-foreground mt-1">МИНУТ</span>
            </div>
            <span className="text-3xl text-muted-foreground mb-4">:</span>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-light text-foreground">{timeLeft.seconds}</span>
              <span className="text-xs text-muted-foreground mt-1">СЕКУНД</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
