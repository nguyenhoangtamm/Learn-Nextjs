'use client';
import { use, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { mutate } from 'swr';



interface Iprop {
  showModalCreate: boolean;
  setShowModalCreate: (show: boolean) => void;
  blog: IBlog | null;
  setBlog: (data: IBlog | null) => void;
}

function DeleteModal(prop: Iprop) {
  const { showModalCreate, setShowModalCreate, blog, setBlog } = prop;
  const [id, setId] = useState<number>(0);
 
    console.log(id);
  useEffect(() => {
    if (blog && blog.id) {
        setId(blog.id);
     
    }
  }, [blog]);

  const handleSubmit = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        toast.success('Blog delete successfully');
        console.log('respone' + response);
        handleClose();
        mutate('http://localhost:8000/blogs');
      })
      .catch((error) => {
        toast.error('An error occurred');
        console.error('Error:', error);
      });
  
    console.log(id);
  };
  const handleClose = () => {
 
    setShowModalCreate(false);
  };
  

  return (
    
    <>
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal 
        show={showModalCreate}
        onHide={() => handleClose()}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleClose()}>Close</Button>
          <Button variant="danger" onClick={() => handleSubmit()}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default DeleteModal;
