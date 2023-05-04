const express = require('express');
const index = express.Router()
const axios = require('axios')
const { appName } = require('../config/config')

index.get('/', (req, res) => {
    axios.get('https://meme-api.com/gimme/memes/10')
    .then((response) => {
            const memes = response.data.memes
             memes.map((meme) => { 
                meme.id = meme.postLink.slice(16)
            })
                res.render('index', {memes, singlecount:false, appName})
    })
    .catch((err) => {
        res.send((err.message))
    })
})

index.get('/:subreddit', (req, res) => {
    const subreddit = req.params.subreddit
    axios.get(`https://meme-api.com/gimme/${subreddit}`)
    .then((response) => {
            const memes = response.data
            memes.id = memes.postLink.slice(16)
                res.render('index', {memes, singlecount:true, appName})
    })
    .catch((err) => {
        res.send((err.message))
    })
})


index.get('/:subreddit/:count', (req, res) => {
    const subreddit = req.params.subreddit
    const count = req.params.count
    axios.get(`https://meme-api.com/gimme/${subreddit}/${count}`)
    .then((response) => {
            const memes = response.data.memes
             memes.map((meme) => { 
                meme.id = meme.postLink.slice(16)
            })
                res.render('index', {memes, singlecount:false, appName})
    })
    .catch((err) => {
        res.send((err.message))
    })
})

index.get('*', (req, res) => {
    res.send('404')
})


module.exports = index;