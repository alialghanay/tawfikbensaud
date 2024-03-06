import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        fontSize: "16",
      },
    },
  },
});
