'use strict';

describe('Directive: numericOnly', function () {

  // load the directive's module
  beforeEach(module('fm1App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<numeric-only></numeric-only>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the numericOnly directive');
  }));
});
