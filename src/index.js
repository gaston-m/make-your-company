const express = require ('express');
const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars');


//------------------------Inicializaciones-------------------------------

const app = express();
require('./database.js');


//------------------------Settings--------------------------------

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({

    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'//,
  ///helpers: require('./lib/helpers')
}))

app.set('view engine', '.hbs');


//------------------------Middlewares----------------------------------

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());



//------------------------Constantes Globales----------------------


//------------------------Routes-------------------------------------

app.use(require('./routes'));
app.use('/users', require('./routes/users'));
app.use('/compr', require('./routes/comp'));


//------------------------Iniciando el Servidor---------------------

app.listen(app.get('port'), () => {

    console.log('Server On Port', app.get('port'));
})

