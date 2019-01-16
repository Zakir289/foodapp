import {EventEmitter} from "events";
import dispatcher from "./../dispatcher/dispatcher";

class FoodStore extends EventEmitter{



    constructor(props){
        super(props);
        this.foodData = {};
        this.cartCount = 0;
    }

    setCartCount(){
        this.cartCount++;
        this.emit('change','CART_COUNT')
    }

    getCartCount(){
        return this.cartCount;
    }

    setFoodData(data){
        this.foodData = data;
        this.emit('change')
    }

    getFoodData(){
        return this.foodData;
    }



    _handleActions(action){
        switch(action.type){

            case 'FOOD_DATA': {
                this.setFoodData(action.response);
                break;
            }


        }
    }
}

const foodStore = new FoodStore();
dispatcher.register(foodStore._handleActions.bind(foodStore));
export default foodStore;