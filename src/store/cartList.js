import { create } from "zustand";

export const useCartList = create((set) => ({
   data: [],
   addData: (name, price,id) => set((state) => { 
      const sameIdFound = state.data.some(el => el.id === id)
      if (!sameIdFound) {
      return({data: [...state.data, {
       name: name,
       price: price,
       id: id,
       amount: 1
      }]})
   } else {
      let placeholderAmount2 = 0
      let placeholderAmount = (id) => {
         state.data.forEach(element => {
            if (element.id === id) {
               placeholderAmount2 = element.amount
            }
         })
      }
      let placeholder = state.data.filter(car => car.id !== id)
      placeholderAmount(id)
      return({data: [...placeholder, {
         name: name,
         price: price,
         id: id,
         amount: placeholderAmount2 + 1
      }]})
   }
}),
   addAmountOnId: (id) => set((state) => {
      let selected = state.data.filter(el => el.id === id)
      let selectedSelect = selected[0]
      selectedSelect.amount = selectedSelect.amount + 1
      let notSelected = state.data.filter(el => el.id !== id)
      return({
         data: [...notSelected, selectedSelect]
      })
   }),
   substractAmountOnId: (id) => set((state) => {
      let selected = state.data.filter(el => el.id === id)
      let selectedSelect = selected[0]
      selectedSelect.amount = selectedSelect.amount - 1
      let notSelected = state.data.filter(el => el.id !== id)
      if (selectedSelect.amount !== 0) {
         return({
            data: [...notSelected, selectedSelect]
         })
      } else {
         return({
            data: [...notSelected]
         })
      }
   }),
   updateAmountOnId: (id) => set((state) => {
      return({
         data: [...state.data]
      })
   }),  
   removeDataOnId: (id) => set((state) => ({data: state.data.filter((car) => car.id !== id)})),
   deleteData: () => set(() => ({data: []}))
}))