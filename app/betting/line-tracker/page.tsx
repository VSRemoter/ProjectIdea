'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { PageTransition } from '../../components/page-transition'
import { motion } from 'framer-motion'

interface Bet {
  id: string
  team: string
  type: 'moneyline' | 'spread' | 'total'
  initialOdds: number
  currentOdds: number
}

const BettingLineTracker = () => {
  const [bets, setBets] = useState<Bet[]>([])
  const [newBet, setNewBet] = useState<Omit<Bet, 'id' | 'currentOdds'>>({
    team: '',
    type: 'moneyline',
    initialOdds: 0,
  })

  const addBet = () => {
    const bet: Bet = {
      ...newBet,
      id: Date.now().toString(),
      currentOdds: newBet.initialOdds,
    }
    setBets([...bets, bet])
    setNewBet({ team: '', type: 'moneyline', initialOdds: 0 })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setBets(currentBets =>
        currentBets.map(bet => ({
          ...bet,
          currentOdds: bet.currentOdds + (Math.random() - 0.5) * 10,
        }))
      )
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const formatOdds = (odds: number) => {
    return odds > 0 ? `+${odds.toFixed(0)}` : odds.toFixed(0)
  }

  return (
    <PageTransition>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Betting Line Tracker</h1>
        <p className="text-xl">Track your bets and watch how the lines change in real-time.</p>

        <Card>
          <CardHeader>
            <CardTitle>Add New Bet</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="team">Team</Label>
                <Input
                  id="team"
                  value={newBet.team}
                  onChange={(e) => setNewBet({ ...newBet, team: e.target.value })}
                  placeholder="Enter team name"
                />
              </div>
              <div>
                <Label htmlFor="type">Bet Type</Label>
                <select
                  id="type"
                  value={newBet.type}
                  onChange={(e) => setNewBet({ ...newBet, type: e.target.value as Bet['type'] })}
                  className="w-full p-2 border rounded"
                >
                  <option value="moneyline">Moneyline</option>
                  <option value="spread">Spread</option>
                  <option value="total">Total</option>
                </select>
              </div>
              <div>
                <Label htmlFor="odds">Initial Odds</Label>
                <Input
                  id="odds"
                  type="number"
                  value={newBet.initialOdds}
                  onChange={(e) => setNewBet({ ...newBet, initialOdds: Number(e.target.value) })}
                  placeholder="Enter initial odds"
                />
              </div>
              <Button onClick={addBet}>Add Bet</Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {bets.map((bet, index) => (
            <motion.div
              key={bet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{bet.team} - {bet.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Initial Odds: {formatOdds(bet.initialOdds)}</p>
                  <p>Current Odds: {formatOdds(bet.currentOdds)}</p>
                  <p>Change: {formatOdds(bet.currentOdds - bet.initialOdds)}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

export default BettingLineTracker

