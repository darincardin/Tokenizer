
var Tooltip = function(elem, loaderContext)  {

		var errorMsg = document.createElement("div");
    	errorMsg.className = "error-msg";
    	errorMsg.innerText = "";
    	elem.appendChild(errorMsg);

        return {
            show: function(data) {
                errorMsg.innerText = data;
            },
            hide: function() {
           		errorMsg.innerText = "";
            }
        }
};

export default Tooltip