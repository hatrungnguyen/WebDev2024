import React, { useState, useEffect } from 'react';
import './Reviews.css';
import { Link, useParams } from 'react-router-dom';

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
    const [newReview, setNewReview] = useState('');
    const { movieId } = useParams();


    useEffect(() => {
        if (movieId) {
            getMovieData(movieId);
        }
    }, [movieId, getMovieData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview) {
            const updatedReviews = [...reviews, newReview];
            setReviews(updatedReviews);
            movie.reviews = updatedReviews;
            setNewReview('');
        }
    };
    const backgroundImage = movie?.background_img || '/backGround/default-background.png';

    return (
        <div className="review-section" style={{backgroundImage: `url(${backgroundImage})`
           }}>
            <section className="movie-container">
                <div className="movie-details">
                    {movie && <img src={movie.image} alt={movie.title}/>}
                </div>
                <div className="movie-description">
                    <h1>{movie && movie.title}</h1>
                    <p>{movie && movie.description ? movie.description : 'No description available.'}</p>
                </div>
            </section>
            <div className="reviews">
                <h3>Review</h3>
                <ul>
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => <li key={index}>{review}</li>)
                    ) : (
                        <p>No reviews available yet. Be the first to add one!</p>
                    )}
                </ul>

                <form onSubmit={handleSubmit} className="review-form">
                    <input
                        type="text"
                        placeholder="Add your review"
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>

                {movie && movie.trailerUrl && (
                    <Link to={`/Trailer/${movie.trailerUrl}`} className="trailer-button">
                        Watch Trailer
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Reviews;
