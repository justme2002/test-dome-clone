import React, { useEffect, useState } from 'react'

const Video = () => {

  const [ videoSize, setVideoSize ] = useState({ 
    width: 800,
    height: 480 
  })

  useEffect(() => {
    if (screen.availWidth < 500) {
      setVideoSize({
        width: 320,
        height: 240
      })
    }
  }, [])

  return (
    <div className='flex justify-center mt-9'>
      <div className=''>
        <iframe width={videoSize.width} height={videoSize.height} src="https://www.youtube.com/embed/gPQQg4yZqt8" title="TestDome Explained in 90 Seconds" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </div>
  )
}

export default Video