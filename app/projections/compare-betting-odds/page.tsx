'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface BettingOdds {
  bookmaker: string
  odds: number
}

interface PlayerOdds {
  player: string
  team: string
  odds: BettingOdds[]
}

const bettingCategories = [
  { value: 'mvp', label: 'MVP' },
  { value: 'dpoy', label: 'Defensive Player of the Year' },
  { value: 'championship', label: 'NBA Championship' },
  { value: 'rookie', label: 'Rookie of the Year' },
]

const mvpOdds: PlayerOdds[] = [
  {
    player: "Nikola Jokic",
    team: "DEN",
    odds: [
      { bookmaker: "DraftKings", odds: +250 },
      { bookmaker: "FanDuel", odds: +270 },
      { bookmaker: "BetMGM", odds: +280 },
      { bookmaker: "Bet365", odds: +330 },
    ]
  },
  {
    player: "Joel Embiid",
    team: "PHI",
    odds: [
      { bookmaker: "DraftKings", odds: +330 },
      { bookmaker: "FanDuel", odds: +350 },
      { bookmaker: "BetMGM", odds: +320 },
      { bookmaker: "Bet365", odds: +300 },
    ]
  },
  {
    player: "Giannis Antetokounmpo",
    team: "MIL",
    odds: [
      { bookmaker: "DraftKings", odds: +550 },
      { bookmaker: "FanDuel", odds: +600 },
      { bookmaker: "BetMGM", odds: +500 },
      { bookmaker: "Bet365", odds: +550 },
    ]
  },
  {
    player: "Luka Doncic",
    team: "DAL",
    odds: [
      { bookmaker: "DraftKings", odds: +800 },
      { bookmaker: "FanDuel", odds: +850 },
      { bookmaker: "BetMGM", odds: +750 },
      { bookmaker: "Bet365", odds: +800 },
    ]
  },
  {
    player: "Jayson Tatum",
    team: "BOS",
    odds: [
      { bookmaker: "DraftKings", odds: +1200 },
      { bookmaker: "FanDuel", odds: +1100 },
      { bookmaker: "BetMGM", odds: +1000 },
      { bookmaker: "Bet365", odds: +1200 },
    ]
  },
]

const dpoyOdds: PlayerOdds[] = [
  {
    player: "Rudy Gobert",
    team: "MIN",
    odds: [
      { bookmaker: "DraftKings", odds: +200 },
      { bookmaker: "FanDuel", odds: +220 },
      { bookmaker: "BetMGM", odds: +190 },
      { bookmaker: "Bet365", odds: +210 },
    ]
  },
  {
    player: "Anthony Davis",
    team: "LAL",
    odds: [
      { bookmaker: "DraftKings", odds: +450 },
      { bookmaker: "FanDuel", odds: +480 },
      { bookmaker: "BetMGM", odds: +430 },
      { bookmaker: "Bet365", odds: +450 },
    ]
  },
  {
    player: "Giannis Antetokounmpo",
    team: "MIL",
    odds: [
      { bookmaker: "DraftKings", odds: +600 },
      { bookmaker: "FanDuel", odds: +650 },
      { bookmaker: "BetMGM", odds: +580 },
      { bookmaker: "Bet365", odds: +600 },
    ]
  },
  {
    player: "Bam Adebayo",
    team: "MIA",
    odds: [
      { bookmaker: "DraftKings", odds: +800 },
      { bookmaker: "FanDuel", odds: +750 },
      { bookmaker: "BetMGM", odds: +800 },
      { bookmaker: "Bet365", odds: +850 },
    ]
  },
  {
    player: "Jaren Jackson Jr.",
    team: "MEM",
    odds: [
      { bookmaker: "DraftKings", odds: +1000 },
      { bookmaker: "FanDuel", odds: +950 },
      { bookmaker: "BetMGM", odds: +1100 },
      { bookmaker: "Bet365", odds: +1000 },
    ]
  },
]

const championshipOdds: PlayerOdds[] = [
  {
    player: "Boston Celtics",
    team: "BOS",
    odds: [
      { bookmaker: "DraftKings", odds: +350 },
      { bookmaker: "FanDuel", odds: +370 },
      { bookmaker: "BetMGM", odds: +330 },
      { bookmaker: "Bet365", odds: +350 },
    ]
  },
  {
    player: "Denver Nuggets",
    team: "DEN",
    odds: [
      { bookmaker: "DraftKings", odds: +450 },
      { bookmaker: "FanDuel", odds: +480 },
      { bookmaker: "BetMGM", odds: +430 },
      { bookmaker: "Bet365", odds: +450 },
    ]
  },
  {
    player: "Milwaukee Bucks",
    team: "MIL",
    odds: [
      { bookmaker: "DraftKings", odds: +550 },
      { bookmaker: "FanDuel", odds: +600 },
      { bookmaker: "BetMGM", odds: +500 },
      { bookmaker: "Bet365", odds: +550 },
    ]
  },
  {
    player: "Los Angeles Clippers",
    team: "LAC",
    odds: [
      { bookmaker: "DraftKings", odds: +750 },
      { bookmaker: "FanDuel", odds: +800 },
      { bookmaker: "BetMGM", odds: +700 },
      { bookmaker: "Bet365", odds: +750 },
    ]
  },
  {
    player: "Phoenix Suns",
    team: "PHX",
    odds: [
      { bookmaker: "DraftKings", odds: +900 },
      { bookmaker: "FanDuel", odds: +950 },
      { bookmaker: "BetMGM", odds: +850 },
      { bookmaker: "Bet365", odds: +900 },
    ]
  },
]

