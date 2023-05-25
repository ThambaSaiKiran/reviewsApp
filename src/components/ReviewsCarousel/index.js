// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {userName: 'Wade Warren'}

  leftArrowFunction = () => {
    const {userName} = this.state
    const {reviewsList} = this.props
    if (userName !== 'Wade Warren') {
      const index = reviewsList.findIndex(item => item.username === userName)
      const newIndex = index - 1
      const newName = reviewsList[newIndex].username
      this.setState({userName: newName})
    }
    return null
  }

  rightArrowFunction = () => {
    const {userName} = this.state
    const {reviewsList} = this.props
    if (userName !== 'Ronald Jones') {
      const index = reviewsList.findIndex(item => item.username === userName)
      const newIndex = index + 1
      const newName = reviewsList[newIndex].username
      this.setState({userName: newName})
    }
    return null
  }

  render() {
    const {reviewsList} = this.props
    const {userName} = this.state
    const item = reviewsList.filter(eachItem => eachItem.username === userName)
    const item1 = item[0]
    return (
      <div className="bg">
        <div className="bg1">
          <h1>Reviews</h1>
          <div className="bg2">
            <button type="button" data-testid="leftArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                onClick={this.leftArrowFunction}
              />
            </button>
            <div className="bg3">
              <img src={item1.imgUrl} alt={item1.username} className="im" />
              <p>{item1.username}</p>
              <p className="p">{item1.companyName}</p>
              <p className="p">{item1.description}</p>
            </div>
            <button type="button" data-testid="rightArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                onClick={this.rightArrowFunction}
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
