import React, { useEffect } from "react";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LoadingSpinner from "./LoadingSpinner";

const Creatures = () => {

    const [creatures, setCreatures] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchAllCreatures = () => {
        let seaID = 1;
        fetch(`http://acnhapi.com/v1/sea/${seaID}`)
            .then((response) => response.json())
            .then((response) => {
                setTimeout(() => {
                  setCreatures(response);
                  setIsLoading(false);
                }, 3000);
              });
    }

    const RenderUser = () => {
        return (
        <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={creatures.image_uri}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {creatures["file-name"]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {creatures.price}
            Speed: {creatures.speed}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>)
    };


    useEffect(() => {
        fetchAllCreatures();
        return function cleanup() {
            setCreatures([]);
        }
    }, [])


    return (
        <div>
      {isLoading ? <LoadingSpinner /> : <RenderUser />}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>

  );
};

export default Creatures;