## 使用
``` shell
npm install easy-style-loader --save-dev
```

## 配置
```js
// webpack.config.js
module: {
    rules: [
        {
            test: /\.less$/
            use: ['easy-style-loader', 'less-loader']
        }
    ]
}
```
