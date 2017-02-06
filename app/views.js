const post = require('./model');

module.exports = views;

function views(app) {
    app.get('/favicon.ico', function(req, res) {
        res.sendStatus(204)
    });
    app.post('/', (req, res) => {
        let entry = post({
            title: req.body.title,
            name: req.body.name,
            story: req.body.story,
            date: new Date(),
            url: function() {
                this.url = this.title + new Date().toISOString().split('T')[0];
                return this;
            },
        }.url());
        entry.save((err) => {
            if (!err) {
                console.log('New entry saved successfully.')
            }
        });
        res.redirect('/' + entry.url)
    });
    app.get('/:id', (req, res) => {
        let url = req.originalUrl.slice(1);
        post.findOne({url: url}, (err, obj) => {
            res.render('post', {
                title: obj.title,
                name: obj.name,
                story: obj.story,
            });
        });
    })
}