# Tokenizer React Widget

##### Summary
This widget provides a tokenizer. Tokens are entered in an input field; they then appear as tokens below the input.
Tokens can be deleted by clicking on them.


##### Requirements
  + [React](https://reactjs.org/)

-----
##### Installation 


```bash
npm install darincardin/react-widgets
```

##### Commands

```bash
# serve with hot reload at localhost:3000
npm run start

# build for production with minification
npm run build
```

##### Import

```javascript
import {Tokenizer} from 'react-widgets';
```


-----

##### Configuration
* tokens: the token array
* setState: function to call on a change


##### Example 

```javascript




var state = {tokens: ['Orange','Blue','Red'] }
	
		
var onChange = obj =>{
		this.setState(obj);
}

<Tokenizer name="tokens"  tokens={state.tokens} setState={onChange}  />

```
