import EmojiContainer from "./EmojiContainer";
import {connect} from 'react-redux'
import {setItems} from '../../store/reducers/data'
import {getLoadedValue} from "../../store/selectors/load";

import {getPrintedItems} from "../../store/selectors/data";

const mapStateToProps = (state) => ({
  items: getPrintedItems(state),
  load: getLoadedValue(state)
})

// const mapDispatchToProps = (dispatch) => ({
//   setItems,
// })

export default connect(
    mapStateToProps
    // mapDispatchToProps,
)(EmojiContainer)