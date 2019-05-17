import React, { Component } from 'react';
import { fetchPost } from '../actions';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPost();
    }

    postRendering = () => {
        console.log(this.props.posts);
        return this.props.posts.map((post) => {
            return (
                <div>
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.id}/>
                </div>
            )
        });
    }
    render() {
        return (
            <div>
                {this.postRendering()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        posts: state.posts,
    }
}

export default connect(mapStateToProps, { fetchPost })(PostList);