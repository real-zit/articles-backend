const Article = require('../model/blog.model');

const httpGetAllBogs = async (req, res) => {
  try {
    const article = await Article.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: 'success',
      article: article,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};
const httpGetSingleBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const article = await Article.findById(id);
    res.status(200).json({ message: 'success', article: article });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};

const httpPostBlog = async (req, res) => {
  const article = new Article({
    title: req.body.title,
    snippet: req.body.snippet,
    body: req.body.body,
    author: req.body.author,
  });
  try {
    const articleCreated = await article.save();
    res.status(201).json({
      message: 'post created',
      article: articleCreated,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};
const httpEditBlog = async (req, res) => {
  const id = req.params.id;
  const article = req.body;
  const options = { new: true };
  try {
    const articleUpdate = await Article.findByIdAndUpdate(id, article, options);
    res.status(200).json({
      message: 'post updated',
      article: articleUpdate,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};

const httpDeleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Article.findByIdAndDelete(id);
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = {
  httpGetAllBogs,
  httpGetSingleBlog,
  httpPostBlog,
  httpEditBlog,
  httpDeleteBlog,
};
