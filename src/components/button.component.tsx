import React from "react";
import ModalComponent from "./modal-component";
import { Button } from "react-bootstrap";

interface Props{
    showModal: boolean
    handlerOpenModal: any;
}


export default class ButtonComponent extends React.Component<Props>{
    render(){
        const {showModal, handlerOpenModal} = this.props;
        return(
            <div>
                 <Button variant="danger"onClick={handlerOpenModal}>Meu botão</Button>
                 <ModalComponent showModal={showModal} handlerOpenModal={handlerOpenModal}/>
            </div>

        )
    }

}