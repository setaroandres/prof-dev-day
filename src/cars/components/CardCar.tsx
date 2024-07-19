import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { IVWCatalogInformation } from "../../shared/types";

type CardCardProps = {
  car: IVWCatalogInformation;
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
            {car.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
