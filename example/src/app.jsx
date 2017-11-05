import React from "react"
import ReactDom from "react-dom"
import MyComponent from "components/mycomponent"

class App extends React.Component {

  constructor( props )
  {
    super( props );

    this.state = {
    };
  }

  render()
  {

    return (
      <div>
        <h1>Your Component</h1>

        <MyComponent />

      </div>
    );
  }
}

ReactDom.render( <App/>, document.getElementById( "app" ) );
