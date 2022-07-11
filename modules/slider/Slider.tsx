import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { Autoplay, Pagination } from "swiper"
import Image from "next/image"

const Slider = () => {
  return (
    <div className='slider'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='image_container'>
            <Image
              src='https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-4.jpg'
              alt='Image 1'
              height={100}
              width={100}
              style={{ borderRadius: "5px" }}
              objectFit='cover'
              priority={true}
            />
            <div className='content_wrapper'>
              <p>
                "We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our
                dreams."
              </p>
              <h4>Marcell Glock</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='image_container'>
            <Image
              src='https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-3.jpg'
              alt='Image 2'
              height={100}
              width={100}
              style={{ borderRadius: "5px" }}
              objectFit='cover'
            />
            <div className='content_wrapper'>
              <p>
                "We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our
                dreams."
              </p>
              <h4>John Down</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='image_container'>
            <Image
              src='https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg
              '
              alt='Image 3'
              objectFit='cover'
              height={100}
              width={100}
              style={{ borderRadius: "5px" }}
            />
            <div className='content_wrapper'>
              <p>
                "We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our
                dreams."
              </p>
              <h4>Mathew Goat</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
