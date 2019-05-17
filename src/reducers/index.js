import { combineReducers } from 'redux';
import PostFetch from './PostFetch';
import UserReducers from './UserReducers';

export default combineReducers({
    posts: PostFetch,
    users: UserReducers,
})