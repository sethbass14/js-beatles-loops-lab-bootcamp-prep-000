function theBeatlesPlay(musicians, instruments) {
  var fab = []
  for (var i = 0; i < musicians.length; i++) {
    fab.push("${musicians[i]} plays ${instruments[i]}");
  }
  return fab
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i -= 1
  }
  return facts
}
