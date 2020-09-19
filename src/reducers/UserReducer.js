import { GET_USERS } from './../actions/type';
const initialState={
    users:[]
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_USERS:
            return{
                ...state,
                users:action.payload.data,
                totalUsers:action.payload.total
            }
        default:
            return state;
          
    }
}