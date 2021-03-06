// Generated by CoffeeScript 1.6.1
(function() {
  var def;

  def = {
    options: {},
    start: function() {},
    inbound: function(socket, msg, done) {
      var parsed;
      try {
        parsed = JSON.parse(msg);
      } catch (e) {
        this.error(socket, e);
      }
      done(parsed);
    },
    outbound: function(socket, msg, done) {
      var parsed;
      try {
        parsed = JSON.stringify(msg);
      } catch (e) {
        this.error(socket, e);
      }
      done(parsed);
    },
    validate: function(socket, msg, done) {
      return done(true);
    },
    invalid: function() {},
    connect: function() {},
    message: function() {},
    error: function() {},
    close: function() {}
  };

  if (typeof window !== "undefined" && window !== null) {
    def.options = {
      host: window.location.hostname,
      port: (window.location.port.length > 0 ? parseInt(window.location.port) : 80),
      secure: window.location.protocol === 'https:'
    };
    if (def.options.secure) {
      def.options.port = 443;
    }
  }

  module.exports = def;

}).call(this);
