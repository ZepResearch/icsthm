"use client"

import { useState, useEffect } from "react"
import { X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"



export function DownloadPopup({
  delay = 3000,
  onDownload = () => window.open("/ICSTHM_Book.pdf", "_blank"),
  className,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 300)
  }

  const handleDownload = () => {
    onDownload()
  }

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed bottom-24 left-4 z-50 max-w-sm transition-all duration-300 ease-in-out",
        isClosing ? "translate-y-full opacity-0" : "translate-y-0 opacity-100",
        className,
      )}
    >
      <Card className="border-2 border-orange-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-400 p-4 text-white">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Download Proceeding Book</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="h-8 w-8 rounded-full text-white hover:bg-orange-600 hover:text-white"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-sm text-gray-700">
            Get access to all papers and presentations from the International Conference on Sustainable Tourism &
            Hospitality Management.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end bg-orange-50 p-3">
          <Button onClick={handleDownload} className="bg-orange-500 text-white hover:bg-orange-600">
            <Download className="mr-2 h-4 w-4" />
            Download Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
