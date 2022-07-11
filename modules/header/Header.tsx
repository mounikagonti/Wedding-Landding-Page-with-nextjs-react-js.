import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { HiMenuAlt1 } from "react-icons/hi"

const Header = () => {
  const toggle = useRef<any>()

  const handleToggleMenuButton = () => {
    // toggle.current.style.display = "block"
    toggle.current.classList.toggle("toggleMenuButton")
  }

  return (
    <nav>
      <div className='container'>
        <div className='header'>
          <div className='logo'>
            <Image
              src='https://www.loopple.com/img/loopple-logo.png'
              width={100}
              height={20}
              objectFit='cover'
            />
          </div>
          {/* <div className='menu'>
            <HiMenuAlt1 />
          </div> */}
          <button onClick={handleToggleMenuButton} className='menu'>
            <HiMenuAlt1 />
          </button>
          <div className='nav_links' ref={toggle}>
            <Link href='/'>
              <div className='nav_item'>Home</div>
            </Link>
            <Link href='/'>
              <div className='nav_item'>Free Advice</div>
            </Link>
            <Link href='/'>
              <div className='nav_item'>Examples</div>
            </Link>
            <Link href='/'>
              <div className='nav_item'>About Us</div>
            </Link>
            <button className='nav_btn'>Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
