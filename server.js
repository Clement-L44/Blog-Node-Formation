const mongoose = require('mongoose');

const app = require('./app');

/* -------------------------------------------------------------------------- */
/*                               CONNECT MONGODB                              */
/* -------------------------------------------------------------------------- */

if(process.env.NODE_ENV === 'development'){
    const MONGODB = process.env.local.MONGODB_DATABASE.replace(
        '<PASSWORD>',
        process.env.local.MONGODB_PASSWORD
    );
} else if (process.env.NODE_ENV === 'production'){
    const MONGODB = process.env.MONGODB_DATABASE.replace(
        '<PASSWORD>',
        process.env.MONGODB_PASSWORD
    );
}

if(MONGODB){
    mongoose.connect(MONGODB).then(() => {
        console.log('DB Connect !')
    });
} else {
    console.log("Not environment choose development or production !")
}


/* -------------------------------------------------------------------------- */
/*                               CONNECT SERVER                               */
/* -------------------------------------------------------------------------- */
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port " + port));

