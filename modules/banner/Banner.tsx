import React from "react"
import Image from "next/image"

const Banner = () => {
  const Image_One =
    "https://images.unsplash.com/photo-1596457221755-b96bc3a6df18?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=987&amp;q=80"

  const Image_Two =
    "https://images.unsplash.com/photo-1581574208471-4944a12c317c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1123&amp;q=80"

  return (
    <div className='banner'>
      <div className='banner_wrapper'>
        <h1>We're here to help you plan the wedding of your dreams.</h1>
        <p>
          I always felt like i could do anything. That's the main thing people
          are controlled by! Thoughts-their perception of themselves. They're
          slowed down by their perception of themselves. They're slowed down by
          their perception of themselves.
        </p>
        <div className='banner_btn'>
          <button className='banner_btnOne'>Contact Us</button>
          <button className='banner_btnTwo'>Read more</button>
        </div>
      </div>

      <div className='image_One'>
        <Image
          src={Image_One}
          width={300}
          height={500}
          objectFit='cover'
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className='image_Two'>
        <Image
          src={Image_Two}
          width={300}
          height={350}
          objectFit='cover'
          style={{ borderRadius: "10px" }}
        />
      </div>
    </div>
  )
}

export default Banner
