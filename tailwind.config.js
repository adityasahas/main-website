const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"] 
        
      },
      colors: {
        'calcommit-orange': '#db8a74',
      }
    },
  },
  plugins: [],
});