Array.prototype.map = function (callback) {
  const result = []

  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i], i, this)
  }

  return result
}
