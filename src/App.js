import React from 'react'
import './index.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TabSet from './components/Tabs';



const App = () => {
  return (
    <div >
      <Container >
        <Row>
          <Navigation />
          <TabSet />

        </Row>
      </Container>
      
      
      
    </div>


  )
}

export default App










