"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"



export function LineMessengerButton({
  lineUrl = "https://line.me/R/ti/p/abinash.zepresearch",
  customText = "Chat with us on Line",
  position = "bottom-left",
  showOnMobile = true,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Only show after component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const positionClasses = {
    "bottom-left": "left-4 bottom-4",
    "bottom-right": "right-4 bottom-4",
  }

  return (
    <>
    <div
      className={cn(
        "fixed z-50 flex flex-col items-start gap-3",
        positionClasses[position],
        !showOnMobile && "hidden md:flex",
      )}
    >
      {isOpen && (
        <div className="animate-fade-in-up mb-2 rounded-lg bg-white p-4 shadow-lg">
          <p className="mb-3 text-sm font-medium">{customText}</p>
          <Button className="w-full bg-[#06C755] hover:bg-[#06C755]/90" onClick={() => window.open(lineUrl, "_blank")}>
            Open Line
          </Button>
        </div>
      )}
      <Button
        size="icon"
        className={cn(
          "h-16 w-16 rounded-full shadow-lg transition-all duration-300",
          isOpen ? "bg-slate-500 hover:bg-slate-500/90" : "bg-green-600 hover:bg-[#06C755]/90",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <img src="/line.png" className="h-16 w-16 " />}
        <span className="sr-only">{isOpen ? "Close Line Messenger chat" : "Open Line Messenger chat"}</span>
      </Button>
    </div>
   <div className="fixed  left-4 bottom-24  z-50 hidden lg:flex flex-col items-center">
          <Button size="icon" className="rounded-full bg-green-500 hover:bg-green-600 h-12 w-12 shadow-lg transition-transform hover:scale-110">
            <Link href="https://wa.me/9237388328" target="_blank" rel="noopener noreferrer">
              <img src="/whatsapp.png" alt="WhatsApp" className="h-8 w-8" />
              <span className="sr-only">Contact via WhatsApp</span>
            </Link>
          </Button>
          <span className="text-xs font-medium mt-1 text-green-600">Chat with us</span>
        </div>
    </>
  )
}
