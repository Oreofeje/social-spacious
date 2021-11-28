import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Offcanvas, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import character8 from "../images/character8.png"
import character6 from "../images/character6.png"
import character7 from "../images/character7.png"
import character4 from "../images/character4.png"
import character1 from "../images/character1.png"



const NewXterside = ({show, title, desc, close}) => {
 

  const [planetChars, setPlanetChars] = useState([
    { image: character8, name: 'Eleanor Pena', id: 1 },
    { image: character6, name: 'Brooklyn Simmons', id: 2 },
    { image: character7, name: 'Kristin Watson', id: 3 },
    { image: character4, name: 'Cody Fisher', id: 4 },
    { image: character1, name: 'Courtney Henry', id: 5 }
    
  ]);

  return (
    <>

      
      
      <Offcanvas  show={show} onHide={close}  placement="end" className="" md="auto" lg="auto" sm="auto" backdrop={false} scroll={true} id="planet-sidebar"  >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bolder fs-3 ">{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="text-muted side-bar-font ">Jane is a really nice person. She has been living on planet Alpha for the last 10 years.</p>

          <Row className="mt-3">
            <Col>
              <p className="side-bar-font">Planets</p>
              <p className="fw-bold side-bar-font">Alpha</p>

            </Col>
            <Col>
            <p className="side-bar-font">Friends</p>
            <p className="fw-bold side-bar-font">23</p>
            </Col>
          </Row> 
             
          <p className=" text-muted mt-3">FRIENDS</p>

          <div>
            {planetChars.map(e => (
              <Row className="d-flex mb-3" key={e.id}>
                <div className="col-3 ">
                  <div className=' OffCanvasStyle' >
                    <img src={e.image} className='img-fluid h-100 rounded ' alt="" />
                  </div>
                </div>
                <div className="col-9 my-auto">

                  <p className=" fw-bold pt-0 my-0 side-bar-font">{e.name}</p>

                  <p className="text-muted fw-light my-0 side-bar-smaller-font ">Amet minim non deserunt ullamco</p>
                </div>

              </Row>

             ))
                                    
            }
                                
          </div>
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default NewXterside
