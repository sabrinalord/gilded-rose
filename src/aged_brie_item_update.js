const agedBrieItemUpdate = (item) => {
  if (item.quality < 50) {
    item.quality ++
    item.sellIn --
  }
}

module.exports = agedBrieItemUpdate;