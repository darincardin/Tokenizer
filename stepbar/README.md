# Stepbar React Widget

##### Summary
This widget shows the user the current task they are on in a series of tasks. When moving to a new
task, the stepbar will animate and the new task will highlight. The stepbar will loop back to step one if no more steps exist.

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
import {StepBar} from 'react-widgets';
```



##### Attributes

* index: this value specifies the step index. It should be within the state object
* array: the list of steps. Should be an array of strings.

#####  Example

```javascript
var state = { stepA: 1, stepB:1 };
	
var array1 = ["A", "B", "C"];
var array2 = [{label:}]
	
<StepBar index={state.step} array={array} />
<StepBar index={state.step} array={array} />
```
-----

