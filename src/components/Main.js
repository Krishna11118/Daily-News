import React, { Component } from 'react';
import NavBar from './NavBar';
import NewsIteam from './NewsIteam';



import './NewsIteam.css';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=5bcdf3ef339a4167b0c8ac6e34ff3176&page=1";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  };


  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5bcdf3ef339a4167b0c8ac6e34ff3176&page=${this.state.page = 1}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);

    this.setState({
      page: this.state.page = 1,
      articles: parsedData.articles,
    })

  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5bcdf3ef339a4167b0c8ac6e34ff3176&page=${this.state.page = 2}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);

    this.setState({
      page: this.state.page = 2,
      articles: parsedData.articles,
    })

  }

  render() {
    return (
      <>
        <NavBar />
        <div className='heading'>
        
        </div>

        <div className='row'>
          {this.state.articles.map((element) => {
            return <div className='card_align col-md-4' key={element.url} >
              <NewsIteam title={element ? element.title.slice(0, 45) : " "} description={element.description ? element.description.slice(0, 88) : " "} imageurl={element.urlToImage} newsurl={element.url} />
            </div>
          })}

       <div >
          <div className= ' container d-flex justify-content-between next' >
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&laquo; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
          </div>
        </div>
        </div>
      </>
    )
  }
};
