import React from 'react';
import PropTypes from 'prop-types';

class NewsEvent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLiked: false
    };
    this.handleLikeButtonClick = this.handleLikeButtonClick.bind(this);
  }

  handleLikeButtonClick() {
    this.setState(
      {
        isLiked: !this.state.isLiked
      }
    );
  }

  render(){
    let likedStatus = 'Like';
    if (this.state.isLiked){
      likedStatus = 'Unlike';
    } else {
      likedStatus = 'Like';
    }

    return (
      <div>
        <p>COMMENT</p>
        <h3>{this.props.name}</h3>
        <p>{this.props.comment}</p>
        <button onClick={this.handleLikeButtonClick}>{likedStatus}</button>
      </div>
    );
  }
}
NewsEvent.propTypes = {
  name: PropTypes.string,
  comment: PropTypes.string
};

export default NewsEvent;
