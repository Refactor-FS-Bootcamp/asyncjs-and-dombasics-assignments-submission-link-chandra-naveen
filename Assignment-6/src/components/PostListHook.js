import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostItem from './PostItem';

const PostListHook = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = 'https://fakestoreapi.com/products';
        axios.get(url)
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return posts.map(post => <PostItem key={post.id} post={post} />)
}

export default PostListHook