
import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
// import Button from '@restart/ui/esm/Button';
import NewXterside from './NewXterside';
import AddXters from './AddXters';

import character1 from "../images/character1.png"
import character2 from "../images/character2.png"
import character3 from "../images/character3.png"
import character4 from "../images/character4.png"
import character5 from "../images/character5.png"
import character6 from "../images/character6.png"
import character7 from "../images/character7.png"
import character8 from "../images/character8.png"
import character9 from "../images/character9.png"
import character10 from "../images/character10.png"
import character11 from "../images/character11.png"
import character12 from "../images/character12.png"


const People = ({name, ...props}) => {
  let people = [
    {
      image:character1,
      id:1,
      name: 'Cameron Williamson',
      Friends: '23'
    },
    {
      image:character2,
      id:2,
      name: 'Brooklyn Simmons',
      Friends: '23'
    },
    {
      image:character3,
      id:3,
      name: 'Leslie Alexander',
      Friends: '23'
    },
    {
      image:character4,
      id:4,
      name: 'Jenny Wilson',
      Friends: '23'
    },
    {
      image:character5,
      id:5,
      name: 'Marvin McKinney',
      Friends: '23'
    },
    {
      image:character6,
      id:6,
      name: 'Guy Hawkins',
      Friends: '23'
    },
    {
      image:character8,
      id:7,
      name: 'Robert Fox',
      Friends: '23'
    },
    {
      image:character7,
      id:8,
      name: 'Eleanor Pena',
      Friends: '23'
    },
    {
      image:character9,
      id:9,
      name: 'Kristin Watson',
      Friends: '23'
    },
    {
      image:character10,
      id:10,
      name: 'Cody Fishers',
      Friends: '23'
    },
    {
      image:character11,
      id:11,
      name: 'Courtney Henry',
      Friends: '23'
    },
    {
      image:character12,
      id:12,
      name: 'Annette Brown',
      Friends: '23'
    }
  ];

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

      <Row xs={2} md={3} lg={4}className="g-2 mt-4" id="planet-row">
        {people.map(person => (
          <Col key={person.id} id="planet-col">
            <Card className='pt-0 planetsBox planet-cards' id="planet-cards"  onClick={() => handleShowSidebar(person)}>
              <Card.Img variant="bottom" src={person.image} className = 'py-0 my-0' />
              <Card.Body className = 'px-0 pt-0' id="planet-body">
                <Card.Title>{person.name}</Card.Title>
                <Card.Text>Pop: {person.Friends}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
        ))}
      </Row>

      <AddXters/>
      <NewXterside show={showSidebar} close={handleCloseSidebar} title={info.name} desc={info.desc}   />

    </div>
  )
}

export default People
