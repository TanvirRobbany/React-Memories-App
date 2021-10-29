import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const { status, data } = api.fetchPosts();
        if (status === 200) {
            dispatch({ type: 'FETCH_ALL', payload: data })
            console.log("hello done")
        }
    } catch (error) {
        console.log("hello")
        console.log(error.response)
    }
};

export const createPosts = (post) => async (dispatch) => {
    try {
        const {status, data} = await api.create(post);
        if(status === 201) {
            dispatch({type: 'CREATE', payload: data})
        }
    } catch (error) {
        console.log(error.message);
    }
}