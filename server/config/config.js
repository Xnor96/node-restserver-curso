/*
==========
puerto
==========
*/
process.env.PORT = process.env.PORT || 3000;

/*
==========
entorno
==========
*/
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/*
==========
vencimiento del token
==========
60 * 60 * 24 * 30
*/
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;



/*
==========
SEED de autentificacion
==========
*/
process.env.SEED = process.env.SEED || 'este-es-el-sedd-desarrollo';

/*
==========
base de datos
==========
*/
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

/*
==========
google client id
==========
*/

process.env.CLIENT_ID = process.env.CLIENT_ID || '721199377859-nvtshdo61t4h6mcacu2bfccc6sg1d64v.apps.googleusercontent.com'