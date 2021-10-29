import Posts from '../models/posts.js'

export const getPosts = (req, res) => {
    res.send("This Works!")
}

export const createPost = (req, res) => {
    res.send("Create Post!")
}