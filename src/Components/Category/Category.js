import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Sheard/NewsSummaryCard/NewsSummaryCard';

const Category = () => {

  
    const categoryNews = useLoaderData();
   

    return (
        <div>
            <h4>Total category news: {categoryNews.length}</h4>
             {
               categoryNews ? categoryNews.map(news => <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>) : "Loading.."
             }
        </div>
    );
};

export default Category;