---
layout: post
title: Set | Data Structure Algorithm in JavaScript | Surender Lohia
main-title: Set - Data Structure Algorithm in JavaScript
date: 2020-03-25 14:21:05 +0530
author: Surender Lohia
categories: js
active: blog
description: Set | Data Structure Algorithm in JavaScript
# image: /assets/images/posts/name
comments: true
main-js: true
---

In computer science, a set is an abstract data type that can store unique values, without any particular order.

<pre>
  <code class="language-javascript">
    // set.js
    var MySet = function() {
      let collection = [];

      this.has = function(element) {
        return (collection.indexOf(element) !== -1);
      }

      this.add = function(element) {
        if(!this.has(element)) {
          collection.push(element);
          return true;
        }
        return false;
      }

      this.remove = function(element) {
        if(this.has(element)) {
          let index = collection.indexOf(element);
          collection.splice(index, 1);
          return true;
        }
        return false;
      }

      this.size = function() {
        return collection.length;
      }

      this.values = function() {
        return collection;
      }

      this.union = function(otherSet) {
        let unionSet = new MySet();
        let firstSet = this.values();
        let secondSet =  otherSet.values();

        firstSet.forEach(function(element) {
          unionSet.add(element);
        });

        secondSet.forEach(function(element) {
          unionSet.add(element);
        });

        return unionSet;
      }

      this.intersection = function(otherSet) {
        let intersectionSet = new MySet();
        let firstSet = this.values();

        firstSet.forEach(function(element) {
          if(otherSet.has(element)) {
            intersectionSet.add(element);
          }
        });

        return intersectionSet;
      }

      this.different = function(otherSet) {
        let different = new MySet();
        let firstSet = this.values();

        firstSet.forEach(function(element) {
          if(!otherSet.has(element)) {
            different.add(element);
          }
        });

        return different;
      }

      this.subset = function(otherSet) {
        let firstSet = this.values();
        return firstSet.every(function(element) {
          return otherSet.has(element);
        });
      }
    }

    module.exports = MySet;

    // // Test cases
    // let setA = new MySet();
    // let setB = new MySet();

    // setA.add('a');
    // setB.add('a');
    // setB.add('b');
    // setB.add('c');
    // setB.add('d');
    // setB.add('e');

    // console.log(setA.has('a')) // true
    // console.log(setB.size()); // 5
    // console.log(setA.union(setB).values()); // ['a', 'b', 'c', 'd', 'e']
    // console.log(setA.intersection(setB).values()); // ['a']
    // console.log(setB.different(setA).values()); // ['b', 'c', 'd', 'e']
    // console.log(setA.subset(setB)); // true;

    // setB.remove('e') // true
  </code>
</pre>

Github Repository [data-structure-algorithm](https://github.com/SurenderLohia/data-structure-algorithm)
