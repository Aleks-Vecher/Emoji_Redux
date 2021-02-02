import initialState from '../initialState'

const SET_ITEMS = 'SET_ITEMS'

export const setItems = (items) => ({
  type: SET_ITEMS,
  payload: items,
})


export const dataReducer = (state = initialState.data, action) => {
  switch (action.type){
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      }
  }
  return state
}