import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPost = () => async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({ type: 'FETCH_POST', payload: response.data });
}

// export const fetchUser = (id) => async (dispatch, getState) => {
//     const response = await jsonPlaceHolder.get('/users/' + id);
//     dispatch({ type: 'FETCH_USER', payload: response.data })
// }

export const fetchUser = (id) => (dispatch, getState) => _fecthUser(id, dispatch);

    const _fecthUser = _.memoize(async (id, dispatch) => {
        const response = await jsonPlaceHolder.get(`/users/${id}`);
        dispatch({ type: 'FETCH_USER', payload: response.data });
    });


