module.exports = function(multer,app){

    let upload = multer({ dest: 'uploads/' });

    app.post("/upload", upload.single('file'),function(request,response){
        return response.json({size: request.file.size});
    });


}