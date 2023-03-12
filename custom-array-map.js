Array.prototype.map = function (callback) {
  const result = []

  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i], i+1, this)
  }

  if (this.length === 0) {
    return []
  }

  return result
}
