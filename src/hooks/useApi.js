export default function useApi() {
  return {
    getItems: async () => {
      const data = await fetch(
        'https://dummyjson.com/products/category/groceries',
      );
      const res = await data.json();

      if (res.products) {
        return res.products;
      }
    },
  };
}
