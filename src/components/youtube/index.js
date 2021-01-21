import React from "react"
import ReactPlayer from "react-player"

function Youtube() {
  return (
      <div className="youtube_title">
        <h4>Our Last Event:</h4>
        <div className="tube_wrap">
          <div className = "youtube_video">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=1Zvr-1vgFjo"
          />
          </div>
        </div>
      </div>
  )
}

export default Youtube;