import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsList from './NewsList';
import { LoadingSpinner } from '../../components/LoadingSpinner';

const API = 'b85afa7d7d1540a098769513290e6828';

interface Article {
  id: string;
  url: string;
  title: string;
  description: string;
  urlToImage: string;
}

export const News: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=${API}`);
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return (
        <LoadingSpinner/>
    );
  }

  return <NewsList articles={news} />;
};
