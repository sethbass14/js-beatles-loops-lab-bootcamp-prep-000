function theBeatlesPlay(musicians, instruments) {
  var fab = []
  for (var i = 0; i < musicians.length; i++) {
    fab.push("${musicians[i]} plays ${instruments[i]}")
  }
  return fab
}
