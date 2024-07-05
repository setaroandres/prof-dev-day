import { Grid } from "@mui/material"
import { Navbar } from "../../shared/components"
import { Outlet } from "react-router-dom"


export const CarsLayout = () => {
  return (
    <>
        <Navbar />
        <Grid>
            <Outlet />
        </Grid>
    </>
  )
}
