import React from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";
import { hideModal } from "../../actions/modalActions";
import { default as modalTypes } from "./index";

const MODAL_TYPES = {
  info: modalTypes.InfoModal,
  addMovie: modalTypes.AddMovieModal,
  delete: modalTypes.DeleteConfirmationModal
};

const customStyles = {
  content: {
    width: "75%",
    maxWidth:"600px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding:"10px 25px 75px",
    zIndex:"999",
    transform: "translate(-50%, -50%)",
    overflowX: 'hidden'
  }
};

ReactModal.setAppElement("#root");

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      errors: {}
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState(state => ({
        ...state,
        modalIsOpen: !this.state.modalIsOpen
      }));
    }
  }

  closeModal = () => {
    this.props.hideModal();
  };

  render() {
    if (!this.props.modalType) {
      return null;
    }
    const SpecifiedModal = MODAL_TYPES[this.props.modalType];
    return (
      <div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          ariaHideApp={false}
          style={customStyles}
        >
          <SpecifiedModal
            errors={this.props.errors}
            handleClose={this.closeModal}
            {...this.props.modalProps}
          />
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.modal
});

const mapDispatchToProps = {
  hideModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
