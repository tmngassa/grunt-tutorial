/*
 * jqueryGruntDemoProject
 * https://github.com/mosongo/jqueryDemo
 *
 * Copyright (c) 2013 Tomson M. Ngassa
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.jqueryGruntDemoProject = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.jqueryGruntDemoProject = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.jqueryGruntDemoProject.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.jqueryGruntDemoProject.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].jqueryGruntDemoProject = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
