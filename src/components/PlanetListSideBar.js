import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {title, desc, Button, Offcanvas, Col, Row} from 'react-bootstrap';
import { useState } from 'react';
import PlanetListSideBarAddBtn from './PlanetListSideBarAddBtn';
import character8 from "../images/character8.png"
import character6 from "../images/character6.png"
import character5 from "../images/character5.png"
import character9 from "../images/character9.png"
import character1 from "../images/character1.png"
import character4 from "../images/character4.png"



const PlanetListSideBar = ({show, title, desc, close}) => {

  const [planetChars, setPlanetChars] = useState([
    { image: character8, friends: 32, name: 'Eleanor Pena', id: 1 },
    { image: character6, friends: 12, name: 'Brooklyn Simmons', id: 2 },
    { image: character5, friends: 24, name: 'Kristin Watson', id: 3 },
    { image: character9, friends: 10, name: 'Cody Fisher', id: 4 },
    { image: character1, friends: 41, name: 'Courtney Henry', id: 5 },
    { image: character4, friends: 36, name: 'Nima koley', id: 6 }
    
  ]);
 

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button> */}
      
      
      <Offcanvas  show={show} onHide={close}  placement="end" className="" md="auto" lg="auto" sm="auto" backdrop={false} scroll={true} id="planet-sidebar"  >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bolder fs-3 ">{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="text-muted side-bar-font ">
            {desc}
          </p>
          
          <div>
            Population
          </div>

          <div>
            234
          </div>

          <Row className ='my-5'>
            <Col className = 'text-muted'>
              CHARACTERS
            </Col>
            <Col className ='d-flex justify-content-end '>
              <PlanetListSideBarAddBtn/>
              {/* <img src="/images/addplus.jpg" alt="addition sign" /> */}
            </Col>
          </Row>
          
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
                  <p className=" text-muted fw-light my-0 side-bar-smaller-font">{e.friends} friends</p>
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
export default PlanetListSideBar
