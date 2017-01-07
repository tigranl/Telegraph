const post = require('./model')


module.exports = (app) => {
    app.post('/', (req, res) => {
        new post({
            title: req.body.title,
            name: req.body.name,
            story: req.body.story,
            date: new Date()
        }).save((err) => {
            if (!err) {
                console.log('New entry saved successfully.')
            }
        })
    })
};
