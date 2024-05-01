import { create } from "zustand";

export const useStoreList = create( (set) => ({
    amount: 40,
    increaseAmountByOne: () => set((state) => ({ amount: state.amount + 1}))
})
)