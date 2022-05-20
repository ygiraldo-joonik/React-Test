import AppLayout from "../Templates/Layout";
import { Link } from "react-router-dom";
import { Button } from "../Atoms/Form";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const onBack = () => navigate('/')
    return <AppLayout footer={false}>
        <nav>
            <ul>
                <li style={{ marginBottom: '2em' }}>
                    <Button onClick={() => navigate('/car/tesla', { onBack })}>Rent a Tesla</Button>
                </li>
                <li>
                    <Button onClick={() => navigate('/hotel/waldorf-astoria', { onBack })}>Rent a room</Button>
                </li>
            </ul>
        </nav>

    </AppLayout>
}


export default Home;