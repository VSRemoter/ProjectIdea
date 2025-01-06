'use client'

import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { year: 2004, points: 1654 },
  { year: 2005, points: 3262 },
  { year: 2006, points: 5067 },
  { year: 2007, points: 7067 },
  { year: 2008, points: 9067 },
  { year: 2009, points: 11124 },
  { year: 2010, points: 13391 },
  { year: 2011, points: 15251 },
  { year: 2012, points: 17362 },
  { year: 2013, points: 19811 },
  { year: 2014, points: 22068 },
  { year: 2015, points: 24913 },
  { year: 2016, points: 27544 },
  { year: 2017, points: 30260 },
  { year: 2018, points: 32543 },
  { year: 2019, points: 34087 },
  { year: 2020, points: 35367 },
  { year: 2021, points: 36794 },
  { year: 2022, points: 38390 },
  { year: 2023, points: 39644 },
]

export default function LeBronCareerPlot() {
  const [activePoint, setActivePoint] = useState<{ year: number; points: number } | null>(null)

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-primary p-2 rounded">
          <p className="text-primary-foreground">{`Year: ${payload[0].payload.year}`}</p>
          <p className="text-primary-foreground">{`Career Points: ${payload[0].value.toLocaleString()}`}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="w-full h-[400px] mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">LeBron's Career Points Over the Years</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          onMouseMove={(e) => {
            if (e.activePayload) {
              setActivePoint(e.activePayload[0].payload)
            }
          }}
          onMouseLeave={() => setActivePoint(null)}
        >
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="points" stroke="#8884d8" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
      {activePoint && (
        <div className="text-center mt-4">
          <p className="text-lg">
            In {activePoint.year}, LeBron had scored a total of {activePoint.points.toLocaleString()} career points.
          </p>
        </div>
      )}
    </div>
  )
}

