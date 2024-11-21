import React, { useState, useEffect } from 'react';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [counter1, setCounter1] = useState(0); // Estado para el primer contador
  const [counter2, setCounter2] = useState(0); // Estado para el segundo contador

  useEffect(() => {
    fetch('http://localhost:3000/jsonapi/node/article')
      .then(response => response.json())
      .then(data => {
        setArticles(data.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Artículos</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>{article.attributes.title}</li>
        ))}
      </ul>

      <div>
        <h2>Contadores</h2>
        <div>
          <p>Contador 1: {counter1}</p>
          <button onClick={() => setCounter1(counter1 + 1)}>Incrementar Contador 1</button>
        </div>
        <div>
          <p>Contador 2: {counter2}</p>
          <button onClick={() => setCounter2(counter2 + 2)}>Incrementar Contador 2</button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