const rookieOdds: PlayerOdds[] = [
  {
    player: "Victor Wembanyama",
    team: "SAS",
    odds: [
      { bookmaker: "DraftKings", odds: -150 },
      { bookmaker: "FanDuel", odds: -160 },
      { bookmaker: "BetMGM", odds: -140 },
      { bookmaker: "Bet365", odds: -155 },
    ]
  },
  {
    player: "Scoot Henderson",
    team: "POR",
    odds: [
      { bookmaker: "DraftKings", odds: +350 },
      { bookmaker: "FanDuel", odds: +380 },
      { bookmaker: "BetMGM", odds: +330 },
      { bookmaker: "Bet365", odds: +350 },
    ]
  },
  {
    player: "Chet Holmgren",
    team: "OKC",
    odds: [
      { bookmaker: "DraftKings", odds: +450 },
      { bookmaker: "FanDuel", odds: +480 },
      { bookmaker: "BetMGM", odds: +430 },
      { bookmaker: "Bet365", odds: +450 },
    ]
  },
  {
    player: "Amen Thompson",
    team: "HOU",
    odds: [
      { bookmaker: "DraftKings", odds: +1200 },
      { bookmaker: "FanDuel", odds: +1300 },
      { bookmaker: "BetMGM", odds: +1100 },
      { bookmaker: "Bet365", odds: +1200 },
    ]
  },
  {
    player: "Ausar Thompson",
    team: "DET",
    odds: [
      { bookmaker: "DraftKings", odds: +1500 },
      { bookmaker: "FanDuel", odds: +1600 },
      { bookmaker: "BetMGM", odds: +1400 },
      { bookmaker: "Bet365", odds: +1500 },
    ]
  },
]

const allOdds = {
  mvp: mvpOdds,
  dpoy: dpoyOdds,
  championship: championshipOdds,
  rookie: rookieOdds,
}

export default function CompareBettingOddsPage() {
  const [selectedCategory, setSelectedCategory] = useState('mvp')
  const oddsData = allOdds[selectedCategory as keyof typeof allOdds]

  const bookmakers = useMemo(() => {
    return oddsData[0].odds.map(odd => odd.bookmaker)
  }, [oddsData])

  const getBestWorstOdds = (odds: BettingOdds[]) => {
    const sortedOdds = [...odds].sort((a, b) => b.odds - a.odds)
    return {
      best: sortedOdds[sortedOdds.length - 1].bookmaker,
      worst: sortedOdds[0].bookmaker
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Compare Betting Odds</h1>
      <p className="text-xl">Compare betting odds from different bookmakers for NBA awards and outcomes.</p>
      
      <Card>
        <CardHeader>
          <CardTitle>Select Betting Category</CardTitle>
        </CardHeader>
        <CardContent>
          <Select onValueChange={setSelectedCategory} value={selectedCategory}>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {bettingCategories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{bettingCategories.find(c => c.value === selectedCategory)?.label} Betting Odds</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{selectedCategory === 'championship' ? 'Team' : 'Player'}</TableHead>
                  {selectedCategory !== 'championship' && <TableHead>Team</TableHead>}
                  {bookmakers.map((bookmaker) => (
                    <TableHead key={bookmaker}>{bookmaker}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {oddsData.map((playerOdds) => {
                  const { best, worst } = getBestWorstOdds(playerOdds.odds)
                  return (
                    <TableRow key={playerOdds.player}>
                      <TableCell>{playerOdds.player}</TableCell>
                      {selectedCategory !== 'championship' && <TableCell>{playerOdds.team}</TableCell>}
                      {playerOdds.odds.map((odd) => (
                        <TableCell 
                          key={odd.bookmaker}
                          className={`
                            ${odd.bookmaker === best ? 'bg-green-500 text-white' : ''}
                            ${odd.bookmaker === worst ? 'bg-red-500 text-white' : ''}
                          `}
                        >
                          {odd.odds > 0 ? `+${odd.odds}` : odd.odds}
                        </TableCell>
                      ))}
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

