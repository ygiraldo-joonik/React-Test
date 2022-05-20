import styled from 'styled-components'
import CarIconSrc from '../../../../assets/resources2.1/Group 145.png'
import { Box, Space } from '../../../Atoms/Grid'
import { Title, Badge } from '../../../Atoms/Typography'
import { palette } from '../../../../library/theme'
import Color from 'color'
import ShareIconSrc from '../../../../assets/resources/Group 240.png'
import HeartIconSrc from '../../../../assets/resources/Path 60.png'

const IconImg = styled.img`
    width:50px;
    height:50px;
    margin-right:.5em;
`;

const ActionButton = styled.img`
    width:px;
    height:30px;
    margin-right:.5em;
`;

const CategoryTag = styled.img`
    width:px;
    height:22px;
`;

const [tagBg, tagColor] = [Color(palette.primary).lighten(2), palette.primary];

const CarDetailsTitle = ({ title = '', iconSrc = null }) => <Box mt={2}>
    {iconSrc != null && <IconImg src={iconSrc} />}
    <Title>{title}</Title>
</Box>

const CarDetailsBadges = ({ tags = [], categories = null }) => <Box justify="space-between" wrap>
    <Space style={{ marginTop: '1em', }}>
        {tags.map((tag, i) => <Badge key={i} count={tag} style={{ color: tagColor, background: tagBg, fontWeight: 'bold' }} />)}
    </Space>

    <Space size="middle" style={{ marginRight: '3em', marginTop: '1em', }}>
        {categories != null && <Space>
            {categories.map(category => <CategoryTag src={category} />)}
        </Space>}
        <ActionButton src={ShareIconSrc} />
        <ActionButton src={HeartIconSrc} />
    </Space>
</Box>

const DetailHeader = (props) => {


    return <Space direction="vertical" className='w-100'>
        <CarDetailsTitle {...props} />
        <CarDetailsBadges {...props} />
    </Space >
}





export default DetailHeader;