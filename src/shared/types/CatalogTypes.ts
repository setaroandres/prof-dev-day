export type Category = {
  id: number;
  name: string;
};

export type Car = {
  id: number;
  name: string;
  year: number;
  categoryId: number;
  price: number;
  img?: string;
};