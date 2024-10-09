import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

interface NewsCardProps {
  article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, height: '375px' }}>
      <Link to={`${article.url}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={article.urlToImage} alt={article.title} width="300px" height="200px" style={{ objectFit: 'contain' }} />
        <Typography variant="h6">{article.title}</Typography>
        <Typography variant="body2">{article.description}</Typography>
      </Link>
    </Paper>
  );
};

export default NewsCard;
