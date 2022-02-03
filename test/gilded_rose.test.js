const {Shop, Item} = require("../src/gilded_rose");

// Item(name, sellIn, quality)

describe("Gilded Rose", () => {




  it("should store items", () => {
    let items = new Item("Test Item", 5, 0);
    const gildedRose = new Shop([items]);
    expect(gildedRose.items[0].name).toBe("Test Item");
  });
  
  it("the quality of an item can never be more than 50", () => {
    let items = new Item("Aged Brie", 5, 50);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).not.toBe(51)  
  });


  it('does not decrease "Sulfuras, Hand of Ragnaros" by quality', () => {
    let items = new Item("Sulfuras, Hand of Ragnaros", 5, 10);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(10);
  })




});

