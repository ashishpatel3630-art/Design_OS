import React, { useState } from 'react'
import ColorNav from '../components/color/ColorNav'
import TrendColor from '../components/color/TrendColor'
import Popular from '../components/color/Popular'
import Nature from '../components/color/Nature'
import Minimal from '../components/color/Minimal'
import Dark from '../components/color/Dark'
import Luxury from '../components/color/Luxury'

function ColorRealm() {
  const [activeCategory, setActiveCategory] = useState('Trending')

  const renderComponent = () => {
    switch(activeCategory) {
      case 'Trending':
        return <TrendColor />
      case 'Popular':
        return <Popular />
      case 'Nature':
        return <Nature />
      case 'Minimal':
        return <Minimal />
      case 'Dark':
        return <Dark />
      case 'Luxury':
        return <Luxury />
      case 'Pastel':
        return <TrendColor />
      default:
        return <TrendColor />
    }
  }

  return (
    <div>
      <ColorNav activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      {renderComponent()}
    </div>
  )
}

export default ColorRealm
