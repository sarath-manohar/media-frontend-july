import React from 'react'
import {  Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    {/* head */}
      <Row className="mt-5 align-items-center justify-content-between w-100">
  <Col></Col>
  <Col lg={5}>
  <h1 style={{color:"blueviolet",fontSize:"40px"}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quam mollitia! Velit a nobis exercitationem debitis. Iure distinctio, facilis reiciendis accusamus unde accusantium recusandae temporibus? Temporibus quos blanditiis molestias cumque?</p>
   <Link style={{textDecoration:"none"}} to={'/home'} className="btn btn-info">Get Started</Link>
  </Col>
  <Col lg={5}>
  <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
  </Col>
  <Col></Col>

</Row>
{/* card section */}
<div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
  <h5 className='text-warning' style={{fontSize:"40px"}}>Features</h5>

  <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
  <Card style={{ width: '18rem' }} className='bg-info'>
  <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
  <Card style={{ width: '18rem' }}  className='bg-info'>
  <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
  <Card.Body>
        <Card.Title>Categorized Video</Card.Title>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
  <Card style={{ width: '18rem' }}  className='bg-info'>
  <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
  <Card.Body>
        <Card.Title>Watch History</Card.Title>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
  </div>


  </div>

{/* details section */}

<div className="container border border-2 d-flex align-items-center justify-content-center mt-5 p-3">
  <div className="col-lg-5">
    <h4 className='text-warning fw-bolder'>Simple,Powerful & Fast</h4>
    <h6 className='m-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga accusantium facere esse temporibus? Voluptatum accusantium reprehenderit incidunt voluptatem natus similique enim praesentium et, doloribus qui provident est odio delectus?</h6>

    <h6  className='m-3'><span className='text-warning fw-bolder'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga accusantium facere esse temporibus? Voluptatum accusantium reprehenderit incidunt voluptatem natus similique enim praesentium et, doloribus qui provident est odio delectus?</h6>

    <h6  className='m-3'><span className='text-warning fw-bolder'>Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga accusantium facere esse temporibus? Voluptatum accusantium reprehenderit incidunt voluptatem natus similique enim praesentium et, doloribus qui provident est odio delectus?</h6>
  </div>
  <div className="col-lg-5 ms-2">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/AiD6SOOBKZI?si=5kXGT9Z1pp8i_2fW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
  </div>
</div>

    </>
  )
}

export default LandingPage
