import React from "react";
import ReactPlayer from "react-player";

const videoPresentation = "https://youtube.com/shorts/_fiAMwdrcW8?feature=share";
function Video() {
  return(
  <div >
    <ReactPlayer  
        url={videoPresentation}
        width="320px"
        height= "500px"
        loop= "true"
    />
  </div>)
  
}

export default Video;
