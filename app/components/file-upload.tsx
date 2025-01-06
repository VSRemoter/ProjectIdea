'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [error, setError] = useState('')
  //const { user } = useUser()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file || !title || !description || !price) {
      setError('Please fill in all fields')
      return
    }

    const formData = new FormData()
    formData.append('file', file)
    formData.append('title', title)
    formData.append('description', description)
    formData.append('price', price)
    //formData.append('userId', user!.email)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setFile(null)
        setTitle('')
        setDescription('')
        setPrice('')
        setError('')
        alert('File uploaded successfully!')
      } else {
        const data = await response.json()
        setError(data.error || 'An error occurred during upload')
      }
    } catch (error) {
      setError('An error occurred during upload')
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Dataset</CardTitle>
        <CardDescription>Share your NBA data and start earning!</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="file">File</Label>
              <Input id="file" type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">Price ($)</Label>
              <Input id="price" type="number" min="0" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <Button type="submit" className="w-full mt-4">Upload Dataset</Button>
        </form>
      </CardContent>
    </Card>
  )
}

