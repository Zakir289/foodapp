import React, { Component } from 'react';
import './FoodLandingPage.css';
import * as FoodAction from "../actions/FoodAction";
import {Header} from './../components/Header/header';

import foodStore from "../stores/foodStore";
import Favourite from "../components/Favourites/favourite";
import Categories from "../components/categories/categories";

class FoodLandingpage extends Component {
      constructor(props){
          super(props);


      }
      componentWillMount() {
          foodStore.on('change', this.getFoodData)
      }

    componentDidMount() {
        FoodAction.getFoodDetails();
      }

    componentWillUnmount(){

      }

      getFoodData(type){

      }


    render() {

    return (
      <div className="landing-page-container">
            <Header />
            <div className="main-section">
            <Favourite/>
            <Categories/>
            </div>

      </div>
    );
  }
}

export default FoodLandingpage;
