"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Spinner } from "@/components/ui/spinner"

export function RSVPSection() {
  const [name, setName] = useState("")
  const [attendance, setAttendance] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !attendance) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, attendance }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Submission error:", error)
      alert('Қате орын алды. Қайталап көріңіз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-sm mx-auto text-center">
          {/* Decorative tree */}
          <OrnamentTree />
          
          <div className="bg-card rounded-lg p-8 shadow-sm mt-8">
            <p 
              className="text-2xl text-primary mb-4"
              style={{ fontFamily: 'var(--font-great-vibes)' }}
            >
              Рахмет!
            </p>
            <p className="text-foreground">
              Сіздің жауабыңыз қабылданды.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-sm mx-auto">
        {/* Decorative tree */}
        <OrnamentTree />

        <div className="bg-card rounded-lg p-6 shadow-sm mt-8">
          <h3 className="text-xl font-semibold text-foreground text-center tracking-wide mb-6">
            ТОЙҒА ҚАТЫСУЫҢЫЗДЫ
            <br />
            РАСТАУЫҢЫЗДЫ СҰРАЙМЫЗ!
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name input */}
            <div>
              <Label htmlFor="name" className="text-sm text-foreground mb-2 block">
                АТЫ-ЖӨНІҢІЗ (ЖҰБЫҢЫЗБЕН КЕЛЕТІН
                <br />
                БОЛСАҢЫЗ, ЕСІМДЕРІҢІЗДІ БІРГЕ
                <br />
                ЖАЗУЫҢЫЗДЫ ӨТІНЕМІЗ)
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="ЕСІМІҢІЗ"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-secondary/50 border-0 text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>

            {/* Attendance options */}
            <RadioGroup value={attendance} onValueChange={setAttendance} className="space-y-3">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="attending" id="attending" />
                <Label htmlFor="attending" className="text-foreground cursor-pointer">
                  КЕЛЕМІН
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="attending-with-spouse" id="attending-with-spouse" />
                <Label htmlFor="attending-with-spouse" className="text-foreground cursor-pointer">
                  ЖҰБЫММЕН КЕЛЕМІН
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="not-attending" id="not-attending" />
                <Label htmlFor="not-attending" className="text-foreground cursor-pointer">
                  ӨКІНІШКЕ ОРАЙ ҚАТЫСА АЛМАЙМЫН
                </Label>
              </div>
            </RadioGroup>

            {/* Submit button */}
            <Button
              type="submit"
              disabled={isSubmitting || !name || !attendance}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg tracking-wider rounded-full"
            >
              {isSubmitting ? <Spinner className="mr-2" /> : null}
              ЖІБЕРУ
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

function OrnamentTree() {
  return (
    <div className="flex justify-center">
      <svg
        viewBox="0 0 200 200"
        className="w-48 h-48 text-primary/20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tree of life - Kazakh ornament */}
        <path
          d="M100 180 L100 100"
          stroke="currentColor"
          strokeWidth="3"
        />
        {/* Left branches */}
        <path
          d="M100 140 Q60 130 50 100 Q40 70 60 50 Q80 30 100 40"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M100 120 Q70 115 65 90 Q60 65 80 55"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Right branches */}
        <path
          d="M100 140 Q140 130 150 100 Q160 70 140 50 Q120 30 100 40"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M100 120 Q130 115 135 90 Q140 65 120 55"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Top crown */}
        <path
          d="M80 50 Q100 20 120 50"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="100" cy="35" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Decorative elements */}
        <circle cx="55" cy="75" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="145" cy="75" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="70" cy="55" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="130" cy="55" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    </div>
  )
}
