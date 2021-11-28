import React from 'react';
import { useState } from 'react';
import AddXterModal from './AddXterModal';
import addplus from "../images/addplus.jpg"


const PlanetListSideBarAddBtn = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className= 'd-flex justify-content-end'>
        <a variant="" >
          <img onClick={() => setModalShow(true)} src={addplus} alt="addition sign" className=" img-fluid"/>
        </a>
      </div>
        

      <AddXterModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
  
}

export default PlanetListSideBarAddBtn
