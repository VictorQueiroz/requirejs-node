requirejs-node
==============

A bunch of Node.js core modules ready to RequireJS use.

## Installation (Bower)
```
bower install --save requirejs-node
```

## Usage
```js
{
  'paths': {
    'url': 'lib/url',
    'path': 'lib/path'
  }
}
```

## Aditional information
For now, we just have these modules:

- path
- url
- punycode
- querystring

Make sure to import all node modules, some modules depend on each other (for now).
