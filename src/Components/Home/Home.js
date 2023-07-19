import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Sheard/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const  allNews = useLoaderData();
    return (
        <div>
            <h2>this is home page: {allNews.length}</h2>
            {
                 allNews.map(news => <NewsSummaryCard
                     key={news._id}
                     news={news}
                 >

                 </NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;