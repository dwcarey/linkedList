/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/nodeClass.js":
/*!**************************!*\
  !*** ./src/nodeClass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  getValue() {
    return this.value;
  }

  setValue(valueInput) {
    this.value = valueInput;
  }

  getNextNode() {
    return this.nextNode;
  }

  setNextNode(nextNodeInput) {
    this.nextNode = nextNodeInput;
  }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodeClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodeClass */ "./src/nodeClass.js");


class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  appendValue(value) {
    const newNode = new _nodeClass__WEBPACK_IMPORTED_MODULE_0__.Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.getNextNode() !== null) {
        currentNode = currentNode.getNextNode();
      }
      currentNode.setNextNode(newNode);
    }
  }

  prependValue(value) {
    const newNode = new _nodeClass__WEBPACK_IMPORTED_MODULE_0__.Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      const currentNode = this.head;
      newNode.setNextNode(currentNode);
      this.head = newNode;
    }
  }

  getSize() {
    if (this.head === null) {
      return 0;
    }

    let currentNode = this.head;
    let sizeCount = 1;
    while (currentNode.getNextNode() !== null) {
      sizeCount += 1;
      currentNode = currentNode.getNextNode();
    }
    return sizeCount;
  }

  getHead() {
    if (this.head === null) {
      return "Ain't no nodes";
    }

    return this.head;
  }

  getTail() {
    if (this.head === null) {
      return "Ain't no nodes";
    }
    let currentNode = this.head;
    while (currentNode.getNextNode() !== null) {
      currentNode = currentNode.getNextNode();
    }
    return currentNode;
  }

  //starting 0
  getByIndex(index) {
    if (this.head === null) {
      return "Ain't no nodes";
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      currentNode = currentNode.getNextNode();
      currentIndex += 1;
    }
    return currentNode;
  }

  //get size
  //getbyindex size - 2
  //should be 2nd last node
  //set nextnode to null

  popNode() {
    if (this.head === null) {
      return "Ain't no nodes";
    }
    const length = this.getSize();
    const secondLastNode = this.getByIndex(length - 2);
    return secondLastNode.setNextNode(null);
  }

  containsValue(value) {
    if (this.head === null) {
      return "Ain't no nodes";
    }
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.getValue() === value) {
        return true;
      }
      currentNode = currentNode.getNextNode();
    }
    return false;
  }

  getIndexOf(value) {
    if (this.head === null) {
      return "Ain't no nodes";
    }
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentNode.getValue() === value) {
        return currentIndex;
      }
      currentIndex += 1;
      currentNode = currentNode.getNextNode();
    }
    return null;
  }

  toString() {
    if (this.head === null) {
      return "Ain't no nodes";
    }
    let currentNode = this.head;
    let listString = '';

    while (currentNode.getNextNode() !== null) {
      listString += `( ${currentNode.getValue()} ) => `;
      currentNode = currentNode.getNextNode();
    }
    return listString;
  }

  // other functions
}

const linkedListOne = new LinkedList();
console.log(linkedListOne);

linkedListOne.appendValue('X');
linkedListOne.appendValue('Y');
linkedListOne.appendValue('Z');
linkedListOne.prependValue('A');
linkedListOne.prependValue('B');
linkedListOne.prependValue('C');

console.log(linkedListOne.getSize());

console.log(linkedListOne.getHead());

console.log(linkedListOne.getTail());

console.log(linkedListOne.getByIndex(0));
console.log(linkedListOne.getByIndex(4));

console.log(linkedListOne.popNode());

console.log(linkedListOne.containsValue('A')); //true
console.log(linkedListOne.containsValue('B')); //true
console.log(linkedListOne.containsValue('H')); //false
console.log(linkedListOne.containsValue(1)); //false

console.log(linkedListOne.getIndexOf('A')); //2
console.log(linkedListOne.getIndexOf('B')); //1
console.log(linkedListOne.getIndexOf('H')); //null
console.log(linkedListOne.getIndexOf(1)); //null

