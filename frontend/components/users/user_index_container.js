import UserIndex from './user_index';
import { fetchAllUsers } from '../../actions/user_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        users: Object.values(state.entities.users)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);