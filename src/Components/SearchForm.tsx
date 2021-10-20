import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Stack from "@mui/material/Stack";

export default function BasicTextFields({
  setKeyword1,
  setKeyword2,
  handleSearch,
  handleReset,
}: {
  setKeyword1: any;
  setKeyword2: any;
  handleSearch: any;
  handleReset: any;
}) {
  const [firstKeyword, setfirstKeyword] = useState("");
  const [secondeKeyword, setSecondeKeyword] = useState("");
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction="row" spacing={2}>
          <TextField
            id="standard-basic"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setfirstKeyword(event.target.value);
              setKeyword1(event.target.value);
            }}
            label="Keyword 1"
            variant="standard"
            style={{ width: "50%" }}
          />
          <TextField
            id="standard-basic"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSecondeKeyword(event.target.value);
              setKeyword2(event.target.value);
            }}
            label="Keyword 2"
            variant="standard"
            style={{ width: "50%" }}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="outlined"
            endIcon={<ClearIcon />}
            onClick={() => {
              handleReset();
            }}
          >
            Stop
          </Button>
          <Button
            variant="outlined"
            endIcon={<ClearIcon />}
            onClick={() => {
              handleReset();
            }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            endIcon={<SearchIcon />}
            onClick={() => {
              handleSearch(firstKeyword, secondeKeyword);
            }}
          >
            Go
          </Button>
        </Stack>
      </Box>
    </>
  );
}
