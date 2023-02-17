# Stepbar React Widget

##### Summary
This plugin provides a stepbar that shows a user the current task they are on in a series of tasks. When moving to a new
task, the stepbar will animate and the new task will highlight. Stepbar will loop back to step one if no more steps exist.

##### Requirements
  + [React](https://reactjs.org/)

-----
##### Installation 

```bash
npm install darincardin/stepbar
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
import 'stepbar';
```



##### Configuration

* index: this value specifies the step index. It should be within the state object
* array: the list of steps. Should be an array of strings.


#####  Example

```javascript
state = { step: 1 };
	
array = ["A", "B", "C"];
	
<StepBar index={this.state.step} array={this.array} />
```
-----

