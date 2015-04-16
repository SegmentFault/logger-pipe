// Generated by CoffeeScript 1.7.1
(function() {
  var Channels, EventEmitter;

  EventEmitter = require('events').EventEmitter;

  Channels = (function() {
    function Channels(limit) {
      this.event = new EventEmitter;
      this.event.setMaxListeners(limit);
      this.lists = {};
    }

    Channels.prototype.send = function(log) {
      var name;
      name = log.host + (log.tag != null ? ':' + log.tag : '');
      this.lists[name] = log.time;
      return this.event.emit(name, [log.time, log.message]);
    };

    Channels.prototype.listen = function(name, cb) {
      return this.event.on(name, cb);
    };

    Channels.prototype.remove = function(name, cb) {
      return this.event.removeListener(name, cb);
    };

    Channels.prototype.availables = function() {
      return this.lists;
    };

    return Channels;

  })();

  module.exports = Channels;

}).call(this);
