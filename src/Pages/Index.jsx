import React from 'react'
import styled, { css } from 'styled-components'
import { Gallery, Item } from 'react-photoswipe-gallery'

import Canopy from '../Components/Canopy'
import Contacts from '../Components/Contacts'

import hero from '../Images/hero.png'
import hero2 from '../Images/hero2.png'
import vstudio from '../Images/vstudio.png'
import vscode from '../Images/vscode.png'
import figma from '../Images/figma.png'
import cinema from '../Images/cinema.png'
import photoshop from '../Images/photoshop.png'
import lightroom from '../Images/lightroom.png'
import camera from '../Images/camera.png'
import thumb from '../Images/thumb.png'
import star from '../Images/star.png'
import time from '../Images/time.png'
import money from '../Images/money.png'
import photo1 from '../Images/image5.jpg'
import photo2 from '../Images/image4.jpg'
import photo3 from '../Images/image3.jpg'

const Hero = styled.section`
    max-width: 1140px;
    padding: 0 20px;
    margin: 50px auto 0;
`

const HeroImage = styled.img`
    width: 400px;
    height: 400px;
    display: block;
    margin: auto;
    @media (max-width: 430px) { 
        width: 100%;
        height: auto;
    }
`

const HeroHeading = styled.h1`
    font-size: 64px;
    margin: 0 auto 50px;
    max-width: 800px;
    text-align: center;
    @media (max-width: 800px) { 
        font-size: 48px;
        max-width: 600px;
    }
    @media (max-width: 550px) { 
        font-size: 32px;
        max-width: 400px;
    }
`

const HeroSubheading = styled.p`
    font-size: 16px;
    text-align: center;
    margin: 0 auto 50px;
    @media screen and (max-width: 550px) {
        max-width: 250px;
    }
    ${props => props.photos && css`
        max-width: 515px;
    `}
`

const Skills = styled.section`
    background: #F7F7F7;
`

const SkillsContainer = styled.div`
    max-width: 1140px;
    padding: 100px 20px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1280px) { 
        flex-direction: column-reverse;
    }
    @media (max-width: 710px) { 
        padding: 50px 20px;
    }
`

const SkillsBlock = styled.div`
    max-width: 375px; 
    ${props => props.skills && css`
        max-width: none; 
        @media (max-width: 1280px) { 
            max-width: 640px;
            margin: 0 auto 50px;
        }
    `}
    ${props => props.bio && css`
        @media (max-width: 1280px) { 
            max-width: 350px;
        }
        @media (max-width: 710px) { 
            margin: auto;
            max-width: 410px;
        }
        @media (max-width: 460px) { 
            max-width: 285px; 
        }
    `}
    ${props => props.edu && css`
        display: flex;
        width: 225px;
        @media (max-width: 710px) { 
            margin: auto;
            width: 100%;
            max-width: 100%; 
            justify-content: center;
        }
        @media (max-width: 460px) { 
            max-width: 285px; 
        }
    `}
`

const SkillsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 640px;
    @media (max-width: 1280px) { 
        margin: 0 auto;
    }
    @media (max-width: 710px) { 
        flex-direction: column-reverse;
        gap: 50px;
    }
`

const SkillsDecoration = styled.div`
    position: relative;
    margin-right: 25px;
    margin-top: 5px;
`

const SkillsDot = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 10px;
    ${props => props.black && css`
        background: #000000;
    `}
    ${props => props.hollow && css`
        border: 4px solid #000000;
        box-sizing: border-box;
        position: absolute;
        top: 105px;
        @media (max-width: 710px) { 
            top: 82px;
        }
        @media (max-width: 460px) { 
            top: 103px;
        }
    `}
`

const SkillsLine = styled.div`
    height: 105px;
    width: 4px;
    background: #000000;
    position: absolute;
    top: 0;
    left: 6px;
    @media (max-width: 710px) { 
        height: 84px;
    }
    @media (max-width: 460px) { 
            height: 103px;
    }
`

const SkillsSubBlock = styled.div`
`

const SkillsIcons = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr;
    gap: 25px 50px;
    @media (max-width: 1280px) { 
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 710px) { 
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 460px) { 
        grid-template-columns: 1fr;
    }
`

const SkillsItem = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
`

const SkillsImage = styled.img`
    height: 40px;
    width: 40px;
    margin-right: 25px;
    @media screen and (max-width: 460px) {
        height: 35px;
        width: 35px;
    }
`

const SkillsHeading = styled.h3`
    margin: 0 0 10px;
    font-size: 18px;
`

const SkillsParagraph = styled.p`
    margin: 0;
    ${props => props.language && css`
        margin-top: 25px;
        @media screen and (max-width: 1280px) {
            margin-top: 50px;
        }
    `}
    ${props => props.margin_bottom && css`
        margin-bottom: 33px;
    `}
    ${props => props.width215 && css`
        width: 215px;
        @media (max-width: 760px) { 
            width: 100%;
            max-width: 215px;
        }
    `}
    ${props => props.width280 && css`
        width: 280px;
        @media (max-width: 760px) { 
            width: 100%;
            max-width: 285px;
        }
    `}
    span {
        font-weight: 700;
        font-size: 18px;
    }
`

