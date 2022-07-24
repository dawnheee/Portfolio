import styled from "styled-components";
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";

const media = {
  //미디어 객체. 필요한 경우에 쓸 수 있음
  desktop: "@media(min-width: 601px)",
  mobile: "@media(max-width: 600px)",
};
const NavWrapper = styled.div`
  position: fixed;
  right: 10px;

  .hamburger {
    margin: 10px;
    width: 5vh;
    height: 5vh;
    color: rgba(255, 255, 255, 0.82);
    ${media.desktop} {
      // 햄버거메뉴는 데스크탑일 때 안보인다
      display: none;
    }
  }
`;

const HashItems = styled.div`
  ${media.desktop} {
    //해쉬아이템은 데스크탑일 때 안보인다.
    display: none;
  }
  position: absolute;
  top: 45px;
  right: 5px;
  width: 100px;
  height: 180px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(173, 173, 173, 0.98);
  border-radius: 7px;

  a {
    //해쉬가 걸려 있는 곳(a 태그 취급)
    text-decoration: none;
    color: white;
    font-size: 16px;
  }
`;

const DesktopNav = styled.div`
  display: flex;
  justify-content: flex-end;
  color: white;

  a {
    margin: 10px;
    :visited {
      color: white;
    }
  }
  ${media.mobile} {
    display: none;
  }
`;

const Nav = () => {
  // * 1. isOpen
  const [isOpen, setIsOpen] = useState(false);
  // * 2. 햄버거메뉴 클릭 이벤트핸들러
  const handleNavDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Home, Main, Contact를 감싸는 래퍼에 id를 준 상태
    // 네브바에서 누르는 곳의 해시링크 to에 id를 넣어주면됨
    <NavWrapper>
      <DesktopNav>
        <HashLink to="#home" smooth>
          Home
        </HashLink>
        <HashLink to="#main" smooth>
          Main
        </HashLink>
        <HashLink to="#contact" smooth>
          Contact
        </HashLink>
      </DesktopNav>
      <GiHamburgerMenu onClick={handleNavDropdown} className="hamburger" />
      {isOpen ? (
        <HashItems>
          <HashLink to="#home" smooth>
            Home
          </HashLink>
          <HashLink to="#main" smooth>
            Main
          </HashLink>
          <HashLink to="#contact" smooth>
            Contact
          </HashLink>
        </HashItems>
      ) : null}
    </NavWrapper>
  );
};

export default Nav;
