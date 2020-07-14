module.exports = (id, startdate, enddate, replaces, replacedby) => {
  const qualifiers = { }

  if (startdate)  qualifiers['P580']  = startdate
  if (enddate)    qualifiers['P582']  = enddate
  if (replaces)   qualifiers['P1365'] = replaces
  if (replacedby) qualifiers['P1366'] = replacedby

  if (startdate && enddate && (startdate > enddate)) throw new Error(`Invalid dates: ${startdate} / ${enddate}`)

  return {
    id,
    claims: {
      P39: {
        value: 'Q1846384', // position held: Welsh Secretary
        qualifiers: qualifiers,
        references: {
          P143: 'Q328', // enwiki
          P4656: 'https://en.wikipedia.org/wiki/Secretary_of_State_for_Wales' // import URL
        },
      }
    }
  }
}
