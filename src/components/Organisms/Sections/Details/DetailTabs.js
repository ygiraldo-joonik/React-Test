import { Tabs, TabPane, Card, Box, Space } from "../../../Atoms/Grid";
import styled from "styled-components";
import { palette } from "../../../../library/theme";
import { CardTitle, Paragraph } from "../../../Atoms/Typography";
import StartIconSrc from "../../../../assets/resources/star.png"
import LocationIconSrc from "../../../../assets/resources/pin_reverse.png"

const DetailTabsContainer = styled.div`
    padding-right:20px;

    .ant-tabs-tab.ant-tabs-tab-active{
        border-bottom: 2px solid ${palette.primary} !important;
        
    }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
        color:${palette.primary} !important;
        font-weight:bold;
    }
`;

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
const DetailTabs = ({ tabs = [{ title: "OVERVIEW", component: <Overview /> }, { title: "DETAILS" }, { title: "MAP" }] }) => {

    const defaultTabKey = tabs.findIndex((tab) => tab.component != null)
    console.log({ defaultTabKey })
    return <DetailTabsContainer>
        <Tabs defaultActiveKey={`${defaultTabKey}`} style={{ marginTop: 30 }}>
            {tabs.map((tab, index) =>
                <TabPane tab={tab.title} disabled={tab.component == null} key={index}>
                    {tab.component != null && tab.component}
                </TabPane>
            )}
        </Tabs>
    </DetailTabsContainer>
}


export default DetailTabs