import React, { useEffect } from 'react';

const findStyleForHash = hash => [...document.querySelectorAll('[data-emotion]')].filter(s => s.textContent.indexOf(hash) !== -1)

/*Insert the component name */
function MyComponent() {
  useEffect(() => {
    const styles = findStyleForHash('4klygg'); /*Insert the specific hash */
     }, []);

  return <div>Hello, world!</div>;
}
