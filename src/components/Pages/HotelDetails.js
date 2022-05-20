import AppLayout from "../Templates/Layout";
import CustomCarousel from "../Molecules/Carousel";
import HotelDetailMock from "../../library/mocks/HotelDetails";
import Detail from "../Organisms/Sections/Details/Detail";
const HotelDetails = () => {
    return <AppLayout>
        <CustomCarousel {...HotelDetailMock.images} />
        <Detail data={HotelDetailMock} />
    </AppLayout>
}


export default HotelDetails;