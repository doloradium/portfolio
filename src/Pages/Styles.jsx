import styled from "styled-components";

export const Hero = styled.section`
    max-width: 1140px;
    padding: 0 20px;
    margin: 50px auto 0;
`

export const HeroImage = styled.img`
    width: 400px;
    height: 400px;
    display: block;
    margin: auto;
`

export const HeroHeading = styled.h1`
    font-size: 64px;
    margin: 0 auto 50px;
    max-width: 1000px;
    text-align: center;
`

export const HeroSubheading = styled.p`
    font-size: 16px;
    text-align: center;
    margin: 0 auto 50px;
`

export const Skills = styled.section`
    background: #F7F7F7;
`

export const SkillsContainer = styled.div`
    max-width: 1140px;
    padding: 100px 20px;
    margin: auto;
    display: flex;
    justify-content: space-between;
`

export const SkillsBlock = styled.div`
    
`

export const SkillsDecoration = styled.div`
    position: relative;
    margin-right: 25px;
    margin-top: 5px;
`

export const SkillsBlackDot = styled.div`
    height: 15px;
    width: 15px;
    background: #000000;
    border-radius: 10px;
`

export const SkillsLine = styled.div`
    height: 105px;
    width: 4px;
    background: #000000;
    position: absolute;
    top: 0;
    left: 6px;
`

export const SkillsHollowDot = styled.div`
    width: 15px;
    height: 15px;
    border: 4px solid #000000;
    border-radius: 10px;
    box-sizing: border-box;
    position: absolute;
    top: 105px;
`

export const SkillsSubBlock = styled.div`
`

export const SkillsColumn = styled.div`

`

export const SkillsIcons = styled.div`
    display: flex; 
    justify-content: space-between;
    gap: 100px;
`

export const SkillsItem = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
`

export const SkillsImage = styled.img`
    height: 40px;
    width: 40px;
    margin-right: 25px;
`

export const SkillsHeading = styled.h3`
    margin: 0 0 10px;
`

export const SkillsParagraph = styled.p`
    margin: 0;
`

export const SkillsPointBlack = styled.div`
    width: 15px;
    height: 10px;
    background: #000000;
    border-radius: 5px;
    margin-right: 10px;
    &:last-child {
        margin-right: 0;
    }
`

export const SkillsPointHollow = styled.div`
    width: 15px;
    height: 10px;
    border: 4px solid #000000;
    border-radius: 5px;
    box-sizing: border-box;
    margin-right: 10px;
    &:last-child {
        margin-right: 0;
    }
`

export const Showcase = styled.section`
    max-width: 1140px;
    padding: 100px 20px;
    margin: auto;
`

export const ShowcaseImage = styled.img`
    margin-bottom: 50px;
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

export const Benefits = styled.section`
    background: #F7F7F7;
`

export const BenefitsSection = styled.div`
    display: grid;
    gap: 50px;
    grid-template-columns: 1fr 1fr;
`

export const BenefitsHeading = styled.h3`
    font-weight: 700;
    font-size: 32px;
    margin: 0 0 15px;
`

export const BenefitsParagraph = styled.p`
    width: 160px;
    margin-bottom: 0;
`

export const BenefitsItem = styled.div`
    display: flex;
`

export const BenefitsImage = styled.img`
    height: 65px;
    width: 65px;
    margin-right: 25px;
`

export const BenefitsBlock = styled.div`
    
`

export const BenefitsContainer = styled.div`
    max-width: 1140px;
    padding: 100px 20px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`