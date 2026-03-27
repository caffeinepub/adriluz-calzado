// Not used in this project
export const CartProvider = ({ children }: { children: React.ReactNode }) =>
  children;
export const useCart = () => ({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  totalItems: 0,
  setIsOpen: () => {},
});
