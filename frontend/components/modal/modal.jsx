import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import VideoShowContainer from '../videos/video_show_container';

function Modal({ id, modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'show':
            component = <VideoShowContainer />;
            break;
        default:
            return null;
    }
    
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => {e.stopPropagation()}}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    let modalVar
    if (!state.ui.modal) {
        modalVar = null
    } else {
        modalVar = state.ui.modal.formType
    }
    let idVar
    if (!state.ui.modal) {
        idVar = null
    } else {
        idVar = state.ui.modal.id
    }
    return {
        modal: modalVar,
        id: idVar
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);