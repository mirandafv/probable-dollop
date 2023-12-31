type AssertionError<T = {}> = Error & T & {
    showDiff: boolean;
};

interface AssertionErrorConstructor {
    new<T = {}>(message: string, props?: T, ssf?: Function): AssertionError<T>;
}

declare const AssertionError: AssertionErrorConstructor;

export = AssertionError;const { CONSTANTS } = require('./constants.js');

const { SPECIAL_PROP_VALUE } = CONSTANTS;

function testOptional(title, fn, isAsyncTest) {
  if (isAsyncTest) {
    it(title, function test(done) {
      try {
        fn.call(this, done);
      } catch (err) {
        if (err._specialProp === SPECIAL_PROP_VALUE) {
          this.test.skip();
        } else {
          throw err;
        }
      }
    });
  } else {
    it(title, function test() {
      try {
        fn.call(this);
      } catch (err) {
        if (err._specialProp === SPECIAL_PROP_VALUE) {
          this.test.skip();
        } else {
          throw err;
        }
      }
    });
  }
}

module.exports = {
  testOptional
};
//MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this perCopyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtainimission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
