import * as React from 'react';
import {Display} from './components/Display'

interface IState {
    count: number
    theme: string
}

export const { Provider, Consumer } = React.createContext<{ theme: string }>({
    theme: 'for testing'
})

export class App extends React.Component<{}, IState> {
  public state = {
      count: 0
      theme: 'test'
  }

  public componentDidMount() {
      const count = this.getLocalStorage()
      if (count) {
          this.setState({ count: Number(count) })
      }
  }

  public componentDidUpdate(prevProps: {}, prevState: IState) {
    if (this.state.count !== prevState.count) {
        this.updateLocalStorage(this.state.count.toString())
    }
  }

  public getLocalStorage = () => localStorage.getItem('count')
  public updateLocalStorage = (value: string) => localStorage.setItem('count', value)
  public add = () => this.setState(state => ({ count: state.count + 1 }))
  public subtract = () =>  this.setState(state => ({ count: state.count - 1 }))


  public render() {
    const {count} = this.state
    return (
      <div className="App">
          <Provider value={{ theme: this.state.theme }}>
              <Display
                  add={this.add}
                  subtract={this.subtract}
                  count={count}/>
          </Provider>
      </div>
    );
  }
}

export default App;
