import React from "react"
import ReactPlayer from "react-player"

function Youtube() {
  return (
    <div className = "youtube_video">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=1Zvr-1vgFjo"
      />
    </div>
  )
}

export default Youtube;