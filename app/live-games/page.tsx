'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageTransition } from '../components/page-transition'
import { motion } from 'framer-motion'

interface Game {
  id: string
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
  quarter: number
  timeRemaining: string
}

const LiveGames = () => {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    // In a real application, you would fetch live game data from an API here
    const mockGames: Game[] = [
      { id: '1', homeTeam: 'Lakers', awayTeam: 'Celtics', homeScore: 56, awayScore: 62, quarter: 3, timeRemaining: '5:23' },
      { id: '2', homeTeam: 'Warriors', awayTeam: 'Suns', homeScore: 78, awayScore: 75, quarter: 4, timeRemaining: '2:15' },
      { id: '3', homeTeam: 'Bucks', awayTeam: '76ers', homeScore: 88, awayScore: 90, quarter: 4, timeRemaining: '0:45' },
      { id: '4', homeTeam: 'Nets', awayTeam: 'Knicks', homeScore: 45, awayScore: 41, quarter: 2, timeRemaining: '1:30' },
    ]
    setGames(mockGames)

    // Simulate live updates
    const interval = setInterval(() => {
      setGames(currentGames => 
        currentGames.map(game => ({
          ...game,
          homeScore: game.homeScore + Math.floor(Math.random() * 3),
          awayScore: game.awayScore + Math.floor(Math.random() * 3),
          timeRemaining: updateTimeRemaining(game.timeRemaining, game.quarter),
        }))
      )
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const updateTimeRemaining = (time: string, quarter: number): string => {
    const [minutes, seconds] = time.split(':').map(Number)
    if (seconds > 0) {
      return `${minutes}:${(seconds - 1).toString().padStart(2, '0')}`
    } else if (minutes > 0) {
      return `${minutes - 1}:59`
    } else {
      return quarter < 4 ? '12:00' : '0:00'
    }
  }

  return (
    <PageTransition>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Live NBA Games</h1>
        <p className="text-xl">Stay updated with real-time scores of ongoing NBA games.</p>

        <div className="grid gap-6 md:grid-cols-2">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{game.awayTeam} @ {game.homeTeam}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-3xl font-bold">{game.awayScore}</div>
                    <div className="text-xl">
                      {game.quarter}Q - {game.timeRemaining}
                    </div>
                    <div className="text-3xl font-bold">{game.homeScore}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

export default LiveGames

