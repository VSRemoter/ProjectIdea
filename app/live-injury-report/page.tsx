'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface InjuryReport {
  id: string
  player: string
  team: string
  injury: string
  status: 'Out' | 'Questionable' | 'Probable'
  lastUpdated: string
}

const mockInjuryReports: InjuryReport[] = [
  {
    id: '1',
    player: 'LeBron James',
    team: 'LAL',
    injury: 'Ankle',
    status: 'Questionable',
    lastUpdated: '2023-05-15T10:30:00Z'
  },
  {
    id: '2',
    player: 'Kevin Durant',
    team: 'PHX',
    injury: 'Knee',
    status: 'Out',
    lastUpdated: '2023-05-14T18:45:00Z'
  },
  {
    id: '3',
    player: 'Ja Morant',
    team: 'MEM',
    injury: 'Hand',
    status: 'Probable',
    lastUpdated: '2023-05-15T09:15:00Z'
  },
  {
    id: '4',
    player: 'Joel Embiid',
    team: 'PHI',
    injury: 'Knee',
    status: 'Questionable',
    lastUpdated: '2023-05-15T11:00:00Z'
  },
  {
    id: '5',
    player: 'Giannis Antetokounmpo',
    team: 'MIL',
    injury: 'Back',
    status: 'Out',
    lastUpdated: '2023-05-14T20:30:00Z'
  }
]

const statusColors = {
  Out: 'bg-red-500',
  Questionable: 'bg-yellow-500',
  Probable: 'bg-green-500'
}

export default function LiveInjuryReportPage() {
  const [injuryReports, setInjuryReports] = useState<InjuryReport[]>([])

  useEffect(() => {
    // In a real application, you would fetch data from an API here
    setInjuryReports(mockInjuryReports)
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Live Injury Report</h1>
      <p className="text-xl">Stay updated with the latest NBA player injury reports and status changes.</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {injuryReports.map((report) => (
          <Card key={report.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {report.player} ({report.team})
              </CardTitle>
              <Badge className={`${statusColors[report.status]} text-white`}>
                {report.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{report.injury}</div>
              <p className="text-xs text-muted-foreground">
                Last updated: {new Date(report.lastUpdated).toLocaleString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

