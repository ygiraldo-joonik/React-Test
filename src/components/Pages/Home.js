import AppLayout from "../Templates/Layout";
import { Link } from "react-router-dom";

const Home = () => {
    return <AppLayout>
        <h1>Home</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/car/tesla">Rent a Tesla</Link>
            <Link to="/hotel/waldorf-astoria">Rent a room</Link>
        </nav>
    </AppLayout>
}


export default Home;