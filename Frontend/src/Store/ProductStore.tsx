import { create } from "zustand";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  description: string; 
  price: number;
  discountPercentage?: number;
  rating: number; 
  stock: number;
  brand: string;
  category: string;
  sku: string;
  weight: number;
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
  availabilityStatus: string;  
  images: string[];
  meta?: { qrCode?: string } | undefined;
  reviews?: { reviewerName: string; rating: number; comment: string }[] | undefined;
  thumbnail: string;
}

interface ProductStore {
  products: Product[];
  setProducts: (arr : Product[]) => void;

  product: Product | undefined;
  setProduct: (product: Product) => void;

  loading: boolean;
  fetchProducts: () => Promise<void>;

  searchTerm : string;
  setSearchTerm: (val: string)=>void;

  selectedCategory: string | undefined;
  setSelectedCategory: (val: string)=>void;

  selectedSort: string | undefined;
  setSelectedSort: (val: string)=>void;
}

const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  setProducts: (arr: Product[])=>{
    set({ products: arr  })
  },

  product: undefined,
  setProduct: (product: Product) => {
    set({ product });
  },

  loading: false,

  searchTerm: '',
  setSearchTerm: (val: string) => {
    set({ searchTerm: val });
  },

  selectedCategory: undefined,
  setSelectedCategory: (val: string) => {
    set({ selectedCategory: val });
  },

  selectedSort: undefined,
  setSelectedSort: (val: string) => {
    set({ selectedSort: val });
  },

  fetchProducts: async () => {
    set({ loading: true });
    const search = get().searchTerm;
    const category = get().selectedCategory;

    try {
      let response;

      if (search) {
        response = await axios.get(`https://dummyjson.com/products/search?q=${search}`);
        set({ searchTerm: undefined }); // Reset after fetching
      }
      else if (category) {
        response = await axios.get(`https://dummyjson.com/products/category/${category}`);
        set({ selectedCategory: undefined }); // Reset after fetching
      } 
      else {
        response = await axios.get("https://dummyjson.com/products");
      }

      set({ products: response.data.products, loading: false });
    } 
    catch (err) {
      console.error("Error fetching products:", err);
      set({ loading: false });
    }
  },
}));

export default useProductStore;
