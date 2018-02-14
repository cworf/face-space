import React from 'react';
import NewsEvent from './NewsEvent';
import PostForm from './PostForm';

class NewsFeed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterNewsEventList: [
        {name: 'Jim', comment: 'sheeeeeit'},
        {name: 'Bob', comment: 'ohhhhyeah'}
      ]
    };
    this.handleAddPost = this.handleAddPost.bind(this);
  }
  handleAddPost(post){
    let newMasterNewsEventList = this.state.masterNewsEventList.slice();
    newMasterNewsEventList.push(post);
    this.setState({masterNewsEventList: newMasterNewsEventList});
  }
  render(){
    return (
      <div>
        <PostForm onAddPost={this.handleAddPost} />
        <h3>NEWSFEED</h3>
        {this.state.masterNewsEventList.map((cheese, i)=>
          <NewsEvent
            name={cheese.name}
            comment={cheese.comment}
            key={i} />
        )}
      </div>
    );
  }
}

export default NewsFeed;
