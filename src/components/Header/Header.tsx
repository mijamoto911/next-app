import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const HEADER_SX = {
  flexGrow: 1,
};
const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={HEADER_SX}>
            React-Router + Material-UI
          </Typography>
          <Button component={Link} href="/" color="inherit">
            Photos
          </Button>
          <Button component={Link} href="posts" color="inherit">
            Posts
          </Button>
          <Button component={Link} href="comments" color="inherit">
            Comments
          </Button>
          <Button component={Link} href="users" color="inherit">
            Users
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export { Header };
