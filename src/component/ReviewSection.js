import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { reviewActions } from '../action/reviewAction';


const ReviewSection = ({ productId }) => {
  const dispatch = useDispatch();
  const { reviews, loading, error } = useSelector(state => state.review);
  const user = useSelector(state => state.user.user);
  const [formData, setFormData] = useState({ rating: 1, comment: '' });

  useEffect(() => {
    dispatch(reviewActions.getReviews(productId));
  }, [dispatch, productId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reviewActions.addReview({ ...formData, productId, userId: user._id }));
    setFormData({ rating: 1, comment: '' });
  };

  console.log('productId@@', productId)
  console.log('user@@', user)
  console.log('reviews@@', reviews)

  return (
    <div>
      <h3>Reviews</h3>
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
        <div>
          {reviews.map(review => (
            <div key={review._id}>
              <p><strong>{review.userId.username}</strong>: {review.rating} stars</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      )}
      {user && (
        <form onSubmit={handleSubmit}>
          <label>
            Rating:
            <select value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: e.target.value })}>
              {[1, 2, 3, 4, 5].map(rating => <option key={rating} value={rating}>{rating}</option>)}
            </select>
          </label>
          <label>
            Comment:
            <textarea value={formData.comment} onChange={(e) => setFormData({ ...formData, comment: e.target.value })} />
          </label>
          <button type="submit">Submit Review</button>
        </form>
      )}
    </div>
  );
};

export default ReviewSection;
