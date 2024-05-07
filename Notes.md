# Basic Typescript setup

1. **npm install -g typescript**
2. **tsc --init**
3. open the **tsconfig.json** and configure it like this:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./",  
  }
}
```
4. **run tsc file.ts && file.js**

