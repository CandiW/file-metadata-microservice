const express=require('express');
const path=require('path');
const bodyparser=require('body-parser');
const multer=require('multer');
const fileservicejs=require('./fileservice.js');

let app = express();

function fileService(port){

    app.use('/',express.static(path.join(__dirname,'/public')));

    app.use(bodyparser.urlencoded({extended: false}));

    fileservicejs(multer,app);


    app.listen(port);

}

fileService(process.env.PORT || 3000);