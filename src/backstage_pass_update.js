
const backstagePassItemUpdate = (item) => {

const hasMoreThan10daysToSell = item.sellIn > 10;
const has10DaysOrLessToSell = item.sellIn <= 10 && item.sellIn > 0;
const has5DaysOrLessToSell = item.sellIn <= 5 && item.sellIn > 0;
const has0daysLeftToSell = item.sellIn == 0;


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

module.exports = backstagePassItemUpdate;