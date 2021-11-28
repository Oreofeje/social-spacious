import React from 'react'
import Container from 'react-bootstrap/Container';
import planetloader from "../images/planetloader.svg"


const RingPlanet = () => {
  return (
    <div>
      <Container className= 'rectCon mt-5 pt-5 80vh'>
        <div className= 'rect px-3'>
          <div className="ringPlanet">
            <img src= {planetloader} alt="ringed Planet" className=" img-fluid ringPlanet-1"/>
          </div>
        </div>
      </Container>
      
    </div>
  )
}

export default RingPlanet
