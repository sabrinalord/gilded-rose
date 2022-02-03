class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

// const normalItemUpdate = (item) => {
//   if (item.quality > 0) {
//     item.quality --
//     item.sellIn --
//   }
// }

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
      const hasMoreThan10daysToSell = item.sellIn > 10;
      const has10DaysOrLessToSell = item.sellIn <= 10 && item.sellIn > 0;
      const has5DaysOrLessToSell = item.sellIn <= 5 && item.sellIn > 0;
      const has0daysLeftToSell = item.sellIn == 0;


      const normalItem = !isAgedBrie && !isSulfuras && !isConjured && !isBackstagePass

      if (normalItem) {
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
      else if (isConjured) {
          if (item.quality > 0) {
            item.quality = item.quality - 2
            item.sellIn --
          }
        }
      else if (isAgedBrie) {
          if (item.quality < 50) {
            item.quality ++
            item.sellIn --
          }
        }
       else if (isBackstagePass) {
          if (item.quality < 50) {
            if (hasMoreThan10daysToSell) {
              item.quality ++
              item.sellIn --
             }
            else if (has10DaysOrLessToSell) {
               item.quality = item.quality + 2
               if (has5DaysOrLessToSell) {
                item.quality = item.quality + 1
              }
            }
            else if(has0daysLeftToSell){
              item.quality = 0
            }
          }
        }

    });

  // normal items
      // if quality > 0
      // item quality --
      // item sellIn -- 
      
  // conjured 
      // if quality > 0
      // item quality -2
      // item sellIn --

  // brie cheese and backstage passes
      // if quality < 50
      // item quality ++
      // item sellIn -- 
      //   backstage passes if sellIn <= 10 item quality + 1
      //                       if sellIn <= 10 item quality + 2


  // sulfuras 
      // does not update anything


     


    //   if (!isAgedBrie && !isBackstagePass) {
    //     if (item.quality > 0) {
    //       if (isConjured) {
    //         item.quality = item.quality - 2;
    //       }
    //       if (!isSulfuras && !isConjured ) {
    //         item.quality = item.quality - 1;
    //       }
    //     } 
    //   } else {
    //     if (qualityLowerThan50) {
    //       item.quality = item.quality + 1;
    //       if (isBackstagePass) {
    //         if ( has10DaysOrLessToSell ) {
    //           if (qualityLowerThan50) {
    //             item.quality = item.quality + 1;
    //           }
    //         }
    //         if (has5DaysOrLessToSell) {
    //           if (qualityLowerThan50) {
    //             item.quality = item.quality + 1;
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (!isSulfuras) {
    //     item.sellIn = item.sellIn - 1;
    //   }
    //   if (item.sellIn < 0) {
    //     if (!isAgedBrie) {
    //       if (!isBackstagePass) {
    //         if (item.quality > 0) {
    //           if (!isSulfuras) {
    //             item.quality = item.quality - 1;
    //           }
    //         }
    //       } else {
    //         item.quality = item.quality - item.quality;
    //       }
    //     } else {
    //       if (qualityLowerThan50) {
    //         item.quality = item.quality + 1;
    //       }
    //     }
    //   }
    // }

    //  )
  
     

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
