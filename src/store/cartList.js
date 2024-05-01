import { create } from "zustand";

export const useCartList = create((set) => ({
   data: [],
   addData: (name, price) => set((state) => ({data: [...state.data, {
    name: name,
    price: price,
    id: Date.now()
   }]})),
   removeData: (id) => set((state) => ({data: state.data.filter((car) => car.id !== id)}))
}))