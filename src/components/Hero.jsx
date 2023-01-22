import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg" alt="" />

       <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>

       <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">

        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
           <p> All inclusive</p>
           <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private beaches and getaways </h1>
           <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illum similique pariatur, assumenda iure deleniti molestiae, fugiat fugit temporibus nemo, nostrum odio harum modi. Soluta hic quod quasi officia aspernatur!</p>
           <button className='bg-white text-black '>Reserve now</button>
        </div>
       </div>
    </div>
  )
}

export default Hero