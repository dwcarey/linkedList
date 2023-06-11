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
    listString += `( ${currentNode.getValue()} )`;
    return listString;
  }

  //starts at 0
  insertAtIndex(value, index) {
    const nodeBefore = linkedListOne.getByIndex(index - 1);
    const newNode = new _nodeClass__WEBPACK_IMPORTED_MODULE_0__.Node(value);
    const nodeAfter = nodeBefore.getNextNode();

    newNode.setNextNode(nodeAfter);
    return nodeBefore.setNextNode(newNode);
  }

  removeAtIndex(index) {
    const nodeBefore = linkedListOne.getByIndex(index - 1);
    const nodeAfter = nodeBefore.getNextNode().getNextNode();
    nodeBefore.setNextNode(nodeAfter);
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

linkedListOne.insertAtIndex('H', 2); //H in 3rd spot
linkedListOne.insertAtIndex(5, 3); //5 in 4th spot

linkedListOne.removeAtIndex(2); //remove the H
linkedListOne.removeAtIndex(2); //remove the 5

console.log(linkedListOne.toString());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7O1VDdkJoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw0Q0FBSTs7QUFFNUI7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw0Q0FBSTtBQUM1QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHdCQUF3QjtBQUNqRDtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBSTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwrQ0FBK0M7QUFDL0MsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQyw2Q0FBNkM7O0FBRTdDLDRDQUE0QztBQUM1Qyw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLDBDQUEwQzs7QUFFMUMscUNBQXFDO0FBQ3JDLG1DQUFtQzs7QUFFbkMsZ0NBQWdDO0FBQ2hDLGdDQUFnQzs7QUFFaEMsc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5rZWRsaXN0Ly4vc3JjL25vZGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9saW5rZWRsaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpbmtlZGxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpbmtlZGxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9saW5rZWRsaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGlua2VkbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IodmFsdWUgPSBudWxsLCBuZXh0Tm9kZSA9IG51bGwpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5uZXh0Tm9kZSA9IG5leHROb2RlO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZUlucHV0KSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlSW5wdXQ7XG4gIH1cblxuICBnZXROZXh0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0Tm9kZTtcbiAgfVxuXG4gIHNldE5leHROb2RlKG5leHROb2RlSW5wdXQpIHtcbiAgICB0aGlzLm5leHROb2RlID0gbmV4dE5vZGVJbnB1dDtcbiAgfVxufVxuXG5leHBvcnQgeyBOb2RlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuL25vZGVDbGFzcyc7XG5cbmNsYXNzIExpbmtlZExpc3Qge1xuICBjb25zdHJ1Y3RvcihoZWFkID0gbnVsbCkge1xuICAgIHRoaXMuaGVhZCA9IGhlYWQ7XG4gIH1cblxuICBhcHBlbmRWYWx1ZSh2YWx1ZSkge1xuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5oZWFkID09PSBudWxsKSB7XG4gICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgICB3aGlsZSAoY3VycmVudE5vZGUuZ2V0TmV4dE5vZGUoKSAhPT0gbnVsbCkge1xuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmdldE5leHROb2RlKCk7XG4gICAgICB9XG4gICAgICBjdXJyZW50Tm9kZS5zZXROZXh0Tm9kZShuZXdOb2RlKTtcbiAgICB9XG4gIH1cblxuICBwcmVwZW5kVmFsdWUodmFsdWUpIHtcbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkO1xuICAgICAgbmV3Tm9kZS5zZXROZXh0Tm9kZShjdXJyZW50Tm9kZSk7XG4gICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgIH1cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkO1xuICAgIGxldCBzaXplQ291bnQgPSAxO1xuICAgIHdoaWxlIChjdXJyZW50Tm9kZS5nZXROZXh0Tm9kZSgpICE9PSBudWxsKSB7XG4gICAgICBzaXplQ291bnQgKz0gMTtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuZ2V0TmV4dE5vZGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpemVDb3VudDtcbiAgfVxuXG4gIGdldEhlYWQoKSB7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFwiQWluJ3Qgbm8gbm9kZXNcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5oZWFkO1xuICB9XG5cbiAgZ2V0VGFpbCgpIHtcbiAgICBpZiAodGhpcy5oZWFkID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gXCJBaW4ndCBubyBub2Rlc1wiO1xuICAgIH1cbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKGN1cnJlbnROb2RlLmdldE5leHROb2RlKCkgIT09IG51bGwpIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuZ2V0TmV4dE5vZGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICB9XG5cbiAgLy9zdGFydGluZyAwXG4gIGdldEJ5SW5kZXgoaW5kZXgpIHtcbiAgICBpZiAodGhpcy5oZWFkID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gXCJBaW4ndCBubyBub2Rlc1wiO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMuaGVhZDtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcblxuICAgIHdoaWxlIChjdXJyZW50SW5kZXggIT09IGluZGV4KSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmdldE5leHROb2RlKCk7XG4gICAgICBjdXJyZW50SW5kZXggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICB9XG5cbiAgLy9nZXQgc2l6ZVxuICAvL2dldGJ5aW5kZXggc2l6ZSAtIDJcbiAgLy9zaG91bGQgYmUgMm5kIGxhc3Qgbm9kZVxuICAvL3NldCBuZXh0bm9kZSB0byBudWxsXG5cbiAgcG9wTm9kZSgpIHtcbiAgICBpZiAodGhpcy5oZWFkID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gXCJBaW4ndCBubyBub2Rlc1wiO1xuICAgIH1cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldFNpemUoKTtcbiAgICBjb25zdCBzZWNvbmRMYXN0Tm9kZSA9IHRoaXMuZ2V0QnlJbmRleChsZW5ndGggLSAyKTtcbiAgICByZXR1cm4gc2Vjb25kTGFzdE5vZGUuc2V0TmV4dE5vZGUobnVsbCk7XG4gIH1cblxuICBjb250YWluc1ZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFwiQWluJ3Qgbm8gbm9kZXNcIjtcbiAgICB9XG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChjdXJyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKGN1cnJlbnROb2RlLmdldFZhbHVlKCkgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5nZXROZXh0Tm9kZSgpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRJbmRleE9mKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFwiQWluJ3Qgbm8gbm9kZXNcIjtcbiAgICB9XG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkO1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgIHdoaWxlIChjdXJyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKGN1cnJlbnROb2RlLmdldFZhbHVlKCkgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50SW5kZXg7XG4gICAgICB9XG4gICAgICBjdXJyZW50SW5kZXggKz0gMTtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuZ2V0TmV4dE5vZGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBpZiAodGhpcy5oZWFkID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gXCJBaW4ndCBubyBub2Rlc1wiO1xuICAgIH1cbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IGxpc3RTdHJpbmcgPSAnJztcblxuICAgIHdoaWxlIChjdXJyZW50Tm9kZS5nZXROZXh0Tm9kZSgpICE9PSBudWxsKSB7XG4gICAgICBsaXN0U3RyaW5nICs9IGAoICR7Y3VycmVudE5vZGUuZ2V0VmFsdWUoKX0gKSA9PiBgO1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5nZXROZXh0Tm9kZSgpO1xuICAgIH1cbiAgICBsaXN0U3RyaW5nICs9IGAoICR7Y3VycmVudE5vZGUuZ2V0VmFsdWUoKX0gKWA7XG4gICAgcmV0dXJuIGxpc3RTdHJpbmc7XG4gIH1cblxuICAvL3N0YXJ0cyBhdCAwXG4gIGluc2VydEF0SW5kZXgodmFsdWUsIGluZGV4KSB7XG4gICAgY29uc3Qgbm9kZUJlZm9yZSA9IGxpbmtlZExpc3RPbmUuZ2V0QnlJbmRleChpbmRleCAtIDEpO1xuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgY29uc3Qgbm9kZUFmdGVyID0gbm9kZUJlZm9yZS5nZXROZXh0Tm9kZSgpO1xuXG4gICAgbmV3Tm9kZS5zZXROZXh0Tm9kZShub2RlQWZ0ZXIpO1xuICAgIHJldHVybiBub2RlQmVmb3JlLnNldE5leHROb2RlKG5ld05vZGUpO1xuICB9XG5cbiAgcmVtb3ZlQXRJbmRleChpbmRleCkge1xuICAgIGNvbnN0IG5vZGVCZWZvcmUgPSBsaW5rZWRMaXN0T25lLmdldEJ5SW5kZXgoaW5kZXggLSAxKTtcbiAgICBjb25zdCBub2RlQWZ0ZXIgPSBub2RlQmVmb3JlLmdldE5leHROb2RlKCkuZ2V0TmV4dE5vZGUoKTtcbiAgICBub2RlQmVmb3JlLnNldE5leHROb2RlKG5vZGVBZnRlcik7XG4gIH1cbiAgLy8gb3RoZXIgZnVuY3Rpb25zXG59XG5cbmNvbnN0IGxpbmtlZExpc3RPbmUgPSBuZXcgTGlua2VkTGlzdCgpO1xuY29uc29sZS5sb2cobGlua2VkTGlzdE9uZSk7XG5cbmxpbmtlZExpc3RPbmUuYXBwZW5kVmFsdWUoJ1gnKTtcbmxpbmtlZExpc3RPbmUuYXBwZW5kVmFsdWUoJ1knKTtcbmxpbmtlZExpc3RPbmUuYXBwZW5kVmFsdWUoJ1onKTtcbmxpbmtlZExpc3RPbmUucHJlcGVuZFZhbHVlKCdBJyk7XG5saW5rZWRMaXN0T25lLnByZXBlbmRWYWx1ZSgnQicpO1xubGlua2VkTGlzdE9uZS5wcmVwZW5kVmFsdWUoJ0MnKTtcblxuY29uc29sZS5sb2cobGlua2VkTGlzdE9uZS5nZXRTaXplKCkpO1xuXG5jb25zb2xlLmxvZyhsaW5rZWRMaXN0T25lLmdldEhlYWQoKSk7XG5cbmNvbnNvbGUubG9nKGxpbmtlZExpc3RPbmUuZ2V0VGFpbCgpKTtcblxuY29uc29sZS5sb2cobGlua2VkTGlzdE9uZS5nZXRCeUluZGV4KDApKTtcbmNvbnNvbGUubG9nKGxpbmtlZExpc3RPbmUuZ2V0QnlJbmRleCg0KSk7XG5cbmNvbnNvbGUubG9nKGxpbmtlZExpc3RPbmUucG9wTm9kZSgpKTtcblxuY29uc29sZS5sb2cobGlua2VkTGlzdE9uZS5jb250YWluc1ZhbHVlKCdBJykpOyAvL3RydWVcbmNvbnNvbGUubG9nKGxpbmtlZExpc3RPbmUuY29udGFpbnNWYWx1ZSgnQicpKTsgLy90cnVlXG5jb25zb2xlLmxvZyhsaW5rZWRMaXN0T25lLmNvbnRhaW5zVmFsdWUoJ0gnKSk7IC8vZmFsc2VcbmNvbnNvbGUubG9nKGxpbmtlZExpc3RPbmUuY29udGFpbnNWYWx1ZSgxKSk7IC8vZmFsc2VcblxuY29uc29sZS5sb2cobGlua2VkTGlzdE9uZS5nZXRJbmRleE9mKCdBJykpOyAvLzJcbmNvbnNvbGUubG9nKGxpbmtlZExpc3RPbmUuZ2V0SW5kZXhPZignQicpKTsgLy8xXG5jb25zb2xlLmxvZyhsaW5rZWRMaXN0T25lLmdldEluZGV4T2YoJ0gnKSk7IC8vbnVsbFxuY29uc29sZS5sb2cobGlua2VkTGlzdE9uZS5nZXRJbmRleE9mKDEpKTsgLy9udWxsXG5cbmxpbmtlZExpc3RPbmUuaW5zZXJ0QXRJbmRleCgnSCcsIDIpOyAvL0ggaW4gM3JkIHNwb3RcbmxpbmtlZExpc3RPbmUuaW5zZXJ0QXRJbmRleCg1LCAzKTsgLy81IGluIDR0aCBzcG90XG5cbmxpbmtlZExpc3RPbmUucmVtb3ZlQXRJbmRleCgyKTsgLy9yZW1vdmUgdGhlIEhcbmxpbmtlZExpc3RPbmUucmVtb3ZlQXRJbmRleCgyKTsgLy9yZW1vdmUgdGhlIDVcblxuY29uc29sZS5sb2cobGlua2VkTGlzdE9uZS50b1N0cmluZygpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=