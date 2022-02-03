const {Shop, Item} = require("../src/gilded_rose");

describe('Conjured Item', () => {
  it('degrades the quality of Conjured items by 2 after each daily update', () => {
    let items = new Item("Conjured Mana Cake", 5, 5);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(3);
  })
})