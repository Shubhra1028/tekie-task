import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Typography
} from "@material-ui/core";

export default function ResultCards(props) {
  return (
    <div className="srch-cards">
      <Card className="cards">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.ship.name}
            height="200"
            image={props.ship.image}
            title={props.ship.name}
          />
        </CardActionArea>
        <CardActions className="card-actions">
          <Typography variant="h5" component="h4">
            {props.ship.name}
          </Typography>
          <Typography variant="h5" component="h4">
            PORT : {props.ship.home_port}
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}
