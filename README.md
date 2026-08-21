# ShopFlow — React State Management Masterclass

A hands-on React application demonstrating **Context API** and **Redux Toolkit** for managing shared and asynchronous application state.

## 🎯 Project Objective

This project was built as part of a React Masterclass focused on:

* Context API
* Redux Toolkit
* Redux slices
* Centralized state management
* `useSelector`
* `useDispatch`
* `createAsyncThunk`
* Asynchronous API state management

The application intentionally demonstrates both Context API and Redux Toolkit so their use cases and differences can be understood practically.

---

## 🛠️ Tech Stack

* React
* Vite
* JavaScript
* Context API
* Redux Toolkit
* React Redux
* REST API

---

# 🏗️ State Management Architecture

The application uses both Context API and Redux Toolkit.

## Context API

Context API is used for relatively simple shared client-side state:

### Theme Context

Manages:

* Current theme
* Theme switching

### Cart Context

Manages:

* Cart items
* Add to cart
* Remove from cart
* Clear cart
* Cart count

This demonstrates how Context API can eliminate unnecessary prop drilling.

---

## Redux Toolkit

Redux Toolkit is used for application state that benefits from a more structured state-management approach.

### Products Slice

Manages:

* Products
* Loading state
* Error state
* API response

### User Slice

Manages:

* Current user
* Authentication state
* Login
* Logout

The Redux store contains:

```text
Redux Store
├── products
└── user
```

---

# 🌐 Asynchronous API State

Products are retrieved from a REST API using Redux Toolkit's `createAsyncThunk`.

The request lifecycle is:

```text
Component
    ↓
dispatch(fetchProducts())
    ↓
createAsyncThunk
    ↓
API Request
    ↓
pending
    ↓
fulfilled / rejected
    ↓
Redux Store
    ↓
useSelector()
    ↓
React UI
```

The application handles three API states:

### Pending

Displays a loading state while the request is in progress.

### Fulfilled

Stores the returned products in Redux state and displays them.

### Rejected

Stores the error and displays an error message.

---

# 📁 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductList.jsx
│   └── ProductCard.jsx
│
├── context/
│   ├── ThemeContext.jsx
│   └── CartContext.jsx
│
├── redux/
│   ├── store.js
│   └── slices/
│       ├── productsSlice.js
│       └── userSlice.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🔄 Context API vs Redux Toolkit

## Context API

Context API is useful when relatively simple state needs to be shared across multiple components.

In this project it is used for:

* Theme
* Cart

## Redux Toolkit

Redux Toolkit is useful when application state becomes more complex and benefits from centralized state, predictable state transitions, feature-based slices, and structured asynchronous workflows.

In this project it is used for:

* Products
* User
* Asynchronous product fetching

Both approaches can coexist in the same React application.

---

# 📚 Key Concepts Learned

## Context API

* `createContext`
* Provider pattern
* `useContext`
* Shared state
* Prop drilling
* Custom Context hooks

## Redux Toolkit

* `configureStore`
* `createSlice`
* Redux store
* Actions
* Reducers
* `useSelector`
* `useDispatch`

## Async Redux

* `createAsyncThunk`
* `pending`
* `fulfilled`
* `rejected`
* `extraReducers`
* Loading and error states

---

# 🚀 Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development URL shown by Vite.

---

# ✅ Assignment Acceptance Criteria

* [x] Built an application using Context API for shared state
* [x] Created a Redux store
* [x] Created at least two Redux slices
* [x] Used `createAsyncThunk` for an API call
* [x] Implemented loading and error states
* [x] Integrated Redux Toolkit with React
* [x] Demonstrated Context API and Redux Toolkit together

---

# 🎓 Learning Outcome

The main objective of this project was not only to implement state management, but to understand why different state-management approaches exist.

The project demonstrates the progression from:

```text
Local State
    ↓
Prop Drilling
    ↓
Context API
    ↓
Redux Toolkit
    ↓
Asynchronous Redux State
```

This provides practical experience with choosing an appropriate state-management approach based on application complexity.
