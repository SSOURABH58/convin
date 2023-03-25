import React, { useState } from 'react'
import { Modal } from 'antd';
import { connect } from 'react-redux';
import { closeModal } from '../../redux/actions/modalActions';

const ModalPopUp = ({ modal, card, closeModal }) => {


    return (

        <Modal
            title={card?.name}
            visible={modal}
            onCancel={closeModal}
            footer={null}
        >
            <iframe
                width="100%"
                height="315"
                src={card?.link}
                title={card?.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />

        </Modal>
    );
}


const mapStateToProps = (state) => ({
    modal: state.modal.modal,
    card: state.modal.card
})

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalPopUp);