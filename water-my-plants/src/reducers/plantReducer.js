// import { ADD_PLANT, DELETE_PLANT } from '../actions/plantActions';
// import plants from './plants.js'

// const initialState = {
//     plants: plants
// }

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case DELETE_PLANT:
//             return {
//                 ...state,
//                 plants: state.plants.filter(item => (action.payload !== item.id))
//             }
//         case ADD_PLANT: {
//             const newPlant = {
//                 ...action.payload,
//                 id: Date.now()            }
//         }
//         return {
//             ...state,
//             plants: [...state.plants, newPlant]
//         }
//         default:
//             return state;
//     }
// }

// export default reducer
