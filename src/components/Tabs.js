import {React, useState} from 'react'
// import Tab from 'react-bootstrap/Tab';
import {Tab, Tabs} from 'react-bootstrap';
import People from './CharactersList';
import PlanetList from './PlanetList';
// import Sonnet from 'react-bootstrap/Sonnet';


const TabSet = () => {
  const handlePlanClick = () => {
     
  }

  return (
    <div>
      <div >
        {/* <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item className = 'me-3'>
            <Nav.Link eventKey="planets" href="/home"  id= 'bg-planet' className = 'text-uppercase fw-bold border rounded-3' onClick= {handlePlanClick}>Planets</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="xters"   className = 'bg-none text-uppercase fw-bold text-muted'>Characters</Nav.Link>
          </Nav.Item>
          
        </Nav> */}
      
      </div>

      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">

        <Tab eventKey="/home" title="PLANETS">
          <PlanetList />
        </Tab>

        <Tab eventKey="characters" title="CHARACTERS">
          <People />
        </Tab>
        
      </Tabs>
    </div>
  )
}

export default TabSet

