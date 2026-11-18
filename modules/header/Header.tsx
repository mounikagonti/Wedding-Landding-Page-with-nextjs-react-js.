import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt1, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenuButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="container">
        <div className="header">
          <div className="logo">
            <Image
              alt="img"
              src="https://www.loopple.com/img/loopple-logo.png"
              width={100}
              height={20}
              objectFit="cover"
            />
          </div>
          <button
            onClick={handleToggleMenuButton}
            className="menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt1 />}
          </button>
          <div className={`nav_links ${isMenuOpen ? "toggleMenuButton" : ""}`}>
            <Link href="/">
              <div className="nav_item">Home</div>
            </Link>
            <Link href="/">
              <div className="nav_item">Free Advice</div>
            </Link>
            <Link href="/">
              <div className="nav_item">Examples</div>
            </Link>
            <Link href="/">
              <div className="nav_item">About Us</div>
            </Link>
            <button className="nav_btn">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
