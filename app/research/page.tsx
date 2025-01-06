import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const researchSections = [
  {
    title: "Research Blog",
    description: "Read our latest analytical pieces on various NBA topics.",
    href: "/research/blog",
  },
  {
    title: "File Sharing",
    description: "Share and access NBA datasets for collaborative research.",
    href: "/research/file-sharing",
  },
  {
    title: "Player Traits",
    description: "Explore detailed breakdowns of player skills and specialties.",
    href: "/research/player-traits",
  },
]

export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">NBA Research Hub</h1>
      <p className="text-xl">Explore our comprehensive NBA research resources and tools.</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {researchSections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{section.description}</CardDescription>
              <Link href={section.href}>
                <Button>Explore</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

