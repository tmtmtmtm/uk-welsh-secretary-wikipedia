module.exports = (id, startdate, enddate, replaces, replacedby) => ({
  id,
  claims: {
    P39: {
      value: 'Q1846384', // position held: Welsh Secretary
      qualifiers: {
        P580: startdate,
        P582: enddate,
        P1365: replaces,
        P1366: replacedby
      },
      references: {
        P143: 'Q328', // enwiki
        P4656: 'https://en.wikipedia.org/wiki/Secretary_of_State_for_Wales' // import URL
      },
    }
  }
})
