import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log("hello")
        console.log(error.response)
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { status, data } = await api.create(post);
        if (status === 201) {
            dispatch({ type: 'CREATE', payload: data })
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
        console.log("action", data)
        dispatch({type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error.message);
    }
}