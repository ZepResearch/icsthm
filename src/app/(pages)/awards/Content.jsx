import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Star, Users, ArrowRight } from "lucide-react"

export default function AwardsPage() {
  const awards = [
    {
      title: "Best Talk Award",
      description: "For clear and engaging research presentations",
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: "Top Paper Award",
      description: "For the most useful research in each session",
      icon: <Star className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: "Best Student Award",
      description: "For top presentations by student researchers",
      icon: <Users className="h-8 w-8 text-yellow-500" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold underline underline-offset-4 decoration-orange-500 mb-4">
            Win an Award
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            We honor great research in tourism and hospitality
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {awards.map((award, index) => (
            <Card key={index} className="bg-white border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-col items-center pb-2">
                <div className="rounded-full bg-orange-100 p-3 mb-4">
                  {award.icon}
                </div>
                <CardTitle className="text-xl font-bold text-orange-500 text-center drop-shadow-sm">
                  {award.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {award.description}
                </CardDescription>
              </CardContent>
              <div className="px-6 pb-4 flex justify-center">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                  Special Honor
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-orange-500 rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us and Share Your Work
          </h2>
          <p className="text-xl text-orange-100 mb-6">
            Sign up now for our tourism and hospitality conference to show your research
          </p>
          <Button className="bg-white text-orange-600 hover:bg-orange-100 text-lg px-8 py-3 rounded-full font-semibold transition-colors duration-300">
            Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}