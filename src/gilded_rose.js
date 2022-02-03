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
      const isAgedBrie = item.name == 'Aged Brie'
      const isSulfuras = item.name.includes('Sulfuras')
      const isBackstagePass = item.name.includes('Backstage')
      const isConjured = item.name.includes('Conjured')

      

      if (!isAgedBrie && !isBackstagePass) {
        if (item.quality > 0) {
          if (isConjured) {
            item.quality = item.quality - 2;
          }
          if (!isSulfuras && !isConjured ) {
            item.quality = item.quality - 1;
          }
        } 
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (isBackstagePass) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
      if (!isSulfuras) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (!isAgedBrie) {
          if (!isBackstagePass) {
            if (item.quality > 0) {
              if (!isSulfuras) {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }

     )
  
     

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
