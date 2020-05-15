const   express = require('express'),
        app = express(),
        port = process.env.PORT || 3000,
        pug = require('pug')

//app.engine('html', pug.renderFile)
app
    .set('views', './app/views')
    .set('view engine', 'pug')
app
    .use('/public', express.static(__dirname + '/public'))
app
    .listen()
    .listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
app
    .get( '/', (req, res) => res.render('bio.pug') )
    .get( '/about', (req, res) => res.render('about.pug') )
    .get( '/telecom', (req, res) => res.render('telecom.pug') )
    .get( '/devops', (req, res) => res.render('devops.pug') )