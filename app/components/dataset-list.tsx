'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

interface Dataset {
  id: string
  title: string
  description: string
  price: number
  uploader: string
}

export default function DatasetList() {
  const [datasets, setDatasets] = useState<Dataset[]>([])

  useEffect(() => {
    fetchDatasets()
  }, [])

  const fetchDatasets = async () => {
    try {
      const response = await fetch('/api/datasets')
      if (response.ok) {
        const data = await response.json()
        setDatasets(data)
      }
    } catch (error) {
      console.error('Error fetching datasets:', error)
    }
  }

  const handlePurchase = async (datasetId: string) => {
    try {
      const response = await fetch('/api/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ datasetId }),
      })

      if (response.ok) {
        alert('Dataset purchased successfully!')
      } else {
        const data = await response.json()
        alert(data.error || 'An error occurred during purchase')
      }
    } catch (error) {
      alert('An error occurred during purchase')
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Available Datasets</h2>
      {datasets.map((dataset) => (
        <Card key={dataset.id}>
          <CardHeader>
            <CardTitle>{dataset.title}</CardTitle>
            <CardDescription>Uploaded by: {dataset.uploader}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{dataset.description}</p>
            <p className="font-bold mt-2">Price: ${dataset.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handlePurchase(dataset.id)}>Purchase</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

