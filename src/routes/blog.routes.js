const express = require('express');
const blogRouter = express.Router();
const {
  httpGetAllBogs,
  httpPostBlog,
  httpGetSingleBlog,
  httpEditBlog,
  httpDeleteBlog,
} = require('./blog.controller');

blogRouter.get('/', httpGetAllBogs);
blogRouter.get('/:id', httpGetSingleBlog);
blogRouter.post('/', httpPostBlog);
blogRouter.put('/:id', httpEditBlog);
blogRouter.delete('/:id', httpDeleteBlog);

module.exports = blogRouter;
