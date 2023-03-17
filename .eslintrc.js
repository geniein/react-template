module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb-typescript',    
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {    
    'prettier/prettier': 0,        
    "import/extensions": [      
      'off'
   ],
   "import/no-extraneous-dependencies":[
    'off'
   ]
  },  
  root: true
};