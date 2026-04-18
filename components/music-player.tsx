"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative">
      <audio ref={audioRef} src="/audio/wedding-song.mp3" loop />
      
      {/* Circular player with rotating text */}
      <button
        onClick={togglePlay}
        className="relative w-24 h-24 flex items-center justify-center"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {/* Rotating text circle */}
        <svg
          className={`absolute w-full h-full ${isPlaying ? 'animate-spin-slow' : ''}`}
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="text-[8px] fill-primary uppercase tracking-[0.15em]">
            <textPath href="#circlePath">
              • МУЗЫКА • МУЗЫКА • МУЗЫКА • МУЗЫКА
            </textPath>
          </text>
        </svg>

        {/* Play/Pause button */}
        <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-background/80 backdrop-blur-sm">
          {isPlaying ? (
            <Pause className="w-5 h-5 text-primary" />
          ) : (
            <Play className="w-5 h-5 text-primary ml-0.5" />
          )}
        </div>
      </button>
    </div>
  )
}
