# 🧠 PRD — Nestly (MERN Startup Product Document)

**Product Name:** Nestly
**Tagline:** *Your Home. Your Essentials. Delivered Intelligently.*
**Type:** Smart Grocery + Essentials Delivery Platform
**Core USP:** Smart Combos (AI-curated bundled essentials instead of individual shopping)
**Tech Stack:** MERN (MongoDB, Express, React, Node.js)
**Design System:** Apple-inspired minimal, premium UI
**Current Stage:** MVP (4-screen Figma flow already designed)

---

# 1. 📦 Product Overview

Nestly is a **smart grocery and household essentials delivery platform** designed to eliminate the friction of traditional item-by-item shopping.

Instead of forcing users to search, compare, and add individual items, Nestly introduces a **Smart Combo-first shopping experience**, where users receive **pre-curated essential bundles** based on lifestyle, household type, and consumption patterns.

### Core Idea:

> “Don’t shop for products. Shop for needs.”

Example:

* “Bachelor Starter Combo”
* “Monthly Family Essentials Pack”
* “Healthy Lifestyle Combo”
* “Festival Essentials Kit”

Each combo is optimized for:

* Quantity
* Frequency
* Price efficiency
* Household size

---

# 2. ❗ Problem Statement

Traditional grocery apps fail in India due to:

### 1. Cognitive Load

Users must search and select 20–50 items every time.

### 2. Time Consumption

Repetitive shopping for essentials (milk, rice, soap, etc.)

### 3. Poor Planning

Users often forget items → multiple orders → higher delivery fees.

### 4. No Smart Bundling

Apps show products, not solutions.

### 5. Decision Fatigue

Too many brands, sizes, and variations.

---

# 3. 🎯 Target Users (India-Focused)

### Primary Audience:

* Urban & semi-urban households
* Working professionals (22–40 years)

### Secondary Audience:

* Students living in PG/hostels
* Small families in tier-1 and tier-2 cities
* New couples / bachelors

### Geography:

* Tier 1: Delhi, Mumbai, Bangalore
* Tier 2: Lucknow, Prayagraj, Jaipur, Indore

---

# 4. 👤 User Personas

## Persona 1: “Rohit – The Busy Professional”

* Age: 28
* Job: IT Engineer
* Location: Bangalore
* Pain: No time for grocery planning
* Behavior:

  * Orders once a month
  * Wants speed + convenience

**Need:** Monthly Smart Combo delivery in one tap

---

## Persona 2: “Ananya – The New Homemaker”

* Age: 26
* Location: Delhi
* Pain: Doesn’t know exact quantities
* Behavior:

  * Frequently forgets items
  * Prefers guided shopping

**Need:** Suggested combos based on household size

---

## Persona 3: “Sahil – PG Student”

* Age: 21
* Location: Prayagraj
* Pain: Budget constraints + frequent shortages
* Behavior:

  * Buys essentials weekly
  * Price sensitive

**Need:** Budget Smart Combos under ₹499 / ₹999

---

# 5. 🧭 User Journey (STRICTLY 4 SCREENS)

## 1. Splash Screen

* Brand introduction (Nestly logo)
* Premium feel animation
* No interaction

↓

## 2. Onboarding Screen

* Explains value:

  * “Smart Combos”
  * “One-tap essentials”
  * “Save time & money”
* CTA: “Get Started”

↓

## 3. Home Page

* Displays:

  * Featured Smart Combos
  * Personalized suggestions
  * Seasonal combos

↓

## 4. Categories Page

* Combo categories only:

  * Family Packs
  * Bachelor Packs
  * Health Packs
  * Festival Packs

👉 IMPORTANT:
No individual product-first browsing at MVP stage.

---

# 6. ⚙️ Core Feature Breakdown (MVP)

### 1. Smart Combo Feed

* Pre-built bundles shown on Home

### 2. Category-Based Combo Filtering

* Filter combos by lifestyle type

### 3. Combo Detail View (future UI logic, backend ready)

