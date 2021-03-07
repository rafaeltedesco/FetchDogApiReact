import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import DogImg from './../DogImage'

class Breeds extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breeds: []
    }
  }

  componentDidMount() {
    let url ='https://dog.ceo/api/breeds/list/all'
    fetch(url)
    .then(response => response.json())
    .then(json=> {
      let state = this.state
      state.breeds = json.message
      this.setState(state)
    })
    .catch(err=> {
      console.log(err, 'err')
    })

  }

  render() {
    return (
    <Router>
      <div>
        <ul>
          {Object.keys(this.state.breeds).map((breed, idx) => {
            return (
              <li key={idx}>
               <Link to={`/${breed}`}>{breed}</Link>
              </li>
            )
          })}
        </ul>

        <Switch>
          {Object.keys(this.state.breeds).map((breed, idx)=> {
            return (
              <Route key={idx} path={`/${breed}`}>
                <DogImg breed={breed}/>
              </Route>
            )
          })}
        </Switch>

      </div>
    </Router>
    )
  }
}


export default Breeds