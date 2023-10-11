import mongoose from 'mongoose';

export const userSchema = mongoose.Schema({
    email: String,
    password: String,
    is_admin: Boolean
});

export const User = mongoose.model('User', userSchema);
export default User;