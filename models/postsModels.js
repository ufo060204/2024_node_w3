const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "貼文姓名 未填寫"],
    },
    tags: {
      type: String,
      required: [true, "貼文標籤 未填寫"],
    },
    type: {
      type: String,
      required: [true, "貼文類型 未填寫"],
    },
    content: {
      type: String,
      required: [true, "貼文內容 未填寫"],
    },
    image: {
      type: String,
      default: "",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false, // 不顯示 __v
  }
);
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
