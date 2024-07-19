import { CatalogPage } from "../../../cars/pages";
import { useCatalog, useCategories } from "../../../shared/queries";
import { render } from "../../../test-utils";

const mockUseCategories = useCategories as jest.Mock;
const mockUseCatalog = useCatalog as jest.Mock;

jest.mock("../../../shared/queries", () => ({
  ...jest.requireActual("../../../shared/queries"),
  useCategories: jest.fn(),
  useCatalog: jest.fn(),
}));

describe("Component: CatalogPage", () => {
  beforeEach(() => {});

  it("should render the loading state", () => {
    // Arrange
    mockUseCategories.mockReturnValue({
      data: [],
      error: null,
      isLoading: true,
    });

    mockUseCatalog.mockReturnValue({
      data: [],
      error: null,
      isLoading: true,
    });

    const { getByText } = render(<CatalogPage />);

    // Act
    const loadingText = getByText("Loading...");

    // Assert
    expect(loadingText).toBeInTheDocument();
  });
  it("should render the error state", () => {
    // Arrange
    mockUseCategories.mockReturnValue({
      data: [],
      error: { message: "No data found" },
      isLoading: false,
    });

    mockUseCatalog.mockReturnValue({
      data: [],
      error: { message: "No data found" },
      isLoading: false,
    });
    const { getByText } = render(<CatalogPage />);

    // Act
    const loadingText = getByText("An error occurred: No data found");

    // Assert
    expect(loadingText).toBeInTheDocument();
  });

  it("should render the component after categories and cars data are loaded and no error ocurred", async () => {
    // Arrange
    mockUseCategories.mockReturnValue({
      data: [
        { id: 1, name: "Category 1" },
        { id: 2, name: "Category 2" },
      ], // los datos que deseas retornar
      error: null,
      isLoading: false,
    });

    mockUseCatalog.mockReturnValue({
      data: [
        {
          id: 1,
          name: "Ford Bronco",
          year: 1982,
          category: "Vintage 4x4",
          price: 125500,
          img: "img.jpg",
          description: "Mocked description",
          brand: "Ford",
        },
      ],
      error: null,
      isLoading: false,
    });

    const { getByText } = render(<CatalogPage />);

    // Act
    const pageTitle = getByText("Cars");
    const category = getByText("Category 1");

    // Assert
    expect(category).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });
  it("should render the not data found message when catalog is empty", async () => {
    // Arrange
    mockUseCategories.mockReturnValue({
      data: [
        { id: 1, name: "Category 1" },
        { id: 2, name: "Category 2" },
      ],
      error: null,
      isLoading: false,
    });

    mockUseCatalog.mockReturnValue({
      data: [],
      error: null,
      isLoading: false,
    });

    const { getByText } = render(<CatalogPage />);

    // Act
    const pageTitle = getByText("No data found");

    // Assert
    expect(pageTitle).toBeInTheDocument();
  });
});
