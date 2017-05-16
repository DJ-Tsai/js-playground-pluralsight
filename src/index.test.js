import {expect} from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe("First Test", () => {
  it("should pass", function() {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should pass", function(done) {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      // console.log(h1);
      expect(h1.innerHTML).to.equal("Hello World");
      done();
      window.close();
    });
  });
});
