import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

export const Tab = ({ label, active, onClick }) => {
    return (
        <StylizedTab
            role="tab"
            active={active}
            onClick={onClick}
            inactiveStyle={inactiveTab}
        >
            {label}
        </StylizedTab>
    )
}

export const Tabs = ({ selectedTab, onChange, children }) => {
    const containerRef = useRef(null)

    const tabs = children.map((child) => {
        const handleClick = (e) => {
            onChange(e, child.props.value)
        }

        return React.cloneElement(child, {
            key: child.props.value,
            active: child.props.value === selectedTab,
            onClick: handleClick
        })
    })

    return (
        <TabHeaderContainer ref={containerRef}>
            <TabsHolder>{tabs}</TabsHolder>
        </TabHeaderContainer>
    )
}

const TabHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px auto 0;
`

const StylizedTab = styled.button`
    color: #0057FF;
    transition: 0.5s;
    font-size: 16px;
    font-family: Montserrat, 'sans-serif';
    font-weight: 400;
    padding: 0 25px 5px;
    background-color: transparent;
    border: none;
    @media (max-width: 360px) { 
        padding: 0 15px 5px;
    }
    cursor: ${(p) => (p.disabled ? "default" : "pointer")};
    ${(p) => !p.active && p.inactiveStyle}
    &:hover{ 
        color: #0057FF;
        transition: 0.5s;
    }
`

const StyledTabPanel = styled.div`
    display: ${(p) => (p.active ? "flex" : "none")};
    font-size: 16px;
    flex-direction: column;
    width: 100%;
    justify-content: center;
`

const TabsHolder = styled.div`
    display: flex;
    justify-content: space-between
    flex-direction: row;
    width: inherit
`

const inactiveTab = {
    "color": "#000000"
}

export const TabPanel = ({ children, value, selectedIndex }) => {
    const hidden = value !== selectedIndex;

    return (
        <StyledTabPanel hidden={hidden} active={!hidden}>
            {children}
        </StyledTabPanel>
    )
}