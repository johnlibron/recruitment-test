import React, { Component } from 'react';

import axios from 'axios';
import Pagination from "react-js-pagination";

import { Button, Container, Jumbotron, Navbar, Nav, Row } from 'react-bootstrap';

import ArtworkCard from './components/ArtworkCard';

import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          artwork_list: [],
          currentPage: 1,
          totalItems: 0
      };
  }
  
  componentDidMount() {
    this.retrieveList();
  }

  retrieveList = (page) => {
    axios.get('http://localhost:3000/api/artworks/' + this.state.currentPage)
      .then((response) => {
        if (response) {
          this.setState({
            artwork_list: response.data.artworks,
            totalItems: response.data.pagination.total
          });
        }
      })
  }

  handlePageChange = (pageNumber) => {
    this.setState({
      artwork_list: [],
      currentPage: pageNumber
    }, () => this.retrieveList());
  }

  render() {
    return (
      <Container>
        <Row>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#gallery">Gallery</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#shop">Shop</Nav.Link>
                <Nav.Link href="#profile">Profile</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <br />
        <Row>
          <Jumbotron style={{ backgroundColor: '#e9ecef', padding: '50px' }}>
            <h1>Artwork Designs</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              <Button variant="primary">See the pictures</Button>
            </p>
          </Jumbotron>
        </Row>
        <br />
        <Row>
          <ArtworkCard 
            artwork_list={this.state.artwork_list}
          />
        </Row>
        <Row>
          <Pagination
            activePage={this.state.currentPage}
            totalItemsCount={this.state.totalItems}
            pageRangeDisplayed={10}
            hideFirstLastPages={true}
            onChange={this.handlePageChange}
          />
        </Row>
      </Container>
    )
  }
}

export default App;