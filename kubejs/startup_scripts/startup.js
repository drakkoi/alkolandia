// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

  ItemEvents.modification((event) => {
    const increaseStackSize = [
		'minecraft:leather_horse_armor',
		'minecraft:iron_horse_armor',
		'minecraft:golden_horse_armor',
		'minecraft:diamond_horse_armor',
		'magistuarmory:chainmail_horse_armor'
    ];

    event.modify(increaseStackSize, (item) => {
        item.maxStackSize = 64;
    })
})