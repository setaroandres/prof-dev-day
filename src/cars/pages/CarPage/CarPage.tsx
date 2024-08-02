import { useParams } from "react-router-dom";

export const CarPage = () => {
  const { carid } = useParams();

  return <div>CarPage: {carid}</div>;
};
