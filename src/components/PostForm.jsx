import React from 'react';
import PropTypes from 'prop-types';


function PostForm(props){

  let _name = null;
  let _comment = null;
  function handleFormSubmit(event){
    event.preventDefault();
    console.log(_name);
    props.onAddPost({name: _name.value, comment:_comment.value});
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text"
          ref={(input) => {_name = input;}}
        />
        <input type="text"
          ref={(input) => {_comment = input;}}
        />
        <button type="submit">Add Post</button>

      </form>
    </div>
  );
}

PostForm.propTypes = {
  onAddPost: PropTypes.func.isRequired
};

export default PostForm;
