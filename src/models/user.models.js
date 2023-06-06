const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    oldPassword: {type: String, required: false},
    username: {type: String, required: false, unique: true},
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    otherName: {type: String},
    profilePicture: {type: String, default: "https://www.nicepng.com/png/detail/914-9144016_avatar-pictures-anime-male-hair-reference.png"}
},
{
    timestamps: true
})

const User = mongoose.model("User", userModel);
module.exports = User;