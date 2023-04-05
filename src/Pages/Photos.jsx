import React from 'react'
import styled from 'styled-components'
import Contacts from '../Components/Contacts'
import { Gallery, Item } from 'react-photoswipe-gallery'

import 'photoswipe/dist/photoswipe.css'

import photos from '../Images/photos.png'
import image1 from '../Images/image1.jpg'
import image2 from '../Images/image2.jpg'
import image3 from '../Images/image3.jpg'
import image4 from '../Images/image4.jpg'
import image5 from '../Images/image5.jpg'
import image6 from '../Images/image6.jpg'
import image7 from '../Images/image7.jpg'
import image8 from '../Images/image8.jpg'
import image9 from '../Images/image9.jpg'
import image10 from '../Images/image10.jpg'
import image11 from '../Images/image11.jpg'
import image12 from '../Images/image12.jpg'
import image13 from '../Images/image13.jpg'
import image14 from '../Images/image14.jpg'
import image15 from '../Images/image15.jpg'

export const Hero = styled.div`
    max-width: 1140px;
    padding: 0 20px;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
`

export const HeroContainer = styled.div`
    max-width: 430px;
`

export const HeroImage = styled.img`
    margin-bottom: 10px;
`

export const HeroParagraph = styled.p`
    margin: 0 0 50px;
    &:last-child {
        margin: 0;
    }

`

export const HeroHeading = styled.h1`
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 25px;
`

export const HeroSubheading = styled.h3`
    font-size: 18px;
    margin: 0 0 10px;
`

const options = {
    padding: { top: 25, bottom: 25, left: 25, right: 25 }
}

