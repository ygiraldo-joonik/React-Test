import { Divider, Row, Col, Box } from "../../../../Atoms/Grid";
import { Form, Input } from "../../../../Atoms/Form";
import { Label } from "../../../../Atoms/Typography";
import LocationIconSrc from "../../../../../assets/resources2.2/Pin.png"
import DateIconSrc from "../../../../../assets/resources2.2/calendar.png"
import TimeIconSrc from "../../../../../assets/resources2.2/Group 152.png"
import styled from 'styled-components'
import { palette } from "../../../../../library/theme";

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

const CarRentForm = () => {

    return <Form layout="vertical">
        <Row gutter={[16, 0]} style={{ padding: 20 }}>
            <Col span={12}>
                <Form.Item label="Pick Up Date">
                    <Input placeholder="input placeholder" type="date" addonAfter={<InputIcon src={DateIconSrc} />} />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item label="Time">
                    <Input placeholder="input placeholder" type="time" addonAfter={<InputIcon src={TimeIconSrc} />} />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item label="Drop Off Date">
                    <Input placeholder="input placeholder" type="date" addonAfter={<InputIcon src={DateIconSrc} />} />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item label="Time">
                    <Input placeholder="input placeholder" type="time" addonAfter={<InputIcon src={TimeIconSrc} />} />
                </Form.Item>
            </Col>
            <Col span={24}>
                <CustomDivider />
            </Col>
            <Col span={24}>
                <Form.Item label="Pick Up Location">
                    <Input placeholder="Select.." addonAfter={<LocationInputIcon src={LocationIconSrc} />} />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item label="Drop Off Location">
                    <Input placeholder="Select.." addonAfter={<LocationInputIcon src={LocationIconSrc} />} />
                </Form.Item>
            </Col>
            <Col span={24}>
                <CustomDivider />
            </Col>

            <Col span={24}>
                <Box justify="center">
                    <span><Label color={palette.primary} bold bg>$99.99</Label><Label bg>/Day</Label></span>
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



export default CarRentForm;