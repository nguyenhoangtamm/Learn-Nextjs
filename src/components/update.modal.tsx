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

function UpdateModal(prop: Iprop) {
  const { showModalCreate, setShowModalCreate, blog, setBlog } = prop;
  const [id, setId] = useState<number>(0);
  const [Tile, setTitle] = useState<string>('');
  const [Content, setContent] = useState<string>('');
  const [Author, setAuthor] = useState<string>('');
    console.log(id, Tile, Content, Author);
  useEffect(() => {
    if (blog && blog.id) {
        setId(blog.id);
      setTitle(blog.title);
      setContent(blog.content);
      setAuthor(blog.author);
    }
  }, [blog]);

  const handleSubmit = () => {
    if (!Tile || !Content || !Author) {
      toast.error('Please fill all fields');
      return;
    } else {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: Tile,
          content: Content,
          author: Author,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          toast.success('Blog update successfully');
          console.log('respone' + response);
          handleClose();
          mutate('http://localhost:8000/blogs');
        })
        .catch((error) => {
          toast.error('An error occurred');
          console.error('Error:', error);
        });
    }
    console.log(Tile, Content, Author);
  };
  const handleClose = () => {
    setTitle('');
    setContent('');
    setAuthor('');
    setBlog(null);
    setShowModalCreate(false);
  };
  return (
    <>
      <Modal
        show={showModalCreate}
        onHide={() => handleClose()}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
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
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="warning" onClick={() => handleSubmit()}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;
