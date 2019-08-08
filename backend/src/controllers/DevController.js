const axios = require('axios')

const Dev = require('../models/Dev')

module.exports = {
    async index(req, res) {

    },

    async store(req, res) {
        const { username } = req.body

        const userExists = await Dev.findOne({ user: username })

        if(userExists) return res.json(userExists)

        const response = await axios.get(`https://api.github.com/users/${username}`)
        const {name, bio, avatar_url: avatar} = response.data

        const dev = await Dev.create({
            user: username,
            name,
            avatar,
            bio,
        })
        
        return res.json(dev)
    }
};