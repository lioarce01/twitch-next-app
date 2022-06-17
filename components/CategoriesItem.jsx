import Image from "next/image"
import React from "react"

const CategoriesItem = ({ img, title, viewers, tag1, tag2 }) => {
  return (
    <div className="p-2">
      <Image src={img} width="261" height="350" alt="/" />
      <div>
        <p className="font-bold text-[#d3d3d9]">{title}</p>
        <p className="text-sm font-normal text-[#848494] py-[2px]">
          {viewers} viewers
        </p>
        <div className="flex font-semibold text-[#c8c8d0]">
          <div className="pr-2 ">
            <p className="text-sm bg-[#3b3b44] rounded-full inline-block p-[2px] px-3">
              {tag1}
            </p>
          </div>

          <div>
            {tag2 ? (
              <p className="text-sm bg-[#3b3b44] rounded-full inline-block p-[2px] px-3">
                {tag2}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesItem
