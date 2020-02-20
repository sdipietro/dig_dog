import UserIndexItem from './user_index_item';
import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';

const mapStatetoProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
};

export default connect(mapStatetoProps, mapDispatchToProps)(UserIndexItem);