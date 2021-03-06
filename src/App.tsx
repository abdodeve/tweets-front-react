import React, { useEffect, useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { io } from "socket.io-client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import theme from "./Theme";
import GlobalStyles from "./Theme/GlobalStyles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import TweetList from "./Components/TweetList";
import SearchForm from "./Components/SearchForm";
import Chart from "./Components/Chart";
import tweet from "./Types/tweet";

const ENDPOINT: string = "https://tweets-back-node.herokuapp.com";
const socket = io(ENDPOINT);

function App() {
  const defaultTweet = { text: "No data", retweet_count: 0 };
  const [tweet1, setTweet1] = useState<tweet[]>([]);
  const [tweet2, setTweet2] = useState<tweet[]>([]);
  const [keyword1, setKeyword1] = useState<string>("");
  const [keyword2, setKeyword2] = useState<string>("");
  const keyword1tRef = useRef<HTMLInputElement>();

  useEffect(() => {
    var room = "twitter_search";
    socket.on("connect", () => {
      console.log(socket.id);
      socket.emit("room", room);
    });

    socket.on("send_tweet_1", (data) => {
      setTweet1((prev) => {
        return addTweet(prev, data);
      });
    });
    socket.on("send_tweet_2", (data) => {
      setTweet2((prev) => {
        return addTweet(prev, data);
      });
    });

    return () => {
      socket.emit("stop_search");
      socket.disconnect();
    };
  }, []);

  function addTweet(list: tweet[], newEl: tweet) {
    const newList = [newEl, ...list];
    if (newList.length > 5) newList.length = 5;
    return newList;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                maxWidth: 800,
                my: 1,
                mx: "auto",
                p: 2,
              }}
            >
              <SearchForm
                keyword1tRef={keyword1tRef}
                setKeyword1={setKeyword1}
                setKeyword2={setKeyword2}
                keyword1={keyword1}
                keyword2={keyword2}
                handleSearch={(
                  firstKeyword: string,
                  secondeKeyword: string
                ) => {
                  socket.emit("send_keywords", {
                    firstKeyword,
                    secondeKeyword,
                  });
                }}
                handleReset={() => {
                  socket.emit("stop_search");
                  setTweet1([]);
                  setTweet2([]);
                  setKeyword1("");
                  setKeyword2("");
                  keyword1tRef.current?.focus();
                  console.log("keyword1tRef==>", keyword1tRef);
                }}
                handleStop={() => {
                  socket.emit("stop_search");
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} p={2}>
          <Grid item xs={4}>
            <TweetList data={tweet1} inputName="Keyword 1" keyword={keyword1} />
          </Grid>
          <Grid item xs={4}>
            <TweetList data={tweet2} inputName="Keyword 2" keyword={keyword2} />
          </Grid>
          <Grid item xs={4} style={{ maxHeight: 400 }}>
            <Chart
              keyword1={keyword1}
              keyword2={keyword2}
              tweet1={tweet1}
              tweet2={tweet2}
            />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
