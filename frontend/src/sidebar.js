import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import styled from "styled-components";
import { social, links } from "./data";
import logo from "./silverLogo.png";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleclick() {
    if (isSidebarOpen) {
      closeSidebar();
    }
  }
  const openSidebar = () => {
    setIsSidebarOpen(isSidebarOpen ? false : true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <StyledAside isOpen={isSidebarOpen}>
        <SidebarHeader>
          <img
            src={logo}
            width={375}
            height={50}
            style={{
             
              padding: "20px",
              paddingBottom: "10px",
              paddingTop: "25px",
            }}
          />
          <CloseBtn onClick={closeSidebar}>
            <FaTimes />
          </CloseBtn>
        </SidebarHeader>

        <Links>
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <StyledLink to={url} onClick={handleclick}>
                  {icon}
                  {text}
                </StyledLink>
              </li>
            );
          })}
        </Links>

        {/* <SocialIcons>
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </SocialIcons> */}
      </StyledAside>
      <NavbarToggle>
        <img
          src={logo}
          width={345}
          height={50}
          style={{ padding: "20px", paddingBottom: "10px", paddingTop: "25px" }}
        />
        <SidebarToggle onClick={openSidebar}>
          <FaBars />
        </SidebarToggle>
      </NavbarToggle>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: var(--clr-white);
  box-shadow: var(--light-shadow);
  @media screen and (max-width: 1003px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const StyledAside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  background-color: silver;
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 1rem;
  box-shadow: var(--clr-red-dark);
  transition: var(--transition);
  transform: ${({ isOpen }) => (isOpen ? "translate(0)" : "translate(-100%)")};
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
`;

const CloseBtn = styled.button`
  font-size: 1.75rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  transition: var(--transition);
  cursor: pointer;
  color: var(--clr-red-dark);
  margin-top: 0.2rem;
  &:hover {
    color: var(--clr-red-light);
  }
`;

const Links = styled.ul`
  a {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  a:hover {
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }
  a svg {
    font-size: 1.5rem;
    color: var(--clr-grey-5);
    margin-right: 1rem;
    transition: var(--transition);
  }
  a:hover svg {
    color: var(--clr-grey-2);
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  li {
    margin-right: 1rem;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: var(--clr-primary-5);
    border: 2px solid var(--clr-primary-5);
    border-radius: 50%;
    height: 50px;
    width: 50px;
    transition: var(--transition);
  }
  a:hover {
    background: var(--clr-primary-5);
    color: var(--clr-white);
  }
`;

const NavbarToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const SidebarToggle = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  transition: var(--transition);
  cursor: pointer;
  color: var(--clr-red-dark);
  margin-top: 0.2rem;
  &:hover {
    color: var(--clr-red-light);
  }
`;

export default Sidebar;
