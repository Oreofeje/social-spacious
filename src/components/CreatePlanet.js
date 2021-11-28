import React from 'react'
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import AddPlanetModal from './AddPlanetModal';
import planetloader from "../images/planetloader.svg";



const CreatePlanet = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Container className = ''>

        <div className="ringPlanet text-center ">
          <img src={planetloader} alt="ringed Planet" className=" img-fluid ringPlanet1"/>
        </div>

        <div className= 'text-center'>
          <h4 className = 'navy-color noEmptySpace'>Space doesn't have to be so empty.</h4>


          <button onClick={() => setModalShow(true)}  className = 'createPlanetBtn'> Create Planet</button>
        </div>

      </Container>

      <AddPlanetModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default CreatePlanet
