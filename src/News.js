import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Pagination } from 'react-bootstrap';

const API_KEY = 'your-api-key';
const PAGE_SIZE = 10;

function App() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://newsapi.org/v2/top-headlines?q=${searchTerm}&category=${category}&pageSize=${PAGE_SIZE}&page=${page}&apiKey=${API_KEY}`,
      );
      setArticles(result.data.articles);
      setTotalPages(Math.ceil(result.data.totalResults / PAGE_SIZE));
    };

    fetchData();
  }, [searchTerm, category, page]);

  return (
    <div>
      <Navbar
        onSearch={() => setPage(1)}
        onCategoryChange={(event) => setCategory(event.target.value)}
      />
      {articles.map((article) => (
        <div key={article.title}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
      <Pagination>
        <Pagination.Prev
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        />
        <Pagination.Next
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        />
      </Pagination>
    </div>
  );
}

export default App;
