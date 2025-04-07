const sortItems = (config, items) => {
    const sortedItems = [...items].sort((a, b) => {
      const valueA = a[config.columnKey];
      const valueB = b[config.columnKey];
  
      // Check if the column is 'created_at' (Date type)
      if (config.columnKey === "created_at") {
        const dateA = new Date(valueA);
        const dateB = new Date(valueB);
  
        // Check if the dates are valid
        if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
          return 0; // If either of the dates is invalid, do not sort
        }
  
        return config.sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      }
  
      // Check if values are numbers
      if (typeof valueA === "number" && typeof valueB === "number") {
        return config.sortOrder === "asc" ? valueA - valueB : valueB - valueA;
      }
  
      // If values are strings, compare them lexicographically
      if (typeof valueA === "string" && typeof valueB === "string") {
        return config.sortOrder === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }
  
      // Fallback for other types (e.g., null, undefined, etc.)
      return 0;
    });
  
    return sortedItems;
  };
  
  export default sortItems;
  