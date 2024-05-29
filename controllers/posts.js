const handleError = require("../service/handleError");
const handleSuccess = require("../service/handleSuccess");
const Posts = require("../models/postsModels.js");

const posts = {
  async getPosts(req, res) {
    const allPosts = await Posts.find();
    handleSuccess(res, allPosts);
    // 不用寫 res = res.json(allPosts); 是因為在 app.js 裡面有 app.use(express.json());
    // res.end(); 
  },
  async createdPosts(req, res) {
    try {
        // 不用寫 body = JSON.parse(body) 是因為在 app.js 裡面有 app.use(express.json());
        // const data = JSON.parse(body);
        const { body } = req;
        if (body.content !== undefined) {
          const newPost = await Posts.create({
            name: body.name,
            content: body.content.trim(), // 去除字串前後空白
            tags: body.tags,
            type: body.type,
          });
          handleSuccess(res, newPost);
        } else {
          handleError(res);
        }
      } catch (err) {
        handleError(res, err);
      }
  },
  async deletePosts(req, res) {
    try {
      await Posts.deleteMany();
      handleSuccess(res);
    } catch (err) {
      handleError(res, err);
    }
  },
  async deletePost(req, res) {
    try {
      // const id = req.url.split("/").pop();
      const id = req.params.id;
      await Posts.findByIdAndDelete(id);
      handleSuccess(res);
    } catch (err) {
      handleError(res, err);
    }
  },
  async updatePost(req, res) {
    try {
      const id = req.params.id;
      // const data = JSON.parse(body);
      const  { body } = req;
      if (body.content !== undefined) {
        const updatePost = await Posts.findByIdAndUpdate(id, {
          name: body.name,
          content: body.content.trim(), // 去除字串前後空白
          tags: body.tags,
          type: body.type,
          image: body.image || ""
        });
        handleSuccess(res, updatePost);
      } else {
        handleError(res);
      }
    } catch (err) {
      handleError(res, err);
    }
  },

}

module.exports = posts;