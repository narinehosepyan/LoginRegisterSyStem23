const multer=require('multer');
const path=require('path');

let Storage=multer.diskStorage({

    /*պետք է middleware Folder-ի upload.js file-ից դուրս գանք "..",և 
    մտնենք public Folder-ի images Folder-ը "/public/images",այսինքն ասում 
    ենք նկարը տար պահի այդտեղ*/
    destination:path.join(__dirname,'..','/public/images'),
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

let upload=multer({
    storage:Storage,
    limits:4*1024*1024,
    fileFilter:(req,file,cb)=>{
        if(file.mimetype.startsWith('image')){
            cb(null, true)
        }else{
            cb(null, false)
        }
    }
}).single('image');

module.exports={
    upload
};