import { create } from "zustand";

export const useHistoryList = create( (set) => ({
    data: [],
    addData: (name, price, id, amount) => set(state => ({
        data: [...state.data, {
            name: name,
            price: price,
            id: id,
            amount: amount
        }]
    }))
}))