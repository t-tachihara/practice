(function() {
  if (typeof window.foo === 'undefined') {
    window.foo = {};
  }

  var f = foo;
  // var t = f.test;

  f.state = function() {
    alert('foo');
  };

  f.state();

  console.log(t);
}());
