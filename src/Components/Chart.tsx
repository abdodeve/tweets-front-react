import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import tweet from "./../Types/tweet";

export default function Chart({
  keyword1,
  keyword2,
  tweet1,
  tweet2,
}: {
  keyword1: string;
  keyword2: string;
  tweet1: tweet[];
  tweet2: tweet[];
}) {
  const [chartData, setChartData] = useState([
    {
      name: "Keyword1",
      retweet: 0,
    },
    {
      name: "Keyword2",
      retweet: 0,
    },
  ]);

  useEffect(() => {
    setChartData([
      {
        name: keyword1,
        retweet: tweet1.length ? tweet1[0].retweet_count : 0,
      },
      {
        name: keyword2,
        retweet: tweet2.length ? tweet2[0].retweet_count : 0,
      },
    ]);
    return () => {};
  }, [tweet1, tweet2]);
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Typography variant="h6" fontWeight="500">
          Chart
        </Typography>
      </Stack>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="retweet" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
