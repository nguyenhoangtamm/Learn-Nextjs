'use client';
import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import CreateModal from './create.modal';
import UpdateModal from './update.modal';
import DeleteModal from './delete.modal';
import Link from 'next/link';


interface IBlog {
    id: number;
    title: string;
    author: string;
    content: string;
}

interface Iprop {
    blog: IBlog[];
}

export default function AppTable(prop: Iprop) {
    const { blog } = prop;
    const [show, setShow] = useState<boolean>(false);
    const [update, setUpdate] = useState<boolean>(false);
    const [deleted , setDelete] = useState<boolean>(false);

    const [rowdata, setRowData] = useState<IBlog|null>(null);
        
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
                    {blog.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>
                           
                        <Link className='btn btn-primary' href={`/blog/${item.id}`}>
                        View
                        </Link>

                           
                                <Button variant="warning" onClick={() => { setRowData(item); setUpdate(true); }}>Edit</Button>
                                <Button variant="danger" onClick={()=>{setRowData(item); setDelete(true);}} >Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <CreateModal
                showModalCreate={show}
                setShowModalCreate={setShow}
            />
             <UpdateModal
                showModalCreate={update}
                setShowModalCreate={setUpdate}
                blog={rowdata}
                setBlog={setRowData}
            />
            <DeleteModal
                showModalCreate={deleted}
                setShowModalCreate={setDelete}
                blog={rowdata}
                setBlog={setRowData}
            />
        </>
    );
}