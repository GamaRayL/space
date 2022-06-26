import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Typography } from "@mui/material";
import { filterByAuthors } from "store/articlesSlice";
import { useDispatch } from "react-redux";

export default function Filter({ authors }) {
  const [isAuthor, setIsAuthor] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const seletctedAuthor = event.target.value;
    setIsAuthor(seletctedAuthor);
    dispatch(filterByAuthors({ seletctedAuthor }));
  };

  return (
    <FormControl sx={{ width: "-webkit-fill-available", mb: 1 }} size="large">
      <InputLabel id="demo-select-small" variant="filled" size="small">
        <Typography variant="overline">Выбор автора</Typography>
      </InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={isAuthor}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {authors.map((author, index) => (
          <MenuItem key={index} value={author}>
            {author}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
