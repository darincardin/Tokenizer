# Tokenizer React Widget

##### Summary
This plugin provides a tokenizer widget. Tokens are entered in an input field; they then appear as tokens below the input.
Tokens can be deleted by clicking on them.


##### Requirements
  + [React](https://reactjs.org/)

-----
##### Installation 


```bash
npm install darincardin/react-widgets/tokenizer
```

##### Commands

```bash
# serve with hot reload at localhost:3000
npm run start

# build for production with minification
npm run build
```

##### Import Plugin

```javascript
import 'tokenizer';
```


-----

##### Configuration
* tokens: the token array
* setState: function to call on a change


##### Example 

```javascript


state = {tokens: ['Orange','Blue','Red'] }
	s
		
onChange = obj =>{
		this.setState(obj);
}

<Tokenizer name="tokens"  tokens={this.state.tokens} setState={this.onChange}  />
s
```
