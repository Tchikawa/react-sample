import ChangeCharacter from '../components/ChangeCharacter';
import { connect } from 'react-redux';
import { changeCharacter} from '../actions';

const mapStateToProps = (state) => {
  return {
    character: state.ChangeCharacter.character
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeCharacter: (e) => {
    dispatch(changeCharacter(e.target.value));
  },
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(ChangeCharacter);