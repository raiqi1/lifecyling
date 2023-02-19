import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  ListGroup,
  Image,
} from "react-bootstrap";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=2f7a87b9522a4443a3bec71526c0d39c`
      );
      setArticles(result.data.articles);
    };
    fetchData();
  }, [search]);

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        {articles.slice(0, 3).map((article) => (
          <Col xs={4} key={article.url}>
            <ListGroup.Item>
              {article.urlToImage && (
                <Image src={article.urlToImage} thumbnail />
              )}
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url}>Read more</a>
            </ListGroup.Item>
          </Col>
        ))}
      </Row>
      <Row>
        {articles.slice(3, 6).map((article) => (
          <Col xs={4} key={article.url}>
            <ListGroup.Item>
              {article.urlToImage && (
                <Image src={article.urlToImage} thumbnail />
              )}
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url}>Read more</a>
            </ListGroup.Item>
          </Col>
        ))}
      </Row>
      <Row>
        {articles.slice(6).map((article) => (
          <Col xs={4} key={article.url}>
            <ListGroup.Item>
              {article.urlToImage && (
                <Image src={article.urlToImage} thumbnail />
              )}
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url}>Read more</a>
            </ListGroup.Item>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
