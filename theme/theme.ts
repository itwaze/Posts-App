import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

const createMyTheme = (options: ThemeOptions) => {
  return createMuiTheme({
    ...options,
  })
}

const theme = createMyTheme({
  palette: {
    primary: {
      main: "#ffd565",
    }
  }
});

export default theme