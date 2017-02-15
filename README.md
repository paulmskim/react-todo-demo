# react-todo-demo

A todo list demo made from React with unit and integration tests.

## Getting started

Clone the git repo:

```
git clone https://github.com/paulmskim/react-todo-demo.git
```

Install node modules:

```
npm install
```

Run webpack dev server with `npm run dev` and visit http://localhost:8080.

To run unit tests, ensure you have gulp installed globally and run:

```
gulp unit-test:coverage
```

If gulp is not installed globally, run:

```
./node_modules/.bin/gulp unit-test:coverage
```

Coverage of components can be see in `/coverage`.

To run integration tests, run:

```
gulp integration-test
```

or

```
./node_modules/.bin/gulp integration-test
```
