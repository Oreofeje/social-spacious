import React from 'react'
import { useState } from 'react';
import AddXterModal from './AddXterModal';
import circleplus from "../images/circleplus.jpg";

const AddXters = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className= 'd-flex justify-content-end'>
        <a variant="" >
          <img onClick={() => setModalShow(true)} src={circleplus}alt="plus sign" className=" img-fluid"/>
        </a>
      </div>
        

      <AddXterModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
  
}
export default AddXters
