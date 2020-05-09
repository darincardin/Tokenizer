# tokenizer
Tokenizer using ReactJS and Webpack


This library provides a tokenizer widget for use with a form. 

Library can be installed by adding this line to package.json dependancies:
"tokenizer": "darincardin/tokenizer#1.1.4",


The widget can then be included in the project like this:

```jsx
import Tokenizer from 'tokenizer'; 

var state = {tokens: [] }
	
var onChange = obj =>{
	this.setState(obj);
}
	
<Tokenizer name="tokens" tokens={state.tokens} setState={onChange}  />
```
