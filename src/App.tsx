import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { io } from "socket.io-client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import GlobalStyles from "./Theme/GlobalStyles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const ENDPOINT: string = "http://localhost:8081";
const socket = io(ENDPOINT);

function App() {
  console.log("abc");
  // client-side

  // socket.on("disconnect", () => {
  //   console.log("disconnect==>", socket.id); // undefined
  // });

  const [response, setResponse] = useState<string[]>(["abc", "efg"]);
  const [myName, setMyName] = useState<string>("Abde");
  const [loadClient, setLoadClient] = useState(true);

  useEffect(() => {
    console.log("Use effet works");
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });

    socket.on("news_by_server", (data) => {
      console.log(data);
      setResponse((prev) => {
        return addTweet(prev, data);
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [loadClient]);

  function addTweet(list: string[], newEl: string) {
    const newList = [newEl, ...list];
    newList.length = 5;
    return newList;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div className="App">
        <header className="App-header">
          <button onClick={() => setLoadClient((prevState) => !prevState)}>
            STOP CLIENT
          </button>
          <button
            onClick={() => {
              console.log("works");
              setMyName(Math.random().toString());
              //response.push("Abdel");
              setResponse((resp) => [...response, "Abdooo1"]);
            }}
          >
            Check
          </button>
          <h1>{myName}</h1>
          {loadClient ? (
            <>
              {response.map((value, index) => {
                return (
                  <p style={{ fontSize: 10 }} key={index}>
                    {value}
                  </p>
                );
              })}
            </>
          ) : null}
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
