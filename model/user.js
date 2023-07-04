import {Schema , model , models , Types} from "mongoose"

const userSchema=new Schema({
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
});

const User=models.User || model("User" , userSchema);

export default User;