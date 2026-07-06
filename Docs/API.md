# 📘 Nestly API Design (api.md)

## 🧠 Backend Architecture – REST APIs (MERN Stack)

---

## 🧠 Product Context

Nestly is a **Smart Combo-first grocery platform**, where the primary business entity is:

> 🍱 Smart Combos (NOT individual products)

So APIs are designed to:

* Optimize combo browsing
* Reduce product-level complexity
* Support fast mobile-first UX

---

# 1. 🔐 AUTH APIs

## 1.1 Register User

### Endpoint

```
POST /api/auth/register
```

### Request

```json
{
  "name": "Ankita",
  "email": "ankita@gmail.com",
  "password": "123456",
  "phone": "9999999999"
}
```

### Response

```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "_id": "u123",
    "name": "Ankita",
    "email": "ankita@gmail.com"
  }
}
```

---

## 1.2 Login User

### Endpoint

```
POST /api/auth/login
```

### Request

```json
{
  "email": "ankita@gmail.com",
  "password": "123456"
}
```

### Response

```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "_id": "u123",
    "name": "Ankita"
  }
}
```

---

## 1.3 Get Profile

### Endpoint

```
GET /api/auth/profile
```

### Headers

```
Authorization: Bearer <token>
```

### Response

```json
{
  "success": true,
  "user": {
    "_id": "u123",
    "name": "Ankita",
    "email": "ankita@gmail.com",
    "savedCombos": []
  }
}
```

---

# 2. 🛍 PRODUCT APIs (Supporting Layer)

> ⚠️ Products are NOT primary shopping items in Nestly

---

## 2.1 Get All Products

### Endpoint

```
GET /api/products
```

### Response

```json
{
  "success": true,
  "products": [
    {
      "_id": "p1",
      "name": "Milk",
      "price": 50,
      "categoryId": "c1"
    }
  ]
}
```

---

## 2.2 Get Product by ID

### Endpoint

```
GET /api/products/:id
```

### Response

```json
{
  "success": true,
  "product": {
    "_id": "p1",
    "name": "Milk",
    "price": 50,
    "description": "Fresh milk",
    "stock": 100
  }
}
```

---

## 2.3 Get Products by Category

### Endpoint

```
GET /api/products/category/:categoryId
```

### Response

```json
{
  "success": true,
  "products": []
}
```

---

# 3. 🍱 COMBO APIs (CORE USP 🚀)

> 💡 This is the MOST IMPORTANT API layer in Nestly

---

## 3.1 Get All Combos

### Endpoint

```
GET /api/combos
```

### Query Params (optional)

```
?category=groceries
?type=morning
?featured=true
```

### Response

```json
{
  "success": true,
  "combos": [
    {
      "_id": "c101",
      "title": "Breakfast Combo",
      "description": "Healthy morning essentials",
      "price": 199,
      "originalPrice": 250,
      "discountPercentage": 20,
      "thumbnail": "url",
      "products": [
        {
          "productId": "p1",
          "quantity": 2
        }
      ]
    }
  ]
}
```

---

## 3.2 Get Combo by ID

### Endpoint

```
GET /api/combos/:id
```

### Response

```json
{
  "success": true,
  "combo": {
    "_id": "c101",
    "title": "Breakfast Combo",
    "products": []
  }
}
```

---

## 3.3 Get Featured Combos

### Endpoint

```
GET /api/combos/featured
```

### Response

```json
{
  "success": true,
  "combos": []
}
```

---

## 3.4 Get Combos by Category

### Endpoint

```
GET /api/combos/category/:categoryId
```

### Response

```json
{
  "success": true,
  "combos": []
}
```

---

## 3.5 Create Combo (Admin)

### Endpoint

```
POST /api/combos
```

### Request

