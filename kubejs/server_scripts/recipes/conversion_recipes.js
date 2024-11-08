ServerEvents.recipes(event => {

	// Quark Azalea Wood Conversion Recipes

	// Quark Azalea Log
	event.shapeless(
		Item.of('quark:azalea_log'),
		[
			'minecraft:moss_block',
			'#forge:azalea_logs'
		]
	)

	// Quark Azalea Wood
	event.shapeless(
		Item.of('quark:azalea_wood'),
		[
			'minecraft:moss_block',
			'#forge:azalea_wood'
		]
	)

	// Quark Azalea Planks
	event.shapeless(
		Item.of('quark:azalea_planks'),
		[
			'minecraft:moss_block',
			'#forge:azalea_planks'
		]
	)

	// Quark Azalea Stripped Wood
	event.shapeless(
		Item.of('quark:stripped_azalea_wood'),
		[
			'minecraft:moss_block',
			'ecologics:stripped_azalea_wood'
		]
	)

	// Quark Azalea Stripped Log
	event.shapeless(
		Item.of('quark:stripped_azalea_log'),
		[
			'minecraft:moss_block',
			'ecologics:stripped_azalea_log'
		]
	)

	// Blackstone Furnace Conversion
	event.shapeless(
		Item.of('nethersdelight:blackstone_furnace'),
		[
			'quark:blackstone_furnace'
		]
	)
	event.shapeless(
		Item.of('quark:blackstone_furnace'),
		[
			'nethersdelight:blackstone_furnace'
		]
	)

})