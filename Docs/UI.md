Here is your **ui.md (Nestly UI/UX Design System Document)** based on your existing Figma direction, Apple-inspired minimal UI, and your MERN startup vision.

---

# 📘 Nestly UI/UX Design System (ui.md)

## 🧠 Product Context

Nestly is a **smart grocery + essentials delivery app** focused on:

* Fast ordering
* Smart combo recommendations
* Clean, minimal, Apple-inspired UI
* High usability for mobile-first users

Tagline: **Your Home. Your Essentials. Delivered Intelligently.**

---

# 1. 🎨 Design System

## 🎯 Color Palette

### Primary Colors

* **Primary Green (CTA / Success / Add actions)**

  * `#00C853`

* **Accent Yellow (Highlights / Deals / Combos)**

  * `#FFD600`

### Neutral / Background

* **Background White / Clean Base**

  * `#F8FAFC`

* Optional supporting neutrals (for UI depth)

  * Text Primary: `#0F172A`
  * Text Secondary: `#64748B`
  * Border Light: `#E2E8F0`

---

## ✍️ Typography

### Font Family

* **Plus Jakarta Sans** (Google Font)

### Type Scale

| Style       | Size | Weight | Usage                            |
| ----------- | ---- | ------ | -------------------------------- |
| Heading 1   | 28px | 700    | Screen titles (Home, Categories) |
| Heading 2   | 22px | 600    | Section headers                  |
| Body        | 16px | 400    | General text                     |
| Small Text  | 13px | 400    | Labels, captions                 |
| Button Text | 15px | 600    | CTA buttons                      |

### Typography Rules

* No multiple fonts (strict single font system)
* Use **high contrast for readability**
* Avoid uppercase paragraphs (Apple-like softness)

---

# 2. 🧩 Component System

## 🔘 Button Component

### Variants

1. **Primary Button**

* Background: `#00C853`
* Text: White
* Radius: 12px
* Use: Add to Cart, Buy Now

2. **Secondary Button**

* Background: White
* Border: `#00C853`
* Text: `#00C853`

3. **Accent Button**

* Background: `#FFD600`
* Use: Deals, Offers, Combos

### States

* Default
* Hover (slight scale 1.02)
* Disabled (opacity 40%)

---

## 🃏 Card Component

### Base Card

Used for categories & general UI blocks

* Background: White
* Radius: 16px
* Shadow: soft (0 4px 20px rgba(0,0,0,0.06))
* Padding: 16px

### Rules

* Always keep whitespace breathing room
* No heavy borders (Apple-style soft depth)

---

## 🍱 ComboCard (🔥 Key USP Component)

Used for **Smart Combo Offers**

### Structure:

* Combo Title (e.g. “Breakfast Combo”)
* Included items preview
* Discount badge (Yellow `#FFD600`)
* CTA Button

### Style:

* Gradient background (white → subtle green tint)
* Highlight badge in yellow
* Slight elevation shadow

### Purpose:

* Increase AOV (Average Order Value)
* Push intelligent recommendations

---

## 🛍️ ProductCard

### Layout:

* Product Image (top, rounded corners)
* Name (bold)
* Price (highlight green)
* Rating (small stars)
* Add Button (floating or bottom)

### Rules:

* Image-first design
* Max 2 lines for product name
* Keep spacing tight but breathable
* Add-to-cart always visible

---

## 🧭 Navbar

### Structure:

* Left: Logo (Nestly)
* Center (optional): Search bar
* Right:

  * Cart icon
  * Profile icon

### Style:

* Sticky top
* Blur background (glass effect)
* Light shadow on scroll

---

# 3. 📐 UI Rules (Apple-Inspired System)

## 🍏 Design Philosophy

* Minimal
* Soft shadows
* No heavy borders
* Focus on content, not chrome

---

## 📏 Spacing System

Use consistent 8pt system:

| Token | Value |
| ----- | ----- |
| xs    | 4px   |
| sm    | 8px   |
| md    | 16px  |
| lg    | 24px  |
| xl    | 32px  |
| 2xl   | 48px  |

---

## 🧱 Layout Rules

* Mobile-first design (primary target)
* Max width for content: 430px (mobile frame)
* Always center main content
* Use grid for product listing (2 columns)
* Avoid cluttered sections

---

## ✨ Visual Rules

* Border radius: 12px–20px
* Shadows: soft, low opacity only
* Icons: rounded, consistent stroke width
* Avoid heavy gradients except Combo highlights

---

# 4. 📱 Screen Mapping

## 🌟 Splash Screen

### Purpose:

First impression branding

### UI:

* Center logo (Nestly)
* Tagline below:
  “Your Home. Your Essentials. Delivered Intelligently.”

### Style:

* White background (`#F8FAFC`)
* Fade-in animation

---

## 🚀 Onboarding Screen

### Flow:

3 slides:

1. Smart Grocery Shopping
2. Save with Combo Deals
3. Fast Home Delivery

### UI:

* Illustration centered
* Title + subtitle
* Swipe indicators
* CTA: “Get Started”

### Rules:

* Minimal text
* Focus on visual storytelling

---

## 🏠 Home Screen

### Sections:

1. Navbar
2. Search bar
3. Categories strip (horizontal scroll)
4. Smart Combos section (🔥 ComboCard)
5. Trending Products (ProductCard grid)

### Key UX:

* Personalization (future-ready)
* Combo-first strategy

---

## 📂 Categories Screen

### Layout:

* Grid of category cards (2 columns)
* Each card:

  * Icon
  * Category name
  * Light background tint

### Interaction:

* Tap → filtered product list

---

# 🚀 Final Design Principle (Important)

Nestly UI should feel:

* As smooth as **Apple Store**
* As practical as **Blinkit/Zepto**
* As intelligent as **recommendation engine**

But visually:
👉 **Minimal, calm, premium, distraction-free**


