import { useState } from "react";
import styled from "styled-components";

import { Tabs, Tab, TabPanel } from "./Components/Tabs";
import Index from "./Pages/Index";
import Websites from "./Pages/Websites";
import Photos from "./Pages/Photos";

import "./styles.css";

const TabsContainer = styled.div`
  display: flex;
`

const TabPanelContainer = styled.div`
  height: 100vh;
`

export default function App() {
  const [activeTab, setActiveTab] = useState(0)

  const handleChange = (e, value) => {
    setActiveTab(value);
  }

  return (
    <div className="App">
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="Home" value={0}></Tab>
          <Tab label="Websites" value={1}></Tab>
          <Tab label="Photos" value={2}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
          <Index></Index>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <Websites></Websites>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <Photos></Photos>
        </TabPanel>
      </TabPanelContainer>
    </div>
  )
}
