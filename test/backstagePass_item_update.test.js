const {Shop, Item} = require("../src/gilded_rose");

describe('Backstage Pass', () => {
  it('increases the quality of backstage passes by 1 when the sellIn date is more than 10', () => {
    let items = new Item("Backstage passes to a TAFKAL80ETC concert", 11, 5);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(6);
  })

  it('increases the quality of backstage passes by 2 when the sellIn date is below 10', () => {
    let items = new Item("Backstage passes to a TAFKAL80ETC concert", 9, 5);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(7);
  })
  
  it('increases the quality of backstage passes by 3 when the sellIn date is 5 or less', () => {
    let items = new Item("Backstage passes to a TAFKAL80ETC concert", 3, 5);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(8);
  })

  it('drops the quality of backstage passes to 0 when the sellIn date is 0', () => {
    let items = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 5);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  })


})