module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint', 'prettier','react','react-hooks'],
  extends: [
    'airbnb-typescript',    
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {    
    'prettier/prettier': 0,
    '@typescript-eslint/no-use-before-define': ["warn"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",     
    "import/extensions": [      
      'off'
   ],
   "import/no-extraneous-dependencies":[
    'off'
   ]
  },  
  root: true
};