console.log(linkedListOne.toString());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7O1VDdkJoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw0Q0FBSTs7QUFFNUI7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw0Q0FBSTtBQUM1QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHdCQUF3QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsNkNBQTZDOztBQUU3Qyw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLDRDQUE0QztBQUM1QywwQ0FBMEM7O0FBRTFDLHNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2VkbGlzdC8uL3NyYy9ub2RlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vbGlua2VkbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saW5rZWRsaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saW5rZWRsaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGlua2VkbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpbmtlZGxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlID0gbnVsbCwgbmV4dE5vZGUgPSBudWxsKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMubmV4dE5vZGUgPSBuZXh0Tm9kZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWVJbnB1dCkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZUlucHV0O1xuICB9XG5cbiAgZ2V0TmV4dE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmV4dE5vZGU7XG4gIH1cblxuICBzZXROZXh0Tm9kZShuZXh0Tm9kZUlucHV0KSB7XG4gICAgdGhpcy5uZXh0Tm9kZSA9IG5leHROb2RlSW5wdXQ7XG4gIH1cbn1cblxuZXhwb3J0IHsgTm9kZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9ub2RlQ2xhc3MnO1xuXG5jbGFzcyBMaW5rZWRMaXN0IHtcbiAgY29uc3RydWN0b3IoaGVhZCA9IG51bGwpIHtcbiAgICB0aGlzLmhlYWQgPSBoZWFkO1xuICB9XG5cbiAgYXBwZW5kVmFsdWUodmFsdWUpIHtcbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuXG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkO1xuICAgICAgd2hpbGUgKGN1cnJlbnROb2RlLmdldE5leHROb2RlKCkgIT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5nZXROZXh0Tm9kZSgpO1xuICAgICAgfVxuICAgICAgY3VycmVudE5vZGUuc2V0TmV4dE5vZGUobmV3Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJlcGVuZFZhbHVlKHZhbHVlKSB7XG4gICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICBpZiAodGhpcy5oZWFkID09PSBudWxsKSB7XG4gICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHRoaXMuaGVhZDtcbiAgICAgIG5ld05vZGUuc2V0TmV4dE5vZGUoY3VycmVudE5vZGUpO1xuICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICB9XG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMuaGVhZDtcbiAgICBsZXQgc2l6ZUNvdW50ID0gMTtcbiAgICB3aGlsZSAoY3VycmVudE5vZGUuZ2V0TmV4dE5vZGUoKSAhPT0gbnVsbCkge1xuICAgICAgc2l6ZUNvdW50ICs9IDE7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmdldE5leHROb2RlKCk7XG4gICAgfVxuICAgIHJldHVybiBzaXplQ291bnQ7XG4gIH1cblxuICBnZXRIZWFkKCkge1xuICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBcIkFpbid0IG5vIG5vZGVzXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaGVhZDtcbiAgfVxuXG4gIGdldFRhaWwoKSB7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFwiQWluJ3Qgbm8gbm9kZXNcIjtcbiAgICB9XG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChjdXJyZW50Tm9kZS5nZXROZXh0Tm9kZSgpICE9PSBudWxsKSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmdldE5leHROb2RlKCk7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgfVxuXG4gIC8vc3RhcnRpbmcgMFxuICBnZXRCeUluZGV4KGluZGV4KSB7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFwiQWluJ3Qgbm8gbm9kZXNcIjtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoY3VycmVudEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5nZXROZXh0Tm9kZSgpO1xuICAgICAgY3VycmVudEluZGV4ICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgfVxuXG4gIC8vZ2V0IHNpemVcbiAgLy9nZXRieWluZGV4IHNpemUgLSAyXG4gIC8vc2hvdWxkIGJlIDJuZCBsYXN0IG5vZGVcbiAgLy9zZXQgbmV4dG5vZGUgdG8gbnVsbFxuXG4gIHBvcE5vZGUoKSB7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFwiQWluJ3Qgbm8gbm9kZXNcIjtcbiAgICB9XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRTaXplKCk7XG4gICAgY29uc3Qgc2Vjb25kTGFzdE5vZGUgPSB0aGlzLmdldEJ5SW5kZXgobGVuZ3RoIC0gMik7XG4gICAgcmV0dXJuIHNlY29uZExhc3ROb2RlLnNldE5leHROb2RlKG51bGwpO1xuICB9XG5cbiAgY29udGFpbnNWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBcIkFpbid0IG5vIG5vZGVzXCI7XG4gICAgfVxuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMuaGVhZDtcbiAgICB3aGlsZSAoY3VycmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChjdXJyZW50Tm9kZS5nZXRWYWx1ZSgpID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuZ2V0TmV4dE5vZGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0SW5kZXhPZih2YWx1ZSkge1xuICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBcIkFpbid0IG5vIG5vZGVzXCI7XG4gICAgfVxuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMuaGVhZDtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICB3aGlsZSAoY3VycmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChjdXJyZW50Tm9kZS5nZXRWYWx1ZSgpID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gY3VycmVudEluZGV4O1xuICAgICAgfVxuICAgICAgY3VycmVudEluZGV4ICs9IDE7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmdldE5leHROb2RlKCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFwiQWluJ3Qgbm8gbm9kZXNcIjtcbiAgICB9XG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkO1xuICAgIGxldCBsaXN0U3RyaW5nID0gJyc7XG5cbiAgICB3aGlsZSAoY3VycmVudE5vZGUuZ2V0TmV4dE5vZGUoKSAhPT0gbnVsbCkge1xuICAgICAgbGlzdFN0cmluZyArPSBgKCAke2N1cnJlbnROb2RlLmdldFZhbHVlKCl9ICkgPT4gYDtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuZ2V0TmV4dE5vZGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RTdHJpbmc7XG4gIH1cblxuICAvLyBvdGhlciBmdW5jdGlvbnNcbn1cblxuY29uc3QgbGlua2VkTGlzdE9uZSA9IG5ldyBMaW5rZWRMaXN0KCk7XG5jb25zb2xlLmxvZyhsaW5rZWRMaXN0T25lKTtcblxubGlua2VkTGlzdE9uZS5hcHBlbmRWYWx1ZSgnWCcpO1xubGlua2VkTGlzdE9uZS5hcHBlbmRWYWx1ZSgnWScpO1xubGlua2VkTGlzdE9uZS5hcHBlbmRWYWx1ZSgnWicpO1xubGlua2VkTGlzdE9uZS5wcmVwZW5kVmFsdWUoJ0EnKTtcbmxpbmtlZExpc3RPbmUucHJlcGVuZFZhbHVlKCdCJyk7XG5saW5rZWRMaXN0T25lLnByZXBlbmRWYWx1ZSgnQycpO1xuXG5jb25zb2xlLmxvZyhsaW5rZWRMaXN0T25lLmdldFNpemUoKSk7XG5cbmNvbnNvbGUubG9nKGxpbmtlZExpc3RPbmUuZ2V0SGVhZCgpKTtcblxuY29uc29sZS5sb2cobGlua2VkTGlzdE9uZS5nZXRUYWlsKCkpO1xuXG5jb25zb2xlLmxvZyhsaW5rZWRMaXN0T25lLmdldEJ5SW5kZXgoMCkpO1xuY29uc29sZS5sb2cobGlua2VkTGlzdE9uZS5nZXRCeUluZGV4KDQpKTtcblxuY29uc29sZS5sb2cobGlua2VkTGlzdE9uZS5wb3BOb2RlKCkpO1xuXG5jb25zb2xlLmxvZyhsaW5rZWRMaXN0T25lLmNvbnRhaW5zVmFsdWUoJ0EnKSk7IC8vdHJ1ZVxuY29uc29sZS5sb2cobGlua2VkTGlzdE9uZS5jb250YWluc1ZhbHVlKCdCJykpOyAvL3RydWVcbmNvbnNvbGUubG9nKGxpbmtlZExpc3RPbmUuY29udGFpbnNWYWx1ZSgnSCcpKTsgLy9mYWxzZVxuY29uc29sZS5sb2cobGlua2VkTGlzdE9uZS5jb250YWluc1ZhbHVlKDEpKTsgLy9mYWxzZVxuXG5jb25zb2xlLmxvZyhsaW5rZWRMaXN0T25lLmdldEluZGV4T2YoJ0EnKSk7IC8vMlxuY29uc29sZS5sb2cobGlua2VkTGlzdE9uZS5nZXRJbmRleE9mKCdCJykpOyAvLzFcbmNvbnNvbGUubG9nKGxpbmtlZExpc3RPbmUuZ2V0SW5kZXhPZignSCcpKTsgLy9udWxsXG5jb25zb2xlLmxvZyhsaW5rZWRMaXN0T25lLmdldEluZGV4T2YoMSkpOyAvL251bGxcblxuY29uc29sZS5sb2cobGlua2VkTGlzdE9uZS50b1N0cmluZygpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=