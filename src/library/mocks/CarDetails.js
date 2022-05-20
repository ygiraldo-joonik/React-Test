import CarImages, { suggestionsImages } from "./images/carImages";
import Car1IconSrc from "../../assets/resources2.1/Group 145.png"
import CarRentForm from "../../components/Organisms/Sections/Details/Car/CarRentForm";
import Overview from "../../components/Organisms/Sections/Details/Car/Tabs/Overview";
const CarDetailMock = {
    images: CarImages,
    tags: ['Rent a car', 'Longer Tag', 'Tag', 'Longer Tag'],
    title: 'Tesla Model S',
    iconSrc: Car1IconSrc,
    suggestions: [
        {
            title: 'Mid-Size Suv',
            stars: 4,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci enim, luctus vel nisl',
            price: '79.99',
            img: suggestionsImages[0],
            icon: Car1IconSrc
        },
        {
            title: 'Compact Car',
            stars: 4,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci enim, luctus vel nisl',
            price: '19.99',
            img: suggestionsImages[1],
            icon: Car1IconSrc
        },
        {
            title: 'Mid-Size Sedan',
            stars: 4,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci enim, luctus vel nisl',
            price: '44.99',
            img: suggestionsImages[2],
            icon: Car1IconSrc
        },
    ],
    tabs: [{ title: "OVERVIEW", component: <Overview /> }, { title: "DETAILS" }, { title: "MAP" }],
    form: <CarRentForm />
};


export default CarDetailMock;