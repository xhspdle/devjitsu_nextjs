import includes from 'core-js/library/fn/string/virtual/includes';
import repeat from 'core-js/library/fn/string/virtual/repeat';
import assign from 'core-js/library/fn/object/assign';
import smoothscroll from 'smoothscroll-polyfill';

//console.log('Load your polyfills');
smoothscroll.polyfill();

String.prototype.includes = includes;
String.prototype.repeat = repeat;
Object.assign = assign;