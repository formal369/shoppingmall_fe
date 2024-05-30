import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { noticeActions } from "../action/noticeAction";
import { Button, Modal, Form, Container } from 'react-bootstrap';
import { useSearchParams, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const NoticePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();
  const notices = useSelector((state) => state.notice.noticeList || []);
  const user = useSelector((state) => state.user.user);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ title: '', content: '' });
  const [editingNotice, setEditingNotice] = useState(null);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const totalPageNum = useSelector((state) => state.notice.totalPageNum);
  const [searchQuery, setSearchQuery] = useState({
    page: query.get("page") || 1,
  });

  useEffect(() => {
    dispatch(noticeActions.getNoticeList({ ...searchQuery }));
  }, [query]);

  useEffect(() => {
    const params = new URLSearchParams(searchQuery);
    const queryString = params.toString();
    navigate("?" + queryString);
  }, [searchQuery]);


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

  const handleSelectNotice = (notice) => {
    setSelectedNotice(notice);
  };

  const handlePageClick = ({ selected }) => {
    setSearchQuery({ ...searchQuery, page: selected + 1 });
  };

  return (
    <Container className="notice-container">
      <h1 className="my-4">公知事項</h1>
      {user && user.level === 'admin' && (
        <Button onClick={handleShow} className="mb-3">作成する</Button>
      )}
      <div className="notice-list">
        {notices.length > 0 ? notices.map((notice) => (
          <div key={notice._id} className="notice-item" onClick={() => handleSelectNotice(notice)}>
            <div className="notice-item-title">{notice.title}</div>
            <div className="notice-item-date">{new Date(notice.createdAt).toLocaleString()}</div>
          </div>
        )) : (
          <p>公知事項がありません</p>
        )}
      </div>

      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPageNum}
        forcePage={searchQuery.page - 1}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        className="display-center list-style-none"
      />

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

      {selectedNotice && (
        <Modal show={true} onHide={() => setSelectedNotice(null)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedNotice.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedNotice.content}</p>
            <div className="card-footer">
              {new Date(selectedNotice.createdAt).toLocaleString()}
            </div>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default NoticePage;
