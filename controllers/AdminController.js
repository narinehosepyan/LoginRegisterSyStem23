class AdminController{
    adminView(req,res){
        console.log(req.session.user.username);
        let username=req.session.user.username;
        res.render('admin',{username})
    }
}

//when we created class we made an  object for exports and imports in router
module.exports=new AdminController();