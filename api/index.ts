const express = require('express');
const instagramGetUrl = require("instagram-url-direct")
const instagramDownloader = require('./instagram');
const app = express();

app.use(express.static('public'));


async function instaRequest(url){
    let result = await instagramGetUrl(url)
    return result
}

async function igdl(url, proxy = null) {
    const result = await instagramDownloader(url, proxy);
    return result
}

app.get('/instagram', async function (req, res) {
    const inputUrl = req.query.url
    const output = await instaRequest(inputUrl)
    res.send(output);
});

app.get('/instagram2', async function (req, res) {
    const inputUrl = req.query.url
    const output = await igdl(inputUrl)
    res.send(output);
});


app.listen(3000, () => console.log('Server ready on port 3000.'));
module.exports = app;
