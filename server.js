const   express = require('express'),
        app = express(),
        port = 3000,
        pug = require('pug')

//app.engine('html', pug.renderFile)
app.set('views', './app/views')
app.set('view engine', 'pug')
app.use('/public', express.static(__dirname + '/public'))
app.get( '/', (req, res) => res.render('bio.pug') )
app.get( '/about', (req, res) => res.render('about.pug') )
app.get( '/telecom', (req, res) => res.render('telecom.pug') )
app.get( '/devops', (req, res) => res.render('devops.pug') )
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))




///