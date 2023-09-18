import { ErrorState } from "./error-state.model";

export interface PageState {
    loading: boolean,
    errorState: Partial<ErrorState>,
    empty: boolean
}