import React, { Component } from 'react';
import './favourite.css';
import foodStore from "../../stores/foodStore";


export default class Favourite extends Component{

        constructor(props){
            super(props);
            this.state = {favourites : [],
            cartCount: 0};
            this.getFoodData = this.getFoodData.bind(this);
        }


        componentWillMount() {
            foodStore.on('change', this.getFoodData)
        }

        getFoodData(){
            this.setState({favourites:foodStore.getFoodData().recipes,
            cartCount: foodStore.getCartCount()});

        }

        renderFavourites(){
            return(
                <ul className="favourites-container">

                    {this.state.favourites.map(function(favourite, index){

                        return(
                            <li key ={Math.random(index)} >
                            {
                                favourite.isFavourite &&
                                    <div className="favourite-card">
                                        <img src = {favourite.image}/>
                                        <div className="card-fotter">
                                            <span>{favourite.name}</span>
                                            <button className="upper-case theme-color">Reorder</button>
                                    </div>
                                    </div>
                            }
                            </li>
                        )
                    }
                    )
                    }

                </ul>
            )
        }

        render(){
            return(
            <div className="favourites-section">
               <div className="favourites-section-1">
                <div className="upper-case sub-heading">Favourites</div>
                   <div><img src="assests/images/shoppingcart.svg"/>

                   {this.state.cartCount}</div>
               </div>
                <div className="tag-line">Enjoy what you have been ordering!</div>
                {this.renderFavourites()}
            </div>)
        }
}