const Photos = () => {
    return (
        <div className="page">
            <Hero>
                <HeroContainer>
                    <HeroImage src={photos} alt="Hero Image" />
                    <HeroHeading>My photos and sets</HeroHeading>
                    <HeroParagraph>Either commercial or creative</HeroParagraph>
                </HeroContainer>
                <HeroContainer>
                    <HeroSubheading>Inspiration</HeroSubheading>
                    <HeroParagraph>I usually draw inspiration from different places. One of them is YouTube, the other one is Pinterest, bet the main thing remains the same - it is the life of the city and its breathing streets which makes me see the beautiful around.</HeroParagraph>
                    <HeroSubheading>How it works</HeroSubheading>
                    <HeroParagraph>If you want to order a photo shoot just contact me with the form below and I will try to satisfy all your needs. Everything is made individually and with precision.</HeroParagraph>
                </HeroContainer>
            </Hero>
            <Gallery options={options}>
                <div style={{
                    "max-width": "1140px",
                    "padding": "0 20px",
                    "display": "grid",
                    "gap": "25px",
                    "grid-template-columns": "1fr 1fr 1fr",
                    "margin": "0 auto 100px"
                }}>
                    <Item
                        original={image1}
                        thumbnail={image1}
                        width="1280"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img style={{
                                "width": "100%",
                                "border-radius": "5px",
                                "grid-column": "span 2",
                                "height": "500px",
                                "object-fit": "cover",
                                "cursor": "pointer"
                            }} ref={ref} onClick={open} src={image1} />
                        )}
                    </Item>
                    <Item
                        original={image2}
                        thumbnail={image2}
                        width="810"
                        height="1080"
                    >
                        {({ ref, open }) => (
                            <img style={{
                                "width": "100%",
                                "border-radius": "5px",
                                "height": "500px",
                                "object-fit": "cover",
                                "cursor": "pointer"
                            }} ref={ref} onClick={open} src={image2} />
                        )}
                    </Item>
                    <Item
                        original={image3}
                        thumbnail={image3}
                        width="810"
                        height="1080"
                    >
                        {({ ref, open }) => (
                            <img style={{
                                "width": "100%",
                                "border-radius": "5px",
                                "height": "500px",
                                "object-fit": "cover",
                                "cursor": "pointer"
                            }} ref={ref} onClick={open} src={image3} />
                        )}
                    </Item>
                    <Item
                        original={image4}
                        thumbnail={image4}
                        width="720"
                        height="1080"
                    >
                        {({ ref, open }) => (
                            <img style={{
                                "width": "100%",
                                "border-radius": "5px",
                                "height": "500px",
                                "object-fit": "cover",
                                "cursor": "pointer"
                            }} ref={ref} onClick={open} src={image4} />
                        )}
                    </Item>
                    <Item
                        original={image5}
                        thumbnail={image5}
                        width="720"
                        height="1080"
                    >
                        {({ ref, open }) => (
                            <img style={{
                                "width": "100%",
                                "border-radius": "5px",
                                "height": "500px",
                                "object-fit": "cover",
                                "cursor": "pointer"
                            }} ref={ref} onClick={open} src={image5} />
                        )}
                    </Item>
                    <Item
                        original={image6}
                        thumbnail={image6}
                        width="1280"
                        height="720"
                    >
                        {({ ref, open }) => (
                            <img style={{
                                "width": "100%",
                                "border-radius": "5px",
                                "grid-column": "span 3",
                                "height": "500px",
                                "object-fit": "cover",
                                "cursor": "pointer"
                            }} ref={ref} onClick={open} src={image6} />
                        )}
                    </Item>
                    <Item
                        original={image7}
                        thumbnail={image7}
                        width="810"
                        height="1080"
                    >
                        {({ ref, open }) => (
                            <img style={{
                                "width": "100%",
                                "border-radius": "5px",
                                "height": "500px",
                                "object-fit": "cover",
                                "cursor": "pointer"
                            }} ref={ref} onClick={open} src={image7} />
                        )}
                    </Item>
                    <Item
                        original={image8}
                        thumbnail={image8}
                        width="1280"
                        height="853"
                    >
                        {({ ref, open }) => (
                            <img style={{
                                "width": "100%",
                                "border-radius": "5px",
                                "grid-column": "span 2",
                                "height": "500px",
                                "object-fit": "cover",
                                "cursor": "pointer"
                            }} ref={ref} onClick={open} src={image8} />
                        )}
                    </Item>
                    <Item
                        original={image9}
                        thumbnail={image9}
                        width="810"
                        height="1080"
                    >
                        {({ ref, open }) => (
                            <img style={{
                                "width": "100%",
                                "border-radius": "5px",
                                "height": "500px",
                                "object-fit": "cover",
                                "cursor": "pointer"
                            }} ref={ref} onClick={open} src={image9} />
                        )}
                    </Item>
                    <Item
                        original={image10}
                        thumbnail={image10}
                        width="810"
                        height="1080"
                    >
                        {({ ref, open }) => (
                            <img style={{
                                "width": "100%",
                                "border-radius": "5px",
                                "height": "500px",
                                "object-fit": "cover",
                                "cursor": "pointer"
                            }} ref={ref} onClick={open} src={image10} />
                        )}
                    </Item>
                    <Item
                        original={image11}
                        thumbnail={image11}
                        width="810"
                        height="1080"
                    >
                        {({ ref, open }) => (
                            <img style={{
                                "width": "100%",
                                "border-radius": "5px",
                                "height": "500px",
                                "object-fit": "cover",
                                "cursor": "pointer"
                            }} ref={ref} onClick={open} src={image11} />
                        )}
                    </Item>
                    <Item
                        original={image12}
                        thumbnail={image12}
                        width="1280"
                        height="960"
                    >
                        {({ ref, open }) => (
                            <img style={{
                                "width": "100%",
                                "border-radius": "5px",
                                "height": "500px",
                                "grid-column": "span 3",
                                "object-fit": "cover",
                                "cursor": "pointer"
                            }} ref={ref} onClick={open} src={image12} />
                        )}
                    </Item>
                    <Item
                        original={image13}
                        thumbnail={image13}
                        width="810"
                        height="1080"
                    >
                        {({ ref, open }) => (
                            <img style={{
                                "width": "100%",
                                "border-radius": "5px",
                                "height": "500px",
                                "object-fit": "cover",
                                "cursor": "pointer"
                            }} ref={ref} onClick={open} src={image13} />
                        )}
                    </Item>
                    <Item
                        original={image14}
                        thumbnail={image14}
                        width="771"
                        height="1080"
                    >
                        {({ ref, open }) => (
                            <img style={{
                                "width": "100%",
                                "border-radius": "5px",
                                "height": "500px",
                                "object-fit": "cover",
                                "cursor": "pointer"
                            }} ref={ref} onClick={open} src={image14} />
                        )}
                    </Item>
                    <Item
                        original={image15}
                        thumbnail={image15}
                        width="720"
                        height="1080"
                    >
                        {({ ref, open }) => (
                            <img style={{
                                "width": "100%",
                                "border-radius": "5px",
                                "height": "500px",
                                "object-fit": "cover",
                                "cursor": "pointer"
                            }} ref={ref} onClick={open} src={image15} />
                        )}
                    </Item>
                </div>
            </Gallery >
            <Contacts></Contacts>
        </div >
    )
}

export default Photos