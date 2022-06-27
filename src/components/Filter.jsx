import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

export default function Filter({ articles, isAuthor, handleChange }) {
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
          <em>Выбор автора</em>
        </MenuItem>
        {articles.map((article, index) => (
          <MenuItem key={index} value={article.author}>
            {article.author}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
