const Blog = require("./../models/BlogModel")

exports.getAllBlogs = async (req, res) => {
    try {
        const result = await Blog.find()
        res.json({
            success: true,
            message: "All Blogs Fetched",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,

        })
    }
}

exports.addblog = async (req, res) => {
    try {
        console.log(req.body)
        const result = await Blog.create(req.body)
        res.json({
            success: true,
            message: "Blog created successfully",
            // result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,

        })
    }
}

exports.removeBlog = async (req, res) => {
    try {
        const { blogId } = req.params
        await Blog.findByIdAndDelete(blogId)
        res.json({
            success: true,
            message: "Blog removed successfully",
            // result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,

        })
    }
}

exports.editBlog = async (req, res) => {
    try {
        const { blogId } = req.params
        await Blog.findByIdAndUpdate(blogId, req.body)
        res.json({
            success: true,
            message: "Blog updated successfully",
            // result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,

        })
    }
}