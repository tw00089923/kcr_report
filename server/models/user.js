
import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  password_digest: String,
  department: String,
  email:String
});


const User = mongoose.model('User', userSchema);

export default User;