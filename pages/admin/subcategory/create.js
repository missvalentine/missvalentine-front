import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import { useSelector } from 'react-redux';

export default function create() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const onSubmit = (event) => {};

  const categories = useSelector((s) => s.products.categories);
  console.log(categories);
  return (
    <div>
      {categories ? (
        <div>
          <TextField
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={category.name}
            label="Choose Category"
            select
            onChange={(e) => setCategoryId(e.target.value)}
            helperText="Please select your currency"
          >
            {categories.map((cate, index) => (
              <MenuItem key={index} value={cate._id} name={cate.name}>
                {cate.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="standard-password-input"
            label="name"
            required
            autoComplete="current-password"
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={onSubmit}>Create</Button>
        </div>
      ) : (
        <div>Create a Category first</div>
      )}
    </div>
  );
}
