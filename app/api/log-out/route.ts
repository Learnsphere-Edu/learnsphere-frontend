import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the incoming request JSON body from the client
    const body = await request.json();

    // Forward the login request to your external backend endpoint
    const apiResponse = await fetch('https://learnsphere-jjlc.onrender.com/v1/logout/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    // Read the response as text to safely handle empty responses
    const responseText = await apiResponse.text();
    let data = {};
    if (responseText) {
      try {
        data = JSON.parse(responseText);
      } catch (err) {
        console.error('Failed to parse JSON:', err);
      }
    }

    // Return the response with the original status code from the external API
    return NextResponse.json(data, { status: apiResponse.status });
  } catch (error) {
    console.error('Internal error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
