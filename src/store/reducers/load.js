import initialState from '../initialState'

// action
const SET_LOADED_VALUE = 'SET_LOADED_VALUE'

//action creator
export const setLoadedValue = (loadedValue) => ({
  type: SET_LOADED_VALUE,
  payload: loadedValue,
})

// reducer
export const loadReducer = (state = initialState.load, action) => {
  switch (action.type){
    case SET_LOADED_VALUE:
      return {
        ...state,
        loadedValue: action.payload
      }
  }
  return state
}
