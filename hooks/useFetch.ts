import { useState } from 'react'

const [loading, setLoading] = useState<boolean>(false)
const [error, setError] = useState<string>('')
const [data, setData] = useState()

export const useFetch = async (url: string) => {
  setLoading(true)
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      setError('Failed to fetch')
    } else {
      const res = await response.json()
      setData(res)
    }
  } catch (error) {
    setError('An Unknown Error Occured')
    console.error(error)
  } finally {
    setLoading(false)
  }
}

export { loading, error, data }
