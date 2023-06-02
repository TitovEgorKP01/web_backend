import bcrypt from 'bcrypt';
import { getUser as getUserByName, saveUser, getAllUsers, update, remove } from '../services/users.mjs';


const getUser = async (name) => {
  const result = await getUserByName(name);
  return result;
}

const getUsers = async () => {
  const results = await getAllUsers();
  return results;
}

const createUser = async (body) => {
  const existingUser = await getUserByName(body.name);

  if(existingUser){
    return res.status(400).send('User already exists!');
  }

  const user = {
    name: body.name,
    email: body.email,
    passwordHash: bcrypt.hashSync(body.password, 8),
    createDate: Date.now()
  }

  const result = await saveUser(user);

  return result;
}

const updateUser = async (id, body) => {
  const result = await update(id, body);
  return result;
}

const deleteUser = async (id) => {
  const result = await remove(id);
  return result;
}

export {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
}


