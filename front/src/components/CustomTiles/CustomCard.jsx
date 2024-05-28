import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import defImg from "../../assets/stub.jpg";

export default function CustomCard({head, body, img}) {
  return (
    <Card sx={{ width: 350, minHeight: 280 }}>
      <CardMedia
        sx={{ height: 170 }}
        image={img ? img : defImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {head}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      {/* <CardActions>
            <Button size="small">Открыть</Button>
          </CardActions> */}
    </Card>
  );
}
