import React, { Component } from 'react';
import "./style.css";

class Berita extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      search: '',
    };
  }

  componentDidMount() {
    const apiKey = '72238e4689ec44fc9bb9aa67a3799dc9'; 
    const url = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ articles: data.articles }));
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { search } = this.state;
    const apiKey = '72238e4689ec44fc9bb9aa67a3799dc9'; 
    const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ articles: data.articles, search: '' }));
  };

  render() {
    const { articles, search } = this.state;

    return (
      <div className="container">
        <h1 className="title">Portal Berita</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={this.handleChange}
            placeholder="Cari Berita"
          />
          <button type="submit">Cari</button>
        </form>
        <div className="articles-container">
          {articles.map((article) => (
            <div key={article.url} className="article">
              <img src={article.urlToImage} alt={article.title} />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Baca Selengkapnya
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Berita;
