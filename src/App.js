import React, {Component} from 'react'
import './App.css'
import axios from "axios"
import Searchbar from './components/Searchbar'
import Gifs from './components/Gifs'
import Searchbar from './components/Searchbar'
import Gifs from './Gifs'

class App extends Component {
  constructor(){
    super()
    this.state = {
      gifs: [],
      loading: true
    }
  }

  performSearch = (query = "laughing") => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=LkY4hxNQg7s9SyDxpfl2sGcdNGDZapwm`)
    .then(res => {
      this.setState({ 
        gifs: res.data.data,
        loading: false 
      })
    })
    .catch(err => console.log("Error parsing and fetching data", err)
    )
  }

  componentDidMount() {
    this.performSearch()
  }

  render() {
    console.log(this.state.gifs)
    
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Gif Finder</h1>
            <Searchbar performSearch={this.performSearch} />
          </div>
        </div>
        <div className="main-content">
          { this.state.loading ? <p className="loading">Loading...</p> : <Gifs data={this.state.gifs} /> }
        </div>
      </div>
    )
  }
}

export default App
