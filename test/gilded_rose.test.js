const {Shop, Item} = require("../src/gilded_rose");


// Item(name, sellIn, quality)

describe("Gilded Rose", () => {


  it('does not allow normal items to drop quality below 0', () => {
    let items = new Item("+5 Dexterity Vest", 10, 0);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0)  
    });

  it("reduces quality twice as fast once the sell by date has passed", () => {
    let items = new Item("+5 Dexterity Vest", 0, 4);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(2)  

  });

  it("the quality of an item can never be more than 50", () => {
    let items = new Item("Aged Brie", 5, 50);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).not.toBe(51)  
  });

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

  it('degrades the quality of Conjured items by 2 after each daily update', () => {
    let items = new Item("Conjured Mana Cake", 5, 5);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(3);
  })


});

