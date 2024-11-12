ItemEvents.modification(event => {

    //Rebalance Warden Armor
    event.modify('deeperdarker:warden_helmet', item => {
		item.armorProtection = 3
		//item.armorToughness = 0
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

	//SWORDS
	event.modify('iceandfire:ghost_sword', item => {
		item.attackSpeed = -2.0
	});
	
	event.modify('blatium:blatium_sword', item => {
		item.attackSpeed = -4.0
	});
	event.modify('blatium:nlium_sword', item => {
		item.attackSpeed = -4.0
	});

	event.modify('ars_noveau:enchanters_sword', item => {
		item.attackDamage = 6.0
	});

	event.modify('majruszsdifficulty:wither_sword', item => {
		item.attackDamage = 9.0
	});
	event.modify('majruszsdifficulty:enderium_sword', item => {
		item.attackDamage = 11.0
	});

	event.modify('alexscaves_adventure:uranium_sword', item => {
		item.attackDamage = 11.0
		item.attackSpeed = -2.4
	});

	event.modify('aquamirae:terrible_sword', item => {
		item.attackSpeed = -2.4
	});

	//AXES
	event.modify('vampirism:hunter_axe_enhanced', item => {
		item.attackDamage = 12.0
	});
	event.modify('vampirism:hunter_axe_ultimate', item => {
		item.attackDamage = 17.0
	});

	//SCYTHES
	event.modify('better_weaponry:copper_scythe', item => {
		item.attackDamage = 10.0
		item.attackSpeed = -3.3
	});
	event.modify('better_weaponry:amethyst_scythe', item => {
        item.attackDamage = 11.5
		item.attackSpeed = -3.3
	});
	event.modify('better_weaponry:emerald_scythe', item => {
        item.attackDamage = 11.5
		item.attackSpeed = -3.3
	});

	event.modify('divine_weaponry:wooden_scythe', item => {
		item.attackSpeed = -3.3
	});
	event.modify('divine_weaponry:stone_scythe', item => {
		item.attackSpeed = -3.3
	});
	event.modify('divine_weaponry:golden_scythe', item => {
		item.attackSpeed = -3.3
	});
	event.modify('divine_weaponry:iron_scythe', item => {
		item.attackSpeed = -3.3
	});
	event.modify('divine_weaponry:diamond_scythe', item => {
		item.attackSpeed = -3.3
	});
	event.modify('divine_weaponry:netherite_scythe', item => {
		item.attackSpeed = -3.3
	});
	event.modify('divine_weaponry:erebus_scythe', item => {
		item.attackSpeed = -3.3
	});

	event.modify('dreadsteel:dreadsteel_scythe', item => {
		item.attackSpeed = -3.3
	});

	event.modify('born_in_cahos_v1:nightmare_scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 13.5
	});

	event.modify('knavesneeds:forbidden_arcanus/draco_arcanus/scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 15.0
	});
	event.modify('knavesneeds:forbidden_arcanus/reinforced_deorum/scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 14.5
	});
	event.modify('knavesneeds:soulsweapons/translucent/scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 13.0
	});
	event.modify('knavesneeds:deepardarker/warden/scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 17.0
	});
	
	//event.modify('soulsweapons:forlorn_scythe', item => {
		//item.attackSpeed = -3.3
//		item.attackDamage = 17.0
//	});
	event.modify('soulsweapons:darkin_scythe_pre', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 15.0
	});
	event.modify('soulsweapons:darkin_scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 19.0
	});
	event.modify('soulsweapons:shadow_assasin_scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 19.0
	});

	event.modify('simplysords:diamond_scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 12.0
	});
	event.modify('simplysords:netherite_scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 13.0
	});
	event.modify('simplysords:runic_scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 14.0
	});
	event.modify('simplysords:magiscythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 14.0
	});

	event.modify('ec_cje_plugin:enderite_scythe', item => {
		item.attackSpeed = -3.3
	});
	event.modify('ec_cje_plugin:gilded_enderite_scythe', item => {
		item.attackSpeed = -3.3
	});
	event.modify('ec_aquaculture_plugin:neptunium_scythe', item => {
		item.attackSpeed = -3.3
	});
	event.modify('ec_es_plugin:steel_scythe', item => {
		item.attackSpeed = -3.3
	});
	event.modify('ec_tf_plugin:ironwood_scythe', item => {
		item.attackSpeed = -3.3
	});
	event.modify('ec_tf_plugin:fiery_scythe', item => {
		item.attackSpeed = -3.3
	});
	event.modify('ec_tf_plugin:steeleaf_scythe', item => {
		item.attackSpeed = -3.3
	});
	event.modify('ec_tf_plugin:knight_metal_scythe', item => {
		item.attackSpeed = -3.3
	});

	event.modify('eidolon:reaper_scythe', item => {
		item.attackDamage = 12.0
		item.attackSpeed = -3.3
	});
	event.modify('eidolon:dreathbringer_scythe', item => {
		item.attackDamage = 15.0
		item.attackSpeed = -3.3
	});

	event.modify('enigmaticlegacy:etherium_scythe', item => {
		item.attackDamage = 20.0
		item.attackSpeed = -3.3
	});

	event.modify('magistuarmoryaddon:steel_scythe', item => {
		item.attackDamage = 12.71
	});
	
	//Broadswords
	event.modify('better_weaponry:wooden_broadsword', item => {
        item.attackDamage = 6.0
		item.attackSpeed = -3.0
	});
	event.modify('better_weaponry:stone_broadsword', item => {
        item.attackDamage = 7.0
		item.attackSpeed = -3.0
	});
	event.modify('better_weaponry:golden_broadsword', item => {
        item.attackDamage = 7.5
		item.attackSpeed = -3.0
	});
	event.modify('better_weaponry:copper_broadsword', item => {
        item.attackDamage = 7.5
		item.attackSpeed = -3.0
	});
	event.modify('better_weaponry:iron_broadsword', item => {
        item.attackDamage = 8.0
		item.attackSpeed = -3.0
	});
	event.modify('better_weaponry:emerald_broadsword', item => {
        item.attackDamage = 8.5
		item.attackSpeed = -3.0
	});
	event.modify('better_weaponry:amethyst_broadsword', item => {
        item.attackDamage = 8.5
		item.attackSpeed = -3.0
	});
	event.modify('better_weaponry:diamond_broadsword', item => {
        item.attackDamage = 9.0
		item.attackSpeed = -3.0
	});
	event.modify('better_weaponry:netherite_broadsword', item => {
        item.attackDamage = 10
		item.attackSpeed = -3.0
	});
})