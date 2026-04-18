import { HeroSection } from "@/components/hero-section"
import { PoemSection } from "@/components/poem-section"
import { InvitationSection } from "@/components/invitation-section"
import { CalendarSection } from "@/components/calendar-section"
import { TimeSection } from "@/components/time-section"
import { LocationSection } from "@/components/location-section"
import { CountdownSection } from "@/components/countdown-section"
import { WelcomeSection } from "@/components/welcome-section"
import { RSVPSection } from "@/components/rsvp-section"

export default function WeddingInvitation() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero with image, name and music player */}
      <HeroSection />

      {/* Decorative divider */}
      <div className="py-4">
        <div className="divider-ornament w-1/2 mx-auto" />
      </div>

      {/* Poem */}
      <PoemSection />

      {/* Invitation text */}
      <InvitationSection />

      {/* Calendar */}
      <CalendarSection />

      {/* Time */}
      <TimeSection />

      {/* Decorative divider */}
      <div className="py-8">
        <div className="divider-ornament w-1/3 mx-auto" />
      </div>

      {/* Location */}
      <LocationSection />

      {/* Countdown timer */}
      <CountdownSection />

      {/* Welcome message */}
      <WelcomeSection />

      {/* RSVP Form */}
      <RSVPSection />

      {/* Footer ornament */}
      <div className="pb-8">
        <div className="flex justify-center">
          <svg
            viewBox="0 0 200 100"
            className="w-32 h-16 text-primary/30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 50 Q70 20 100 50 Q130 80 160 50"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M60 50 Q80 35 100 50 Q120 65 140 50"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="100" cy="50" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>
    </main>
  )
}
