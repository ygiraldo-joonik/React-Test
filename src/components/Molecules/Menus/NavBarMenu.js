import { Space } from '../../Atoms/Grid'
import { DownOutlined } from '@ant-design/icons';
import { palette } from '../../../library/theme';
import styled from 'styled-components'
import ShoppingCartSrc from '../../../assets/resources/ShoppingCart.png'
import UserProfileSrc from '../../../assets/resources2.2/userProfile.png'

const NavBarLink = styled.a`
    color:${palette.primary};
    font-size:20px;
    font-weight:bold;

    &:hover{
        color:${palette.primary};
    }
`

const ShoppingCartImage = styled.img`
    width:33px;
    height:auto;
    margin-bottom:5px;
`

const AvatarImage = styled.img`
    width:35px;
    height:auto;
    margin-bottom:5px;
    margin: 0 1em;
`

const DropIcon = styled(DownOutlined)`
    font-size:15px
`

const NavBarMenu = () => {


    return <Space size="large">
        <NavBarLink onClick={e => e.preventDefault()}>
            <Space>
                Categories
                <DropIcon size={5} />
            </Space>
        </NavBarLink>
        <NavBarLink onClick={e => e.preventDefault()}>
            <Space>
                ENG
                <DropIcon />
            </Space>
        </NavBarLink>
        <NavBarLink onClick={e => e.preventDefault()}>
            <Space>
                USD
                $
            </Space>
        </NavBarLink>

        <NavBarLink onClick={e => e.preventDefault()}>
            <Space>
                Itinerary
            </Space>
        </NavBarLink>
        <NavBarLink onClick={e => e.preventDefault()}>
            <Space>
                <ShoppingCartImage src={ShoppingCartSrc} />
            </Space>
        </NavBarLink>
        <NavBarLink onClick={e => e.preventDefault()}>
            <Space>
                <AvatarImage src={UserProfileSrc} />
            </Space>
        </NavBarLink>
    </Space>
}

export default NavBarMenu;