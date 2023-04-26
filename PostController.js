import PostService from "./PostService.js"

class PostController {
    async create(req, res) { // req - то, что сервер запрашивает у пользователя, res - то что отвечает сервер
        try {
            // const {author, title, content, picture} = req.body
            // const post = await Post.create({author, title, content, picture})
            //console.log(req.files)
            const post = await PostService.create(req.body, req.files.picture)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            return res.json(posts)
        } catch(e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            // const {id} = req.params
            // if(!id) {
            //     res.status(400).json({message: 'Id не найден'})
            // }
            const post = await PostService.getOne(req.params.id)
            return res.json(post)
        } catch(e) {
            res.status(500).json(e)
        }
    }

    async update(req,res) {
        try {
            const updatedPost = await PostService.update(req.body)
            return res.json(updatedPost)
        } catch(e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            return res.json(post)
        } catch(e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController