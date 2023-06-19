import axios from "axios";
const baseUrl = 'https://api.airtable.com/v0/appFkhCkXUohGPZZ4';
const DB_TOKEN = process.env.REACT_APP_MUSIC_COLLECTION_DB_TOKEN;

const collection = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${DB_TOKEN}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default collection;