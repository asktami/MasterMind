  describe("MasterMind", function() {
    beforeEach(function() {

    });

    it("should indicate matching color is well placed", function() {
      expect(MatchColor(['blue'], ['blue'])).toEqual([1, 0]);
    });

    it("should indicate one non-matching color is not well placed", function() {
      expect(MatchColor(['blue'], ['pink'])).toEqual([0, 0]);
    });

    it("should indicate non-matching colors are not well placed", function() {
      expect(MatchColor(['blue', 'red'], ['blue', 'pink'])).toEqual([1, 0]);
    });

    it("", function() {
      expect(MatchColor(['red', 'red'], ['blue', 'pink'])).toEqual([0, 0]);
    });

    it("", function() {
      expect(MatchColor(['red', 'red'], ['red', 'red'])).toEqual([2, 0]);
    });

    it("should count matching colors that are not well placed", function() {
      expect(MatchColor(['yellow', 'purple'], ['green', 'yellow'])).toEqual([0, 1]);
    });


  });

