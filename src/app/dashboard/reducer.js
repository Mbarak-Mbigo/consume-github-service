import { FETCH_REPOS_SUCCEEDED } from "./actions";

const initialState = {
  repos: {},
  isLoading: false,
  hasErrors: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_REPOS_SUCCEEDED: {
      return {
        ...state,
        repos: action.payLoad
      };
    }

    default: {
      return state;
    }
  }
};
