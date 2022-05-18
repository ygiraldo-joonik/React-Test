import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import HotelDetails from "../Pages/HotelDetails";
import CarDetails from "../Pages/CarDetails";
import Home from "../Pages/Home";
const Navigator = () => <BrowserRouter>
    <Routes >
        <Route index element={<Home />} />
        <Route path="/car/tesla" element={<CarDetails />} />
        <Route path="/hotel/waldorf-astoria" element={<HotelDetails />} />
    </Routes>
</BrowserRouter>

export default Navigator;