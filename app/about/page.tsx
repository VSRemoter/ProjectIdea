import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Twitter, Instagram, Linkedin } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">About Who's Him NBA</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Who's Him NBA is dedicated to providing in-depth NBA analytics and insights to basketball enthusiasts around the world. Our platform combines cutting-edge data analysis with a passion for the game to deliver unique perspectives on player performance, team strategies, and league trends.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>The Founder</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Hi, I'm [Your Name], the founder of Who's Him NBA. As a lifelong basketball fan and data scientist, I created this platform to bridge the gap between advanced analytics and everyday fans. My goal is to make complex NBA statistics accessible and engaging for everyone, from casual viewers to hardcore stat-heads.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Connect With Us</CardTitle>
        </CardHeader>
        <CardContent className="flex space-x-4">
          <Button variant="outline">
            <Twitter className="mr-2 h-4 w-4" /> Twitter
          </Button>
          <Button variant="outline">
            <Instagram className="mr-2 h-4 w-4" /> Instagram
          </Button>
          <Button variant="outline">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

