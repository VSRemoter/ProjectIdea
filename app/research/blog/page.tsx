import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const researchBlogs = [
  {
    id: 1,
    title: "The Evolution of the Three-Point Shot",
    description: "An in-depth analysis of how the three-point shot has changed the NBA game over the last decade.",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Small Ball vs. Traditional Lineups",
    description: "Examining the effectiveness of small ball lineups compared to traditional lineups in modern NBA.",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "The Impact of Load Management",
    description: "Investigating how load management strategies affect player performance and team success.",
    author: "Mike Johnson",
  },
]

export default function ResearchBlogPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">NBA Research Blogs</h1>
      <p className="text-xl">Stay updated with the latest NBA analytics and insights.</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {researchBlogs.map((blog) => (
          <Card key={blog.id}>
            <CardHeader>
              <CardTitle>{blog.title}</CardTitle>
              <CardDescription>By {blog.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{blog.description}</p>
              <Link href={`/research/blog/${blog.id}`}>
                <Button>Read More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

