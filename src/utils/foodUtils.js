import Url from './../constants/urls';
import api from './../Api/api';
import dispatcher from './../dispatcher/dispatcher'

export default {
    _getFoodData : function(){
        api._callAPI(Url.FETCH_FOOD_DATA, 'GET', (data) => {
            dispatcher.dispatch({
                type: 'FOOD_DATA',
                response: data
            })
        })
    }
}