'use client';
import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import CreateModal from './create.modal';

interface IBlog {
    id: number;
    title: string;
    author: string;
}

interface Iprop {
    blog: IBlog[];
}

export default function AppTable(prop: Iprop) {
    const { blog } = prop;
    const [show, setShow] = useState<boolean>(false);



    return (
        <>
            <div className='d-flex justify-content-between'>
                <h1>Blog List</h1>
                <Button variant='primary' onClick={()=>setShow(true) }>Add New</Button>
            </div>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blog.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>
                                <Button variant="warning">Edit</Button>{' '}
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <CreateModal
                showModalCreate={show}
                setShowModalCreate={setShow}
            />
        </>
    );
}