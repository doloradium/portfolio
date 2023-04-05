import React from 'react'
import styled from 'styled-components'
import Contacts from '../Components/Contacts'
import Canopy from '../Components/Canopy'

import monitor from '../Images/monitor.png'
import github from '../Images/github.png'
import calculator from '../Images/calculator.png'

export const Showcase = styled.section`
    max-width: 1140px;
    padding: 100px 20px;
    margin: auto;
`

export const ShowcaseImage = styled.img`
    height: 340px;
`

export const ShowcaseBlock = styled.div`
    background: #F7F7F7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 15px;
`

export const ShowcaseWebsite = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ShowcaseWrapper = styled.div`
    display: flex; 
    justify-content: space-between;
`

export const ShowcaseContainer = styled.div`

`

export const ShowcaseLogo = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 15px;
`

export const ShowcaseName = styled.p`
    margin: 0;
`

export const ShowcaseButton = styled.a`
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

const Websites = () => {
    return (
        <div className="page">
            <Hero>
                <HeroContainer>
                    <HeroImage src={monitor} alt="Hero Image" />
                    <HeroHeading>My concepts or websites</HeroHeading>
                    <HeroParagraph>Either commercial or creative</HeroParagraph>
                </HeroContainer>
                <HeroContainer>
                    <HeroSubheading>Shout out</HeroSubheading>
                    <HeroParagraph>Some design elements, ideas or icons may have been taken from other designers and developers. In my work I mostly use Icons8 for icons and Behance for inspiration</HeroParagraph>
                    <HeroSubheading>How it works</HeroSubheading>
                    <HeroParagraph>If you want to order a custom design just contact me with the form below and I will try to satisfy all your needs. The same goes for a full website development. Everything is made individually and with precision. </HeroParagraph>
                </HeroContainer>
            </Hero>
            <Canopy></Canopy>
            <Showcase>
                <ShowcaseWrapper>
                    <ShowcaseContainer style={{ "max-width": "785px" }}>
                        <HeroParagraph style={{ "margin-bottom": "25px" }}>HTML + CSS + JavaScript</HeroParagraph>
                        <HeroHeading style={{ "margin-bottom": "25px" }}>An awesome calculator to do math operations</HeroHeading>
                        <HeroParagraph>I wrote this calculator myself in a couple of days and can proudly say that it works without bugs just right. It can display results of summary, division, multiplying and subtraction. It can also find a square and a square root of the number or work with brackets</HeroParagraph>
                    </ShowcaseContainer>
                    <ShowcaseImage src={calculator} alt="Canopy Mockup" />
                </ShowcaseWrapper>
                <ShowcaseBlock>
                    <ShowcaseWebsite>
                        <ShowcaseLogo src={github} alt="Github" />
                        <ShowcaseName>Github</ShowcaseName>
                    </ShowcaseWebsite>
                    <ShowcaseButton href='#'>See it!</ShowcaseButton>
                </ShowcaseBlock>
            </Showcase>
            <Contacts></Contacts>
        </div >
    )
}

export default Websites