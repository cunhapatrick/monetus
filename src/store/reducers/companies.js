const INITIAL_STATE = {
  loading: false,
  data: [],
};

export default function companies(state = INITIAL_STATE, action) {
  let res;
  switch (action.type) {
    case 'ADD_COMPANY_REQUEST':
      return { ...state, loading: true };
    case 'ADD_COMPANY_SUCCESS':
      res = { ...state, loading: false, data: [...state.data, action.payload.data] };

      return res;

    default: return state;
  }
}
