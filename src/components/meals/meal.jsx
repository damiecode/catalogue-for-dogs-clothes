import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchMeals from '../../data/meals';

const Meal = ({ meal, addMealToFavourite }) => {
  const imageRef = React.createRef();
  const [img] = useState(meal.strMealThumb[0]);
  console.log(meal)
  return (
    <div className="card h-100 meal">
      <Link to={`/meals:${meal.idMeal}`} className="meal__link">
        <img
          className="card-img-top product__img"
          src={meal.strMealThumb}
          alt={meal.strMeal}
          ref={imageRef}
        />
      </Link>
      <div className="card-body meal__text">
        <h4 className="card-title meal__name">
          <Link to={`/meals:${meal.idMeal}`}>{meal.strMeal}</Link>
        </h4>
        <h5 className="meal__category">{meal.strCategory}</h5>
        <h5 className="meal__area">{meal.strArea}</h5>
        <button
          type="button"
          onClick={() => {
            addMealToFavourite({ ...meal });
          }}
          className="btn btn-info meal__add-to-favourites"
        >
          Add to favourites
        </button>
      </div>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
  addMealToFavourite: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  meals: state.meals,
});

const MapDispatchToProps = dispatch => ({
  fetchMeals: letter => {
    dispatch(fetchMeals(letter));
  },
});

export default connect(mapStateToProps, MapDispatchToProps)(Meal);
