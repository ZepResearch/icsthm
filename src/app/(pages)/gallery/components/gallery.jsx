"use client"
import ImageCarousel from "./image-carousel"
import VideoSection from "./video-section"

// Sample data for the carousels
const firstConferenceImages = [
  { src: "/gallery/1.jpg", alt: "1st Conference - Image 1" },
  { src: "/gallery/5.jpg", alt: "1st Conference - Image 5" },
  { src: "/gallery/2.jpg", alt: "1st Conference - Image 2" },
  { src: "/gallery/3.jpg", alt: "1st Conference - Image 3" },
  { src: "/gallery/4.jpg", alt: "1st Conference - Image 4" },
  { src: "/gallery/6.jpg", alt: "1st Conference - Image 6" },
  { src: "/gallery/7.jpg", alt: "1st Conference - Image 7" },
  { src: "/gallery/8.jpg", alt: "1st Conference - Image 8" },
  { src: "/gallery/9.jpg", alt: "1st Conference - Image 9" },
  { src: "/gallery/10.jpg", alt: "1st Conference - Image 10" },
  { src: "/gallery/11.jpg", alt: "1st Conference - Image 11" },
  { src: "/gallery/12.jpg", alt: "1st Conference - Image 12" },
  { src: "/gallery/13.jpg", alt: "1st Conference - Image 13" },
  { src: "/gallery/14.jpg", alt: "1st Conference - Image 14" },
  { src: "/gallery/15.jpg", alt: "1st Conference - Image 15" },
  { src: "/gallery/16.jpg", alt: "1st Conference - Image 16" },
  { src: "/gallery/17.jpg", alt: "1st Conference - Image 17" },
  // { src: "/gallery/18.jpg", alt: "1st Conference - Image 18" },
  { src: "/gallery/19.jpg", alt: "1st Conference - Image 19" },
  { src: "/gallery/20.jpg", alt: "1st Conference - Image 20" },
]



// Sample video data
const conferenceVideos = [
  {
    id: "video1",
    title: "ICEMSS 2024 Bangkok | Day 1 Highlights | Full Video | Zep Research",
    thumbnail: "/gallery/thubnail1.jpg?height=400&width=600",
    videoUrl: "https://www.youtube.com/embed/jQsiUOr53Bo",
  },
  {
    id: "video2",
    title: "ICEMSS Highlights || International Conference || Delhi || India",
    thumbnail: "/gallery/thubnail2.jpg?height=400&width=600",
    videoUrl: "https://www.youtube.com/embed/B49Gm3b9VgA",
  },
]

export default function Gallery() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-white text-orange-900 py-12 px-4 md:px-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-400">
            Conference Gallery
          </span>
        </h1>

        <div className="space-y-16">
          {/* First Conference Section */}
          <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-orange-100 transition-all duration-300 hover:shadow-orange-200/40">
            <div>
              <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-white bg-orange-500 rounded-full">
                SUSTAINABLE TOURISM EVENT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-400">
                International Conference on Sustainable Tourism & Hospitality Management
              </h2>
              <p className="text-orange-700 mt-2 max-w-3xl mb-6">
                Highlights from the International Conference on Sustainable Tourism & Hospitality Management, showcasing innovative research, best practices, and global collaboration in sustainable tourism and hospitality.
              </p>
            </div>

            <ImageCarousel images={ firstConferenceImages} />
          </section>

          {/* Second Conference Section */}
          {/* <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/20 transition-all duration-300 hover:shadow-orange-400/20">
            <div>
              <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-orange-900 bg-orange-200 rounded-full">
                FOLLOW-UP EVENT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
                2nd International Conference
              </h2>
              <p className="text-orange-100 mt-2 max-w-3xl mb-6">
                Moments from our second conference featuring distinguished speakers and innovative presentations in
                Engineering, Management and Social Sciences.
              </p>
            </div>

            <ImageCarousel images={firstConferenceImages} />
          </section> */}

          {/* Video Section */}
          {/* <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/20 transition-all duration-300 hover:shadow-orange-400/20">
            <div>
              <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-orange-900 bg-orange-200 rounded-full">
                FEATURED MEDIA
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
                Conference Videos
              </h2>
              <p className="text-orange-100 mt-2 max-w-3xl mb-6">
                Watch key moments from our conferences. Click on a thumbnail to play the video.
              </p>
            </div>

            <VideoSection videos={conferenceVideos} />
          </section> */}
        </div>

        <footer className="mt-20 text-center text-orange-700 opacity-80">
          <p>© {new Date().getFullYear()} International Conference on
Sustainable Tourism
& Hospitality Management</p>
          <p className="mt-2 text-sm">
            Bringing together researchers, practitioners, and innovators from around the world
          </p>
        </footer>
      </div>
    </div>
  )
}
