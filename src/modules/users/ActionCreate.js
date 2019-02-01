import Action from "../auth/Action"
import { dispatch } from "rxjs/internal/observable/range";

export const ActionCreate = formProps => async dispatch => {
    Action.post('/User', formProps)
}