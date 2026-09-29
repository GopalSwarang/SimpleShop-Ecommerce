# SimpleShop — Frontend

Beginner-friendly React frontend for the SimpleShop e-commerce project.

## Main tools

- React 19.3.0
- JavaScript
- Bootstrap 5.3.8
- Axios 1.20.0
- React Router DOM 6.30.6
- Vite 8.3.1

## Run

Install Node.js first. Node.js 24 LTS is recommended for this project.

```bash
node -v
npm -v
npm install
npm start
```

Open:

```text
http://localhost:3000
```

The frontend expects the Spring Boot backend at:

```text
http://localhost:8080
```

## Simple folder structure

```text
src/
├── components/
│   ├── ErrorMessage.jsx
│   ├── Footer.jsx
│   ├── Loading.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductForm.jsx
│   └── ProtectedRoute.jsx
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Categories.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── MyOrders.jsx
│   ├── OrderDetails.jsx
│   ├── AdminDashboard.jsx
│   ├── AdminProducts.jsx
│   ├── AddProduct.jsx
│   ├── EditProduct.jsx
│   ├── AdminCategories.jsx
│   ├── AdminOrders.jsx
│   ├── AdminOrderDetails.jsx
│   └── AdminUsers.jsx
├── services/
│   └── api.js
├── App.jsx
├── App.css
├── main.jsx
└── index.js
```

## Notes

- The cart is stored in browser `localStorage` so it stays after a page refresh.
- Login information is also stored in browser `localStorage` for this learning project.
- There is no Redux, TypeScript, Tailwind, React-Bootstrap or advanced state-management library.
