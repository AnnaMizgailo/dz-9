const path = require("path");
const formidable = require("formidable"); 
const {createNewUser} = require("../data/users");

function postRouter(request, response){
    let form = new formidable.IncomingForm({
        multiples: true,
        keepExtensions: true,
        maxFileSize: 1 * 1024 * 1024,
        uploadDir: "./uploads",
      });
    
    switch(request.url){
        case "/sign-up":  
        form.on("fileBegin", (name, file) => {
            file.filepath = path.join(form.uploadDir, file.originalFilename);
            console.log("filepath: ", file.filepath);
          });
            form.parse(request, (err, fields, files) => {
                if (err) {
                    response.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
                    response.end(err.message);
                    return;
                }
        
                if (files && fields) {
                    createNewUser(fields.loginUp, fields.passwordUp[0], files.avatarImgName[0].originalFilename);
                }

                response.writeHead(301, { Location: `/` });
                response.end("Пользователь добавлен");
            });
            break;
    }
}

module.exports = postRouter;