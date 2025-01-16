
import * as mongoose from 'mongoose';
import { Schema } from "mongoose";

const UserSchema = new Schema({

    name:{
        type: String,
        required: true


    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password:{
        type: String,
        required: true
    },
    isVerified:String,
    isVerifiedExpiry:Date,
    isForgetPassword:String,
    isForgetPasswordExpiry:Date
});

const User=mongoose.models.User ||    mongoose.model('User', UserSchema);

export default User;