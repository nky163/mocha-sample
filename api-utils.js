const promisify = require('util').promisify
const request = promisify(require('request'))
const cheerio = require('cheerio')

const getPageTitle = async (url) => {
    const res = await request(url)
    const $ = cheerio.load(res.body)
    return $('title').text()
}

module.exports = {
    getLowerTitle: async (url) => {
        const title = await getPageTitle(url)
        return title.toLowerCase()
    }
}