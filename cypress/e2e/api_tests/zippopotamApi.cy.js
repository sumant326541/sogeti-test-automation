describe('API Test for Zippopotam', () => {
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

  //Test data for data driven test
  const testData = [
    { country: 'us', postalCode: '90210', placeName: 'Beverly Hills' },
    { country: 'us', postalCode: '12345', placeName: 'Schenectady' },
    { country: 'ca', postalCode: 'B2R', placeName: 'Waverley' },
  ];

  testData.forEach(({ country, postalCode, placeName}) => {
    it(`should verify response code, place name and responce time, for country ${country} and postal code ${postalCode}`, () => {
      cy.request(`http://api.zippopotam.us/${country}/${postalCode}`)
        .then((response) => {

          //Verify that the response status code is 200 and content type is JSON.
          expect(response.status).to.eq(200);
          expect(response.headers['content-type']).to.include('application/json');

          //Verify that the response time is below 1s.
          expect(response.duration).to.be.lessThan(1000); // Assuming response time is in milliseconds

          // Verify in Response - "Place Name" for each input "Country" and "Postal Code".
          const place = response.body.places[0]['place name'];
          expect(place).to.equal(`${placeName}`);

        });
    });
  });


});
