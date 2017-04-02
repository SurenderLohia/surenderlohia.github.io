---
layout: post
title:  SCSS Mixin for rem font sizing - Surender Lohia
main-title:  SCSS Mixin for rem font sizing
date:   2016-09-17 14:39:05 +0530
author: Surender Lohia
categories: scss
active: blog
description: SCSS Mixin for rem font sizing with px fallback for older browsers
---

Mixin for rem font sizing with px fallback for older browsers

#### CSS
<pre>
  <code>
    html {
      font-size: 16px; /* Sets up the Base font size */
    }
  </code>
</pre>

#### SCSS

<pre>
  <code>
    @mixin font-size($sizeValue: 1) {
      font-size: ($sizeValue * 16) + px;
      font-size: $sizeValue + rem;
    }
  </code>
</pre>

### Usage

#### SCSS
<pre>
  <code>
    p {
      @include font-size(2);
    }
  </code>
</pre>

(Thanks <a href="https://css-tricks.com/" target="_blank">CSS tricks</a>)

<a href="http://caniuse.com/#feat=rem" target="_blank">Can I use rem </a>

<a href="http://www.standardista.com/px-to-rem-conversion-if-root-font-size-is-16px/" target="_blank">px to rem conversion if :root font-size is 16px</a>
