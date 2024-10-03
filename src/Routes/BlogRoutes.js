const {
  getAllBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const router = require("express").Router();

router.route("/").get(getAllBlog).post(createBlog);

router.route("/:id").patch(updateBlog).delete(deleteBlog);

module.exports = router;
