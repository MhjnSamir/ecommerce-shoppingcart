import { AnyAction, combineReducers } from "redux";

export const appReducer = combineReducers({
});

export type RootState = ReturnType<typeof appReducer>;
type TState = ReturnType<typeof appReducer> | undefined;

export const rootReducer = (state: TState, action: AnyAction) => {
    if (action.type === "USER_LOG_OUT") {
        state = undefined;
        try {
            // TokenService.clearToken();
        } catch (err) {
            console.error("Token Removal Error", err);
        }
    }

    return appReducer(state, action);
};
