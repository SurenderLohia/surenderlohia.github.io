---
layout: post
title: Queue | Data Structure Algorithm in JavaScript | Surender Lohia
main-title: Queue - Data Structure Algorithm in JavaScript
date: 2020-03-26 14:21:05 +0530
author: Surender Lohia
categories: js
active: blog
description: In computer science, a queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and removal from the other end of the sequence.
# image: /assets/images/posts/name
comments: true
main-js: true
---

In computer science, a queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and removal from the other end of the sequence. By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue and the end at which elements are removed is called the head or front of the queue, analogously to the words used when people line up to wait for goods or services. [[wiki](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))].

<pre>
  <code class="language-javascript">
    // queue.js
    function Queue() {
  let collection = [];

  this.print = function() {
    console.log(collection);
  }

  this.enQueue = function(item) {
    return collection.push(item);
  }

  this.deQueue = function() {
    return collection.shift();
  }

  this.front = function() {
    return collection[0];
  }

  this.size = function() {
    return collection.length;
  }

  this.isEmpty = function() {
    return collection.length === 0;
  }

  this.values = function() {
    return collection;
  }
}

function priorityQueue() {
  let collection = [];
  this.print = function() {
    console.log('collection');
  }

  this.enQueue = function(element) {
    if(collection.length === 0) {
      collection.push(element);
    } else {
      var added = false;
      for(let i = 0; i < collection.length; i++) {
        // checking priority
        if(element[1] < collection[i][1]) {
          collection.splice(i, 0, element);

          added = true;
          break;
        }
      }

      if(!added) {
        collection.push(element);
      }
    }
  }

  this.deQueue = function() {
    var value = collection.shift();
    return value[0];
  };

  this.front = function() {
    return collection[0];
  }

  this.size = function() {
    return collection.length;
  }

  this.isEmpty = function() {
    return collection.length === 0;
  }
}

module.exports = {
  Queue,
  priorityQueue
};

// // Test cases
// let q = Queue();
// q.enQueue('a');
// q.enQueue('b');
// q.enQueue('b');
// q.print(); // ['a', 'b', 'c'];

// q.deQueue();
// q.print(); // ['b', 'c']

// q.front(); // b
// q.size(); // 2
// q.isEmpty(); // false

// // Test for priorityQueue
// var pq = new priorityQueue();

// pq.enQueue(['CSS', 2]);
// pq.enQueue(['HTML', 3]);
// pq.enQueue(['JavaScript', 1]);

// pq.print(); // [['JavaScript', 1], ['CSS', 2], ['HTML', 3]]

// pq.deQueue();
// pq.print() // [['CSS', 2], ['HTML', 3]]

// console.log(pq.front()); // ['CSS', 2]

// console.log(pq.size()); // 2


  </code>
</pre>

Github Repository [data-structure-algorithm](https://github.com/SurenderLohia/data-structure-algorithm)
