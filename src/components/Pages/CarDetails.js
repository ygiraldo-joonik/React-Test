import AppLayout from "../Templates/Layout";
import CustomCarousel from "../Molecules/Carousel";
import CarDetailMock from "../../library/mocks/CarDetails";
import Detail from "../Organisms/Sections/Details/Detail";
const CarDetails = () => {
    return <AppLayout>
        <CustomCarousel {...CarDetailMock.images} />
        <Detail data={CarDetailMock} />
    </AppLayout>
}


export default CarDetails;