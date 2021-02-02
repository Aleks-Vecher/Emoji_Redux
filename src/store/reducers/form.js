import initialState from '../initialState'

//action constant
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';

//action creator
export const setSearchValue = (searchValue) => ({
  type: SET_SEARCH_VALUE,
  payload: searchValue
})

//reducer
export const formReducer = (state = initialState.form, action) => {
  if (action.type === SET_SEARCH_VALUE){
    return {
      ...state,
      searchValue: action.payload,
    }
  }
  return state
}