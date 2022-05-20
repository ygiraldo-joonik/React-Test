import { Row, Col, Card, Box, Space } from "../../../Atoms/Grid";
import { Title, CardTitle, Paragraph, Label } from "../../../Atoms/Typography";
import Car1ImgSrc from "../../../../assets/resources2.1/other_car1.png"
import Car1IconSrc from "../../../../assets/resources2.1/Group 145.png"
import { palette } from "../../../../library/theme";
import StarIconSrc from "../../../../assets/resources2.1/rating_filled.png"
import StarOffIconSrc from "../../../../assets/resources2.1/rating_empty.png"
import styled from "styled-components";
const Icon = styled.img`
    width:18%;
    height:18%;
    margin-top:-48px;
    border-radius:100%;
    border:2px solid #fff;
`

const Star = styled.img`
    width:1.7em;
    height:1.7em;
`

const IconContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    margin-bottom:15px;
`

const DetailsOtherMayLike = ({ suggestions = [
    { title: 'Mid-Size Suv', stars: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci enim, luctus vel nisl', price: '79.99', img: Car1ImgSrc, icon: Car1IconSrc },
    { title: 'Mid-Size Suv', stars: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci enim, luctus vel nisl', price: '79.99', img: Car1ImgSrc, icon: Car1IconSrc },
    { title: 'Mid-Size Suv', stars: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci enim, luctus vel nisl', price: '79.99', img: Car1ImgSrc, icon: Car1IconSrc },
    { title: 'Mid-Size Suv', stars: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci enim, luctus vel nisl', price: '79.99', img: Car1ImgSrc, icon: Car1IconSrc },
    { title: 'Mid-Size Suv', stars: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci enim, luctus vel nisl', price: '79.99', img: Car1ImgSrc, icon: Car1IconSrc },
    { title: 'Mid-Size Suv', stars: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci enim, luctus vel nisl', price: '79.99', img: Car1ImgSrc, icon: Car1IconSrc },
    { title: 'Mid-Size Suv', stars: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci enim, luctus vel nisl', price: '79.99', img: Car1ImgSrc, icon: Car1IconSrc },
    { title: 'Mid-Size Suv', stars: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci enim, luctus vel nisl', price: '79.99', img: Car1ImgSrc, icon: Car1IconSrc },
] }) => {


    return <Box mt={5} column>
        <Title>Others You May Like</Title>
        <Row gutter={[16, 16]}>
            {suggestions.map(suggestion =>
                <Col span={8} className="gutter-row">
                    <Card cover={<img alt="example" src={suggestion.img} />}>
                        <IconContainer>
                            <Icon src={suggestion.icon} />
                        </IconContainer>
                        <CardTitle centered>
                            {suggestion.title}
                        </CardTitle>
                        <StartRating stars={suggestion.stars} />
                        <Paragraph centered small>{suggestion.description}</Paragraph>

                        <Box justify="center">
                            <Label>FROM:</Label><Label color={palette.primary} bold>${suggestion.price}</Label>
                        </Box>
                    </Card>
                </Col>
            )}

        </Row>
    </Box>
}



const StartRating = ({ stars = 0 }) => <Box justify="center" mb={1} mt={1} >
    <Space>
        {([1, 2, 3, 4, 5].map((star, key) => <Star key={key} src={star <= stars ? StarIconSrc : StarOffIconSrc} />))}
    </Space>
</Box >

export default DetailsOtherMayLike;