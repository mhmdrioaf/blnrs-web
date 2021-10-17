import { Link as LinkR } from 'react-router-dom';
// import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    height: 8vp;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: blue;

    @media screen and (max-width: 960px) {
        transition: 0.8 all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    background-color: red;
    width: 100%;
    justify-content: center;
`;

export const NavLogo = styled(LinkR)`
    display: flex;
    background-color: green;
    color: #fdfdfd;
    font-style: 'Montserrat', sans-serif;
    font-size: 3rem;
    margin-top: 3.7vw;
    text-decoration: none;
`

export const NavMenu = styled(LinkR)`
    display: flex;
    width: 47px;
    height: 35px;
    margin-top: 3.7vw;
    align-self: flex-start;                      
`