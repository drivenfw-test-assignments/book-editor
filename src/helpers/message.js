export const getClass = path => 
  path.includes('new') || path.includes('edit') 
    ? 'sm-margin' 
    : '' 

