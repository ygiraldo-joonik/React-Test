import styled from "styled-components";
import { Space } from 'antd'

const NavBarContainer = styled(Space)`
    background:#f2f2f2 !important;
    width: 100%;
`;

const NavBar = () =>
    <NavBarContainer>
        Nav
    </NavBarContainer>

export default NavBar;