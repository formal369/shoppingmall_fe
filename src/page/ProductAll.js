import React, { useEffect } from "react";
import ProductCard from "../component/ProductCard";
import { Row, Col, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../action/productAction";
import { commonUiActions } from "../action/commonUiAction";

const ProductAll = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const name = query.get('name');
  const category = query.get('category');
  // 처음 로딩하면 상품리스트 불러오기
  useEffect(() => {
    dispatch(productActions.getProductList({ name, category }));
  }, [query]);

  return (
    <Container>
      <Row>
        {productList.length > 0 ? (
          productList.map((product) => (
            <Col md={3} sm={12} key={product._id}>
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <div className="text-align-center empty-bag">
            {name === null ? (
              <h2>商品がありません</h2>
            ) : (
              <h2>{name}と一致する商品がありません</h2>
            )}
          </div>
        )
        }
      </Row>
    </Container>
  );
};

export default ProductAll;
