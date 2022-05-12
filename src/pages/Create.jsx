import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Checkbox,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [category, setCategory] = useState("To-dos");
  const [important, setImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setContentError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (content === "") {
      setContentError(true);
    }

    console.log(important);

    if (title && content) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          category,
          important,
        }),
      }).then(() => {
        navigate("/");
      });
    }
  };
  return (
    <Container>
      <Typography variant="h6" component="h2" gutterBottom>
        Create a new Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <FormControlLabel
          control={
            <Checkbox
              checked={important}
              onChange={(e) => setImportant(e.target.checked)}
            />
          }
          label="Important"
        />

        <TextField
          onChange={(e) => setTitle(e.target.value)}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          fullWidth
          required
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
          error={titleError}
        />
        <TextField
          onChange={(e) => setContent(e.target.value)}
          id="outlined-basic"
          label="Content"
          variant="outlined"
          fullWidth
          multiline
          rows={5}
          required
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
          error={contentError}
        />

        <FormControl
          sx={{ marginTop: "20px", marginBottom: "20px", display: "block" }}
        >
          <FormLabel>Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="To-dos"
              control={<Radio />}
              label="To-dos"
            />
            <FormControlLabel
              value="Reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="Work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          sx={{
            marginTop: "1rem",
          }}
          variant="contained"
          type="submit"
          fontSize="large"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};
