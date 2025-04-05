

# 🛍️ E-Commerce Store

An advanced, full-stack E-Commerce web application built with **Node.js**, **MongoDB**, **Redis**, **Stripe**, and **React**. This project features secure authentication, a powerful admin dashboard, product and category management, Stripe payment integration, and more.

## 🚀 Features

- 🗄️ **MongoDB & Redis Integration**
- 💳 **Stripe Payment Gateway**
- 🔐 **Robust Authentication System**
  - JWT-based auth with Refresh & Access Tokens
  - Secure signup and login flows
- 🛒 **E-Commerce Core**
  - Product and category management
  - Shopping cart functionality
  - Checkout with Stripe
  - Coupon code system
- 👑 **Admin Dashboard**
  - Product and order control
  - Coupon and category management
  - Sales analytics dashboard
- 🎨 **Beautiful UI with Tailwind CSS**
- 🔒 **Security First**
  - Data validation and protection
  - Rate limiting and input sanitization
- 🚀 **Caching with Redis for Performance**

## ⚙️ Setup Instructions

### 📁 `.env` File Configuration

Create a `.env` file in your root directory and add the following environment variables:

```env
PORT=5000
MONGO_URI=your_mongo_uri

UPSTASH_REDIS_URL=your_redis_url

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key

CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

### 💻 Run Locally

1. **Install dependencies**

```bash
npm install
```

2. **Build the app**

```bash
npm run build
```

3. **Start the server**

```bash
npm run start
```
