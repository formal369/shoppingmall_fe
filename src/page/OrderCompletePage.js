import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style/paymentPage.style.css";

const OrderCompletePage = () => {
  const { orderNum } = useSelector((state) => state.order);
  //만약 주문번호가 없는상태로 이페이지에 왔다면 다시 메인페이지로 돌아가기
  if (orderNum === "") {
    return (
      <Container className="confirmation-page">
        <h1>注文失敗</h1>
        <div>
          メインページに戻ってください
          <Link to={"/"}>メインページへ</Link>
        </div>
      </Container>
    );
  };

  return (
    <Container className="confirmation-page">
      <img
        src="/image/greenCheck.png"
        width={100}
        className="check-image"
        alt="greenCheck.png"
      />
      <h2>予約が完了しました！</h2>
      <div>予約番号:{orderNum}</div>
      <div>
        ご予約の確認は私の予約メニューでご確認ください
        <div className="text-align-center">
          <Link to={"/account/purchase"}>予約リストへ</Link>
        </div>
      </div>
    </Container>
  );
};

export default OrderCompletePage;
