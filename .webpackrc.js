console.log("=====" + process.env.API_ENV)
export default {
  "extraBabelPlugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": true
    }]
  ],
  define: {
    "process.env": {
      NODE_ENV: process.env.NODE_ENV,
      API_ENV: process.env.API_ENV
    }
  },
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  },
  "theme": "./src/theme.js",
  "publicPath": "/"
}
