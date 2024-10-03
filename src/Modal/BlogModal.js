const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Blog name is required"],
    },
    description: {
      type: String,
      require: [true, "Blog description is required"],
    },
  },
  {
    timestamps: true,
  }
);

const BlogModal = mongoose.model("blog", blogSchema);


module.exports = BlogModal;
