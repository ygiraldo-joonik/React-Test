import {Footer,Header,Content,Layout} from '../Atoms/Grid'
import NavBar from '../Organisms/NavBar';

const AppLayout = ({children})=> <Layout>
    <Header>
        <NavBar/>
    </Header>
    <Content>
        {children}
    </Content>
    <Footer>
        Footer
    </Footer>
</Layout>



export default AppLayout;