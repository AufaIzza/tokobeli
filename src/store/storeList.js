import { create } from "zustand";

export const useStoreList = create( () => ({
    data: [
        {
            id: 0,
            name: "Frying Pan",
            price: 100000,
            image: "https://cdn.discordapp.com/attachments/1163519312716386324/1235577910874865836/28cm-deep-frying-pan-loreto-red.png?ex=6634e119&is=66338f99&hm=6e6373a58e692629367c6eb32bfe1ff5889835f3609c19cdcf8e8c976596b6c1&"
        },
        {
            id: 1,
            name: "Pencil",
            price: 2500,
            image: "https://cdn.discordapp.com/attachments/1163519312716386324/1235577995914248333/yellow-pencil-1.png?ex=6634e12e&is=66338fae&hm=d278dda62de9cd46016416f0b7459f45b409dd4deadc43274069eb99e87c9740&"
        },
        {
            id: 2,
            name: "Headset",
            price: 250000,
            image: "https://cdn.discordapp.com/attachments/1163519312716386324/1235578111270195252/zone-wireless-gallery-01.png?ex=6634e149&is=66338fc9&hm=14370d1d469f718c45708523b5d8ae38fd74a812ab10762ccb657dd213e6d186&"
        },
        {
            id: 3,
            name: "Books",
            price: 45000,
            image: "https://cdn.discordapp.com/attachments/1163519312716386324/1235578187296145469/Stack-books.png?ex=6634e15b&is=66338fdb&hm=5b5614815d196bb9b5b0afb6b91db3b47ed0dbe5966199db1bc5bb2c929d3feb&"
        }
    ]
}) 
)