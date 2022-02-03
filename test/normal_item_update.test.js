const {Shop, Item} = require("../src/gilded_rose");


describe('Normal Item', () => {

  it('reduces quality by 1', () => {
    let items = new Item("Test Item", 10, 5);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(4)  
  })

  it('reduces sellIn by 1 day after each update', () => {
    let items = new Item("Test Item", 10, 5);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(9)  
  })

  it('does not allow normal items to drop quality below 0', () => {
    let items = new Item("+5 Dexterity Vest", 10, 0);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0)  
    });

  it('reduces quality twice as fast once the sell by date has passed', () => {
    let items = new Item("+5 Dexterity Vest", 0, 4);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(2)  

  });
 
  it('reduces quality twice as fast once the sell by date has passed', () => {
    let items = new Item("+5 Dexterity Vest", -1, 4);
    const gildedRose = new Shop([items]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(2)  

  });

})