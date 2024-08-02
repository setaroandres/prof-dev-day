import { MemoryRouter } from "react-router-dom";
import { CatalogPage } from "../../../cars/pages";
import { useCatalog, useCategories } from "../../../shared/queries";
import { render } from "../../../test-utils";
import { CATEGORIES_MOCK, VW_CATALOG_INFORMATION_MOCK } from "../../../test-utils/mock-data";

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

    const { getByText } = render(<MemoryRouter initialEntries={[""]}><CatalogPage /></MemoryRouter>);

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
    const { getByText } = render(<MemoryRouter initialEntries={[""]}><CatalogPage /></MemoryRouter>);

    // Act
    const loadingText = getByText("An error occurred: No data found");

    // Assert
    expect(loadingText).toBeInTheDocument();
  });

  it("should render the component after categories and cars data are loaded and no error ocurred", async () => {
    // Arrange
    mockUseCategories.mockReturnValue({
      data: CATEGORIES_MOCK,
      error: null,
      isLoading: false,
    });

    mockUseCatalog.mockReturnValue({
      data: VW_CATALOG_INFORMATION_MOCK,
      error: null,
      isLoading: false,
    });

    const { getByText } = render(<MemoryRouter initialEntries={[""]}><CatalogPage /></MemoryRouter>);

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
      data: CATEGORIES_MOCK,
      error: null,
      isLoading: false,
    });

    mockUseCatalog.mockReturnValue({
      data: [],
      error: null,
      isLoading: false,
    });

    const { getByText } = render(<MemoryRouter initialEntries={[""]}><CatalogPage /></MemoryRouter>);

    // Act
    const pageTitle = getByText("No data found");

    // Assert
    expect(pageTitle).toBeInTheDocument();
  });
});
