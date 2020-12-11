

### UPDATE ver04
#### 2020년 12월 12일 ~ NOW

##### 1. ES5 -> ES6
1. babel을 통해서 이 부분을 바꿔주는 작업을 해주고 있음. webpack.config.js 파일에 babel-loader 
2.  
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/


