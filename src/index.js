import ReactDom from 'react-dom'

function Greeting(){
  return <h1>Hello, this my first React component</h1>
}


ReactDom.render(<Greeting/>, document.getElementById('root'))