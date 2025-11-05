# Shop Easy - E-Commerce Cart Application

A modern, responsive e-commerce application built with ReactJS that allows users to browse products, add items to cart, and manage their shopping cart with real-time updates.

## 🚀 Features

- **Product Browsing**: Browse products fetched from the Fake Store API
- **Product Display**: Beautiful, responsive product cards showing:
  - Product image
  - Product title
  - Product description
  - Product price
  - Product category
- **Shopping Cart**:
  - Add products to cart
  - Remove products from cart
  - Increase/decrease item quantities
  - Real-time price calculations
  - 10% discount on total price
  - Cart persistence using localStorage
- **Navigation**: Seamless routing between pages using React Router
- **Responsive Design**: Fully responsive layout using Tailwind CSS

## 🛠️ Tech Stack

- **ReactJS** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Shop_easy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
Shop_easy/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar with cart icon
│   │   └── Footer.jsx       # Footer component
│   ├── context/
│   │   └── CartContext.jsx  # Global cart state management
│   ├── pages/
│   │   ├── Home.jsx        # Home page
│   │   ├── Products.jsx    # Products listing page
│   │   ├── Cart.jsx        # Shopping cart page
│   │   ├── ProductDetails.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Help.jsx
│   │   ├── ReachOut.jsx
│   │   └── PageNotFound.jsx
│   ├── App.jsx             # Main app component with routes
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── public/
├── package.json
└── README.md
```

## 🎯 Key Features Explained

### Product Page (`/products`)
- Fetches products from [Fake Store API](https://fakestoreapi.com/)
- Displays products in a responsive grid layout
- Each product card shows image, title, description, price, and category
- "Add to Cart" button for products not in cart
- "Remove from Cart" button for products already in cart

### Cart Page (`/cart`)
- Displays all items in the shopping cart
- Shows product image, name, description, and price
- Quantity controls (increase/decrease) for each item
- Individual item total calculation (price × quantity)
- Cart summary with:
  - Subtotal
  - 10% discount
  - Final total price
- Remove button for each item
- Empty cart state with link to products page

### Cart State Management
- Uses React Context API for global state management
- Cart data persists in localStorage
- Real-time updates across all components
- Cart count badge in navigation bar

## 📱 API Integration

The application uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data:
- **Endpoint**: `https://fakestoreapi.com/products`
- Returns a list of products with:
  - `id`: Product ID
  - `title`: Product name
  - `price`: Product price
  - `description`: Product description
  - `category`: Product category
  - `image`: Product image URL

## 🎨 Styling

The application uses Tailwind CSS for styling, providing:
- Responsive design (mobile, tablet, desktop)
- Modern UI with hover effects and transitions
- Consistent color scheme
- Clean, professional appearance

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy options:
   - **Drag and drop**: Drag the `dist` folder to Netlify
   - **Git integration**: Connect your GitHub repository to Netlify
   - **Netlify CLI**: Use `netlify deploy --prod --dir=dist`

3. Configure build settings in Netlify:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

No environment variables are required for this project. The API endpoint is hardcoded in the Products component.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Developed as part of the Add to Cart Task Using Router project.

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing product data
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Router](https://reactrouter.com/) for routing capabilities
