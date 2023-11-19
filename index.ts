import express from 'express';
import axios from 'axios';
require('dotenv').config();

const app = express();
const port = 3001;

app.get('/', async (req, res) => {
  const ragRes = await axios.get(`https://api.ydc-index.io/rag`, {
    headers: {
      'X-API-Key': process.env.YOU_RAG_API,
    },
    params: {
      query: req.query.query,
    },
  });
  res.send(ragRes.data);
});

app.get('/research-company', async (req, res) => {
  const companyName = req.query.companyname;
  const prompt = `Give me a summary of a company named ${companyName}.`;

  const ragRes = await axios.get(`https://api.ydc-index.io/rag`, {
    headers: {
      'X-API-Key': process.env.YOU_RAG_API,
    },
    params: {
      query: prompt,
    },
  });
  res.send(ragRes.data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
