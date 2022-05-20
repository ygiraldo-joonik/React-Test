import HotelImages, { suggestionsImages } from "./images/hotelImages";
import HotelIconSrc from "../../assets/resources/hotel_icon.png"
import VeryCleanTag from "../../assets/resources/tag_very_clean.png"
import CrowedTag from "../../assets/resources/tag_crowded.png"
import RoomRentForm from "../../components/Organisms/Sections/Details/Hotel/RoomRentForm";
import Safety from "../../components/Organisms/Sections/Details/Hotel/Tabs/Safety";
const CarDetailMock = {
    images: HotelImages,
    tags: ['Rent a room', 'Longer Tag', 'Tag', 'Longer Tag'],
    title: 'Waldorf Astoria',
    iconSrc: HotelIconSrc,
    suggestions: [
        {
            title: 'Four Seasons',
            stars: 3,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci enim, luctus vel nisl',
            price: '19.99',
            img: suggestionsImages[0],
            icon: HotelIconSrc
        },
        {
            title: 'The Peninsula',
            stars: 4,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci enim, luctus vel nisl',
            price: '19.99',
            img: suggestionsImages[1],
            icon: HotelIconSrc
        },
        {
            title: 'Bay View',
            stars: 5,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci enim, luctus vel nisl',
            price: '19.99',
            img: suggestionsImages[2],
            icon: HotelIconSrc
        },
    ],
    tabs: [{ title: "ROOMS" }, { title: "DETAILS" }, { title: "MAP" }, { title: "SAFETY", component: <Safety /> }],
    form: <RoomRentForm />,
    categories: [
        VeryCleanTag,
        CrowedTag
    ]
};

export default CarDetailMock;