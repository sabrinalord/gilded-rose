const normalItemUpdate = require("../src/normal_item_update");
const conjuredItemUpdate = require("../src/conjured_item_update");
const agedBrieItemUpdate = require("./agedBrie_item_update");
const backstagePassItemUpdate = require("./backstagePass_item_update");


class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}


class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
   
    this.items.forEach(item => {

      const isAgedBrie = item.name == 'Aged Brie';
      const isSulfuras = item.name.includes('Sulfuras');
      const isBackstagePass = item.name.includes('Backstage');
      const isConjured = item.name.includes('Conjured');
      const normalItem = !isAgedBrie && !isSulfuras && !isConjured && !isBackstagePass

      if (normalItem) {
        normalItemUpdate(item)
      }

      else if (isConjured) {
        conjuredItemUpdate(item)
        }

      else if (isAgedBrie) {
        agedBrieItemUpdate(item)
        }

      else if (isBackstagePass) {
        backstagePassItemUpdate(item)
      }

    });

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
