import React from "react";
import { Button, Modal } from "react-bootstrap";


interface Props{
    showModal: boolean;
    handlerOpenModal: any;
}

export default class ModalComponent extends React.Component<Props>{
    render(){
        const {showModal, handlerOpenModal} = this.props;
        return(
            <div>
            <Modal show={showModal} onHide={handlerOpenModal} >
                <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p>Deseja continuar?</p>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={handlerOpenModal}>Sair</Button>
                <Button variant="primary" onClick={handlerOpenModal}>Salvar</Button>
                </Modal.Footer>
            </Modal>
            </div>
        );
    }
}
