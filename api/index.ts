const express = require('express');
const instagramGetUrl = require("instagram-url-direct")
// const { ndown } = require('imran-downloader-servar')
const app = express();

app.use(express.static('public'));


async function instaRequest(url){
    let result = await instagramGetUrl(url)
    return result
}

async function instaRequest2(url){
    let result = await ndown(url)
    return result
}

app.get('/instagram', async function (req, res) {
    const inputUrl = req.query.url
    const output = await instaRequest(inputUrl)
    res.send(output);
});

app.get('/instagram2', async function (req, res) {
    const inputUrl = req.query.url
    const output = await instaRequest2(inputUrl)
    res.send(output);
});


app.listen(3000, () => console.log('Server ready on port 3000.'));
module.exports = app;
