# Inventory Management App

This is a React-based Inventory Management Application built with modern tools and libraries. It provides features for managing products and categories efficiently.

## Tools and Libraries Used

1. **React**:  
   The core library for building the user interface.

2. **React Router DOM**:  
   Enables client-side routing for navigation between pages.

3. **Tailwind CSS**:  
   A utility-first CSS framework for responsive and modern design.

4. **React Icons**:  
   Provides a collection of icons for enhancing the UI.

5. **Vite**:  
   A fast build tool and development server for modern web applications.

6. **Context API**:  
   Used for state management across the application:

   - `DataProvider`: Manages product and category data.
   - `FilterProvider`: Handles filtering logic.
   - `ThemeProvider`: Manages theming for the application.

7. **ESLint**:  
   Ensures code quality and consistency.

8. **PostCSS and Autoprefixer**:  
   Used for processing CSS and ensuring browser compatibility.

## Features

1. **Product Management**:

   - Add, edit, and delete products.
   - View product details on a dedicated page.

2. **Category Management**:

   - Add and manage categories for products.

3. **Filtering**:

   - Filter products based on categories or other criteria.

4. **Dynamic Routing**:

   - Navigate to specific product pages using dynamic routes (e.g., `/product/:id`).

5. **Responsive Design**:

   - Fully responsive and works seamlessly on different screen sizes.

6. **Theming**:
   - Supports light and dark themes using the `ThemeProvider`.

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd inventory-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173`.

## Future Enhancements

- Add user authentication for secure access.
- Implement pagination for large product lists.
- Add unit tests for components and context providers.
