import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl , newsUrl } = this.props;
        return (
            <div className="className my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl ? imageUrl : "https://images.hindustantimes.com/tech/img/2022/05/06/1600x900/dinosaur-5277285_1920_1645516261113_1651822591305.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer"  href={newsUrl} target = "_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
