import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ marginBottom: "2em" }}>
      <Typography variant="h5" sx={{ fontWeight: 800, color: "#131926" }}>
        Question & Answer
      </Typography>
    </Box>
  );
}
