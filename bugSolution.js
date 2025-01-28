```javascript
// ... your Tailwind CSS configuration ...

module.exports = {
  // ... other configurations ...
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue,html}', // Include all relevant extensions
    './node_modules/@my-ui-lib/**/*.{js,jsx,ts,tsx,vue,html}' // Add paths to external UI libraries
  ],
  // ... rest of your Tailwind CSS configuration ...
};
```