import React from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";
import { hideModal } from "../../actions/modalActions";
import { default as modalTypes } from "./index";

const MODAL_TYPES = {
  edit: modalTypes.EditModal,
  addMovie: modalTypes.AddMovieModal,
  delete: modalTypes.DeleteConfirmationModal,
  info:modalTypes.InformationModal
};

const customStyles = {
  content: {
    width: "85%",
    maxWidth:"600px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "2vh 3vw 4vh",
    zIndex:"999",
    transform: "translate(-50%, -50%)",
    overflowX: 'hidden',
    border:"none",
    background: "rgb(0 0 0)"
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
