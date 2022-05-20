import { Layout, Tabs, Card } from 'antd';
import styled from 'styled-components';
export { Layout, Space, Row, Col, PageHeader, Carousel, Tabs, Card, Divider } from 'antd';

export const { Header, Footer, Sider, Content } = Layout;
export const { TabPane } = Tabs;
export const { Meta } = Card;
export const Box = styled.div`
    width:100%;
    display: flex;
    margin-top:${({ mt = 0 }) => mt}em;
    margin-bottom:${({ mb = 0 }) => mb}em;
    justify-content: ${({ justify = 'flex-start' }) => justify};
    ${({ column = false }) => column ? 'flex-direction:column;' : ''}
    ${({ wrap = false }) => wrap ? 'flex-wrap:wrap;' : ''}
`