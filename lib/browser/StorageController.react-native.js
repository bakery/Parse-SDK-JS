'use strict';

var _ParsePromise = require('./ParsePromise');

var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

try {
  // path for RN 0.43 and above
  var _require = require('react-native/Libraries/react-native/react-native-implementation.js'),
      _AsyncStorage = _require.AsyncStorage;
} catch (e) {
  // fallback for RN < 0.43
  var _require2 = require('react-native/Libraries/react-native/react-native.js'),
      _AsyncStorage2 = _require2.AsyncStorage;
} /**
   * Copyright (c) 2015-present, Parse, LLC.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

var StorageController = {
  async: 1,

  getItemAsync: function (path) {
    var p = new _ParsePromise2.default();
    AsyncStorage.getItem(path, function (err, value) {
      if (err) {
        p.reject(err);
      } else {
        p.resolve(value);
      }
    });
    return p;
  },
  setItemAsync: function (path, value) {
    var p = new _ParsePromise2.default();
    AsyncStorage.setItem(path, value, function (err) {
      if (err) {
        p.reject(err);
      } else {
        p.resolve(value);
      }
    });
    return p;
  },
  removeItemAsync: function (path) {
    var p = new _ParsePromise2.default();
    AsyncStorage.removeItem(path, function (err) {
      if (err) {
        p.reject(err);
      } else {
        p.resolve();
      }
    });
    return p;
  },
  clear: function () {
    AsyncStorage.clear();
  }
};

module.exports = StorageController;