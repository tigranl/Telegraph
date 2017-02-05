const post = require('./model')

module.exports = views;


function views (app) {
    app.post('/', function postnote(req, res, next) {
        let entry = post({
            title: req.body.title,
            name: req.body.name,
            story: req.body.story,
            date: new Date(),
            url: function () {
                this.url = this.title + new Date().toISOString().split('T')[0];
                return this;
            },
        }.url());
        entry.save((err) => {
            if (!err) {
                console.log('New entry saved successfully.')
                console.log(entry.url)
            }
        });
        res.redirect('/')
    })
    app.get('/:id', function () {
        
    })
}