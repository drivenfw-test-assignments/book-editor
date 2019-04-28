export const getClass = path => 
  path.includes('new') || path.includes('edit') 
    ? 'form-message' 
    : '' 

