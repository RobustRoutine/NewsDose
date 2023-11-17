import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general'
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        heading: PropTypes.string,
        dataLength: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        };
    }

    async updateNews(page = 1) {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9300f66fbd54da08c571fd84b3466e2&page=${page}&pageSize=${this.props.pageSize}`;
            const data = await fetch(url);
            const parsedData = await data.json();
            this.setState((prevState) => ({
                articles: page === 1 ? parsedData.articles : prevState.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults,
                loading: false,
                page: page + 1
            }));
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }

    componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = () => {
        this.updateNews(this.state.page);
    };

    render() {
        return (
            <>
                <h1 className="text-center">{this.props.heading}</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem
                                        title={element.title || ''}
                                        description={element.description || ''}
                                        imageUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}

export default News;
