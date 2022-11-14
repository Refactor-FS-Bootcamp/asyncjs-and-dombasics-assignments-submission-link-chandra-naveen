import React from 'react'
import './PostItem.css'
import styled from 'styled-components';

const h1Styled = {
    backgroundColor: 'blue',
    padding: '5px'
}

const ParaStyled = styled.p`
    font-size: 1em;
    text-align: center;
    color: darkmagenta;
`;

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;


const PostItem = ({ post }) => {
    return (
        <div className='container'>
            <h1 style={h1Styled}>ID: {post.id}</h1>
            <h3 style={{ backgroundColor: 'orange', textTransform: 'uppercase' }}>Title: {post.title}</h3>
            <img style={{width:'160px',height:'160px' }}src={post.image} alt={post.title}></img>
            <h2>Price: {post.price}</h2>
            <ParaStyled>{post.description}</ParaStyled>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    )
}

export default PostItem