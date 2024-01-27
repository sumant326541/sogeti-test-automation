describe('API Test for http://api.zippopotam.us', () => {
  it('should verify response code, country, state, post cade and place for Stuttgart', () => {

    cy.request('http://api.zippopotam.us/de/bw/stuttgart')
      .then((response) => {

        // Verify response status code is 200 and content type is JSON
        expect(response.status).to.equal(200);
        expect(response.headers['content-type']).to.include('application/json');

        // Verify response time is below 1s
        expect(response.duration).to.be.lessThan(1000); // Duration is in milliseconds

        // Verify "country" is "Germany" and "state" is "Baden-Württemberg"
        expect(response.body.country).to.equal('Germany');
        expect(response.body.state).to.equal('Baden-Württemberg');

        // Verify for Post Code "70597" the place name is "Stuttgart Degerloch"
        const StuttgartDegerloch70597 = response.body.places.find(place => place['post code'] === '70597' && place['place name'] === 'Stuttgart Degerloch');
        cy.wrap(StuttgartDegerloch70597).should('exist');

      });
  });
});
