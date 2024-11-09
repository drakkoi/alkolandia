ServerEvents.recipes(event => {

	//End Remastered Eyes to Pearls
	event.shapeless(
		Item.of('minecraft:ender_pearl', 1),
		[
			'#forge:eyes'
		]
	)

	//Zinc Block Smelting
	event.smelting('create:zinc_block', 'create:raw_zinc_block')
})