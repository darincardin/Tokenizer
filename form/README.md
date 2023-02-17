
# Form React Widget

##### Summary
This plugin provides a mechanical styled counter. Digits change in a animated, rolling fashion.

Features:
* Client side validation after a submit
* Bad inputs display an error message on focus
* Phone includes optional formatting
* Inputs can be shown/hidden based on another input value

##### Requirements

  + [React](https://reactjs.org/)
  + [Bootstrap](https://getbootstrap.com/)
  
-----
##### Installation 

```bash
npm install darincardin/form
```

##### Commands

```bash
# serve with hot reload at localhost:3001
npm run start

# build for production with minification
npm run build
```

##### Import Plugin

```javascript
import 'form';
```


##### Initialize Plugin

```javascript
const fields =  [ 
	{label:"Customer Info", name:"customerInfo", tag:"header" },
	{label:"Name", name:"name",     tag:"text", required:true },
	{label:"Phone",      name:"phone", tag:"phone", format:true}		
```

```javascript
<Form object={this.state.object} onSuccess={this.onSuccess} fields={this.state.fields}>
	<button type="submit" >Submit</button> 
</Form>
```

-----
##### Configuration

The configuration plugin offers the following configurations



* object: the object that contains the form data
* onSuccess: a function called if the form is submitted successfully
* fields: the inputs to display to the user. Should correspond to the object passed in


##### Fields
The fields are passed in as an array of objects. Each object must have the 'tag' attribute. 
This attribute tells the form what type of input should be used

Widget currently supports these input types:
 * text
 * phone
 * number
 * select
 * radio
 * checkbox
 * select
 * textarea



