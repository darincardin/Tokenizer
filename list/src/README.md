# List React Widget

##### Summary
This widget shows a grid of data. 

* Pagination
* Search
* Sorting by header
* Action Section
* Automatic grid resize

##### Requirements
  + [React](https://reactjs.org/)
  + [React Cookie](https://www.npmjs.com/package/react-cookie)
  + [React Prop Types](https://www.npmjs.com/package/prop-types)



##### Optional
  + [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

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
import {List} from 'react-widgets';
```



##### Attributes

* labels: The colums at the top of the grid. the id value should match the value to be displayed
* data: array of objects to display
* getData: function to call when the grid needs to update the data. 

The getData function  passes in several values:
* page: the page number to get
* sort: the current sort. Its an object with the dir and by fields. "by" is the field to sort by. Dir is either "ASC" or "DESC"
* amount: the amount of objects to return
* search: a value to search by. Can be empty

#####  Example

```javascript
var state = {data :[]}	
	
var columns = [
	{name:'First Name', id:'fName'},
	{name:'Last Name', id:'lName'}
]
var something= ()=>{}
	
var getData = (page, sort, amount, search)=>{
	return API.promise()
}
	
<List labels={this.columns} data={this.state.data} getData={this.getData}  >	
	<a  onClick={something}>MyAction</a> 
</List>
```


