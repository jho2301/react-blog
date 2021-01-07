import mongoos from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { Schema } = mongoos;

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

UserSchema.methods.setPassword = async function (password) {
  const result = await bcrypt.hash(password, 10);
  this.hashedPassword = result;
};

UserSchema.methods.checkPassword = async function (input) {
  const result = await bcrypt.compare(input, this.hashedPassword);
  return result;
};

UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '2d',
    },
  );
};

UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

const User = mongoos.model('User', UserSchema);

export default User;
