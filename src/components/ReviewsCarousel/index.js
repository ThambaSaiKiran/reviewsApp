// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {userName: 'Wade Warren'}

  leftArrowFunction = () => {
    const {userName} = this.state
    const list = this.itemFunction
    if (userName !== 'Wade Warren') {
      const index = list.findIndex(item => item.username === userName)
      const newIndex = index - 1
      const newName = list[newIndex].username
      this.setState({userName: newName})
    }
  }

  rightArrowFunction = () => {
    const {userName} = this.state
    const list = this.itemFunction
    if (userName !== 'Infinos Tech') {
      const index = list.findIndex(item => item.username === userName)
      const newIndex = index + 1
      const newName = list[newIndex].username
      this.setState({userName: newName})
    }
  }

  itemFunction = reviewsList => reviewsList

  render() {
    const {reviewsList} = this.props
    const itemFunc = this.itemFunction(reviewsList)
    const {userName} = this.state
    const item = reviewsList.filter(eachItem => eachItem.username === userName)
    return (
      <div className="bg">
        <div className="bg1">
          <h1>Reviews</h1>
          <div className="bg2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              onClick={this.leftArrowFunction}
            />
            <div className="bg3">
              <img src={item.imgUrl} alt={item.username} className="im" />
              <p>{item.username}</p>
              <p className="p">{item.companyName}</p>
              <p className="p">{item.description}</p>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              onClick={this.rightArrowFunction}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
