import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        } 
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b9300f66fbd54da08c571fd84b3466e2&page=1"
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })
    }


    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b9300f66fbd54da08c571fd84b3466e2&page=${this.state.page - 1}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({ 
            articles: parsedData.articles,
            page : this.state.page - 1
         })
    }
    handleNextClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b9300f66fbd54da08c571fd84b3466e2&page=${this.state.page + 1}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1
        })
    }

    render() {
        return (
            <div className='container my-3'>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1> Top Headlines </h1>
                </div>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>

            </div>
        )
    }
}

export default News
