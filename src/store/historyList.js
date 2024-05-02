import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useHistoryList = create( persist( (set) => ({
    data: [],
    addData: (name, price, amount, mainItem, img) => set(state => ({
        data: [...state.data, {
            name: name,
            price: price,
            mainItem: mainItem,
            group_id: Date.now(),
            amount: amount,
            image: img
        }]
    }))
}),
    {
        name: "history-storage",
        storage: createJSONStorage(() => sessionStorage)
    }
    ),
)