---
layout: post
title: Stack | Data Structure Algorithm in JavaScript | Surender Lohia
main-title: Stack - Data Structure Algorithm in JavaScript
date: 2020-03-27 14:21:05 +0530
author: Surender Lohia
categories: js
active: blog
description: In computer science, a stack is an abstract data type that serves as a collection of elements, with two principal operations; push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed.
# image: /assets/images/posts/name
comments: true
main-js: true
---

In computer science, a stack is an abstract data type that serves as a collection of elements, with two principal operations:

1. push, which adds an element to the collection, and 

2. pop, which removes the most recently added element that was not yet removed. [[wiki](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))].

<pre>
  <code class="language-javascript">
    // stack.js
    var Stack = function() {
      this.count = 0;
      this.storage = {};

      this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
        return value;
      }

      this.pop = function() {
        if(this.count === 0) {
          return 'undefined';
        }

        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
      }

      this.size = function() {
        return this.count;
      }

      this.peek = function() {
        return this.storage[this.count-1];
      }
    }

    module.exports = Stack;

    // Test cases

    // const myStack = new Stack();
    // myStack.push(10);
    // myStack.push(20);
    // console.log(myStack.size()); // 2
    // console.log(myStack.peek()); // 20
    // console.log(myStack.pop()); // 20

    // myStack.push(30);
    // console.log(myStack.peek()); // 30
  </code>
</pre>

Github Repository [data-structure-algorithm](https://github.com/SurenderLohia/data-structure-algorithm)
