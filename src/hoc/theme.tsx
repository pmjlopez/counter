import * as React from 'react'

export const { Provider, Consumer } = React.createContext<{ theme: string }>({
    theme: 'for testing'
})

export const ThemeContext = (Component: any) => () => <Provider value={{ theme: 'test' }}>
        <Consumer>
            {({theme}) => <Component theme={theme} /> }
        </Consumer>
    </Provider>