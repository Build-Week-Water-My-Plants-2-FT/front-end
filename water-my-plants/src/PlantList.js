import React from 'react';
import PlantListItem from './PlantListItem';

const PlantList = (props) => {
    const { plants } = props
    console.log(props)
    return (
        <div>
            <ul>
                <li>Knickname</li>
                <li>Species</li>
                <li>Water Need</li>
            </ul>

            <body>
                {
                    plants.map(plant =><PlantListItem
                    key={plant.id} plant={plant}/>)
                }
            </body>
        </div>
    )
}

export default PlantList