import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export default function Navigation() {
    return <Nav>
    <NavLinkStyled to="/jackets" activeClassName="active">Jackets</NavLinkStyled>
    <NavLinkStyled to="/shirts" activeClassName="active">Shirts</NavLinkStyled>
    <NavLinkStyled to="/accessories" activeClassName="active">Accessories</NavLinkStyled>
    </Nav> 
}


const Nav = styled.nav`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
margin-bottom: 3vh;
`;

const NavLinkStyled = styled(NavLink)`
font-size: 1.2rem;
padding: 1%;
text-decoration: none;

&.active {
    background-color: plum;
}
`;