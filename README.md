

## 1. Create project and install libraries
```
$npm init -y
$npm install -D jest supertest
$npm install -S express
```

## 2. Config test and run test

Edit file `package.json`
```
"scripts": {
    "test": "jest --coverage"
}
```

Run test
```
$npm test
```

## 3. Create test file  `user.test.js`
* Generate by AI with [Sample prompts](sample_prompts.md)

### Fix your test with AI
* Create file `./app.js` with express library

Run test again !!
```
$npm test
```

## 4. Start server
```
$node server.js
```

List of urls
* http://localhost:3000/users/1
* http://localhost:3000/users/2
* http://localhost:3000/users/3

## More ...
* Add health check GET /healthz
* Get user data from postgresql database
