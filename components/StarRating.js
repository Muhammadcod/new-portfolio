/**
 * Material Icon(MI)
 * @constructor
 */
import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating mb-3">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span
              className="star material-icons-outlined"
              dangerouslySetInnerHTML={{ __html: `&#xf06f` }}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
