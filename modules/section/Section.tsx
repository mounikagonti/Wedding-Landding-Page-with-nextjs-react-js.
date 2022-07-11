import React from "react"
import Image from "next/image"

const Section = () => {
  return (
    <div className='section_wrapper'>
      <div className='container'>
        <div className='section'>
          <div className='section_left'>
            <div className='sectionImage_one'>
              <Image
                src='https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=987&amp;q=80'
                layout='fill'
                objectFit='contain'
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className='section_contentOne'>
              <h6>Ceremony</h6>
              <h5>West Street no.5</h5>
              <p>
                Change the color to match your brand or vision, add your logo,
                choose the perfect thumbnail, remove the playbar, add controls
                and more.
              </p>
            </div>
          </div>
          <div className='section_left'>
            <div className='sectionImage_one'>
              <Image
                src='https://images.unsplash.com/photo-1600179141696-621e6c2a8447?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZyUyMHBhcnR5fGVufDB8MXwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                layout='fill'
                objectFit='contain'
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className='section_contentOne'>
              <h6>Night party</h6>
              <h5>House Margiela</h5>
              <p>
                Change the color to match your brand or vision, add your logo,
                choose the perfect thumbnail, remove the playbar, add controls
                and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
