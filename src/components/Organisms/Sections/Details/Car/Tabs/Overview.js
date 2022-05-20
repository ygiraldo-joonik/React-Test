import { Card, Box, Space } from "../../../../../Atoms/Grid";
import styled from "styled-components";
import { CardTitle, Paragraph } from "../../../../../Atoms/Typography";
import StartIconSrc from "../../../../../../assets/resources/star.png"
import LocationIconSrc from "../../../../../../assets/resources/pin_reverse.png"

const CardIcon = styled.img`
    width:2.5em;
    height:2.5em;
    margin-top:-10px;
`

const Overview = () => <Space direction="vertical">
    <Card>
        <Box justify="space-between">
            <CardTitle>Highlights</CardTitle>
            <CardIcon src={StartIconSrc} />
        </Box>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida vehicula velit, quis sagittis dui. Ut ac dictum justo. Vestibulum consequat neque mattis turpis efficitur, et tempor arcu feugiat. Morbi quam tortor, dapibus et turpis malesuada, ultrices suscipit nibh.
        </Paragraph>
        <Paragraph>
            Aliquam vitae velit consectetur, maximus quam ac, sollicitudin nulla. Proin pellentesque tincidunt erat ut pharetra. Praesent at augue elit. Sed condimentum eget nisi sit amet pellentesque. Donec hendrerit consectetur sem at euismod. Duis convallis velit metus, a rutrum arcu bibendum.
        </Paragraph>
    </Card>
    <Card>
        <Box justify="space-between">
            <CardTitle>Description</CardTitle>
            <CardIcon src={LocationIconSrc} />
        </Box>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida vehicula velit, quis sagittis dui. Ut ac dictum justo. Vestibulum consequat neque mattis turpis efficitur, et tempor arcu feugiat. Morbi quam tortor, dapibus et turpis malesuada, ultrices suscipit nibh.
        </Paragraph>
        <Paragraph>
            Aliquam vitae velit consectetur, maximus quam ac, sollicitudin nulla. Proin pellentesque tincidunt erat ut pharetra. Praesent at augue elit. Sed condimentum eget nisi sit amet pellentesque. Donec hendrerit consectetur sem at euismod. Duis convallis velit metus, a rutrum arcu bibendum.
        </Paragraph>
    </Card>
</Space>


export default Overview;