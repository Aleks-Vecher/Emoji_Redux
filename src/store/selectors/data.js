import {createSelector} from "reselect";
import {getSearchValue} from './form'

export const getItems = (state) => state.data.items;

export const getPrintedItems = createSelector(
    (state) => getItems(state),
    (state) => getSearchValue(state),
    (items, searchValue) => {
      let content = [];
      for (let el of items) {
        if (el.title.toLowerCase().includes(`${searchValue}`.toLowerCase())) {
          content = [...content, el]
        }
        if (content.length >= 15) break;

      }
      return content
    }
)