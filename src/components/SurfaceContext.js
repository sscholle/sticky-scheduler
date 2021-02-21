import { createContext } from 'react';

// @TODO - remove the need for mock data
const SurfaceContext = createContext({
  people: [
    { name: 'Default Person', color: 'red' },
    { name: 'Other Person', color: 'blue' },
  ],
});
export default SurfaceContext;
