import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { deletePlant } from './actions/plantActions';

const Plant = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const { plants, deletePlant } = props
    const plant = plants.find(plant => plant.id === Number(id));

    const handleDeleteClick = () => {
        deletePlant(plant.id)
        push('/plants')
    }

return(
    <div>
        <button onClick={handleDeleteClick}>
        <input 
            type='button'
            value='delete'/>
        Delete</button>
    </div>
)} 

export default Plant