import { create } from 'zustand';

const initialUser = {
    celular: '',
    numeroDocumento: '',
    tipoDocumento: '',
    comunicaciones: false,
    terminos: false,
    name: '',
    lastName: '',
    birthDay: '',
};

export const useAuthStore = create((set) => ({
    isLoggedIn: false,
    user: { ...initialUser },

    login: (partialUser) =>
        set(() => ({
            isLoggedIn: true,
            user: {
                ...initialUser,
                ...partialUser,
            },
        })),

    setName: (name, lastName, birthDay) =>
        set((state) => ({
            user: {
                ...state.user,
                name,
                lastName,
                birthDay,
            },
        })),

    logout: () =>
        set(() => ({
            isLoggedIn: false,
            user: { ...initialUser },
        })),


}));