import { NextResponse } from 'next/server'

export async function GET (request: Request) {
  try {
    // Parse the incoming request body
    const body = await request.json()

    // Forward the request to your external API
    const apiResponse = await fetch(
      'https://learnsphere-jjlc.onrender.com/v1/profile/',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }
    )

    // Read the response as text first (to handle potential empty bodies)
    const responseText = await apiResponse.text()
    let data = {}
    if (responseText) {
      try {
        data = JSON.parse(responseText)
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError)
      }
    }

    // Return the response using NextResponse.json with the correct status code
    return NextResponse.json(data, { status: apiResponse.status })
  } catch (error) {
    console.error('Internal error:', error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

