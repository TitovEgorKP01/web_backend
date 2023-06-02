import db from '../db/mongo.mjs';
import { ObjectId } from 'mongodb';

const collection = db.collection('users');

const getUser = async (name) => {
    let result = await collection.findOne({name});
    return result;
}

const getAllUsers = async () => {
    let cursor = collection.find({});
    const results = await cursor.toArray();
    return results;
}

const saveUser = async (data) => {
    let savedResult = await collection.insertOne(data);
    return savedResult;
}

const update = async (id, data) => {
    let savedResult = await collection.updateOne({ _id: new ObjectId(id) }, { $set: data });
    return savedResult;
}

const remove = async (id) => {
    let savedResult = await collection.deleteOne({ _id: new ObjectId(id)});
    return savedResult;
}

export {
    getUser,
    saveUser,
    getAllUsers,
    update,
    remove
}