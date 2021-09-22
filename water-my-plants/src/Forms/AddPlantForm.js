import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'

const AddPlantForm = (props => {
    const { push } = useHistory();

    const [plant, setPlant] = useState({
        nickname: '',
        species: '',
        h2oFrequency: 0,
        image: '',
    })

    const handleChange = (event) => {
        setPlant({
            ...plant,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addPlant(plant)
        push('/plants')
    }

    const { nickname, species, h2oFrequency, image } = props;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Add Plant</h3>
                <label>Nickname</label>
                <input
                    value={nickname}
                    onChange={handleChange}
                    name='name'
                    type='text' />
                <label>Species</label>
                <input
                    value={species}
                    onChange={handleChange}
                    name='species'
                    type='text' />
                <label>Water Needs</label>
                <input
                    value={h2oFrequency}
                    onChange={handleChange}
                    name='h2ofrequency'
                    type='text' />
                <input
                    value={image}
                    onChange={handleChange}
                    name='image'
                    type='file' />
                <Link to={`/plants`}>
                <input 
                    type='button'
                    value='add' />
                </Link>
            </form>
        </div>
    )
})

export default AddPlantForm