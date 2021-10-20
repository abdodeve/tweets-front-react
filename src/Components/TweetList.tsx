import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Twitter from "@mui/icons-material/Twitter";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Stack } from "@mui/material";

export default function AlignItemsList({
  data,
  inputName,
  keyword,
}: {
  data: string[];
  inputName: string;
  keyword: string;
}) {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Typography variant="h6" fontWeight="300">
          {inputName}:
        </Typography>
        <Typography variant="h6" fontWeight="500">
          {keyword}
        </Typography>
      </Stack>
      <List
        sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
        disablePadding
      >
        {data.map((value, index) => {
          return (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemIcon>
                  <Twitter style={{ fill: "#1DA1F2" }} />
                </ListItemIcon>
                <ListItemText
                  secondary={<React.Fragment>{value}</React.Fragment>}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
}
