import React from 'react';

const Post = ({post}) => {
    const {title,id,body}=post;
    return (
        <div>
            <h3>Id: {id}</h3>
            <h2>Title: {title}</h2>
            <h4>{body}</h4>
            
        </div>
    );
};

export default Post;

// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }