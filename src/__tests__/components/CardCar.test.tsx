import { MemoryRouter } from "react-router-dom";
import { CardCar } from "../../cars/components";
import { render } from "../../test-utils";
import { CAR_MOCK } from "../../test-utils/mock-data";

describe("Component: CardCar", () => {
  beforeEach(() => {});

  it("should render the CardCar component with the correct data", () => {
    // Arrange
    const car = { ...CAR_MOCK };

    // Act
    const { getByText, getByAltText } = render(
      <MemoryRouter initialEntries={[""]}>
        <CardCar car={car} />
      </MemoryRouter>
    );

    // Assert
    const carName = getByText("Ford Falcon");
    const carYear = getByText("1975");
    const carDescription = getByText("Ford Falcon 1975 Description...");
    const carImage = getByAltText("imageListClasses.jpg");
    const carBrand = getByText("FORD");
    const carPrice = getByText("$15250.-");

    expect(carName).toBeInTheDocument();
    expect(carYear).toBeInTheDocument();
    expect(carDescription).toBeInTheDocument();
    expect(carImage).toBeInTheDocument();
    expect(carBrand).toBeInTheDocument();
    expect(carPrice).toBeInTheDocument();
  });

  it("should render de CardCar with the correct elements", () => {
    //arrange
    const car = { ...CAR_MOCK };

    //act
    const { getByText } = render(
      <MemoryRouter initialEntries={[""]}>
        <CardCar car={car} />
      </MemoryRouter>
    );
    const moreLink = getByText("+ More");

    //assert
    expect(getByText("Muscle Car")).toBeInTheDocument();
    expect(moreLink).toHaveTextContent("More"); // to match the whole content
  });

  it("should render the links with the correct href", () => {
    //arrange
    const car = { ...CAR_MOCK };

    //act
    const {getByRole} = render(
      <MemoryRouter initialEntries={[""]}>
        <CardCar car={car} />
      </MemoryRouter>
    );
    const link = getByRole('link', { name: "+ More" });

    //assert
    expect(link).toHaveAttribute("href", "/car/1");
  });
});
