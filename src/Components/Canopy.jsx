import React from 'react'
import styled from 'styled-components'

import github from '../Images/github.png'
import canopy from '../Images/canopy.png'

const HeroHeading = styled.h1`
    font-size: 64px;
    margin: 0 auto 50px;
    max-width: 1000px;
    text-align: center;
    padding: 0 20px;
    @media (max-width: 800px) { 
        font-size: 48px;
        max-width: 600px;
    }
    @media (max-width: 550px) { 
        font-size: 32px;
        max-width: 400px;
    }
`

export const HeroSubheading = styled.p`
    font-size: 16px;
    text-align: center;
    margin: 0 auto 50px;
    padding: 0 20px;
`

export const Showcase = styled.section`
    max-width: 1140px;
    padding: 100px 20px;
    margin: auto;
    @media (max-width: 710px) { 
        padding: 50px 20px;
    }
`

export const ShowcaseImage = styled.img`
    margin-bottom: 50px;
    max-width: 1100px;
    width: 100%;
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

export const ShowcaseLogo = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 15px;
`

export const ShowcaseName = styled.p`
    margin: 0;
`

export const ShowcaseGallery = styled.div`
    display: flex;
    gap: 50px;
    justify-content: space-between;
    margin-bottom: 50px;
`

export const ShowcasePhoto = styled.img`
    width: calc(100% / 3 - 100px / 3);
    border-radius: 5px;
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

const Canopy = () => {
    return (
        <div className="Canopy">
            <Showcase>
                <HeroSubheading style={{ "margin-bottom": "25px" }}>HTML + CSS + JavaScript</HeroSubheading>
                <HeroHeading style={{ "margin-bottom": "25px", "max-width": "675px" }}>Creative layout for a canopy company</HeroHeading>
                <HeroSubheading style={{ "max-width": "520px" }}>Dropdowns, forms, tables and a calculator of the price. This was the first commercial experience ever and ended up to be a good work</HeroSubheading>
                <ShowcaseImage src={canopy} alt="Canopy Mockup" />
                <ShowcaseBlock>
                    <ShowcaseWebsite>
                        <ShowcaseLogo src={github} alt="Github" />
                        <ShowcaseName>Github</ShowcaseName>
                    </ShowcaseWebsite>
                    <ShowcaseButton href='#'>See it!</ShowcaseButton>
                </ShowcaseBlock>
            </Showcase>
        </div >
    )
}

export default Canopy
