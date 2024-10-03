const BlogModal = require("../Modal/BlogModal");
const base = require("./baseController");

exports.createBlog = base.createOne(BlogModal);
exports.getAllBlog = base.getAll(BlogModal);
exports.updateBlog = base.updateOne(BlogModal);
exports.deleteBlog = base.deleteOne(BlogModal);
exports.getOneBlog = base.getOne(BlogModal);
