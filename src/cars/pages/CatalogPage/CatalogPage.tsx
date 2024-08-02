import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useCategories, useCatalog } from "../../../shared/queries";
import { CardCar } from "../../components";

export const CatalogPage = () => {
  const { data, error, isLoading } = useCategories();
  const {
    data: catalog,
    error: errorCatalog,
    isLoading: isLoadingCatalog,
  } = useCatalog();

  if (isLoading || isLoadingCatalog) return <div>Loading...</div>;
  if (error || errorCatalog)
    return <div>An error occurred: {error?.message}</div>;

  return (
    <>
      <Typography variant="h4" mt={4} mb={2}>
        Catalog Page
      </Typography>

      <ButtonGroup variant="contained" aria-label="Categories ">
        {data?.map((category) => (
          <Button key={category.id}>{category.name}</Button>
        ))}
      </ButtonGroup>

      {catalog?.length ? (
        <Container maxWidth={false}>
          <Typography variant="h5" mt={4} mb={2}>
            Cars
          </Typography>
          <Grid container spacing={2}>
            {catalog?.map((car) => (
              <Grid item key={car.id} xs={12} sm={6} lg={3}>
                <CardCar car={car} key={car.id} />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <Typography>No data found</Typography>
      )}
    </>
  );
};
