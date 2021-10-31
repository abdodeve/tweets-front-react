import React, { useEffect, useState, Dispatch } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Stack from "@mui/material/Stack";

export default function BasicTextFields({
  keyword1tRef,
  keyword1,
  keyword2,
  setKeyword1,
  setKeyword2,
  handleSearch,
  handleReset,
  handleStop,
}: {
  keyword1tRef: React.MutableRefObject<HTMLInputElement | undefined>;
  setKeyword1: Dispatch<string>;
  setKeyword2: Dispatch<string>;
  handleSearch: Function;
  handleReset: Function;
  handleStop: Function;
  keyword1: string;
  keyword2: string;
}) {
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
              setKeyword1(event.target.value);
            }}
            autoFocus
            value={keyword1}
            inputRef={keyword1tRef}
            label="Keyword 1"
            variant="standard"
            style={{ width: "50%" }}
          />
          <TextField
            id="standard-basic"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setKeyword2(event.target.value);
            }}
            value={keyword2}
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
              handleStop();
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
              handleSearch(keyword1, keyword2);
            }}
          >
            Go
          </Button>
        </Stack>
      </Box>
    </>
  );
}
