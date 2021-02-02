import {connect} from 'react-redux'
import Form from './Form'
import {setSearchValue} from "../../store/reducers/form";
import {getSearchValue} from "../../store/selectors/form";

const mapStateToProps = state => ({
  searchValue: getSearchValue(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(setSearchValue(event.target.value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)