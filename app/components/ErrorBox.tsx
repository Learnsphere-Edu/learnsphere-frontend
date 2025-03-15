interface ErrorProps {
  error: string
}
export default function ErrorBox ({ error }: ErrorProps) {
  return (
    <div className='bg-red-200 mt-8 px-8 py-2 border border-red-600 rounded-lg duration-300 ease-in'>
      {error}
    </div>
  )
}
