import { NextResponse } from 'next/server'
import { mockDatasets } from '../mock-data'

export async function GET() {
  return NextResponse.json(mockDatasets)
}

