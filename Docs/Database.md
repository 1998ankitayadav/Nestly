# 📘 Nestly Database Design (database.md)

## 🧠 MongoDB Architecture Document

---

## 🧠 Product Context

Nestly is a **Smart Combo-based grocery & essentials delivery platform**, where the primary unit of commerce is NOT a product, but a **Combo (bundled intelligence system)**.

So the database is designed around:

> 👉 Combos as the central entity
> 👉 Products as supporting entities
> 👉 Orders as combo-level transactions

---

# 1. 📦 Collections Overview

We will use **5 main collections**:

1. 👤 Users
2. 🛍 Products
3. 🍱 Combos (**CORE USP COLLECTION**)
4. 📂 Categories
5. 📦 Orders

---

# 2. 👤 Users Collection

## 📄 Schema

```js
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String,
  phone: String,

  address: [
    {
      fullAddress: String,
      city: String,
      pincode: String,
      isDefault: Boolean
    }
  ],

  savedCombos: [ObjectId], // references Combos
  orderHistory: [ObjectId], // references Orders

  createdAt: Date,
  updatedAt: Date
}
```

## 🎯 Purpose

* User authentication
* Address storage for delivery
* Track saved combos
* Maintain order history

---

# 3. 🛍 Products Collection (Supporting Layer Only)

> ⚠️ Important: Products are NOT the main shopping unit in Nestly

## 📄 Schema

```js
{
  _id: ObjectId,
  name: String,
  description: String,
  image: String,

  price: Number,
  categoryId: ObjectId, // reference Categories

  tags: [String], // e.g. "organic", "fresh", "daily-use"

  stock: Number,

  createdAt: Date,
  updatedAt: Date
}
```

## 🎯 Purpose

* Used inside Combos
* Inventory management
* Optional future product-level browsing

---

# 4. 🍱 Combos Collection (CORE USP)

> 💡 This is the MOST IMPORTANT collection in Nestly

---

## 📄 Schema

```js
{
  _id: ObjectId,

  title: String, // "Breakfast Combo"
  description: String,

  categoryId: ObjectId, // reference Categories

  products: [
    {
      productId: ObjectId,
      quantity: Number
    }
  ],

  comboType: String, 
  // e.g. "morning", "office", "monthly", "snacks"

  price: Number, // final discounted price
  originalPrice: Number, // sum of all products

  discountPercentage: Number,

  tags: [String], 
  // "budget", "family", "healthy", "quick"

  thumbnail: String,
  images: [String],

  isActive: Boolean,
  isFeatured: Boolean,

  createdAt: Date,
  updatedAt: Date
}
```

---

## 🎯 Why This Schema Works

### ✔ Combos are SELF-CONTAINED

* No need to calculate joins at runtime
* Faster frontend rendering

### ✔ Embedded Product Mapping

* Each combo directly knows what it contains
* No complex aggregation needed for MVP

---

# 5. 📂 Categories Collection

## 📄 Schema

```js
{
  _id: ObjectId,

  name: String, // "Groceries", "Snacks"
  icon: String,
  image: String,

  description: String,

  comboIds: [ObjectId], // references Combos

  createdAt: Date,
  updatedAt: Date
}
```

---

## 🎯 Purpose

* Filter layer for combos
* UI grouping in Categories screen

---

# 6. 📦 Orders Collection

## 📄 Schema

```js
{
  _id: ObjectId,

  userId: ObjectId,

  combos: [
    {
      comboId: ObjectId,
      quantity: Number,
      priceAtPurchase: Number
    }
  ],

  totalAmount: Number,
  discountApplied: Number,

  finalAmount: Number,

  paymentStatus: String, 
  // "pending", "paid", "failed"

  orderStatus: String, 
  // "placed", "processing", "shipped", "delivered"

  deliveryAddress: {
    fullAddress: String,
    city: String,
    pincode: String
  },

  createdAt: Date,
  updatedAt: Date
}
```

---

## 🎯 Purpose

* Track combo-based purchases
* Maintain pricing snapshot (important for discounts)

---

# 7. 🔗 Relationships Between Collections

## 📊 Relationship Map

```
Users
  ├── savedCombos → Combos
  └── orderHistory → Orders

Combos
  ├── products → Products
  └── categoryId → Categories

Categories
  └── comboIds → Combos

Orders
  ├── userId → Users
  └── combos.comboId → Combos
```

---

## 🧠 Key Design Decision

👉 Nestly is **Combo-centric**, not Product-centric

So:

* Products = inventory layer
* Combos = business layer
* Orders = transaction layer

---

# 8. 🔥 Smart Combo Storage & Retrieval Logic

## 📦 Storage Strategy

Combos are stored as:

* Predefined curated bundles
* Embedded product references
* Pre-calculated pricing

---

## 🔍 Retrieval Flow (Frontend/API)

### Step 1: Get Combos

```js
GET /api/combos
```

### Step 2: Populate Products

```js
Combo.find()
  .populate("products.productId")
```

### Step 3: Filter by Category (optional)

```js
Combo.find({ categoryId })
```

---

## ⚡ Optimization Strategy

To keep performance fast:

* Combos already store:

  * price
  * discount
  * product list snapshot

👉 Avoid heavy runtime calculations

---

# 9. 📈 Indexing Strategy (Basic Level)

## 🔑 Recommended Indexes

### Users

```js
email (unique index)
```

---

### Products

```js
categoryId
name (text index for search)
```

---

### Combos

```js
categoryId
comboType
isFeatured
```

---

### Orders

```js
userId
orderStatus
createdAt
```

---

## 🎯 Why These Indexes Matter

* Faster combo filtering
* Faster category-based browsing
* Quick order history retrieval
* Supports scaling to large datasets

---

# 10. 🚀 Future Scalability Considerations

## 🤖 1. AI Recommendation Layer

Future schema extension:

```js
userPreferences: {
  likedCategories: [],
  frequentlyBoughtCombos: [],
  behaviorScore: Number
}
```

---

## 📦 2. Dynamic Combos (AI Generated)

Future Combos schema upgrade:

```js
isAiGenerated: Boolean
confidenceScore: Number
```

---

## 🏪 3. Multi-Vendor Support (Scalability)

Add:

```js
vendorId: ObjectId
```

in:

* Products
* Combos

---

## ⚡ 4. Caching Layer (Performance)

* Redis caching for:

  * Popular combos
  * Featured categories

---

## 📊 5. Analytics Expansion

Future collection:

```js
ComboAnalytics
```

Tracks:

* views
* clicks
* conversions

---

# 🚀 Final Architecture Principle

Nestly database is built on:

> 🧠 “Combo-first commerce model with product-backed intelligence”

This ensures:

* Faster UX
* Scalable structure
* Strong business differentiation
* Future AI integration readiness


