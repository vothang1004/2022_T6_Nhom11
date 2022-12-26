import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function SelectBase({ lable = "Lable", options, value, setValue }) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{lable}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={lable}
        onChange={(e) => setValue(e.target.value)}
      >
        <MenuItem value="">Tất cả</MenuItem>
        {options &&
          options.map((option) => (
            <MenuItem key={option._id} value={option._id}>
              {option.name || `${option.day}/${option.month}/${option.year}`}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

export default SelectBase;
