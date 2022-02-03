const {Shop, Item} = require("../src/gilded_rose");

describe('Aged Brie', () => {
  it('increases the quality of Aged Brie by 1 every day', () => {
    let items = new Item("Aged Brie", 5, 0);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(1);
  })
})