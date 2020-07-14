// add_P39.js
module.exports = id => ({
  id,
  claims: {
    P39: {
      value: 'Q1846384', // position held: Welsh Secretary
      references: {
        P143: 'Q328',    // imported from: English Wikipedia
        P4656: 'https://en.wikipedia.org/wiki/Secretary_of_State_for_Wales' // import URL
      },
    }
  }
})
