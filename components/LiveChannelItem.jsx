import React from "react"
import Image from "next/image"

const LiveChannelItem = ({ img, profile_img, title, user, game }) => {
  return (
    <div className="p-2">
      <Image src={img} alt="/" width="555" height="315" />
      <div className="flex pt-2">
        <div className="pr-2">
          <Image
            className="rounded-full"
            src={profile_img}
            alt="/"
            width="50"
            height="50"
          />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-100">{title}</p>
          <p className="text-sm text-gray-400">{user}</p>
          <p className="text-sm text-gray-400">{game}</p>
        </div>
      </div>
    </div>
  )
}

export default LiveChannelItem
