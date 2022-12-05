//  @TODO1 - Create basic routing app

import { Grid, Button } from "@mui/material";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppRoutes } from "./routes/routes";

const App = () => {
  const navigate = useNavigate();
  const id = Math.floor(Math.random() * 100);
  const operation = "sum";
  return (
    <div>
      <Grid container>
        <Grid item xs>
          <Button onClick={() => navigate("/home")}>Home</Button>
        </Grid>
        <Grid item xs>
          <Button onClick={() => navigate("/posts")}>Posts</Button>
        </Grid>
        <Grid item xs>
          <Button onClick={() => navigate(`/posts/${id}`)}>
            Posts with Random Id
          </Button>
          {/* <Link to={`/posts/${id}/`}>Posts with Random Id</Link> */}
        </Grid>
        <Grid item xs>
          <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
        </Grid>
        <Grid item xs>
          <Button onClick={() => navigate("/creatures")}>Creatures</Button>
        </Grid>
        <Grid item xs>
          <Button onClick={() => navigate("/clockstart")}>Clock</Button>
        </Grid>
      </Grid>
      <AppRoutes />
    </div>
  );
};

export default App;