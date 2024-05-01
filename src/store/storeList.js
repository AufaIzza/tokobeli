import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStoreList = create(persist( (set) => ({
    amount: 40,
    increaseAmountByOne: () => set((state) => ({ amount: state.amount + 1}))
}),
 {
    name: "amountStorage",
    storage: createJSONStorage(() => sessionStorage)
 }
) 
)