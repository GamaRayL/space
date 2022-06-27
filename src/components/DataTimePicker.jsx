import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useState } from "react";
import { filterByDate } from "store/articlesSlice";
import { useDispatch } from "react-redux";

export default function DataTimePicker() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (newValue) => {
    const selectDate = newValue.toISOString();
    console.log(selectDate);
    dispatch(filterByDate({ selectDate }));
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={1}>
        <DateTimePicker
          label="От"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        {/* <DateTimePicker
          label="До"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
      </Stack>
    </LocalizationProvider>
  );
}
