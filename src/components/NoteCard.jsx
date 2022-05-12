import React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import { red, green, yellow, blue } from "@mui/material/colors";

export const NoteCard = ({ note, handleDelete }) => {
  return (
    <Card
      elevation={1}
      sx={{
        border: note.important ? "1px solid red" : "",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              backgroundColor:
                note.category == "Work"
                  ? green[500]
                  : note.category == "To-dos"
                  ? blue[500]
                  : red[500],
            }}
          >
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};
