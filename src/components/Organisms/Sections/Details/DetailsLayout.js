import { Row, Col, Box } from "../../../Atoms/Grid";
import styled from "styled-components";

export const DetailsContainer = ({ children }) => <Col span="16">
    {children}
</Col>

export const PurchaseContainer = ({ children }) => <Col span="8">
    <PurchaseCont>
        {children}
    </PurchaseCont>
</Col>

export const LayoutContainer = styled(Row)`
    width: 100%;
    padding:1em 12em;
    margin:0;
`


const PurchaseCont = styled(Box)`
    border: 1px solid #ccc;
`