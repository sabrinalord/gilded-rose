const {Shop, Item} = require("../src/gilded_rose");


// Item(name, sellIn, quality)

describe("Gilded Rose", () => {
  it("should store items", () => {
    let items = new Item("Test Item", 5, 0);
    const gildedRose = new Shop([items]);
    expect(gildedRose.items[0].name).toBe("Test Item");
  });
  
  it('increases the quality of Aged Brie by 1 every day', () => {
    let items = new Item("Aged Brie", 5, 0);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(1);
  })

  it('does not decrease "Sulfuras, Hand of Ragnaros" by quality', () => {
    let items = new Item("Sulfuras, Hand of Ragnaros", 5, 10);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(10);
  })

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
    let items = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(8);
  })
  // * “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality

  // * “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; 
  // Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but 
  // Quality drops to 0 after the concert


});

