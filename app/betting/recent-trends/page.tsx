'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageTransition } from '../../components/page-transition'
import { motion } from 'framer-motion'

interface Trend {
  id: number
  category: 'team' | 'player'
  description: string
  impact: 'positive' | 'negative' | 'neutral'
}

const initialTrends: Trend[] = [
  { id: 1, category: 'team', description: "Magic have lost 5 games in a row", impact: 'negative' },
  { id: 2, category: 'team', description: "Kings won 6 games in a row", impact: 'positive' },
  { id: 3, category: 'player', description: "Curry is averaging 30 ppg in last 3 games", impact: 'positive' },
  { id: 4, category: 'team', description: "Celtics have covered the spread in 7 of their last 8 games", impact: 'positive' },
  { id: 5, category: 'player', description: "Jokic has recorded a triple-double in 4 consecutive games", impact: 'positive' },
  { id: 6, category: 'team', description: "Pistons are 1-9 against the spread in their last 10 home games", impact: 'negative' },
  { id: 7, category: 'player', description: "Doncic has missed 3 games due to ankle injury", impact: 'negative' },
  { id: 8, category: 'team', description: "Suns vs Nuggets games have gone over the total in 5 straight matchups", impact: 'neutral' },
]

export default function RecentTrendsPage() {
  const [trends, setTrends] = useState<Trend[]>(initialTrends)

  const getImpactColor = (impact: Trend['impact']) => {
    switch (impact) {
      case 'positive':
        return 'bg-green-500'
      case 'negative':
        return 'bg-red-500'
      case 'neutral':
        return 'bg-yellow-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <PageTransition>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Recent Trends</h1>
        <p className="text-xl">Stay updated with the latest trends in NBA teams and players performance.</p>

        <div className="grid gap-6 md:grid-cols-2">
          {trends.map((trend, index) => (
            <motion.div
              key={trend.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {trend.category === 'team' ? 'Team Trend' : 'Player Trend'}
                  </CardTitle>
                  <Badge className={`${getImpactColor(trend.impact)} text-white`}>
                    {trend.impact.charAt(0).toUpperCase() + trend.impact.slice(1)}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">{trend.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

