"use client";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const MakeNote = () => {
  const [note, setNote] = useState<string>(localStorage.getItem("note") || ""); // Persist note with localStorage

  const handleSaveNote = () => {
    localStorage.setItem("note", note); // Save the note to localStorage
  };

  return (
    <div>
      <TextField
        fullWidth
        multiline
        rows={6}
        label="Make a Note"
        variant="outlined"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSaveNote}
        sx={{ mt: 2 }}
      >
        Save Note
      </Button>
    </div>
  );
};

export default MakeNote;
