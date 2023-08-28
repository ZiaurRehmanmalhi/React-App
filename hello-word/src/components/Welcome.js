import React from 'react'

export const Welcome = () => {
    //   return (<>
    //       <div className='App'>Welcome the new file</div>
    //   </>
    //   )

    return React.createElement(
        'div',
         {id: 'Greet', className: 'App-header'},
         React.createElement('h1', null, 'Hello this is React App'))
}

export default Welcome
