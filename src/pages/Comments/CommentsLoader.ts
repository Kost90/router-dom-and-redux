import { store } from "../../store/store";
import { fetchComments } from "../../store/comments";

export const commentsLoader = async () => {
    return store.dispatch(fetchComments())
}