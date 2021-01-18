import * as React from 'react';

export default class App extends React.Component<any, any> {
  private interval: NodeJS.Timeout;
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }

  public componentWillMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  public render() {
    return (
      <div>
        <h1>React Skeleton</h1>
        <div>Hot reload React Skeleton in TypeScript! {this.state.count}</div>
      </div>
    );
  }
}
