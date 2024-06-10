# VINTAGE SHOP

ビンテージ衣類ショッピングモールであり、ビンテージ衣類文化に対する交流ができるウェブサイトです。
---
## 紹介

私は日本に住んでいて、ウェブ開発者として活動しています。 休日ごとに東京と東京郊外の多様な都市を探訪しながらビンテージ衣類ショップに魅了されビンテージ衣類ショッピングモールウェブサイトを開発するようになりました。 このショッピングモールはビンテージファッションを愛する人々の間でコミュニティを形成し、ビンテージ衣類の再利用とリサイクルを通じて持続可能なファッションと環境保護に寄与しようとしています。

## Tech Stack
開発環境

![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078d7?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![macOS](https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

## 開発ツール
Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=font-awesome&logoColor=white)
![Google OAuth](https://img.shields.io/badge/Google_OAuth-4285F4?style=for-the-badge&logo=google&logoColor=white)
![React Spring](https://img.shields.io/badge/React_Spring-FF6F61?style=for-the-badge&logo=react-spring&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-F68213?style=for-the-badge&logo=cloudinary&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Bootstrap](https://img.shields.io/badge/React_Bootstrap-61DAFB?style=for-the-badge&logo=react-bootstrap&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Redux Thunk](https://img.shields.io/badge/Redux_Thunk-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![React Toastify](https://img.shields.io/badge/React_Toastify-323330?style=for-the-badge&logo=react-toastify&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

Backend

https://github.com/formal369/shoppingmall_be

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)


## Architecture

Frontend
```
.vscode/
  settings.json
node_modules/
public/
  image/
  _redirects
  favicon.ico
  index.html
  logo192.png
  logo512.png
  manifest.json
  robots.txt
src/
  action/
    cartAction.js
    commonUiAction.js
    noticeAction.js
    orderAction.js
    productAction.js
    reviewAction.js
    userAction.js
  component/
    CartProductCard.js
    Navbar.js
    NewItemDialog.js
    OrderDetailDialog.js
    OrderReceipt.js
    OrderStatusCard.js
    OrderTable.js
    PaymentForm.js
    ProductCard.js
    ProductTable.js
    ReviewSection.js
    SearchBox.js
    Sidebar.js
    ToastMessage.js
  constants/
    cart.constants.js
    commonUI.constants.js
    notice.constants.js
    order.constants.js
    product.constants.js
    review.constants.js
    user.constants.js
  Layout/
    AppLayout.js
  page/
    ProductAll.js
    ProductDetail.js
    RegisterPage.js
  reducer/
    cartReducer.js
    commonUIReducer.js
    noticeReducer.js
    orderReducer.js
    productReducer.js
    reviewReducer.js
    store.js
    userReducer.js
  routes/
    AppRouter.js
    PrivateRoute.js
  style/
    adminOrder.style.css
    adminProduct.style.css
    cart.style.css
    common.style.css
    login.style.css
    orderStatus.style.css
    paymentPage.style.css
    productDetail.style.css
    register.style.css
    review.style.css
  utils/
    api.js
    CloudinaryUploadWidget.js
    number.js
  App.css
  App.js
  App.test.js
  index.css
  index.js
  logo.svg
  reportWebVitals.js
  setupTests.js
.env
.gitignore
package-lock.json
package.json
README.md
test.js
```

Backend

https://github.com/formal369/shoppingmall_be
```
.vscode/
controllers/
  auth.controller.js
  cart.controller.js
  notice.controller.js
  order.controller.js
  product.controller.js
  review.controller.js
  user.controller.js
models/
  Cart.js
  Notice.js
  Order.js
  Product.js
  Review.js
  User.js
node_modules/
routes/
  auth.api.js
  cart.api.js
  index.js
  notice.api.js
  order.api.js
  product.api.js
  review.api.js
  user.api.js
utils/
  randomStringGenerator.js
.env
.gitignore
app.js
package-lock.json
package.json
```

## Features
1. Main Page
![alt text](image.png)
![alt text](image-1.png)

2. Login Page
![alt text](image-2.png)

3. Register Page
![alt text](image-3.png)

## TODO
1. 多言語対応(i18n)
2. ポイントとリワードシステムです
3. プロモーションおよび割引コードです
4. リアルタイムチャット対応です
5. ウィッシュリスト