import React from "react"
import { useId } from "react"

import { FaFacebook, FaPinterest } from "react-icons/fa"
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillGithub,
} from "react-icons/ai"

const Footer = () => {
  const socialArray = [
    {
      id: useId(),
      icon: <FaFacebook />,
      link: "",
    },
    {
      id: useId(),
      icon: <AiOutlineTwitter />,
      link: "",
    },
    {
      id: useId(),
      icon: <AiOutlineInstagram />,
      link: "",
    },
    {
      id: useId(),
      icon: <AiFillGithub />,
      link: "",
    },
    {
      id: useId(),
      icon: <FaPinterest />,
      link: "",
    },
  ]

  return (
    <div className='container'>
      <div className='footer_wrapper'>
        <div className='footer_top'>
          <div className='footer_left'>
            <h1>Wedding of your dreams</h1>
            <p>The next generation of design systems.</p>
            <div className='icon_wrapper'>
              {socialArray?.map((network) => (
                <>
                  <a
                    key={network?.id}
                    href={network?.link}
                    target='_blank'
                    className='icon'
                  >
                    {network?.icon}
                  </a>
                </>
              ))}
            </div>
          </div>
          <div className='footer_right'>
            <div className='link_wrapper'>
              <h1 className='heading'>Company</h1>
              <p className='links'>About Us</p>
              <p className='links'>Careers</p>
              <p className='links'>Press</p>
              <p className='links'>Blog</p>
            </div>
            <div className='link_wrapper'>
              <h1 className='heading'>Pages</h1>
              <p className='links'>Login</p>
              <p className='links'>Register</p>
              <p className='links'>Add list</p>
              <p className='links'>Contact</p>
            </div>
            <div className='link_wrapper'>
              <h1 className='heading'>Legal</h1>
              <p className='links'>Terms</p>
              <p className='links'>About Us</p>
              <p className='links'>Team</p>
              <p className='links'>Privacy</p>
            </div>
            <div className='link_wrapper'>
              <h1 className='heading'>Resources</h1>
              <p className='links'>Blog</p>
              <p className='links'>Service</p>
              <p className='links'>Product</p>
              <p className='links'>Pricing</p>
            </div>
          </div>
        </div>
        <hr />
        <div className='footer_bottom'>
          Copyright &copy; {new Date().getFullYear()} Soft by Creative Tim &
          Loopple.
        </div>
      </div>
    </div>
  )
}

export default Footer
