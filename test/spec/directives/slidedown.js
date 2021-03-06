'use strict';

describe('Directive: slideDown', function () {

  // load the directive's module
  beforeEach(module('fm1App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<slide-down></slide-down>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the slideDown directive');
  }));
});
