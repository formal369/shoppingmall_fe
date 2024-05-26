import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { noticeActions } from "../action/noticeAction";
import { Button, Modal, Form } from 'react-bootstrap';

const NoticePage = () => {
  const dispatch = useDispatch();
  const notices = useSelector((state) => state.notice.noticeList || []);

  const notice = useSelector((state) => state.notice);

  const user = useSelector((state) => state.user.user);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ title: '', content: '' });
  const [editingNotice, setEditingNotice] = useState(null);

  useEffect(() => {
    dispatch(noticeActions.getNoticeList());
  }, [dispatch]);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setFormData({ title: '', content: '' });
    setEditingNotice(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingNotice) {
      dispatch(noticeActions.editNotice(formData, editingNotice._id));
    } else {
      dispatch(noticeActions.createNotice(formData));
    }
    handleClose();
  };

  const handleEdit = (notice) => {
    setFormData({ title: notice.title, content: notice.content });
    setEditingNotice(notice);
    handleShow();
  };

  const handleDelete = (id) => {
    dispatch(noticeActions.deleteNotice(id));
  };


  return (
    <div>
      <h1>公知事項</h1>
      {user && user.level === 'admin' && (
        <Button onClick={handleShow}>作成する</Button>
      )}
      <div className="notices">
        {notices.length > 0 ? notices.map((notice) => (
          <div key={notice._id} className="notice">
            <h2>{notice.title}</h2>
            <p>{notice.content}</p>
            {user && user.level === 'admin' && (
              <>
                <Button variant="primary" onClick={() => handleEdit(notice)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(notice._id)}>Delete</Button>
              </>
            )}
          </div>
        )) : (
          <p>公知事項がありません</p>
        )}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingNotice ? 'Edit Announcement' : 'Add Announcement'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {editingNotice ? 'Update' : 'Create'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NoticePage;
