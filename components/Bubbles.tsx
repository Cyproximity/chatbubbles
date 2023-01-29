import { Box, Typography, Paper, Stack } from "@mui/material";

export interface Bubble {
  message: string;
  datetime: string;
  isRight?: boolean;
}

const BubbleItem = (props: Bubble) => {
  return (
    <Box sx={{ marginBottom: "1em", maxWidth: "80%" }}>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: props.isRight ? "#2975d0" : "#fff",
          padding: "1em",
          borderRadius: 4,
          border: props.isRight ? "" : "1px solid #F1F1F1",
          boxShadow: props.isRight ? "" : "1px 1px 24px #F3F3F3",
        }}
      >
        <Box>
          <Typography
            sx={{ color: props.isRight ? "#fff" : "#000", fontSize: "18px" }}
          >
            {props.message}
          </Typography>
        </Box>
      </Paper>
      <Box>
        <Typography
          align={props.isRight ? "right" : "left"}
          sx={{
            color: "#6D737E",
            marginTop: "4px",
            padding: "0 1em",
            fontWeight: 500,
          }}
        >
          {props.datetime}
        </Typography>
      </Box>
    </Box>
  );
};

export interface BubbleProps {
  bubbles: Bubble[];
}

export default function Bubbles(props: BubbleProps) {
  return (
    <Box>
      {props.bubbles.map((bubble: Bubble, i) => (
        <Stack
          key={i}
          direction="row"
          justifyContent={!bubble.isRight ? "flex-start" : "flex-end"}
          alignItems="center"
        >
          <BubbleItem {...bubble} />
        </Stack>
      ))}
    </Box>
  );
}
