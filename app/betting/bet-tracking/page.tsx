'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface Bet {
  id: string
  name: string
  type: string
  stake: number
  odds: number
  result: 'win' | 'loss'
  payout: number
}

const BetTrackingPage = () => {
  const [bets, setBets] = useState<Bet[]>([])
  const [newBet, setNewBet] = useState<Omit<Bet, 'id' | 'payout'>>({
    name: '',
    type: '',
    stake: 0,
    odds: 0,
    result: 'win',
  })

  const addBet = () => {
    const payout = newBet.result === 'win' ? newBet.stake * newBet.odds : 0
    const bet: Bet = {
      ...newBet,
      id: Date.now().toString(),
      payout: payout,
    }
    setBets([...bets, bet])
    setNewBet({ name: '', type: '', stake: 0, odds: 0, result: 'win' })
  }

  const calculatePerformance = () => {
    const totalBets = bets.length
    const wins = bets.filter(bet => bet.result === 'win').length
    const winRate = totalBets > 0 ? (wins / totalBets) * 100 : 0
    const totalStake = bets.reduce((sum, bet) => sum + bet.stake, 0)
    const totalPayout = bets.reduce((sum, bet) => sum + bet.payout, 0)
    const profit = totalPayout - totalStake
    const roi = totalStake > 0 ? (profit / totalStake) * 100 : 0

    return { totalBets, wins, winRate, totalStake, totalPayout, profit, roi }
  }

  const performance = calculatePerformance()

  const chartData = bets.map((bet, index) => ({
    name: bet.name,
    profit: bet.payout - bet.stake,
    cumulativeProfit: bets.slice(0, index + 1).reduce((sum, b) => sum + b.payout - b.stake, 0),
  }))

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Bet Tracking & Performance</h1>
      <p className="text-xl">Track your bets and analyze your performance over time.</p>

      <Card>
        <CardHeader>
          <CardTitle>Add New Bet</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Bet Name</Label>
              <Input
                id="name"
                value={newBet.name}
                onChange={(e) => setNewBet({ ...newBet, name: e.target.value })}
                placeholder="e.g. Lakers vs Celtics"
              />
            </div>
            <div>
              <Label htmlFor="type">Bet Type</Label>
              <Input
                id="type"
                value={newBet.type}
                onChange={(e) => setNewBet({ ...newBet, type: e.target.value })}
                placeholder="e.g. Moneyline, Spread, Prop"
              />
            </div>
            <div>
              <Label htmlFor="stake">Stake ($)</Label>
              <Input
                id="stake"
                type="number"
                value={newBet.stake}
                onChange={(e) => setNewBet({ ...newBet, stake: Number(e.target.value) })}
                placeholder="Enter stake amount"
              />
            </div>
            <div>
              <Label htmlFor="odds">Odds</Label>
              <Input
                id="odds"
                type="number"
                value={newBet.odds}
                onChange={(e) => setNewBet({ ...newBet, odds: Number(e.target.value) })}
                placeholder="Enter odds (decimal format)"
              />
            </div>
            <div>
              <Label htmlFor="result">Result</Label>
              <select
                id="result"
                value={newBet.result}
                onChange={(e) => setNewBet({ ...newBet, result: e.target.value as 'win' | 'loss' })}
                className="w-full p-2 border rounded"
              >
                <option value="win">Win</option>
                <option value="loss">Loss</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button onClick={addBet}>Add Bet</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Total Bets</p>
              <p className="text-2xl font-bold">{performance.totalBets}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Win Rate</p>
              <p className="text-2xl font-bold">{performance.winRate.toFixed(2)}%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Profit/Loss</p>
              <p className={`text-2xl font-bold ${performance.profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                ${performance.profit.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">ROI</p>
              <p className={`text-2xl font-bold ${performance.roi >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {performance.roi.toFixed(2)}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Betting History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bet</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Stake</TableHead>
                <TableHead>Odds</TableHead>
                <TableHead>Result</TableHead>
                <TableHead>Payout</TableHead>
                <TableHead>Profit/Loss</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bets.map((bet) => (
                <TableRow key={bet.id}>
                  <TableCell>{bet.name}</TableCell>
                  <TableCell>{bet.type}</TableCell>
                  <TableCell>${bet.stake.toFixed(2)}</TableCell>
                  <TableCell>{bet.odds.toFixed(2)}</TableCell>
                  <TableCell>{bet.result}</TableCell>
                  <TableCell>${bet.payout.toFixed(2)}</TableCell>
                  <TableCell className={bet.payout - bet.stake >= 0 ? 'text-green-500' : 'text-red-500'}>
                    ${(bet.payout - bet.stake).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Performance Graph</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="profit" stroke="#8884d8" name="Profit per Bet" />
                <Line type="monotone" dataKey="cumulativeProfit" stroke="#82ca9d" name="Cumulative Profit" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BetTrackingPage

