## Setup Instructions

### Prerequisites

- Node.js installed (v14 or higher).
- npm or yarn as the package manager.

### 1. Extract the Zip File

1. Download and extract the provided zip file.

2. Navigate to the project folder:

```bash
cd path/to/extracted/project-folder
```

### 2. Install Dependencies

In the project folder, run the following command to install the necessary dependencies:

```bash
npm install
# or if using yarn
yarn install
```

### 3. Run the Application Locally

To start the development server and view the app locally, run:

```bash
npm start
# or if using yarn
yarn start
```

Your application will be available at `http://localhost:5173/`.

### 4. Project Features Breakdown

- **DataTable Component**: 
  - Fetch product data from `products.json`.
  - Display in a table with sorting and filtering.
  
- **Graph Component**:
  - Fetch stock data from `quantity.json`.
  - Create bar-chart and pie chart to show total stock per category.

- **State Management**:
  - Use React hooks (`useState`, `useEffect`) for managing state.
  - Handle sorting and filtering directly in the table.
