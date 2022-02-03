const normalItemUpdate = (item) => {
  if (item.quality > 0) {
    if (item.sellIn >= 1) {
      item.quality --
      item.sellIn --
    }
    else if (item.sellIn <= 0) {
      item.quality = item.quality - 2
      item.sellIn --
    }
  }
}

module.exports = normalItemUpdate;