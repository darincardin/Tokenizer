# tokenizer
Tokenizer using ReactJS and Webpack




This library provides a tokenizer widget for use in your project. 

Library can be installed by adding this line to package.json dependancies:
```js
"tokenizer": "darincardin/tokenizer",
```
  


The widget can then be included in the project like this:

```jsx
import Tokenizer from 'tokenizer'; 

var state = {tokens: [] }
	
var onChange = obj =>{
	this.setState(obj);
}
	
<Tokenizer name="tokens" tokens={state.tokens} setState={onChange}  />
```
