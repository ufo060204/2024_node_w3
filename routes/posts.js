var express = require("express");
var router = express.Router();
// const Post = require("../models/postsModels");
const PostController = require("../controllers/posts");

// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

// router.post("/posts", (req, res) => {
//   PostController.getPosts( req, res );
// });
// 可縮寫為：
router.get("/", PostController.getPosts);

router.post("/", PostController.createdPosts);
router.delete("/", PostController.deletePosts);
router.delete("/:id", PostController.deletePost);
router.patch("/:id", PostController.updatePost);

module.exports = router;
