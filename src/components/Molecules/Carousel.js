import { Carousel } from '../Atoms/Grid'
import { useRef } from 'react';
import styled from 'styled-components';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';


const CarouselContainer = styled.div`
    width:100%;
    height:530px;
    display: flex;
    overflow:hidden;

    .ant-carousel{
        width:60%;
        height:100%;
    }
`;

const CarouselSideContainer = styled.div`
    width:21vw;
    height:100%;
    position: relative;
    overflow:hidden;
    display: flex;
    justify-content:space-around;
    overflow:hidden;
`

const CarouselSideImage = styled.img`
    height:530px;
    width:auto;
    z-index:5;
`

const CarouselBtn = styled.button`
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    bottom:0;
    background: rgba(0,0,0,0.3);
    border:none;
    z-index:10;
    color:rgba(255,255,255,.8);
    cursor:pointer;
    transition: all 0.3s ease-in-out;
    font-size:45px;

    &:hover{
        background: rgba(0,0,0,0.45);
        color:#fff;
    }
`

const CarouselImgContainer = styled.div`
    width :58vw;
    height:530px;
    display:flex !important;
    justify-content:center;
    align-items:center;
    overflow: hidden;
`

const CarouselImg = styled.img`
    width : auto;
    height:100%;
    transform: scale(1.02);
`

const CarouselSide = ({ src, onClick = () => { }, side = 'left' }) => <CarouselSideContainer>
    <CarouselSideImage src={src} />

    <CarouselBtn onClick={onClick}>
        {side == 'left' && <LeftOutlined />}
        {side == 'right' && <RightOutlined />}
    </CarouselBtn>
</CarouselSideContainer>

const CustomCarousel = ({ images = [], sides }) => {
    const [left, right] = sides;

    const carouselRef = useRef();

    const next = () => carouselRef.current.next();
    const prev = () => carouselRef.current.prev();

    return <CarouselContainer>
        <CarouselSide src={left} onClick={prev} side="left" />
        <Carousel autoplay={true} dots={false} ref={carouselRef}>
            {images.map((image, i) =>
                <CarouselImgContainer>
                    <CarouselImage image={image} key={i} />
                </CarouselImgContainer>
            )
            }
        </Carousel>
        <CarouselSide src={right} onClick={next} side="right" />
    </CarouselContainer>
}

const CarouselImage = ({ image }) => <CarouselImg src={image} />


export default CustomCarousel;