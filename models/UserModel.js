const {Schema,model}=require('mongoose');

let UserSchema=new Schema({
    username:{
        type:String
    },
    email:{
        type:String
       
    },
    password:{
        type:String
    }
    
},{
    timestamps:true

});

let UserModel=model('user',UserSchema);

module.exports={
    UserModel
}