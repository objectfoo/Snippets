# Transform es2015 and jsx with babel

Module dependencies.

```bash
$ npm i --D babel-core babel-loader
$ npm i --D babel-preset-es2015 babel-preset-react
```

`.babelrc` settings.

```json
{
	"presets": ["es2015", "react"]
}
```

`webpack.config.js` setup.

```json
{
	"module": {
		"loaders": [
			{
				"test": /\.jsx?$/,
				"exclude": /node_modules/,
				"loader": 'babel-loader',
				"query": { "presets": ['es2015', 'react'] },
			}
		],
	},
}
```
