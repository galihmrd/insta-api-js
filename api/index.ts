const express = require('express');
const instagramGetUrl = require("instagram-url-direct")

const app = express();
app.use(express.static('public'));


async function instaRequest(url){
    let result = await instagramGetUrl(url)
    return result
}

app.get('/instagram', async function (req, res) {
    const inputUrl = req.query.url
    const output = await instaRequest(inputUrl)
    res.send(output);
});


app.listen(3000, () => console.log('Server ready on port 3000.'));
module.exports = app;
