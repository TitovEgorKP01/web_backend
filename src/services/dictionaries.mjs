import db from '../db/mongo.mjs';

const getOne = async (dictionaryName, id) => {
    const collection = db.collection(dictionaryName);
    let result = await collection.findOne({ _id: new ObjectId(id)});
    return result;
}

const getAll = async (dictionaryName) => {
    const collection = db.collection(dictionaryName);
    let result = await collection.find({}).toArray();
    return result;
}

export {
    getOne,
    getAll
}