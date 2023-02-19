import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

function Navbars({ onSearch }) {
  return (
    <Navbar bg="light">
      <Navbar.Brand>News App</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Form.Control as="select" className="mr-sm-2">
          <option>All</option>
          <option>Business</option>
          <option>Entertainment</option>
          <option>Health</option>
          <option>Science</option>
          <option>Sports</option>
          <option>Technology</option>
        </Form.Control>
        <Button variant="outline-info" onClick={onSearch}>
          Search
        </Button>
      </Form>
    </Navbar>
  );
}

export default Navbars;