* Items inside combo
* Price breakdown
* Savings highlight

### 4. Add Combo to Cart

* Single action adds full bundle

### 5. Basic Cart System

* Only combo-level cart, not item-level

---

# 7. 🧠 Smart Combo System (CORE USP)

### Concept:

Instead of SKU-based shopping → use **behavior-based bundling**

---

## 🧩 How it Works:

### Step 1: User Segmenting

Based on:

* Age group
* Household type
* Location
* Budget range

---

### Step 2: Combo Creation Engine

Each combo contains:

* Essential items (rice, milk, oil, etc.)
* Quantity optimized per usage cycle
* Price optimized for affordability

---

### Step 3: Example Logic

**Bachelor Combo:**

* 5kg rice
* 1L oil
* Maggi pack
* Soap + detergent
* Milk packets

**Family Combo:**

* Larger quantities
* More variety (vegetables, snacks)

---

### Step 4: Optimization Rules

* Max affordability
* Minimum wastage
* Weekly/monthly cycle mapping

---

# 8. 🏗️ Information Architecture

## Frontend (React)

```
App
 ├── SplashScreen
 ├── OnboardingScreen
 ├── HomePage
 │     ├── ComboCard
 │     ├── FeaturedSection
 │
 ├── CategoriesPage
 │     ├── CategoryCard
 │
 ├── CartPage (combo-based)
```

---

## Backend (Node + Express)

```
/api
 ├── /users
 ├── /combos
 ├── /categories
 ├── /cart
 ├── /orders
```

---

## Database (MongoDB)

### Collections:

### Users

* name
* phone
* location
* preferences

### Combos

* title
* items[]
* price
* category
* discount

### Orders

* userId
* comboIds
* totalAmount
* status

---

# 9. 🎨 UI/UX Guidelines

### Design Philosophy:

* Apple-like minimalism
* White space heavy UI
* Soft shadows
* Rounded cards
* No clutter

### UX Rules:

* Reduce clicks (max 2 clicks to purchase)
* Combo-first navigation
* No product overload
* Visual hierarchy: Combo > Price > Savings

---

# 10. 🧩 React Component Breakdown

### Core Components:

* `SplashScreen.jsx`
* `Onboarding.jsx`
* `Home.jsx`
* `Categories.jsx`
* `ComboCard.jsx`
* `ComboList.jsx`
* `CategoryCard.jsx`
* `Navbar.jsx` (future enhancement)
* `Cart.jsx`
* `Button.jsx` (reusable)
* `PriceTag.jsx`
* `SavingsBadge.jsx`

---

# 11. 🚀 MVP SCOPE (STRICT)

### INCLUDED:

* 4 existing screens only
* Smart Combo listing
* Category filtering
* Add combo to cart
* Basic UI state management
* Static combo data (initial phase)

---

### NOT INCLUDED:

* Payments
* AI personalization engine
* Delivery tracking
* Product-level browsing
* Reviews
* Subscriptions

---

# 12. 🔮 Future Enhancements

### Phase 2:

* AI-based combo personalization
* Weekly subscription model
* Auto-replenishment system

### Phase 3:

* Voice ordering
* WhatsApp ordering bot
* Smart fridge integration

### Phase 4:

* Hyperlocal vendor integration
* Dark store optimization engine

---

# 13. 📊 Success Metrics (Startup KPIs)

### User Metrics:

* Daily Active Users (DAU)
* Monthly Active Users (MAU)
* Onboarding completion rate

### Product Metrics:

* Combo conversion rate (target: 35%+)
* Average order value (AOV)
* Cart abandonment rate

### Business Metrics:

* Repeat purchase rate (target: 40%+)
* CAC vs LTV ratio
* Cost per delivery efficiency

---

# 🧠 FINAL SUMMARY

Nestly is not a grocery app — it is a **decision elimination system for household essentials**.

Instead of:

> “What should I buy?”

It answers:

> “Here is everything you need.”


