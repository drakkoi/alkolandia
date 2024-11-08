ServerEvents.recipes(event => {
	//Chest Recipe WTF why did the recipe go poof?
	event.shaped(
		Item.of('minecraft:chest'),
		[
			'AAA',
			'A A',
			'AAA'
		], {
			A: '#minecraft:planks'
		}
	)

	//Chest Recipe with Logs
	event.shaped(
		Item.of('minecraft:chest', 4),
		[
			'AAA',
			'A A',
			'AAA'
		], {
			A: '#minecraft:logs'
		}
	)

	//Uncompress Quartz
	event.shapeless(
		Item.of('minecraft:quartz', 4),
		[
			'minecraft:quartz_block'
		]
	)

	// wool to string
	event.shapeless(
		Item.of('minecraft:string', 4),
		[
			'#minecraft:wool'
		]
	)
})