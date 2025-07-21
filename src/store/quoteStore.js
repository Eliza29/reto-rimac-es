import { create } from 'zustand';
import { getData } from '../services/api'

export const useQuoteStore = create((set, get) => ({
    plans: [],
    selectedOption: null, // 'me' o 'family'
    user: {
        age: 35, // traer auth
    },
    loadPlans: async () => {
        const data = await getData('https://rimac-front-end-challenge.netlify.app/api/plans.json');

        console.log('dataquote', data.list)
        set({ plans: data.list });
    },
    selectOption: (option) => set({ selectedOption: option }),
    getModifiedPlans: () => {
        const { plans, selectedOption, user } = get();
        if (!selectedOption) return [];

        return plans.map(plan => {
            let price = plan.price;

            // Descuento si es para mi familia
            if (selectedOption === 'family') price *= 0.95;

            return {
                ...plan,
                price: price.toFixed(2),
            };
        });
    },
}));