const SkillsPoint = styled.div`
    width: 15px;
    height: 10px;
    border-radius: 5px;
    margin-right: 10px;
    &:last-child {
        margin-right: 0;
    }
    @media (max-width: 460px) { 
        width: 25px;
        height: 10px;
        border-radius: 10px;
    }
    ${props => props.black && css`
        background: #000000;
    `}
    ${props => props.hollow && css`
        border: 4px solid #000000;
        box-sizing: border-box;
    `}
`

const Showcase = styled.section`
    max-width: 1140px;
    padding: 100px 20px;
    margin: auto;
    @media (max-width: 710px) { 
        padding: 50px 20px;
    }
`

const ShowcaseGallery = styled.div`
    display: flex;
    gap: 50px;
    justify-content: space-between;
    margin-bottom: 50px;
    @media screen and (max-width: 680px) {
        gap: 25px;
    }
    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`

const ShowcaseImage = styled.img`
    display: block;
    width: calc(100% / 3 - 100px / 3);
    border-radius: 5px;
    cursor: pointer;
    @media screen and (max-width: 680px) {
        width: calc(100% / 3 - 50px / 3);
    }
    @media screen and (max-width: 500px) {
        width: 100%;
        height: 500px;
        object-fit: cover;
    }
`

const ShowcaseBlock = styled.div`
    background: #F7F7F7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 15px;
`

const ShowcaseWebsite = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ShowcaseLogo = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 15px;
`

const ShowcaseName = styled.p`
    margin: 0;
`

const ShowcaseButton = styled.a`
    border-radius: 100px;
    background: #000000;
    height: 35px;
    text-align: center;
    align-items: center;
    display: flex;
    padding: 0 20px;
    text-decoration: none;
    color: #FFFFFF;
`

const Benefits = styled.section`
    background: #F7F7F7;
`

const BenefitsSection = styled.div`
    display: grid;
    gap: 50px;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 760px) { 
        grid-template-columns: 1fr;
    }
`

const BenefitsMainSection = styled.div`
    display: block;
    gap: 50px;
    grid-template-columns: 1fr 1fr;
    width: 250px;
    @media (max-width: 1000px) { 
        max-width: 350px;
        width: 100%;
    }
`

const BenefitsHeading = styled.h2`
    font-size: 32px;
    margin: 0 0 15px;
    @media (max-width: 1000px) { 
        text-align: center;
    }
`

const BenefitsParagraph = styled.p`
    width: 160px;
    margin-bottom: 0;
    @media (max-width: 1000px) { 
        text-align: center;
        margin: 0 auto 50px;
    }
`

const BenefitsItem = styled.div`
    display: flex;
    align-items: center;
`

const BenefitsImage = styled.img`
    height: 65px;
    width: 65px;
    margin-right: 25px;
    @media (max-width: 440px) { 
        height: 45px;
        width: 45px;
    }
`

const BenefitsBlock = styled.div``

const BenefitsContainer = styled.div`
    max-width: 1140px;
    padding: 100px 40px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1000px) { 
        flex-direction: column;
    }
    @media (max-width: 710px) { 
        padding: 50px 40px;
    }
