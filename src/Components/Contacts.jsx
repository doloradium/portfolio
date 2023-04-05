import React from 'react'
import styled from 'styled-components'

export const ContactsWrapper = styled.section`
    max-width: 1140px;
    padding: 100px 40px;
    text-align: center;
    margin: auto;
    @media (max-width: 710px) { 
        padding: 50px 40px;
    }
`
export const ContactsHeading = styled.h2`
    font-weight: 700;
    font-size: 32px;
    margin: 0 auto 50px;
    max-width: 365px;
`

export const ContactsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto 25px;
    max-width: 575px;
    gap: 50px;
    @media screen and (max-width: 500px) {
        flex-direction: column;
        gap: 25px;
    }
`

export const ContactsBlock = styled.div`
    width: 100%; 
`

export const ContactsBlockLarge = styled.div`
    max-width: 575px;
    margin: auto;
    margin-bottom: 50px;
`

export const ContactsSubstring = styled.div`
    text-align: left;
    margin-bottom: 10px;
`

export const ContactsInput = styled.input`
    height: 50px;
    box-sizing: border-box;
    padding: 0 15px;
    border: none;
    width: 100%;
    border-radius: 5px;
    font-family: Montserrat, 'sans-serif';
        font-size: 16px;
    &::placeholder {
        color: #D3D3D4;
        font-family: Montserrat, 'sans-serif';
        font-size: 16px;
    }
`

export const ContactsTextarea = styled.textarea`
    height: 100px;
    border: none;
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    resize: none;
    padding: 15px;
    font-family: Montserrat, 'sans-serif';
    font-size: 16px;
    &::placeholder {
        color: #D3D3D4;
        font-family: Montserrat, 'sans-serif';
        font-size: 16px;
    }
`

export const ContactsButton = styled.button`
    border-radius: 100px;
    background: #000000;
    height: 35px;
    font-size: 16px;
    font-family: Montserrat, 'sans-serif';
    text-align: center;
    align-items: center;
    display: flex;
    padding: 0 20px;
    text-decoration: none;
    color: #FFFFFF;
    border: none;
    margin: auto;
`

const Contacts = () => {
    return (
        <div className="Contacts" style={{ "background": "#F7F7F7" }}>
            <ContactsWrapper>
                <ContactsHeading>Want to get in touch? Drop me a line</ContactsHeading>
                <ContactsContainer>
                    <ContactsBlock>
                        <ContactsSubstring>Name</ContactsSubstring>
                        <ContactsInput type="text" placeholder='Insert name'></ContactsInput>
                    </ContactsBlock>
                    <ContactsBlock>
                        <ContactsSubstring>E-mail</ContactsSubstring>
                        <ContactsInput type="text" placeholder='Insert e-mail'></ContactsInput>
                    </ContactsBlock>
                </ContactsContainer>
                <ContactsBlockLarge>
                    <ContactsSubstring>Your text</ContactsSubstring>
                    <ContactsTextarea type="text" placeholder='Insert text'></ContactsTextarea>
                </ContactsBlockLarge>
                <ContactsButton>Submit</ContactsButton>
            </ContactsWrapper>
        </div >
    )
}

export default Contacts
