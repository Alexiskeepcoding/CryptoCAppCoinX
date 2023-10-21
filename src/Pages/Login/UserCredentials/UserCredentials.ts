import { create } from "zustand";

export interface IUserApp {
    user: object | undefined;
    loading: boolean;
    setUser: (user: object) => void;
    setLoading: (loading: boolean) => void;
}


export const useUserCredentials = create <IUserApp>((set) => ({
    user: undefined,
    loading: false,
    setLoading: (loading: boolean) => set({ loading }),
    setUser: (user: object) => set({ user }),
}));