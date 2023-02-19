import React, { useState, useEffect } from "react";
import { Navbar, Form, FormControl, Button, Nav } from "react-bootstrap";
import axios from "axios";
import "./App.css";

const API_KEY = "72238e4689ec44fc9bb9aa67a3799dc9";

function App() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=tesla&from=2023-01-19&sortBy=publishedAt&apiKey=${API_KEY}`
      );
      setArticles(response.data.articles);
    };
    fetchArticles();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const fetchArticles = async () => {
      const response = await axios.get(
        `http://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}`
      );
      setArticles(response.data.articles);
    };
    fetchArticles();
  };

  const handleCategorySubmit = (event) => {
    event.preventDefault();
    const fetchArticles = async () => {
      const response = await axios.get(
        `http://newsapi.org/v2/everything?category=${category}&apiKey=${API_KEY}`
      );
      setArticles(response.data.articles);
    };
    fetchArticles();
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">News App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Form inline onSubmit={handleSearchSubmit}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={searchQuery}
                onChange={handleSearch}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
            <Form inline onSubmit={handleCategorySubmit}>
              <FormControl
                as="select"
                value={category}
                onChange={handleCategory}
              >
                <option value="">All</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </FormControl>
              <Button variant="outline-success" type="submit">
                Filter by Category
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container">
        <div className="row">
          {articles.map((article) => (
            <div key={article.url} className="col-md-3">
              <div className="card">
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt={article.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
