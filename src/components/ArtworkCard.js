import React from 'react';
import { Card, Col } from 'react-bootstrap';
import ImageNotFound from './image-not-found.png';

const ArtworkCard = props => {

  return (
    props.artwork_list.map((artwork) => { 
      return (
        <Col xs={6} sm={6} md={4} lg={3} xl={3} key={ artwork.id }>
          <Card>
            <Card.Img variant="top" src={ artwork.image_url != null ? artwork.image_url : ImageNotFound } style={{ height: '250px' }} />
            <Card.Body>
              <Card.Title>{ artwork.title != null ? artwork.title : 'No Title' }</Card.Title>
              <Card.Text>
                { artwork.artist_title != null ? artwork.artist_title : 'No Artist' }
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )
    })
  )
}

export default ArtworkCard;