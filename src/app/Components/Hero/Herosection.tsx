import React from 'react'
import Header from './Header'
import Rectangel1 from './Rectangel1'
import Singlseater from './Singlseater'

const Herosection = () => {
  return (
    <div>
        <div className="absolute top-0 left-0 w-full max-w-screen-xl h-auto lg:h-[1000px]">
            <Header />
            <Rectangel1 />
            <Singlseater />
        </div>

    </div>
  )
}

export default Herosection