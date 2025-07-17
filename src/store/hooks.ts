import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store.ts";

// Custom hook per dispatch tipizzato:
// Usa AppDispatch, che conosce le azioni definite nello store
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Custom hook per selector tipizzato:
// Garantisce che lo stato usato dai componenti sia di tipo RootState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
