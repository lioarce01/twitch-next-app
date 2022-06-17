import React from "react"
import CategoriesItem from "./CategoriesItem"

const Categories = () => {
  return (
    <div id="categories" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2 text-gray-100">
        <span className="text-[#9147FF]">Top Categories</span> we think
        you&apos;ll like
      </h2>
      {/* Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2">
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg"
          title="Valorant"
          viewers="100K"
          tag1="FPS"
          tag2="Shooter"
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg"
          title="Teamfight Tactics"
          viewers="50K"
          tag1="Strategy"
          tag2="Tactics"
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg"
          title="Teamfight Tactics"
          viewers="150K"
          tag1="MOBA"
          tag2="Action"
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg"
          title="Just Chatting"
          viewers="400K"
          tag1="IRL"
          tag2=""
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg"
          title="CS:GO"
          viewers="113K"
          tag1="FPS"
          tag2="Shooter"
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/509659-285x380.jpg"
          title="ASMR"
          viewers="200K"
          tag1="IRL"
          tag2=""
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/65632_IGDB-285x380.jpg"
          title="DayZ"
          viewers="27K"
          tag1="Simulation"
          tag2="FPS"
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/490100-285x380.jpg"
          title="Lost Ark"
          viewers="17.1K"
          tag1="RPG"
          tag2="MMO"
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg"
          title="Fornite"
          viewers="72.5K"
          tag1="Shooter"
          tag2="Survival"
        />
        <CategoriesItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg"
          title="Special Events"
          viewers="47.7K"
          tag1="IRL"
        />
      </div>
    </div>
  )
}

export default Categories
