import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

// This is a mock database. In a real application, you'd use a real database.
let datasets: any[] = []

export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get('file') as File
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const price = parseFloat(formData.get('price') as string)
  const userId = formData.get('userId') as string

  if (!file || !title || !description || isNaN(price)) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // In a real application, you'd upload the file to a storage service here

  const dataset = {
    id: uuidv4(),
    title,
    description,
    price,
    fileName: file.name,
  }

  datasets.push(dataset)

  return NextResponse.json({ message: 'Dataset uploaded successfully', dataset }, { status: 201 })
}

