import multer  from "multer";

const storageconfig = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"./public/assets");
    },
    filename:function(req,file,cb){
        cb(null, Date.now() + "_" + file.originalname);
    }
})

export  const uploadconfig = multer({storage:storageconfig});