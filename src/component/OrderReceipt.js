import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { currencyFormat } from "../utils/number";

const OrderReceipt = ({ cartList, totalPrice }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="receipt-container">
      <h3 className="receipt-title">注文履歴</h3>
      <ul className="receipt-list">
        {cartList.length > 0 &&
          cartList.map((item) => (
            <li key={item._id}>
              <div className="display-flex space-between">
                <div>{item.productId.name}</div>

                <div>₩ {currencyFormat(item.productId.price * item.qty)}</div>
              </div>
            </li>
          ))}
      </ul>
      <div className="display-flex space-between receipt-title">
        <div>
          <strong>Total:</strong>
        </div>
        <div>
          <strong>₩ {currencyFormat(totalPrice)}</strong>
        </div>
      </div>
      {location.pathname.includes("/cart") && cartList.length > 0 && (
        <Button
          variant="dark"
          className="payment-button"
          onClick={() => navigate("/payment")}
        >
          決済続ける
        </Button>
      )}

      <div>
        可能な決済手段、貴下が決済段階に達するまで価格および配送料は確認されません。
        <div>
          30日の返品可能期間、返品手数料及び受取時に発生する追加配送料金
          読む 返品および返金
        </div>
      </div>
    </div>
  );
};

export default OrderReceipt;