import Users from "./user.model.js";
export function reisterUser(req,res){
    const{name,password} = req.body;
    let newUser = Users.register(name,password);
    res.render("layout",{er:false});
}
export function loginUser(req,res){
    const{name,password} = req.body;
    let user = Users.login(name,password);
    req.session.username = name;
    if(user){
        res.render("upload",{username:name,filePath:null,ex:null});
    }
    if(!user){
        res.render("layout",{er:true})
    }

}