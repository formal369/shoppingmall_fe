import React from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../action/orderAction";
import OrderStatusCard from "../component/OrderStatusCard";
import "../style/orderStatus.style.css";

const MyPage = () => {
  const dispatch = useDispatch();
  const { orderList } = useSelector((state) => state.order);

  console.log("orderList in MyPage", orderList);

  useEffect(() => {
    //오더리스트 들고오기
    dispatch(orderActions.getOrder());
  }, []);

  if (orderList?.length === 0) {
    return (
      <Container className="no-order-box">
        <div>進行中の注文がありません</div>
      </Container>
    );
  }

  return (
    <Container className="status-card-container">
      {orderList.map((item) => (
        <OrderStatusCard
          orderItem={item}
          className="status-card-container"
          key={item._id}
        />
      ))}
    </Container>
  );
};

export default MyPage;
