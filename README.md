# React-TypeScript-Webpack

Complete Guide to get hands on with react-typescript and webpack Configuration.
# Steps

1. Configured Typescript React and Webpack.
2. To hot reload on changes the configuration is -> 
    devServer {
    hot: `true`
    inline: `true`,
    contentBase: `yourContentBase(eg. / , /src)`
}
2. Configure store with middlewares, redux-thunk and redux-dev-tools.
3. Add HTTP File to handle the server requests.
4. Configure React Router.
In react-router v4 the example will be

        <Router>
          <Route path="/login" component={Login} />
        <Router>
5. After doing this when you will directly enter the URL in the address bar you will get a Cannot Get /login error.
6. To resolve this error add this to the webpack conifig.
 + devServer {
    historyApiFallback:  `true`;
 }
7. Now to navigate to any other page use the BrowserRouter on the top most of your routes.
    `<BrowserRouter>....your routes...</BrowserRouter>
`   add history object in the interface of your App now and use `this.props.history.push()`

8. Use `async await` to handle the server requests.
eg. `export function demo = async () => {
`
`const status = await post();`
`do the login with status.....!!!
`
`}`
