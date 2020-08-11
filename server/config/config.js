/*
==========
puerto
==========
*/
process.env.PORT = process.env.PORT || 3000;

/*
==========
puerto
==========
*/
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/*
==========
puerto
==========
*/
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://xnor:thefuture@cluster0.e6wja.mongodb.net/cafe?retryWrites=true&w=majority';
}

process.env.URLDB = urlDB;