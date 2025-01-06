'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageTransition } from '../../components/page-transition'
import { motion } from 'framer-motion'

interface NewsItem {
  id: string
  title: string
  content: string
  category: 'trade' | 'rumor' | 'contract' | 'injury' | 'other'
  date: string
}

const categoryColors = {
  trade: 'bg-blue-500',
  rumor: 'bg-yellow-500',
  contract: 'bg-green-500',
  injury: 'bg-red-500',
  other: 'bg-gray-500',
}

const SportsNews = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])

  useEffect(() => {
    // In a real application, you would fetch news data from an API here
    const mockNews: NewsItem[] = [
      {
        id: '1',
        title: 'Lakers acquire All-Star guard in blockbuster trade',
        content: 'The Los Angeles Lakers have completed a trade for All-Star guard Bradley Beal, sending a package of young players and draft picks to the Washington Wizards.',
        category: 'trade',
        date: '2023-06-15',
      },
      {
        id: '2',
        title: 'Giannis Antetokounmpo rumored to be considering future options',
        content: 'Sources close to the Milwaukee Bucks star suggest that Giannis Antetokounmpo may explore free agency after his current contract expires.',
        category: 'rumor',
        date: '2023-06-14',
      },
      {
        id: '3',
        title: 'Jayson Tatum signs max contract extension with Celtics',
        content: 'The Boston Celtics have secured their young star for the long term, signing Jayson Tatum to a five-year, $195 million max contract extension.',
        category: 'contract',
        date: '2023-06-13',
      },
      {
        id: '4',
        title: 'Kevin Durant sidelined with knee injury',
        content: 'The Phoenix Suns announce that Kevin Durant will miss 4-6 weeks due to a knee injury sustained in last night's game against the Denver Nuggets.',
        category: 'injury',
        date: '2023-06-12',
      },
      {
        id: '5',
        title: 'NBA considers in-season tournament for 2024-25 season',
        content: 'The league is exploring the possibility of introducing an in-season tournament to add excitement and competitiveness to the regular season schedule.',
        category: 'other',
        date: '2023-06-11',
      },
    ]
    setNewsItems(mockNews)
  }, [])

  return (
    <PageTransition>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">NBA Sports News</h1>
        <p className="text-xl">Stay updated with the latest NBA news, trades, rumors, and more.</p>

        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{item.title}</CardTitle>
                    <Badge className={`${categoryColors[item.category]} text-white`}>
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{item.content}</p>
                  <p className="text-sm text-gray-500">Published on: {item.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

export default SportsNews

