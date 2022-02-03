const conjuredItemUpdate = (item) => {
  if (item.quality > 0) {
    item.quality = item.quality - 2
    item.sellIn --
  }
}

module.exports = conjuredItemUpdate;