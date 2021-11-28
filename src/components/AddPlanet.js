import React from 'react'
import { useState } from 'react';
import AddPlanetModal from './AddPlanetModal';
import circleplus from "../images/circleplus.jpg";


const AddPlanet = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className= 'd-flex justify-content-end'>
        <a variant="" >
          <img onClick={() => setModalShow(true)} src={circleplus} alt="plus-sign" className=" img-fluid"/>
        </a>
      </div>
        

      <AddPlanetModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
  
}

export default AddPlanet