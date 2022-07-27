import React from 'react'
import { img_300, unavailable } from "../../config/config";
const SingleContent = ({id,poster,title,date,media_type,vote_average}) => {
  console.log(img_300,poster,"poster")
    return (
    <div>
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}

      />
      
      
    </div>
  )
}

export default SingleContent