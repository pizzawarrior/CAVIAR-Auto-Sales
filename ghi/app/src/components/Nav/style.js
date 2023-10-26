import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavStyle = styled.nav`
        width: 100%;

        background-color: #82DDF0;
        display: flex;
        flex-direction: column;

        @media (min-width: 700px) {
            height: 80px;
            .full_screen {
                height: 100vh !important
            }
        }

    a {
        text-decoration: none;
    }
`

export const LeftContainer = styled.div`
    flex: 30%;
    display: flex;
    padding-right: 50px;
    align-items: center;
`

// LOGO
export const Logo = styled.img`
    max-width: 7rem;
    /* display: flex; */
    height: auto;
    margin-left: 10rem;

    @media (max-width: 700) {
        margin-left: 0;
    }
`

export const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10rem;
`

// LINKS
export const NavbarLink = styled(NavLink)`
    color: black;
    font-weight: bold;
    font-size: large;
    text-decoration: none;
    margin: 15px;

    @media (max-width: 700px) {
        display: none;
    }
`


export const NavbarLinkContainer = styled.div`
    display: flex;
`

export const NavbarLinkExtended = styled(NavLink)`
    color: black;
    font-weight: bold;
    font-size: large;
    text-decoration: none;
    margin: 15px;
`

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height:80px;
    display: flex;
`

export const OpenLinksBtn = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: black;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }
`

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`
