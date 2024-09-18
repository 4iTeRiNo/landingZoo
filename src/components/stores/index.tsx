// src/stores/counter-store.ts
import { DataPetsData } from "@/shared/mock";
import { DataPets } from "@/shared/types";
import { createStore } from "zustand";

export type DataPetState = {
  dataPets: DataPets;
  singOfSale: string;
  isDeleteFlag: boolean;
};

export type CounterActions = {
  deletePetCard: (id: string[]) => void;
  setIsDeleteFlag: () => void;
  setSelectSale: (value: string) => void;
};

export type CounterStore = DataPetState & CounterActions;

export const defaultInitState: DataPetState = {
  dataPets: DataPetsData,
  singOfSale: "all",
  isDeleteFlag: false,
};

export const createCounterStore = (
  initState: DataPetState = defaultInitState
) => {
  return createStore<CounterStore>()((set, get) => ({
    ...initState,
    setSelectSale: (value) => {
      set({ singOfSale: value });
    },
    setIsDeleteFlag: () => {
      return set((state) => ({ isDeleteFlag: !state.isDeleteFlag }));
    },
    deletePetCard: (id: string[]) => {
      const { dataPets } = get();
      const newDataPets = removeCardToId(dataPets, id);
      set({ dataPets: newDataPets });
    },
  }));
};

const removeCardToId = (dataPets: DataPets, id: string[]): DataPets => {
  return dataPets.filter(
    (pet) => pet.id !== id.find((item) => item === pet.id)
  );
};
