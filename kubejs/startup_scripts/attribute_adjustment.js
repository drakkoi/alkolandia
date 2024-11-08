ItemEvents.modification(event => {
    event.modify('twilightdelight:teardrop_sword', item => {
		let boost = -1.5
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});

    event.modify('twilightforest:fiery_sword', item => {
		let boost = -1
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});

    event.modify('deeperdarker:warden_sword', item => {
		let boost = -0.5
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});

    event.modify('deeperdarker:warden_axe', item => {
		let boost = -0.5
		let attribute = item.getAttributes(
			"generic.attack_damage").get(0)
		item.removeAttribute("generic.attack_damage", attribute
			.id)
		item.addAttribute("generic.attack_damage", attribute.id,
			attribute.name, attribute.amount + boost,
			attribute.operation)
	});

    //Rebalance Warden Armor
    event.modify('deeperdarker:warden_helmet', item => {
		item.armorProtection = 3
	});
	event.modify('deeperdarker:warden_chestplate', item => {
		item.armorProtection = 8
	});
	event.modify('deeperdarker:warden_leggings', item => {
		item.armorProtection = 6
	});
	event.modify('deeperdarker:warden_boots', item => {
		item.armorProtection = 3
	});

    //Rebalance Neptunium Armor
    event.modify('aquaculture:neptunium_helmet', item => {
        item.armorToughness = 0
	});
	event.modify('aquaculture:neptunium_chestplate', item => {
        item.armorToughness = 0
	});
	event.modify('aquaculture:neptunium_leggings', item => {
        item.armorToughness = 0
	});
	event.modify('aquaculture:neptunium_boots', item => {
        item.armorToughness = 0
	});

	event.modify('better_weaponry:copper_scythe', item => {
		item.attackDamage = 10.0
		item.attackSpeed = -3.0
	});
	event.modify('better_weaponry:amethyst_scythe', item => {
        item.attackDamage = 11.5
		item.attackSpeed = -3.0
	});
	event.modify('better_weaponry:emerald_scythe', item => {
        item.attackDamage = 11.5
		item.attackSpeed = -3.0
	});
})