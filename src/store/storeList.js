import { create } from "zustand";

export const useStoreList = create( () => ({
    data: [
        {
            id: 0,
            name: "panci",
            price: 100000
        },
        {
            id: 1,
            name: "pensil",
            price: 2500
        }
    ]
}) 
)