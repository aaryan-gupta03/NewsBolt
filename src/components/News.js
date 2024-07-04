import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ setProgress, apiKey, pageSize = 8, country = 'in', category = 'general' }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const updateNews = async () => {
        setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`; 
        setLoading(true);
        let data = await fetch(url);
        setProgress(30);
        let parsedData = await data.json();
        setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setProgress(100);
    };

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(category)} - NewsBolt`;
        updateNews(); 
        // eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

    return (
  <>
    <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px',fontFamily: 'Georgia, serif',fontSize: '2.5rem',color: '#333',fontWeight: 'bold',borderBottom: '1px solid #333'}}>NewsBolt - Top {capitalizeFirstLetter(category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            > 
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem 
                                        title={element.title ? element.title : ""} 
                                        description={element.description ? element.description : ""} 
                                        imageUrl={element.urlToImage} 
                                        newsUrl={element.url} 
                                        author={element.author} 
                                        date={element.publishedAt} 
                                        source={element.source.name} 
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div> 
            </InfiniteScroll>
        </>
    );
}

News.propTypes = {
    setProgress: PropTypes.func.isRequired,
    apiKey: PropTypes.string.isRequired,
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
};

export default News;
