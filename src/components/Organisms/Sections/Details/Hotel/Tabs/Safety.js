import { Card, Box, Space, Divider, Row, Col } from "../../../../../Atoms/Grid";
import styled from "styled-components";
import { CardTitle, Paragraph } from "../../../../../Atoms/Typography";
import SafetyIconSrc from "../../../../../../assets/resources/safety_icon.png"
import { Option, Select } from "../../../../../Atoms/Form";
import CharImgSrc from '../../../../../../assets/chart.png'

// indicators images
import ind1Icon from "../../../../../../assets/resources/Group 6658.png"
import ind1Bg from "../../../../../../assets/resources/general_cleanliness_icon.png"

import ind2Icon from "../../../../../../assets/resources/Path 717.png"
import ind2Bg from "../../../../../../assets/resources/employee_cleanliness_icon.png"


import ind3Icon from "../../../../../../assets/resources/Group 6742.png"
import ind3Bg from "../../../../../../assets/resources/crowdedness.png"

import ind4Icon from "../../../../../../assets/resources/Group 7125.png"

import ind5Icon from "../../../../../../assets/resources/Path 687.png"

import ind6Icon from "../../../../../../assets/resources/Group 6741.png"


const ind4Bg = ind2Bg;
const ind5Bg = ind1Bg;
const ind6Bg = ind1Bg;

const CardIcon = styled.img`
    width:2.5em;
    height:2.5em;
    margin-top:-10px;
`

const ChartImg = styled.img`
    width:100%;
    height:auto;
`


const IndicatorIconConteiner = styled.div`
    width:100px;
    height:100px;
    position: relative;
`

const IndicatorIconCircle = styled.img`
    width:100%;
    height:100%;
`

const IndicatorIconSmallContainer = styled.div`
    width:100%%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position:absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

const IndicatorIconSmall = styled.img`
    width:35%;
    height:auto;
    position

`

const IndicatorIcon = ({ circle, icon }) =>
    <IndicatorIconConteiner>
        <IndicatorIconCircle src={circle} />
        <IndicatorIconSmallContainer>
            <IndicatorIconSmall src={icon} />
        </IndicatorIconSmallContainer>
    </IndicatorIconConteiner>


// indicators color - CORREGIR
const [green, yellow, red, gray] = ['#2ECC71', '#F5B041', '#CB4335', '#7B7C7E']

const IndicatorBadge = styled.div`
    padding:.5em .8em;
    color:#fff !important;
    border-radius:5px;
    background-color:${({ color = gray }) => color};
`

const IndicatorLabel = styled.span`
    color:${({ color }) => color};
    font-size:18px;
`



const indicators = [
    {
        name: 'General Cleanliness',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida vehicula velit, quis sagittis dui. Ut ac dictum justo.',
        rate: 4,
        suffix: 'Very Clean',
        icon: <IndicatorIcon icon={ind1Icon} circle={ind1Bg} />
    },
    {
        name: 'Social Distancing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida vehicula velit, quis sagittis dui. Ut ac dictum justo.',
        rate: 3,
        suffix: 'Very Little',
        icon: <IndicatorIcon icon={ind2Icon} circle={ind2Bg} />
    },
    {
        name: 'Crowdedness',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida vehicula velit, quis sagittis dui. Ut ac dictum justo.',
        rate: 1,
        suffix: 'Very Crowded',
        icon: <IndicatorIcon icon={ind3Icon} circle={ind3Bg} />
    },
    {
        name: 'Employee Cleanliness',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida vehicula velit, quis sagittis dui. Ut ac dictum justo.',
        rate: 3,
        suffix: 'Very Little',
        icon: <IndicatorIcon icon={ind4Icon} circle={ind4Bg} />
    },
    {
        name: 'Bathroom Cleanliness',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida vehicula velit, quis sagittis dui. Ut ac dictum justo.',
        rate: 4,
        suffix: 'Very Clean',
        icon: <IndicatorIcon icon={ind5Icon} circle={ind5Bg} />
    },
    {
        name: 'Employee PPE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida vehicula velit, quis sagittis dui. Ut ac dictum justo.',
        rate: 5,
        suffix: 'Wearing',
        icon: <IndicatorIcon icon={ind6Icon} circle={ind6Bg} />
    }
]

const Idicators = ({ rate = 0, label = '' }) => {
    let color = gray;
    if (rate >= 1) color = red;
    if (rate >= 2) color = yellow;
    if (rate >= 4) color = green;

    return <Space>
        <IndicatorLabel color={color}>{label}</IndicatorLabel>
        {[1, 2, 3, 4, 5].map((rateStep, key) => <IndicatorBadge {...{ ...(rateStep <= rate ? { color } : {}), key }}>{rateStep}</IndicatorBadge>)}
    </Space>
}




const selectOptions = [{ label: 'Average Daily', value: 1 }]

const Safety = () => <Space direction="vertical">
    <Card>
        <Box justify="space-between">
            <CardTitle>Safety Standards</CardTitle>
            <CardIcon src={SafetyIconSrc} />
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
            <CardTitle>Crowded Times</CardTitle>
            <Select options={selectOptions} style={{ width: '15em' }} value={1} />
        </Box>
        <ChartImg src={CharImgSrc} />
    </Card>
    <Card>
        {indicators.map((indicator, key) =>
            <Row key={key}>
                <Col span={4}>
                    {indicator.icon}
                </Col>
                <Col span={20}>
                    <Box justify="space-between">
                        <CardTitle>{indicator.name}</CardTitle>
                        <Idicators rate={indicator.rate} label={indicator.suffix} />
                    </Box>
                    <Paragraph>
                        {indicator.description}
                    </Paragraph>
                </Col>

                {key < indicators.length - 1 &&
                    <Col span={20} offset={4}>
                        <Divider />
                    </Col>
                }

            </Row>
        )}
    </Card>
</Space>
export default Safety;