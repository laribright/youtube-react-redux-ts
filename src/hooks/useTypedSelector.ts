import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store";

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector