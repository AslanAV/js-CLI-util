// @ts-check

import { test, expect, describe } from '@jest/globals';
import htmlBuilder from '../src/index.js';

describe('HtmlBuilder', () => {
  test('#build', () => {
    const data = [
      ['meta', [
        ['title', 'Hello!'],
      ]],
      ['body', [
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [
          ['span', 'span text'],
          ['span', 'span text2'],
        ]],
      ]],
    ];

    const result = htmlBuilder(data);
    const expected = `<meta><title>Hello!</title></meta>
<body><h1 class="header">html builder example</h1>
<div><span>span text</span><span>span text2</span></div></body>`;
    expect(result).toBe(expected.split('\n').join(('')));
  });
});
