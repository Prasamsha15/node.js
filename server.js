'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //req.body
const cors = require('cors');
app.use(bodyParser.urlencoded({extented: true}));
app.use(cors());
const posts = require('./data');
app.get('/api/posts',(request , response) =>{
    if(!posts) {
        response.status(404).json({message:'No posts found'})
    }
    response.json(posts)
});
app.get('/api/posts/:id',(request, response)=> {
    const requestId = request.params.id;
    const post = posts.filter(post => {
        return post.id == requestId;
    })
    if(!post) {
        response.status(404).json({message:'No post found'});
    }
    response.json(post[0])
});
app.post('/api/posts',(request , response)=>{
    const post = {
        id: posts.length + 1,
        name: request.body.name,
        email: request.body.email
    }
    posts.push(post);
    response.json(post)
})
app.put('/api/posts/:id',(request, response)=>{
    const requestId = request.params.id;
    const post = posts.filter(post =>{
        return post.id == requestId;
    })[0]
    const index = posts.indexOf(post);
    const keys = Object.keys(request.body);
    keys.forEach(key => {
        post[key] = request.body[key];
    });
    posts[index] = post;
    response.json(posts[index]);
});
app.delete('/api/posts/:id',( request,response)=>{
    const requestId = request.param.id;
    const post = posts.filter(post =>{
        return post.id == requestId;
    })[0]
    const index = posts.indexOf(post);
    posts.splice(index,1);
    response.json({message:`User ${requestId}deleted`});

})
const hostname = 'localhost';
const port = 3000;

app.listen(port,hostname, () =>{
    console.log(`Server is running at http://${hostname}:${port}`);

});