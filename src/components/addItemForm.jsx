import React from 'react'
import { Modal, Form, InputGroup, Button } from 'react-bootstrap'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AddNFT({show, handleShow, handleClose}) {
  return (
    <div>
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Add NFT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>NFT Name</Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>

                    <Form.Group className='mt-4'>
                        <Form.Label>NFT Image</Form.Label>
                        <Form.Control type='file'></Form.Control>
                    </Form.Group>

                    <Form.Group className='mt-4'>
                        <Form.Label>Starting Price</Form.Label>
                        <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faDollar}/></InputGroup.Text>
                            <Form.Control type='number'></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    <Button type='submit' className='text-light w-100 mt-4 mb-3'>Add NFT</Button>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
  )
}
