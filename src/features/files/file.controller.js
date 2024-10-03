export function saveAndPreview(req,res){
    const filePath = `/assets/${req.file.filename}`;
    console.log(filePath);
    res.render("upload",{username:req.username,filePath:filePath,ex:null})
}


//handels external url  images
export function externalURL(req,res){
    let imgUrl = req.body.externalUrl;
    res.render("upload", { username: req.username, filePath: imgUrl ,ex:true});
}