`

const options = {
    padding: { top: 25, bottom: 25, left: 25, right: 25 }
}

const Index = () => {
    return (
        <div className="page">
            <Hero>
                <HeroHeading>I am Valery Makey and this is my portfolio</HeroHeading>
                <HeroSubheading>Practicing to become the best. From Russia with love</HeroSubheading>
                <HeroImage src={hero2} alt="Hero Image" />
            </Hero>
            <Skills>
                <SkillsContainer>
                    <SkillsWrapper>
                        <SkillsBlock bio>
                            <SkillsHeading>Who am I?</SkillsHeading>
                            <SkillsParagraph>I am an IT student from Don State Technical University (currently studying Web-development) who enjoys UX\UI, motion design, photography and sports. I love asking questions, creating interesting things and exploring new topics. I would like to create efficient and intuitive experiences through my work.</SkillsParagraph>
                        </SkillsBlock>
                        <SkillsBlock edu>
                            <SkillsDecoration>
                                <SkillsDot black></SkillsDot>
                                <SkillsLine></SkillsLine>
                                <SkillsDot hollow></SkillsDot>
                            </SkillsDecoration>
                            <SkillsSubBlock>
                                <SkillsHeading>2021</SkillsHeading>
                                <SkillsParagraph margin_bottom>Gymnasium of foreign languages 7, Luhansk</SkillsParagraph>
                                <SkillsHeading>Ongoing</SkillsHeading>
                                <SkillsParagraph>Don State Technical University, Rostov-on-Don</SkillsParagraph>
                            </SkillsSubBlock>
                        </SkillsBlock>
                    </SkillsWrapper>
                    <SkillsBlock skills>
                        <SkillsIcons>
                            <SkillsItem>
                                <SkillsImage src={photoshop} alt="Photoshop" />
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint hollow></SkillsPoint>
                                <SkillsPoint hollow></SkillsPoint>
                            </SkillsItem>
                            <SkillsItem>
                                <SkillsImage src={lightroom} alt="Lightroom" />
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint hollow></SkillsPoint>
                            </SkillsItem>
                            <SkillsItem>
                                <SkillsImage src={figma} alt="Figma" />
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint hollow></SkillsPoint>
                            </SkillsItem>
                            <SkillsItem>
                                <SkillsImage src={vscode} alt="VSCode" />
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint hollow></SkillsPoint>
                                <SkillsPoint hollow></SkillsPoint>
                            </SkillsItem>
                            <SkillsItem>
                                <SkillsImage src={vstudio} alt="Visual Studio" />
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint hollow></SkillsPoint>
                            </SkillsItem>
                            <SkillsItem>
                                <SkillsImage src={cinema} alt="Cinema 4D" />
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint black></SkillsPoint>
                                <SkillsPoint hollow></SkillsPoint>
                                <SkillsPoint hollow></SkillsPoint>
                            </SkillsItem>
                        </SkillsIcons>
                        <SkillsParagraph language><span>English: </span>Upper-Intermediate (B2+)</SkillsParagraph>
                    </SkillsBlock>
                </SkillsContainer>
            </Skills>
            <Canopy></Canopy>
            <Benefits>
                <BenefitsContainer>
                    <BenefitsMainSection>
                        <BenefitsHeading>Why you should work with me</BenefitsHeading>
                        <BenefitsParagraph>All works are shown on this website</BenefitsParagraph>
                    </BenefitsMainSection>
                    <BenefitsSection>
                        <BenefitsItem>
                            <BenefitsImage src={thumb} alt="Like" />
                            <BenefitsBlock>
                                <SkillsHeading>High product quality</SkillsHeading>
                                <SkillsParagraph width215>Every product is made with precision and passion</SkillsParagraph>
                            </BenefitsBlock>
                        </BenefitsItem>
                        <BenefitsItem>
                            <BenefitsImage src={star} alt="Star" />
                            <BenefitsBlock>
                                <SkillsHeading>Experience</SkillsHeading>
                                <SkillsParagraph width280>I already have an experience of working with clients</SkillsParagraph>
                            </BenefitsBlock>
                        </BenefitsItem>
                        <BenefitsItem>
                            <BenefitsImage src={time} alt="Time" />
                            <BenefitsBlock>
                                <SkillsHeading>Fast production</SkillsHeading>
                                <SkillsParagraph width215>I pay special attention to meeting every deadline</SkillsParagraph>
                            </BenefitsBlock>
                        </BenefitsItem>
                        <BenefitsItem>
                            <BenefitsImage src={money} alt="Money" />
                            <BenefitsBlock>
                                <SkillsHeading>Affordable price</SkillsHeading>
                                <SkillsParagraph width280>My services are almost free and will not strike your wallet </SkillsParagraph>
                            </BenefitsBlock>
                        </BenefitsItem>
                    </BenefitsSection>
                </BenefitsContainer>
            </Benefits>
            <Showcase>
                <HeroHeading>My photos which I think are beautiful</HeroHeading>
                <HeroSubheading photos>Made in different seasons and time intervals, those are photos that inspire me to continue doing what I’m doing </HeroSubheading>
                <Gallery options={options}>
                    <ShowcaseGallery>
                        <Item original={photo1} thumbnail={photo1} width="720" height="1080">
                            {({ ref, open }) => (<ShowcaseImage ref={ref} onClick={open} src={photo1} />)}
                        </Item>
                        <Item original={photo2} thumbnail={photo2} width="720" height="1080">
                            {({ ref, open }) => (<ShowcaseImage ref={ref} onClick={open} src={photo2} />)}
                        </Item>
                        <Item original={photo3} thumbnail={photo3} width="810" height="1080">
                            {({ ref, open }) => (<ShowcaseImage ref={ref} onClick={open} src={photo3} />)}
                        </Item>
                    </ShowcaseGallery>
                </Gallery >
                <ShowcaseBlock>
                    <ShowcaseWebsite>
                        <ShowcaseLogo src={camera} alt="Camera" />
                        <ShowcaseName>Photos</ShowcaseName>
                    </ShowcaseWebsite>
                    <ShowcaseButton href='#'>See it!</ShowcaseButton>
                </ShowcaseBlock>
            </Showcase>
            <Contacts></Contacts>
        </div >
    )
}

export default Index