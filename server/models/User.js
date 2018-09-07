const mongoose = require('mongoose');
const { Schema } = mongoose;            // both are same :  const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String
});