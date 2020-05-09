# tokenizer
Tokenizer using ReactJS and Webpack

Library can be installed by adding this line to package.json dependancies:
"tokenizer": "darincardin/tokenizer#1.1.4",


The widget can then be included in the project like this:

```jsx
function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('container')
);
```


import Tokenizer from 'tokenizer'; 

var state = {tokens: [] }

	
var onChange = obj =>{
	this.setState(obj);
}
	

<Tokenizer name="tokens" tokens={state.tokens} setState={onChange}  />

