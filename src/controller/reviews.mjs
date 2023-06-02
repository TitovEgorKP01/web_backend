import { get, getByName, getAll, create, update, remove  } from '../services/reviews.mjs';

const getReview = async (id) => {
  const result = await get(id);
  return result;
}

const getReviews = async () => {
  const results = await getAll();
  return results;
}

const createReview = async (body) => {
  const existing = await getByName(body.name);

  if(existing){
    return res.status(400).send('Review already exists!');
  }

  const review = {
    name: body.name,
    description: body.description,
    type: body.type,
    rating: body.rating,
    createDate: Date.now(),
    updatedDate: Date.now()
  }

  const result = await create(review);

  return result;
}

const updateReview = async (id, body) => {
  const result = await update(id, body);
  return result;
}

const deleteReview = async (id) => {
  const result = await remove(id);
  return result;
}

export {
  getReview,
  getReviews,
  createReview,
  updateReview,
  deleteReview
}