'use client';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Toast } from 'react-bootstrap';

interface Iprop {
    showModalCreate: boolean;
    setShowModalCreate: (show: boolean) => void;
}

function CreateModal(prop: Iprop) {
    const { showModalCreate, setShowModalCreate } = prop;
    const [Tile, setTitle] = useState<string>('');
    const [Content, setContent] = useState<string>('');
    const [Author, setAuthor] = useState<string>('');
    const handleSubmit = () => {
      Toast.success('Data saved successfully');
        console.log(Tile, Content, Author);
    };
    const handleClose = () => {
      setTitle('');
      setContent('');
      setAuthor('');
      setShowModalCreate(false);
    }
    return (
        <>
            <Modal
                show={showModalCreate}
                onHide={() => handleClose()}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                value={Tile}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formContent">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter content"
                                value={Content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter author name"
                                value={Author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => handleClose()}
                    >
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateModal;
