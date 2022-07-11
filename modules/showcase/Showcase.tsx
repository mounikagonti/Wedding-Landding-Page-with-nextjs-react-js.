import React from "react"
import Image from "next/image"
import { AiOutlineArrowRight } from "react-icons/ai"

const Showcase = () => {
  return (
    <div className='showcase_wrapper'>
      <div className='container'>
        <div className='showcase_content'>
          <h1>Create Your</h1>
          <h1>Dream Wedding</h1>
          <p>
            The time is now for it to be okay to be great. For being a bright
            color. For standing out.
          </p>
        </div>
        <div className='showcaseRowOne'>
          <div className='showcase_left'>
            <div className='showcase_One'>
              <div className='showcase_imageOne'>
                <Image
                  src='https://images.unsplash.com/photo-1579583764988-3e08c6132d2a?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1483&amp;q=80'
                  layout='fill'
                  objectFit='cover'
                  style={{ borderRadius: "15px" }}
                />
              </div>
              <div className='image_content'>
                <p>Packages</p>
                <h2>Furniture</h2>
                <div className='showcase_icon'>
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
            <div className='two_showcase'>
              <div className='showcase_Two'>
                <div className='showcase_imageTwo'>
                  <Image
                    src='https://images.unsplash.com/photo-1528472602515-4c7d6feea2cc?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdlZGRpbmd8ZW58MHwyfDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                    layout='fill'
                    objectFit='cover'
                    style={{ borderRadius: "15px" }}
                  />
                </div>
                <div className='image_content'>
                  <p>Packages</p>
                  <h2>Party</h2>
                  <div className='showcase_icon'>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
              <div className='showcase_Six'>
                <div className='showcase_imageSix'>
                  <Image
                    src='https://images.unsplash.com/photo-1452571817344-8d5a4c2100c6?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80'
                    layout='fill'
                    objectFit='cover'
                    style={{ borderRadius: "15px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='showcase_right'>
            <div className='double'>
              <div className='showcase_Three'>
                <div className='image_content'>
                  <p>Packages</p>
                  <h2>Ceremony</h2>
                  <div className='showcase_icon'>
                    <AiOutlineArrowRight />
                  </div>
                </div>
                <div className='showcase_imageThree'>
                  <Image
                    src='https://images.unsplash.com/photo-1501161481074-4c024f8f2b8e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZyUyMGNlcmVtb255fGVufDB8MnwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                    layout='fill'
                    objectFit='cover'
                    style={{ borderRadius: "15px" }}
                  />
                </div>
              </div>
              <div className='showcase_Seven'>
                <div className='image_content'>
                  <p>
                    " I always felt like I could do anything. That's the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! "
                  </p>
                </div>
                <div className='showcase_imageSeven'>
                  <Image
                    src='https://images.unsplash.com/photo-1640979085669-9be415e65034?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlZGRpbmclMjByaW5nc3xlbnwwfDJ8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                    layout='fill'
                    objectFit='cover'
                    style={{ borderRadius: "15px" }}
                  />
                </div>
              </div>
            </div>
            <div className='double_showcase'>
              <div className='showcase_Four'>
                <div className='showcase_imageFour'>
                  <Image
                    src='https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZyUyMGRyaW5rc3xlbnwwfDJ8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                    layout='fill'
                    objectFit='cover'
                    style={{ borderRadius: "15px" }}
                  />
                </div>
                <div className='image_content'>
                  <p>Packages</p>
                  <h2>Drinks</h2>
                  <div className='showcase_icon'>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
              <div className='showcase_Eight'>
                <div className='showcase_imageEight'>
                  <Image
                    src='https://images.unsplash.com/photo-1592154016856-52ac296fc27a?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlZGRpbmclMjBkcmlua3N8ZW58MHwyfDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                    layout='fill'
                    objectFit='cover'
                    style={{ borderRadius: "15px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className='showcase_One'>
            <div className='showcase_imageOne'>
              <Image
                src='https://images.unsplash.com/photo-1579583764988-3e08c6132d2a?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1483&amp;q=80'
                layout='fill'
                objectFit='cover'
                style={{ borderRadius: "15px" }}
              />
            </div>
            <div className='image_content'>
              <p>Packages</p>
              <h2>Furniture</h2>
              <div className='showcase_icon'>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className='showcase_Two'>
            <div className='showcase_imageTwo'>
              <Image
                src='https://images.unsplash.com/photo-1528472602515-4c7d6feea2cc?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdlZGRpbmd8ZW58MHwyfDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                layout='fill'
                objectFit='cover'
                style={{ borderRadius: "15px" }}
              />
            </div>
            <div className='image_content'>
              <p>Packages</p>
              <h2>Party</h2>
              <div className='showcase_icon'>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>

          <div className='showcase_Four'>
            <div className='showcase_imageFour'>
              <Image
                src='https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZyUyMGRyaW5rc3xlbnwwfDJ8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                layout='fill'
                objectFit='cover'
                style={{ borderRadius: "15px" }}
              />
            </div>
            <div className='image_content'>
              <p>Packages</p>
              <h2>Drinks</h2>
              <div className='showcase_icon'>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className='showcase_Six'>
            <div className='showcase_imageSix'>
              <Image
                src='https://images.unsplash.com/photo-1452571817344-8d5a4c2100c6?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80'
                layout='fill'
                objectFit='cover'
                style={{ borderRadius: "15px" }}
              />
            </div>
          </div>
          <div className='showcase_Seven'>
            <div className='image_content'>
              <p>
                " I always felt like I could do anything. That's the main thing
                people are controlled by! Thoughts- their perception of
                themselves! "
              </p>
            </div>
            <div className='showcase_imageSeven'>
              <Image
                src='https://images.unsplash.com/photo-1640979085669-9be415e65034?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlZGRpbmclMjByaW5nc3xlbnwwfDJ8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                layout='fill'
                objectFit='cover'
                style={{ borderRadius: "15px" }}
              />
            </div>
          </div>
          <div className='showcase_Eight'>
            <div className='showcase_imageEight'>
              <Image
                src='https://images.unsplash.com/photo-1592154016856-52ac296fc27a?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlZGRpbmclMjBkcmlua3N8ZW58MHwyfDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                layout='fill'
                objectFit='cover'
                style={{ borderRadius: "15px" }}
              />
            </div>
          </div> */}
        </div>

        {/* <div className='showcaseRowTwo'>
          <div className='showcase_Five'>
            <div className='showcase_imageFive'>
            </div>
          </div>
          <div className='showcase_Six'>
            <div className='showcase_imageSix'>
              <Image
                src='https://images.unsplash.com/photo-1452571817344-8d5a4c2100c6?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80'
                layout='fill'
                objectFit='cover'
                style={{ borderRadius: "15px" }}
              />
            </div>
          </div>
          <div className='showcase_Seven'>
            <div className='image_content'>
              <p>
                " I always felt like I could do anything. That's the main thing
                people are controlled by! Thoughts- their perception of
                themselves! "
              </p>
            </div>
            <div className='showcase_imageSeven'>
              <Image
                src='https://images.unsplash.com/photo-1640979085669-9be415e65034?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlZGRpbmclMjByaW5nc3xlbnwwfDJ8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                layout='fill'
                objectFit='cover'
                style={{ borderRadius: "15px" }}
              />
            </div>
          </div>
          <div className='showcase_Eight'>
            <div className='showcase_imageEight'>
              <Image
                src='https://images.unsplash.com/photo-1592154016856-52ac296fc27a?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlZGRpbmclMjBkcmlua3N8ZW58MHwyfDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
                layout='fill'
                objectFit='cover'
                style={{ borderRadius: "15px" }}
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Showcase
