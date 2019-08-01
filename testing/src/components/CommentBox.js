import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class CommentBox extends React.Component {
    state= { comment: ''};

    handleChange = (event) => {
        this.setState({comment: event.target.value} )
    };

    handleSubmit = (event) => {
        event.preventDefault();

        // Call an action creator
        this.props.saveComment(this.state.comment);
        // And save the comment
        this.setState({ comment: ''});
    };

    render()  {
        return(
            <div>
            <form  onSubmit={this.handleSubmit}>
                <h4>Enter a Comment</h4>
                <textarea onChange={this.handleChange} 
                    
                    value={this.state.comment} />
                <div><button>Submit</button> </div>
                
            </form>
            <button className="fetch-comments" onClick={this.props.fetchComments} >Fetch Comments</button>
            </div> 
        );
    }
}

//let wrappedBox = requireAuth(CommentBox);

export default connect(null, actions)(requireAuth(CommentBox));