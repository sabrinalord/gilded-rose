const {Shop, Item} = require("../src/gilded_rose");


describe('Normal Item', () => {
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

  


})