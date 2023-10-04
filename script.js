describe("Test First Non-Repeated Character", () => {
  it("should handle a string with the first non-repeated character", () => {
    const baseUrl = "http://your-app-url"; // Replace with your application's URL

    cy.visit(baseUrl, {
      onBeforeLoad(win) {
        // Stub the prompt function to return 'c' (first non-repeated character)
        cy.stub(win, "prompt").onFirstCall().returns('c');
      }
    });

    cy.on("window:alert", result => {
      expect(result).to.equal('c'); // Expect the alert result to be 'c'
    });
  });

  it("should handle a string with no non-repeated character", () => {
    const baseUrl = "http://your-app-url"; // Replace with your application's URL

    cy.visit(baseUrl, {
      onBeforeLoad(win) {
        // Stub the prompt function to return null (no non-repeated character)
        cy.stub(win, "prompt").onFirstCall().returns(null);
      }
    });

    cy.on("window:alert", result => {
      expect(result).to.equal(null); // Expect the alert result to be null
    });
  });
});
