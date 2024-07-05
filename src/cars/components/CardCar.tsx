import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Car } from "../../shared/types";

type CardCardProps = {
  car: Car;
};

export const CardCar = ({ car }: CardCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={car.img || "https://via.placeholder.com/300"}
          alt={car.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {car.year} - {car.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
