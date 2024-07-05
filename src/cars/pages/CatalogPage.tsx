import { Button, ButtonGroup, Container, Grid, Typography } from "@mui/material";
import { useCategories, useCars } from "../../shared/queries";
import { CardCar } from "../components";

export const CatalogPage = () => {
  const { data: categories, error, isLoading } = useCategories();
  const { data: cars, error: errorCars, isLoading: isLoadingCars } = useCars();

  if (isLoading || isLoadingCars) return <div>Loading...</div>;
  if (error || errorCars) return <div>An error occurred: {error?.message}</div>;

  return (
    <>
      <Typography variant="h4" mt={4} mb={2}>Catalog Page</Typography>

      <ButtonGroup variant="contained" aria-label="Categories ">
        {categories?.map((category) => (
          <Button key={category.id}>{category.name}</Button>
        ))}
      </ButtonGroup>

      <Typography variant="h5" mt={4} mb={2}>Cars</Typography>

      <Container maxWidth={"lg"}>
        <Grid container spacing={3}>
          {cars?.map((car) => (
            <Grid item key={car.id} xs={12} sm={6} md={4}>
              <CardCar car={car} />
            </Grid>
          ))}
        </Grid>
      </Container>

    </>
  );
};