```json
{
  "title": "Office Combo",
  "description": "Work essentials pack",
  "categoryId": "c1",
  "products": [
    {
      "productId": "p1",
      "quantity": 2
    }
  ],
  "price": 299,
  "originalPrice": 350,
  "discountPercentage": 15
}
```

### Response

```json
{
  "success": true,
  "message": "Combo created successfully"
}
```

---

# 4. 📂 CATEGORY APIs

---

## 4.1 Get All Categories

### Endpoint

```
GET /api/categories
```

### Response

```json
{
  "success": true,
  "categories": [
    {
      "_id": "c1",
      "name": "Groceries",
      "icon": "url"
    }
  ]
}
```

---

## 4.2 Get Category by ID

### Endpoint

```
GET /api/categories/:id
```

### Response

```json
{
  "success": true,
  "category": {}
}
```

---

## 4.3 Get Combos in Category (important UX API)

### Endpoint

```
GET /api/categories/:id/combos
```

### Response

```json
{
  "success": true,
  "combos": []
}
```

---

# 5. 🛒 CART APIs (Combo-Based Cart)

> ⚠️ Cart is COMBO-ONLY (not product-level)

---

## 5.1 Get Cart

### Endpoint

```
GET /api/cart
```

### Response

```json
{
  "success": true,
  "cart": {
    "userId": "u1",
    "items": [
      {
        "comboId": "c101",
        "quantity": 2
      }
    ]
  }
}
```

---

## 5.2 Add to Cart (Combo)

### Endpoint

```
POST /api/cart/add
```

### Request

```json
{
  "comboId": "c101",
  "quantity": 1
}
```

### Response

```json
{
  "success": true,
  "message": "Combo added to cart"
}
```

---

## 5.3 Remove from Cart

### Endpoint

```
POST /api/cart/remove
```

### Request

```json
{
  "comboId": "c101"
}
```

### Response

```json
{
  "success": true
}
```

---

## 5.4 Clear Cart

### Endpoint

```
DELETE /api/cart/clear
```

---

# 6. 📦 ORDER APIs

---

## 6.1 Create Order (From Cart)

### Endpoint

```
POST /api/orders/create
```

### Request

```json
{
  "deliveryAddress": {
    "fullAddress": "Prayagraj, UP",
    "pincode": "211001"
  }
}
```

### Response

```json
{
  "success": true,
  "order": {
    "_id": "o1",
    "totalAmount": 499,
    "finalAmount": 399,
    "orderStatus": "placed"
  }
}
```

---

## 6.2 Get User Orders

### Endpoint

```
GET /api/orders/user/:userId
```

### Response

```json
{
  "success": true,
  "orders": []
}
```

---

## 6.3 Get Order by ID

### Endpoint

```
GET /api/orders/:id
```

---

## 6.4 Update Order Status (Admin)

### Endpoint

```
PATCH /api/orders/:id/status
```

### Request

```json
{
  "orderStatus": "shipped"
}
```

---

# 7. 🔗 API Design Relationships

```
Users
  ↓
Cart (Combo-based)
  ↓
Orders (Combo snapshot)

Combos ← Products (embedded reference only)
Categories → Combos (filter layer)
```

---

# 8. ⚡ Smart Combo API Strategy (IMPORTANT)

## Why APIs are Combo-Centric:

Instead of:

* GET /products → UI heavy ❌

We use:

* GET /combos → business logic ✅

---

## 🧠 Combo Optimization Logic

Each combo API:

* returns pre-calculated price
* includes product snapshot
* avoids runtime aggregation

👉 This makes frontend extremely fast

---

# 9. 📈 Scalability Considerations

## Future API Enhancements:

### 🤖 AI Combos

```
GET /api/combos/recommended
```

### 📊 Analytics

```
GET /api/analytics/combos
```

### 🔁 Subscription Orders

```
POST /api/orders/subscribe
```

---

# 🚀 Final Architecture Principle

Nestly backend is designed as:

> 🍱 "Combo-first commerce API system with product-backed intelligence"


