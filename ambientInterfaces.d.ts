declare interface Window {
    devToolsExtension: Function,
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
}

declare interface Function {
    resource?: string;
    constraints?: string;
    get?: Function;
    identifier?: string;
    defaultProps?: string;
}

declare interface String {
    capatalize() : string;
}
