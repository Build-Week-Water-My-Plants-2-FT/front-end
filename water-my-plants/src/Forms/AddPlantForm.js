import React, { useState } from "react";

const AddPlantForm = (props) => {
  const [plant, setPlant] = useState({
    nickname: "",
    species: "",
    h2oFrequency: 0,
    image: "",
  });

  const handleChange = (event) => {
    setPlant({
      ...plant,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addPlant(plant);
  };

  const { nickname, species, h2oFrequency, image } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add Plant</h3>
        <label>Nickname</label>
        <input
          value={nickname}
          onChange={handleChange}
          name="name"
          type="text"
        />
        <label>Species</label>
        <input
          value={species}
          onChange={handleChange}
          name="species"
          type="text"
        />
        <label>Water Needs</label>
        <input
          value={h2oFrequency}
          onChange={handleChange}
          name="h2ofrequency"
          type="text"
        />
        <input value={image} onChange={handleChange} name="image" type="file" />
      </form>
    </div>
  );
};

export default AddPlantForm;
