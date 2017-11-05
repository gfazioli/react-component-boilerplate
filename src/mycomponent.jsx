import React from "react"

class MyComponent extends React.Component {

  constructor( props )
  {
    super( props );

    this.state = {};

  }

  render()
  {
    try {

      return (
        <div>
          Hello, World!
        </div>
      );
    }
    catch( e ) {
      console.log( "ERROR", "render", e );
    }
  }

  componentWillReceiveProps( nextProps )
  {
    //
  }

}

MyComponent.propTypes = {};

MyComponent.defaultProps = {};

export default MyComponent;
