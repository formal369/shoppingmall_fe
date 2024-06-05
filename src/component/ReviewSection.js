import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { reviewActions } from '../action/reviewAction';
import { Button, Form } from 'react-bootstrap';
import "../style/review.style.css";

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


  const renderStars = (rating, isEditable = false) => {
    return (
      <div className={`star-rating ${isEditable ? "editable" : ""}`}>
        {[...Array(5)].map((_, index) => {
          const value = 5 - index;
          return (
            <React.Fragment key={value}>
              <input
                type="radio"
                id={`rating${value}-${isEditable ? "editable" : rating}`}
                name={`rating-${isEditable ? "editable" : rating}`}
                value={value}
                checked={rating === value}
                readOnly={!isEditable}
                onChange={isEditable ? (e) => setFormData({ ...formData, rating: parseInt(e.target.value) }) : null}
              />
              <label
                htmlFor={`rating${value}-${isEditable ? "editable" : rating}`}
              >★</label>
            </React.Fragment>
          );
        })}
        <span className="rating-text">{rating}점</span>
      </div>
    );
  };

  return (
    <div className="review-section">
      <h3>レビュー</h3>
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
        <div>
          {reviews.map(review => (
            <div key={review._id} className="review-card">
              <h5><strong>{review.userId.name}</strong></h5>
              {renderStars(review.rating)}
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      )}
      {user && (
        <div className="review-form">
          <h4>レビュー作成</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="rating">
              <Form.Label>Rating:</Form.Label>
              {renderStars(formData.rating, true)}
            </Form.Group>
            <Form.Group controlId="comment">
              <Form.Label>Comment:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              作成
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
