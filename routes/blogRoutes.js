const { getAllBlogs, addblog, removeBlog, editBlog } = require("../controller/blogController")

const router = require("express").Router()
// get http://localhost:5000/blogs
//post  http://localhost:5000/blogs/add

router
    .get("/", getAllBlogs)
    .post("/add", addblog)
    .delete("/:blogId", removeBlog)
    .put("/:blogId", editBlog)

module.exports = router