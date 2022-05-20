import { Footer, Header, Content, Layout, Box } from '../Atoms/Grid'
import NavBar from '../Organisms/NavBar';
const AppLayout = ({ children, footer = true }) => <Layout className='layout'>
    <Header className='header'>
        <NavBar />
    </Header>
    <Content className='content'>
        <>
            {children}
        </>
    </Content>

    {footer && <Footer className='footer'>
        <Box justify="space-between">

            <span>© 2021 United Airlines</span>
            <span>Powered by <b>SIMPLENIGHT</b></span>
            <span>Policy & Agreement | Privacy Policy</span>

        </Box>
    </Footer>}

</Layout>




export default AppLayout;