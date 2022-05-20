import React, { useState } from 'react'
import { Divider, Row, Col, Box, Space } from "../../../../Atoms/Grid";
import { Form, Input, Button } from "../../../../Atoms/Form";
import { Label, Text, CardTitle } from "../../../../Atoms/Typography";
import DateIconSrc from "../../../../../assets/resources2.2/calendar.png"
import styled from 'styled-components'
import { palette } from "../../../../../library/theme";
import { CloseCircleOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

const InputIcon = styled.img`
height:1.2em;
width:auto;
`
const LocationInputIcon = styled.img`
height:1.5em;
width:auto;
`

const BookNowContainer = styled.div`
    background:rgba(0,51,152,.2);
    padding:1em;
    text-align:center;
    width:100%;
    font-weight:Bold;
`;


const ItineraryCOntainer = styled(BookNowContainer)`
    background:${palette.primary};
    color:#fff
    text-align:center;
    width:100%;
    font-weight:Bold;
`;

const CustomDivider = styled(Divider)`
    border-width:2px;
    margin: 10px 0 !important;
`

const InputNumberContainer = styled.div`
    display:flex;
    border:2px ${palette.primary} solid;
    background-color:${palette.primary};
    border-radius:5px;
    width:10em;

    input{
        text-align:center;
    }

    button{
        background-color:${palette.primary};
        border:none !important;
        color:#fff;
        fontsize:24px !important;

        &:hover,&:active,&:focus{
            background-color:${palette.primary};
            color:#fff;
        }
    }
`

const InputNumber = ({ value = 1 }) => {

    const [count, setCount] = useState(value)

    return <InputNumberContainer>
        <Button onClick={() => setCount(count - 1)}>
            <MinusOutlined />
        </Button>
        <Input value={count} />
        <Button onClick={() => setCount(count + 1)}>
            <PlusOutlined />
        </Button>
    </InputNumberContainer>
}

const RoomRentForm = () => {

    return <Form layout="vertical">
        <Row gutter={[16, 0]} style={{ padding: 20 }}>
            <Col span={24}>
                <Space direction="vertical">
                    <Space>
                        <InputNumber value={1} />
                        <Text>Adults</Text>
                    </Space>
                    <Space>
                        <InputNumber value={1} />
                        <Text>Children</Text>
                    </Space>
                </Space>
            </Col>

            <Col span={24}>
                <CustomDivider />
            </Col>
            <Col span={24}>
                <Space>
                    <InputNumber value={1} />
                    <Text>Rooms</Text>
                </Space>
            </Col>
            <Col span={24}>
                <CustomDivider />
            </Col>
            <Col span={12}>
                <Form.Item label="Check In">
                    <Input placeholder="input placeholder" type="date" addonAfter={<InputIcon src={DateIconSrc} />} />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item label="Check Out">
                    <Input placeholder="input placeholder" type="date" addonAfter={<InputIcon src={DateIconSrc} />} />
                </Form.Item>
            </Col>

            <Col span={24}>
                <CustomDivider />
            </Col>
            <Col span={24}>
                <Label thin={false}>Your Order</Label>
                <Box justify="space-between" mt={2} mb={2}>
                    <Text small>
                        Deluxe Room
                    </Text>
                    <Space>
                        <Text small color={palette.primary}>
                            1 Night
                        </Text>
                        <CloseCircleOutlined />
                    </Space>
                </Box>
            </Col>


            <Col span={24}>
                <Box justify="center">
                    <span><Label bg>Total</Label><Label color={palette.primary} bold bg>$395.00</Label></span>
                </Box>
            </Col>
        </Row>
        <BookNowContainer>
            <Label bold bg color={palette.primary}>Book Now</Label>
        </BookNowContainer>
        <ItineraryCOntainer>
            <Label bold bg color="#fff">Add to Itinerary</Label>
        </ItineraryCOntainer>
    </Form>;

}



export default RoomRentForm;