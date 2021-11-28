import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
// import Button from '@restart/ui/esm/Button';
import PlanetListSideBar from './PlanetListSideBar';
import AddPlanet from './AddPlanet';
import planet1 from "../images/planet1.svg"
import planet2 from "../images/planet2.svg"
import planet3 from "../images/planet3.svg"
import planet4 from "../images/planet4.svg"
import planet5 from "../images/planet5.svg"
import planet6 from "../images/planet6.svg"
import planet7 from "../images/planet7.svg"
import planet8 from "../images/planet8.svg"
import planet9 from "../images/planet9.svg"




const PlanetList = ({ name, ...props }) => {

  const [boys, setBoys] = useState([
      {
        image:planet1,
        id:1,
        name: 'Planet Alpha',
        pop:  235,
        desc: 'Planet Alpha is the place to be if you like everything related to Planet. I know it is a bit meta, but come see by yourself.' 
        
      },
      {
        image:planet2,
        id:2,
        name: 'Planet Beta',
        pop:  235,
        desc: 'Planet Beta is the place to be if you like everything related to Planet. I know it is a bit meta, but come see by yourself.' 
        
      },
      {
        image:planet3,
        id:3,
        name: 'Planet Dena',
        pop:  235,
        desc: 'Planet Zulu is the place to be if you like everything related to Planet. I know it is a bit meta, but come see by yourself.' 
        
      },
      {
        image:planet4,
        id:4,
        name: 'Planet Tatum',
        pop:  235,
        desc: 'Planet Tatum is the place to be if you like everything related to Planet. I know it is a bit meta, but come see by yourself.' 
        
      },
      {
        image:planet5,
        id:5,
        name: 'Planet Hepay',
        pop:  235,
        desc: 'Planet Hepay is the place to be if you like everything related to Planet. I know it is a bit meta, but come see by yourself.' 
        
      },
      {
        image:planet6,
        id:6,
        name: 'Planet Lodis',
        pop:  235,
        desc: 'Planet Lodis is the place to be if you like everything related to Planet. I know it is a bit meta, but come see by yourself.' 
        
      },
      {
        image:planet7,
        id:7,
        name: 'Planet Tobys',
        pop:  235,
        desc: 'Planet Tobys is the place to be if you like everything related to Planet. I know it is a bit meta, but come see by yourself.' 
        
      },
      {
        image:planet2,
        id:8,
        name: 'Planet Manns',
        pop:  235,
        desc: 'Planet Manns is the place to be if you like everything related to Planet. I know it is a bit meta, but come see by yourself.' 
        
      },
      {
        image:planet5,
        id:9,
        name: 'Planet Virofy',
        pop:  235,
        desc: 'Planet Virofy is the place to be if you like everything related to Planet. I know it is a bit meta, but come see by yourself.' 
        
      },
      {
        image:planet3,
        id:10,
        name: 'Planet Hercue',
        pop:  235,
        desc: 'Planet Hercue is the place to be if you like everything related to Planet. I know it is a bit meta, but come see by yourself.' 
        
      },
      {
        image:planet8,
        id:11,
        name: 'Planet Sanfy',
        pop:  235,
        desc: 'Planet Sanfy is the place to be if you like everything related to Planet. I know it is a bit meta, but come see by yourself.' 
        
      },
      {
        image:planet9,
        id:12,
        name: 'Planet Zulu',
        pop:  235,
        desc: 'Planet Zulu is the place to be if you like everything related to Planet. I know it is a bit meta, but come see by yourself.' 
        
      }
    ]);

    const [info, setInfo] = useState(""); 
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showSidebar, setShowSidebar] = useState(false);

    

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

   

    const handleCloseSidebar = () =>  {
        setShowSidebar(false);
        let cards = document.querySelector('.planet-cards')
        cards.style.border = "none";

        let characterRow = document.querySelector('#planet-row')
        characterRow.style.marginRight = "0px";
        

    }    
    const handleShowSidebar = (e) => {
        let cards = document.querySelector('.planet-cards')
        
        cards.style.border = "none";
        
        setShowSidebar(true);

        let characterRow = document.querySelector('#planet-row')
        characterRow.style.marginRight = "200px";
        characterRow.classList.remove('row-cols-xl-4')
        characterRow.classList.remove('row-cols-lg-3')
        characterRow.classList.remove('row-cols-md-2')
        
        characterRow.classList.add('row-cols-xl-3')

        

       setInfo(e)
    }


  return (
    <div>

      <Row xs={2} md={3} lg={4}className="my-4 g-3" id="planet-row">
        {boys.map(boy => (
          <Col key={boy.id}  id="planet-col">
            
              <Card className='pt-0 planetsBox planet-cards' id="planet-cards"  onClick={() => handleShowSidebar(boy)}>
                <Card.Img variant="center" src={boy.image} className = 'px-4 mx-4' />
                <Card.Body className = "pt-0 character-card-body" id="planet-body">
                  <Card.Title className = 'py-0 my-0 fs-6'>{boy.name}</Card.Title>
                  <Card.Text className = 'py-0 my-0'>Pop: {boy.pop}</Card.Text>
                </Card.Body>
              </Card>
            
          </Col>
        ))}
      </Row>
      
      <AddPlanet/>

      <PlanetListSideBar show={showSidebar} close={handleCloseSidebar} title={info.name} desc={info.desc}   />

    </div>
  )
}

export default PlanetList
