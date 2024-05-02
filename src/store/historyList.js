import { create } from "zustand";

export const useHistoryList = create( (set) => ({
    data: [],
    addData: (name, price, amount) => set(state => ({
        data: [...state.data, {
            name: name,
            price: price,
            group_id: Date.now(),
            amount: amount
        }]
    }))
}))