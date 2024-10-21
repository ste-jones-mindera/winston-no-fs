/*
 * container-test.js: Tests for the Container object
 *
 * (C) 2011 Charlie Robbins
 * MIT LICENSE
 *
 */

const assume = require('assume');
const winston = require('../../../lib/winston');

describe('Container', function () {
  describe('no transports', function () {
    var container = new winston.Container();
    var defaultTest;

    it('.add(default-test)', function () {
      defaultTest = container.add('default-test');
      assume(defaultTest.log).is.a('function');
    });

    it('.get(default-test)', function () {
      assume(container.get('default-test')).equals(defaultTest);
    });

    it('.has(default-test)', function () {
      assume(container.has('default-test')).true();
    });

    it('.has(not-has)', function () {
      assume(container.has('not-has')).false();
    });

    it('.close(default-test)', function () {
      container.close('default-test');
      assume(container.loggers.has('default-test')).falsy();
    });

    it('.close(non-existent)', function () {
      container.close('non-existent');
      assume(container.loggers.has('non-existent')).falsy();
    });

    it('.close()', function () {
      container.close();
      assume(container.loggers.has()).falsy();
    });
  });
});
