import { Box, Button, TextField, Stack } from "@mui/material";

export interface QuestionFormProps {
  handleSubmit: (e: any) => void;
  onMessageChange: (e: any) => void;
  message: string;
}

export default function QuestionForm({
  handleSubmit,
  onMessageChange,
  message,
}: QuestionFormProps) {
  return (
    <Box sx={{ marginTop: "2em" }}>
      <form noValidate onSubmit={handleSubmit}>
        <Stack direction="row" spacing={4} alignItems="center">
          <TextField
            fullWidth
            variant="outlined"
            onChange={onMessageChange}
            placeholder="Ask a question"
            value={message}
            required
            className="question"
          />
          <Button
            variant="contained"
            type="submit"
            size="large"
            sx={{
              borderRadius: 4,
              width: 220,
              minHeight: 60,
              fontSize: 20,
              textTransform: "unset",
              lineHeight: "unset",
              paddingLeft: "unset",
              paddingRight: "unset",
            }}
          >
            Ask question
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
