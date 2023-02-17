
# Form React Widget

##### Summary
This widget creates a form from an array of fields. The form is built with bootstrap and jquery.

Features:
* Client side validation after a submit
* Bad inputs display an error message on focus
* Phone includes optional formatting
* Inputs can be shown/hidden based on another input value

##### Requirements

  + [React](https://reactjs.org/)
  + [Bootstrap](https://getbootstrap.com/)
  + [jQuery](http://jquery.com/)
  
-----

##### Installation 

```bash
npm install darincardin/react-widgets
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
import 'react-widgets/form';
```


##### Initialize Plugin

```javascript
const fields =  [ 
	{label:"Info",  name:"header", tag:"header" },
	{label:"Name",  name:"name",   tag:"text", required:true },
	{label:"Phone", name:"phone",  tag:"phone", format:true}		
```

```javascript
<Form object={this.state.object} onSuccess={this.onSuccess} fields={this.state.fields}>
	<button type="submit" >Submit</button> 
</Form>
```

-----
##### Attributes

The widget has the following attributes:

* object: the object that contains the form data
* onSuccess: a function called when the form is submitted successfully
* fields: the inputs to display to the user. Should correspond to the object passed in


##### Fields
The fields are passed in as an array of objects. Each field has the following options: 

* label: the name seen by the user. For visual purposed only
* name: the name of the input. should match the object value
* required: should the form force the user to enter a value for this input
* tag: tells the form what type of input should be used



Widget currently supports these tag types:
 * text: a standard input field
 * phone: a standard input field with phone validation
 * number: a standard input field with number validation
 * select: a select box
 * radio: radio input
 * checkbox: checkbox input
 * textarea: a textarea input
 * header : displays a line with the label in the middle.No input field


