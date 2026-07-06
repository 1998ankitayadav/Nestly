# 📘 Nestly Features Document (features.md)

## 🧠 Product Context

Nestly is a **smart grocery + essentials delivery app** designed around a core idea:

> Users don’t shop for individual products — they select **Smart Combos curated for real-life needs**.

Everything in the product is optimized for:

* Faster decision making
* Higher order value (AOV)
* Intelligent bundling instead of item-level browsing

---

# 1. ⭐ Core Features

## 🏠 1. Home Screen (Main Experience Layer)

The Home screen is the **primary decision-making hub**.

### Key Components:

* 🧭 Navbar (brand + cart + profile)
* 🔍 Search (optional quick access, not primary flow)
* 📂 Category Preview Strip
* 🔥 Smart Combos Section (core focus)
* 🛍 Trending Combos / Recommended Bundles

### Purpose:

* Push users toward **combo selection**
* Reduce friction of individual product browsing
* Highlight “ready-to-buy bundles”

---

## 📂 2. Categories Screen

Categories act as a **filtering layer for Smart Combos**, not standalone shopping.

### Key Components:

* Category Grid (2-column layout)
* Each category includes:

  * Icon
  * Category name (e.g., Groceries, Snacks, Personal Care)
  * Light visual tint

### Purpose:

* Help users quickly narrow down combo types
* Support discovery, not final purchase intent

---

## 🍱 3. Smart Combos (CORE FEATURE)

This is the **heart of Nestly and primary USP**.

---

# 2. 🔥 Smart Combo System (USP)

## 💡 Concept

Instead of showing:

* Rice
* Oil
* Milk
* Snacks

Nestly shows:

👉 “Breakfast Combo”
👉 “Healthy Lunch Combo”
👉 “Office Essentials Pack”
👉 “Monthly Kitchen Kit”

---

## 🧠 How Smart Combos Work

Each combo includes:

* Multiple products grouped logically
* Pre-calculated pricing (discounted bundle)
* Usage context (morning, office, travel, home)
* Visual preview of items

---

## 📦 Combo Structure

Each Smart Combo contains:

* Combo Title
* Short Description (use-case based)
* Included Items Preview (2–4 thumbnails)
* Discount Badge (e.g. “Save 20%”)
* Final Price
* CTA: “Add Combo”

---

## 🎯 Why This System Exists

### Business Impact:

* Increases AOV (Average Order Value)
* Encourages bundled purchases
* Reduces decision fatigue

### User Impact:

* Faster shopping experience
* No need to browse individual products
* Feels curated and personalized

---

## ⚙️ Smart Logic (Future-ready foundation)

Even in MVP:

* Combos are static curated data

Later evolution:

* AI-based combo generation
* Behavior-based recommendations
* Seasonal combo updates

---

# 3. 🔁 User Flow (STRICTLY Based on Figma Screens)

Nestly flow is linear and simple:

---

## 🌟 Step 1: Splash Screen

* Brand logo display
* App identity reinforcement
* Auto transition

---

## 🚀 Step 2: Onboarding Screen

* 3 slides explaining:

  1. Smart grocery experience
  2. Combo-based shopping
  3. Fast delivery system
* CTA: “Get Started”

---

## 🏠 Step 3: Home Screen (Main Entry Point)

User lands here after onboarding.

### Actions available:

* View Smart Combos (primary)
* Browse Categories
* Explore featured sections

---

## 📂 Step 4: Categories Screen

User navigates here when:

* They want filtered combos
* They want specific type of essentials

---

## 🚫 Important Constraint:

* No product-level browsing flow exists in MVP
* No checkout flow defined yet (future phase)

---

# 4. 🚀 MVP Features (Phase 1 Build)

These are **must-build features for first release**

---

## ✅ Core MVP Scope

### Screens:

* Splash Screen
* Onboarding Screen
* Home Screen
* Categories Screen

---

## 🧩 Functional Features:

### 1. Smart Combo Listing (Static Data)

* Display combo cards
* Show discount + items preview

### 2. Category Filtering

* Tap category → filter combos

### 3. Basic Navigation Flow

* Onboarding → Home routing
* Home → Categories navigation

### 4. UI Interactions

* Add Combo button (UI level only)
* Simple hover/tap states

---

## 📦 MVP Limitations (Intentional)

* No payment system
* No backend integration
* No individual product purchase
* No user login system

---

# 5. 🔮 Future Features (Post-MVP Expansion)

## 🤖 AI & Intelligence Layer

* AI-generated Smart Combos
* Personalized recommendations
* “You may need this week” suggestions

---

## 🔁 Subscription Model

* Weekly grocery subscription combos
* Monthly household kits
* Auto-reorder system

---

## 🧾 Advanced Commerce Layer

* Cart system for multiple combos
* Checkout + payment integration
* Order tracking system

---

## 🚚 Delivery Intelligence

* Delivery slot selection
* Fast delivery optimization
* Location-based availability

---

## 👤 User System

* Login / Signup
* Order history
* Saved combos

---

## 📊 Analytics (Business Layer)

* Combo conversion rate tracking
* Category performance
* User engagement heatmaps

---

# 6. 👤 User Actions

Nestly users primarily perform 3 actions:

---

## 🔍 1. Browse

* View Smart Combos on Home
* Scroll categories
* Explore featured bundles

---

## 🍱 2. Select Combo

* Tap a Smart Combo
* View included items preview
* Add combo (intent-based purchase)

---

## 📂 3. View Category

* Select category
* See filtered combos
* Compare bundles

---

# 7. 🎯 Feature Prioritization

## 🔴 MUST HAVE (MVP Critical)

* Splash Screen
* Onboarding Flow
* Home Screen UI
* Categories Screen
* Smart Combo Cards
* Basic navigation flow

---

## 🟡 SHOULD HAVE (Enhancement Layer)

* Category filtering logic
* Combo badges (discount, tags)
* Smooth transitions/animations
* Basic search UI (non-functional or simple filter)

---

## 🟢 COULD HAVE (Post-MVP UX Polish)

* Wishlist combos
* Share combo feature
* UI micro-interactions
* Loading skeletons
* Dark mode (if aligned with Figma later)

---

# 🚀 Final Product Principle

Nestly is NOT:

* A grocery listing app
* A product catalog app

Nestly IS:

> A **decision-simplification engine for household shopping using Smart Combos**

