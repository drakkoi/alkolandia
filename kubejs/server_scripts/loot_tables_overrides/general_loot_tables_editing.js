LootJS.modifiers((event) => {

    //event.enableLogging();

    //Better dungeons loot
    event.addLootTableModifier('betterdungeons:spider_dungeon/chests/egg_room')
    .logName('dragonfly_wings')
    .addLoot('2x crittersandcompanions:dragonfly_wing')
    .randomChance(0.3)

    //Shipwreck loot
    event.addLootTableModifier('minecraft:chests/shipwreck_treasure').removeLoot([
      'minecraft:flint'
    ])
  
    //Trash management
    event.addLootTypeModifier(LootType.CHEST).logName("junk_removal").removeLoot([
        'create:dough',
        'supplementaries:rope',
        'twilightforest:charm_of_keeping_1',
        'twilightforest:charm_of_keeping_2',
        'twilightforest:charm_of_keeping_3',
        'farmersdelight:rope',
        'farmersdelight:cooking_pot',
        'farmersdelight:skillet',
        'minecraft:beetroot_seeds'
      ])
});