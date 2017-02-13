'use strict';

describe('Service: mapaSVG', function () {

  // load the service's module
  beforeEach(module('fm1App'));

  // instantiate service
  var mapaSVG;
  beforeEach(inject(function (_mapaSVG_) {
    mapaSVG = _mapaSVG_;
  }));

  it('should do something', function () {
    expect(!!mapaSVG).toBe(true);
  });

});
