import { create } from "zustand";

export const useHistoryList = create( (set) => ({
    data: [],
    addData: (name, price, amount, mainItem) => set(state => ({
        data: [...state.data, {
            name: name,
            price: price,
            mainItem: mainItem,
            group_id: Date.now(),
            amount: amount
        }]
    }))
}))