'use client'
import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const QuestProgress = () => {
       const [progress,setProgress] = useState<number>(50)

  return (
    <div>
       <ProgressBar 
               progress={progress}
       />
    </div>
  )
}

export default QuestProgress