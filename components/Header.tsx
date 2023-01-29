import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ marginBottom: "2em" }}>
      <Typography variant="h5" fontWeight={"800"}>
        Question & Answer
      </Typography>
    </Box>
  );
}
