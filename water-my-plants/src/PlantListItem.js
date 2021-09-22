import React from 'react';
import { Link } from 'react-router-dom';

const PlantListItem = (props) => {
    const { id, knickname, species, h2oFrequency, image} = props.plant;

    return (
        <div key = {id}>
            <ul>
                <li>{knickname}</li>
                <li>{species}</li>
                <li>{h2oFrequency}</li>
                <li>{image}</li>
                <li>
                    <Link to ={`/plants/${id}`}>
                        <input
                            type='button'
                            value='plants'/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default PlantListItem