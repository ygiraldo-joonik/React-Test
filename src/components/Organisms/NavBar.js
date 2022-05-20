import styled from "styled-components";
import { PageHeader } from '../Atoms/Grid'
import LogoSrc from '../../assets/resources/united-airlines-logo-png-17.png'
import NavBarMenu from "../Molecules/Menus/NavBarMenu";
import { useParams } from "react-router-dom";
const NavBarLogo = styled.img`
    width:17.5em;
    height:auto;
`
const NavBarContainer = styled.div`
    width:100%;
    display: flex;
`

const NavBar = () => {
    const { onBack = null } = useParams()


    return <PageHeader {...{ ...(onBack != null ? { onBack } : {}) }}>
        {/* Had to set JustifyContent property diferent because of a bug in styles components */}
        <NavBarContainer style={{ justifyContent: 'space-between' }}>
            <NavBarLogo src={LogoSrc} />
            <NavBarMenu />
        </NavBarContainer>
    </PageHeader>
}

export default NavBar;