import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchMeals from '../../data/meals';

const Meal = ({ meals, addMealToFavourite }) => {
  const meal = Object.values(meals);
  for (let i = 0; i <= meal.length - 1; i += 1) {
    const imageRef = React.createRef();
    const [img] = useState(meal[i].strMealThumb[0]);
    const mealID = meal[i].idMeal;
    return (
      <div className="card h-100 meal">
        <Link to={`/meals:${meal[i].idMeal}`} className="meal__link">
          <img
            className="card-img-top product__img"
            src={meal[i].strMealThumb}
            alt={meal[i].strMeal}
          />
        </Link>
        <div className="card-body meal__text">
          <h4 className="card-title meal__name">
            <Link to={`/meals:${meal[i].idMeal}`}>{meal[i].strMeal}</Link>
          </h4>
          <h5 className="meal__category">{meal[i].strCategory}</h5>
          <h5 className="meal__area">{meal[i].strArea}</h5>
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
  }
};

Meal.propTypes = {
  meals: PropTypes.shape({
    idMeal: PropTypes.number,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
  addMealToFavourite: PropTypes.func.isRequired,
  fetchMeals: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  meals: state.meals,
});

const MapDispatchToProps = dispatch => ({
  fetchMeals: mealID => {
    dispatch(fetchMeals(mealID));
  },
});

export default connect(mapStateToProps, MapDispatchToProps)(Meal);