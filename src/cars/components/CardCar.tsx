import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { IVWCatalogInformation } from "../../shared/types";
import { generatePath, Link } from "react-router-dom";
import { ROUTES } from "../../router";

type CardCardProps = {
  car: IVWCatalogInformation;
};

export const CardCar = ({ car }: CardCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }} key={car.id}>
      <CardActionArea>
        <label>{car.category}</label>

        <CardMedia
          component="img"
          height="140"
          image={car.img || "https://via.placeholder.com/300"}
          alt={car.img || "Car image"}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            <label>{car.year}</label> <label>{car.name}</label>
          </Typography>

          <hr />
          <Typography variant="caption" color="text.secondary">
            Price: <label>${car.price}.-</label>
          </Typography>
          <hr />

          <Typography variant="body2" color="text.secondary">
            {car.description.substring(0, 100)}...
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontWeight: "700", marginTop: "10px", display: "block" }}
          >
            Brand: <label>{car.brand.toUpperCase()}</label>
          </Typography>
          <Link
            to={generatePath(`${ROUTES.car}`, {
              carid: car.id,
            })}
          >
            + More
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
