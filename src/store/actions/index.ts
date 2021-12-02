import Post from "../../models/postModel";
import ActionType from "./action-types";

interface GetPostRequestAction {
  type: ActionType.GET_POST_REQUEST;
}

interface GetPostSuccessAction {
  type: ActionType.GET_POST_SUCCESS;
  payload: Post[];
}

interface GetPostFailAction {
  type: ActionType.GET_POST_FAIL;
  payload: string;
}

export type Action =
  | GetPostRequestAction
  | GetPostSuccessAction
  | GetPostFailAction;
