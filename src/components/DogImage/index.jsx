import React, {Component} from 'react'


class DogImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: ''
    }
  }

  componentDidMount() {
    let url = `https://dog.ceo/api/breed/${this.props.breed}/images/random`
    fetch(url)
    .then(r=>r.json())
    .then(json=>{
      let dogUrl = json.message
      let state = this.state
      state.img = dogUrl
      this.setState(state)
    })
    .catch(err=>{
      console.log(err.message)
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.breed}</h2>
        <img src={this.state.img} width="200px" />
      </div>
    ) 
  }


}


export default DogImage