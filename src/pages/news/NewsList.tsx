import React from 'react';
import { Grid } from '@mui/material';
import NewsCard from './NewsCard';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

interface NewsListProps {
  articles: Article[];
}

const NewsList: React.FC<NewsListProps> = ({ articles }) => {
  return (
    <Grid container spacing={3}>
      {articles.map((article, index) => (
        article.urlToImage && (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <NewsCard article={article} />
          </Grid>
        )
      ))}
    </Grid>
  );
};

export default NewsList;
