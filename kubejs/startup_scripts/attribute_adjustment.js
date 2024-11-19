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

	event.modify('ars_nouveau:enchanters_sword', item => {
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

	event.modify('born_in_chaos_v1:nightmare_scythe', item => {
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
	event.modify('knavesneeds:deeperdarker/warden/scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 17.0
	});

	event.modify('simplyswords:diamond_scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 12.0
	});
	event.modify('simplyswords:netherite_scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 13.0
	});
	event.modify('simplyswords:runic_scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 14.0
	});
	event.modify('simplyswords:magiscythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 14.0
	});
	event.modify('simplyswords:gobber_compat/gobber/gobber_scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 16.0
	});
	event.modify('simplyswords:gobber_compat/gobber_nether/gobber_nether_scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 18.0
	});
	event.modify('simplyswords:gobber_compat/gobber_end/gobber_end_scythe', item => {
		item.attackSpeed = -3.3
		item.attackDamage = 21.0
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
	event.modify('eidolon:deathbringer_scythe', item => {
		item.attackDamage = 15.0
		item.attackSpeed = -3.3
	});

	event.modify('enigmaticlegacy:etherium_scythe', item => {
		item.attackDamage = 20.0
		item.attackSpeed = -3.3
	});

	event.modify('magistuarmoryaddon:steel_scythe', item => {
		item.attackDamage = 11.71
	});

	//DAGGERS
	event.modify('mowziesmobs:naga_fang_dagger', item => {
		item.attackSpeed = -1.0
	});
	event.modify('stalwart_dungeons:awful_dagger', item => {
		item.attackSpeed = -1.0
	});
	event.modify('graveyard:bone_dagger', item => {
		item.attackSpeed = -0.7
		item.attackDamage = 3.5
	});
	event.modify('useless_sword:pillager_dagger', item => {
		item.attackSpeed = -1.0
		item.attackDamage = 3.0
	});
	event.modify('alexscaves:desolate_dagger', item => {
		item.attackSpeed = -1.0
		item.attackDamage = 3.0
	});
	event.modify('aquamirae:dagger_of_greed', item => {
		item.attackSpeed = -1.5
	});
	event.modify('born_in_chaos_v1:dark_ritual_dagger', item => {
		item.attackSpeed = -1.4
	});
	event.modify('born_in_chaos_v1:intoxicating_dagger', item => {
		item.attackSpeed = -1.3
	});
	event.modify('divine_weaponry:fujindagger', item => {
		item.attackSpeed = -1.0
	});
	event.modify('better_weaponry:wooden_dagger', item => {
		item.attackSpeed = -1.0
		item.attackDamage = 2.0
	});
	event.modify('better_weaponry:stone_dagger', item => {
		item.attackSpeed = -1.0
		item.attackDamage = 2.5
	});
	event.modify('better_weaponry:copper_dagger', item => {
		item.attackSpeed = -1.0
		item.attackDamage = 2.25
	});
	event.modify('better_weaponry:golden_dagger', item => {
		item.attackSpeed = -1.0
		item.attackDamage = 2.5
	});
	event.modify('better_weaponry:iron_dagger', item => {
		item.attackSpeed = -1.0
		item.attackDamage = 3.0
	});
	event.modify('better_weaponry:amethyst_dagger', item => {
		item.attackSpeed = -1.0
		item.attackDamage = 3.5
	});
	event.modify('better_weaponry:emerald_dagger', item => {
		item.attackSpeed = -1.0
		item.attackDamage = 3.5
	});
	event.modify('better_weaponry:netherite_dagger', item => {
		item.attackSpeed = -1.0
		item.attackDamage = 5.5
	});
	event.modify('ec_cje_plugin:enderite_dagger', item => {
		item.attackSpeed = -1.0
	});
	event.modify('ec_cje_plugin:gilded_enderite_dagger', item => {
		item.attackSpeed = -1.0
	});
	event.modify('ec_aquaculture_plugin:neptunium_dagger', item => {
		item.attackSpeed = -1.0
	});
	event.modify('ec_es_plugin:steel_dagger', item => {
		item.attackSpeed = -1.0
	});
	event.modify('ec_tf_plugin:ironwood_dagger', item => {
		item.attackSpeed = -1.0
	});
	event.modify('ec_tf_plugin:fiery_dagger', item => {
		item.attackSpeed = -1.0
	});
	event.modify('ec_tf_plugin:steeleaf_dagger', item => {
		item.attackSpeed = -1.0
	});
	event.modify('ec_tf_plugin:knight_metal_dagger', item => {
		item.attackSpeed = -1.0
	});
	event.modify('magistuarmoryadons:steel_bollock_dagger', item => {
		item.attackSpeed = -1.0
	});
	event.modify('magistuarmoryadons:steel_dagger', item => {
		item.attackSpeed = -1.0
	});
	event.modify('magistuarmoryadons:steel_rondel_dagger', item => {
		item.attackSpeed = -1.0
	});
	event.modify('magistuarmoryadons:steel_antique_dagger', item => {
		item.attackSpeed = -1.0
	});
	//KATANAS
	event.modify('epic_knights__japanese_armory:iron_katana', item => {
		item.attackSpeed = -2.0
	});
	event.modify('epic_knights__japanese_armory:wood_katana', item => {
		item.attackSpeed = -2.0
	});

	event.modify('knavesneeds:forbidden_arcanus/draco_arcanus/katana', item => {
		item.attackSpeed = -2.15
	});
	event.modify('knavesneeds:forbidden_arcanus/reinforced_deorum/katana', item => {
		item.attackSpeed = -2.15
	});
	event.modify('knavesneeds:soulsweapons/translucent/katana', item => {
		item.attackSpeed = -2.15
	});
	event.modify('knavesneeds:deeperdarker/warden/katana', item => {
		item.attackSpeed = -2.15
	});

	event.modify('simplyswords:diamond_katana', item => {
		item.attackSpeed = -2.15
	});
	event.modify('simplyswords:netherite_katana', item => {
		item.attackSpeed = -2.15
	});
	event.modify('simplyswords:runic_katana', item => {
		item.attackSpeed = -2.15
	});
	event.modify('simplyswords:magikatana', item => {
		item.attackSpeed = -2.15
	});
	event.modify('simplyswords:gobber_compat/gobber/gobber_katana', item => {
		item.attackSpeed = -2.15
	});
	event.modify('simplyswords:gobber_compat/gobber_nether/gobber_nether_katana', item => {
		item.attackSpeed = -2.15
	});
	event.modify('simplyswords:gobber_compat/gobber_end/gobber_end_katana', item => {
		item.attackSpeed = -2.15
	});

	event.modify('better_weaponry:wooden_katana', item => {
        item.attackDamage = 4.0
		item.attackSpeed = -2.0
	});
	event.modify('better_weaponry:stone_katana', item => {
        item.attackDamage = 5.0
		item.attackSpeed = -3.0
	});
	event.modify('better_weaponry:golden_katana', item => {
        item.attackDamage = 5.5
		item.attackSpeed = -2.0
	});
	event.modify('better_weaponry:copper_katana', item => {
        item.attackDamage = 5.5
		item.attackSpeed = -2.0
	});
	event.modify('better_weaponry:iron_katana', item => {
        item.attackDamage = 6.0
		item.attackSpeed = -2.0
	});
	event.modify('better_weaponry:emerald_katana', item => {
        item.attackDamage = 6.5
		item.attackSpeed = -2.0
	});
	event.modify('better_weaponry:amethyst_katana', item => {
        item.attackDamage = 6.5
		item.attackSpeed = -2.0
	});
	event.modify('better_weaponry:diamond_katana', item => {
        item.attackDamage = 7.0
		item.attackSpeed = -2.0
	});
	event.modify('better_weaponry:netherite_katana', item => {
        item.attackDamage = 8
		item.attackSpeed = -2.0
	});
	event.modify('divine_weaponry:apophis_katana', item => {
        item.attackDamage = 9
		item.attackSpeed = -2.0
	});

	event.modify('ec_cje_plugin:enderite_katana', item => {
		item.attackSpeed = -2.0
	});
	event.modify('ec_cje_plugin:gilded_enderite_katana', item => {
		item.attackSpeed = -2.0
	});
	event.modify('ec_aquaculture_plugin:neptunium_katana', item => {
		item.attackSpeed = -2.0
	});
	event.modify('ec_es_plugin:steel_katana', item => {
		item.attackSpeed = -2.0
	});
	event.modify('ec_tf_plugin:ironwood_katana', item => {
		item.attackSpeed = -2.0
	});
	event.modify('ec_tf_plugin:fiery_katana', item => {
		item.attackSpeed = -2.0
	});
	event.modify('ec_tf_plugin:steeleaf_katana', item => {
		item.attackSpeed = -2.0
	});
	event.modify('ec_tf_plugin:knight_metal_katana', item => {
		item.attackSpeed = -2.0
	});
	event.modify('expanded_combat:heat_katana', item => {
		item.attackSpeed = -2.0
	});
	event.modify('expanded_combat:soul_katana', item => {
		item.attackSpeed = -2.0
	});

	//RAPIERS

	event.modify('irons_spellbooks:amethyst_rapier', item => {
		item.attackSpeed = -2.625
	});
	event.modify('better_weaponry:copper_rapier', item => {
        item.attackDamage = 3.5
    });
	event.modify('better_weaponry:emerald_rapier', item => {
		item.attackDamage = 4.5
	});
	event.modify('better_weaponry:amethyst_rapier', item => {
		item.attackDamage = 4.5
	});
	event.modify('divine_weaponry:sobek_rapier', item => {
		item.attackDamage = 7.0
		item.attackSpeed = -1.8
	});

	event.modify('simplyswords:wooden_rapier', item => {
		item.attackDamage = 2.0
	});
	event.modify('simplyswords:stone_rapier', item => {
		item.attackDamage = 3.0
	});
	event.modify('simplyswords:golden_rapier', item => {
		item.attackDamage = 3.5
	});
	event.modify('simplyswords:iron_rapier', item => {
		item.attackDamage = 4.0
	});
	event.modify('simplyswords:diamond_rapier', item => {
		item.attackDamage = 5.0
	});
	event.modify('simplyswords:netherite_rapier', item => {
		item.attackDamage = 6.0
	});
	event.modify('simplyswords:runic_rapier', item => {
		item.attackDamage = 7.0
	});
	event.modify('simplyswords:gobber_compat/gobber/gobber_rapier', item => {
		item.attackDamage = 8.0
	});
	event.modify('magistuarmoryaddon:steel_rapier', item => {
		item.attackSpeed = -1.8
	});

	//KNIFES
	event.modify('aquaculture:wooden_fillet_knife', item => {
		item.attackSpeed = -1.3
		item.attackDamage = 1.0
	});
	event.modify('aquaculture:stone_fillet_knife', item => {
		item.attackSpeed = -1.3
		item.attackDamage = 2.0
	});
	// event.modify('farmersdelight:flint_knife', item => {
	// 	item.attackSpeed = -1.3
	// 	item.attackDamageBonus = 2.0
	// });
	// event.modify('farmersdelight:iron_knife', item => {
	// 	item.attackSpeed = -1.3
	// 	item.attackDamageBonus = 3.0
	// });
	// event.modify('farmersdelight:diamond_knife', item => {
	// 	item.attackSpeed = -1.3
	// 	item.attackDamage = 4.5
	// });
	// event.modify('farmersdelight:netherite_knife', item => {
	// 	item.attackSpeed = -1.3
	// 	item.attackDamageBonus = 5.0
	// });
	// event.modify('farmersdelight:golden_knife', item => {
	// 	item.attackSpeed = -1.3
	// 	item.attackDamageBonus = 1.0
	// });
	event.modify('occultism:butcher_knife', item => {
		item.attackSpeed = -1.3
		item.attackDamage = 3.5
	});
	// event.modify('twilightdelight:ironwood_knife', item => {
	// 	item.attackSpeed = -1.3
	// 	item.attackDamage = 4.0
	// });
	// event.modify('twilightdelight:steeleaf_knife', item => {
	// 	item.attackSpeed = -1.3
	// 	item.attackDamage = 4.0
	// });
	// event.modify('twilightdelight:knightmetal_knife', item => {
	// 	item.attackSpeed = -1.3
	// 	item.attackDamage = 4.0
	// });
	// event.modify('twilightdelight:fiery_knife', item => {
	// 	item.attackSpeed = -1.3
	// 	item.attackDamage = 4.0
	// });
	// event.modify('aquaculturedelight:neptunium_knife', item => {
	// 	item.attackSpeed = -1.3
	// 	item.attackDamage = 4.0
	// });
	event.modify('better_weaponry:copper_knife', item => {
		item.attackSpeed = -1.3
		item.attackDamage = 2.5
	});
	event.modify('better_weaponry:amethyst_knife', item => {
		item.attackSpeed = -1.3
		item.attackDamage = 3.5
	});
	event.modify('better_weaponry:emerald_knife', item => {
		item.attackSpeed = -1.3
		item.attackDamage = 3.5
	});
	event.modify('warriorsofpastepoch:bayonet_knife', item => {
		item.attackSpeed = -1.3
		item.attackDamage = 3.33
	});

	//CLAYMORES
	event.modify('better_weaponry:amethyst_claymore', item => {
		item.attackDamage = 9
	});
	event.modify('better_weaponry:emerald_claymore', item => {
		item.attackDamage = 9
	});
	event.modify('ec_cje_plugin:enderite_claymore', item => {
		item.attackSpeed = -2.8
		item.attackDamage = 11
	});
	event.modify('ec_cje_plugin:gilded_enderite_claymore', item => {
		item.attackSpeed = -2.8
		item.attackDamage = 12
	});
	event.modify('ec_aquaculture_plugin:neptunium_claymore', item => {
		item.attackSpeed = -2.8
		item.attackDamage = 10.5
	});
	event.modify('ec_es_plugin:steel_claymore', item => {
		item.attackSpeed = -2.8
		item.attackDamage = 8.5
	});
	event.modify('magistuarmory:iron_claymore', item => {
		item.attackSpeed = -1.8
	});
	event.modify('magistuarmory:stone_claymore', item => {
		item.attackSpeed = -1.8
	});
	event.modify('magistuarmory:gold_claymore', item => {
		item.attackSpeed = -1.8
		item.attackDamage = 5.5
	});
	event.modify('magistuarmory:diamond_claymore', item => {
		item.attackSpeed = -1.8
	});
	event.modify('magistuarmory:copper_claymore', item => {
		item.attackSpeed = -1.8
		item.attackDamage = 5.5
	});
	event.modify('magistuarmory:steel_claymore', item => {
		item.attackSpeed = -1.8
	});
	event.modify('magistuarmory:netherite_claymore', item => {
		item.attackSpeed = -1.8
	});
	event.modify('magistuarmory:silver_claymore', item => {
		item.attackSpeed = -1.8
	});
	event.modify('magistuarmory:tin_claymore', item => {
		item.attackSpeed = -1.8
	});
	event.modify('magistuarmory:bronze_claymore', item => {
		item.attackSpeed = -1.8
	});
	event.modify('expanded_combat:void_touched_claymore', item => {
		item.attackSpeed = -1.8
		item.attackDamage = 3.5
	});
	
}),
ItemEvents.modification(event => {

	//CHAKRAMS
	event.modify('better_weaponry:amethyst_chakram', item => {
		item.attackDamage = 4.5
	});

	//HALBERDS
	event.modify('knavesneeds:forbidden_arcanus/draco_arcanus/halberd', item => {
		item.attackSpeed = -2.15
	});
	event.modify('knavesneeds:forbidden_arcanus/reinforced_deorum/halberd', item => {
		item.attackSpeed = -2.15
	});
	event.modify('knavesneeds:soulsweapons/translucent/halberd', item => {
		item.attackSpeed = -2.15
	});
	event.modify('knavesneeds:deeperdarker/warden/halberd', item => {
		item.attackSpeed = -2.15
	});

	event.modify('simplyswords:diamond_halberd', item => {
		item.attackSpeed = -3.2
	});
	event.modify('simplyswords:netherite_halberd', item => {
		item.attackSpeed = -3.2
	});
	event.modify('simplyswords:runic_halberd', item => {
		item.attackSpeed = -3.2
	});
	event.modify('simplyswords:magihalberd', item => {
		item.attackSpeed = -3.2
	});
	event.modify('simplyswords:gobber_compat/gobber/gobber_halberd', item => {
		item.attackSpeed = -3.2
	});
	event.modify('simplyswords:gobber_compat/gobber_nether/gobber_nether_halberd', item => {
		item.attackSpeed = -3.2
	});
	event.modify('simplyswords:gobber_compat/gobber_end/gobber_end_halberd', item => {
		item.attackSpeed = -3.2
	});
	// event.modify('entropy:hullbreak_halberd', item => {
	// 	item.attackSpeed = -3.2
	// 	item.attackDamage = 15.0
	// });
	event.modify('magistuarmory:gold_concavehalberd', item => {
		item.attackSpeed = -3.2
	});
	event.modify('magistuarmory:diamond_concavehalberd', item => {
		item.attackSpeed = -3.2
	});
	event.modify('magistuarmory:netherite_concavehalberd', item => {
		item.attackSpeed = -3.2
	});

	//MACHETES
	event.modify('better_weaponry:amethyst_machete', item => {
        item.attackDamage = 7.0
	});

	//MACES
	event.modify('ec_cje_plugin:enderite_mace', item => {
		item.attackSpeed = -3.0
	});
	event.modify('ec_cje_plugin:gilded_enderite_mace', item => {
		item.attackSpeed = -3.0
	});
	event.modify('ec_aquaculture_plugin:neptunium_mace', item => {
		item.attackSpeed = -3.0
	});
	event.modify('ec_es_plugin:steel_mace', item => {
		item.attackSpeed = -3.0
	});
	event.modify('ec_tf_plugin:ironwood_mace', item => {
		item.attackSpeed = -3.0
	});
	event.modify('ec_tf_plugin:fiery_mace', item => {
		item.attackSpeed = -3.0
	});
	event.modify('ec_tf_plugin:steeleaf_mace', item => {
		item.attackSpeed = -3.0
	});
	event.modify('ec_tf_plugin:knight_metal_mace', item => {
		item.attackSpeed = -3.0
	});
	event.modify('born_in_chaos_v1:shell_mace', item => {
		item.attackSpeed = -3.0
		item.attackDamage = 9.0
	});
	event.modify('better_weaponry:amethyst_mace', item => {
		item.attackDamage = 9.0
		item.attackSpeed = -3.0
	});
	event.modify('better_weaponry:emerald_mace', item => {
		item.attackDamage = 9.0
		item.attackSpeed = -3.0
	});

	//SICKLES
	event.modify('better_weaponry:amethyst_sickle', item => {
        item.attackDamage = 4.0
	});
	event.modify('ec_es_plugin:steel_sickle', item => {
        item.attackDamage = 4.0
	});
	event.modify('magistuarmoryaddon:steel_sickle', item => {
        item.attackSpeed = -1.8
	});

	//BROADSWORDS
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
	});
	
	//STAFFS
	// event.modify('born_in_chaos_v1:staffof_magic_arrows', item => {
	// 	item.attackDamage = 8.0
	// });
	
	//BATTLEAXES
	event.modify('better_weaponry:amethyst_battleaxe', item => {
		item.attackDamage = 9.5
	});
	event.modify('magistuarmoryaddon:steel_battleaxe', item => {
		item.attackSpeed = -2.35
        item.attackDamage = 9.5
	});
	
	//SAIS
	event.modify('knavesneeds:twilight_forest/fiery/sai', item => {
		item.attackDamage = 6.0
		item.attackSpeed = -0.8
	});
	event.modify('knavesneeds:twilight_forest/steeleaf/sai', item => {
		item.attackDamage = 5.0
		item.attackSpeed = -0.8
	});
	event.modify('knavesneeds:twilight_forest/knightmetal/sai', item => {
		item.attackDamage = 4.0
		item.attackSpeed = -0.8
	});
	event.modify('knavesneeds:twilight_forest/ironwood/sai', item => {
		item.attackDamage = 3.0
		item.attackSpeed = -0.8
	});
	event.modify('knavesneeds:forbidden_arcanus/draco_arcanus/sai', item => {
		item.attackDamage = 6.0
		item.attackSpeed = -0.8
	});
	event.modify('knavesneeds:forbidden_arcanus/reinforced_deorum/sai', item => {
		item.attackDamage = 5.5
		item.attackSpeed = -0.8
	});
	event.modify('knavesneeds:soulsweapons/translucent/sai', item => {
		item.attackDamage = 5.0
		item.attackSpeed = -0.8
	});
	event.modify('knavesneeds:deeperdarker/warden/sai', item => {
		item.attackDamage = 8.0
		item.attackSpeed = -0.8
	});
	event.modify('simplyswords:gold_sai', item => {
		item.attackDamage = 2.0
		item.attackSpeed = -0.8
	});
	event.modify('simplyswords:iron_sai', item => {
		item.attackDamage = 3.0
		item.attackSpeed = -0.8
	});
	event.modify('simplyswords:diamond_sai', item => {
		item.attackDamage = 4.0
		item.attackSpeed = -0.8
	});
	event.modify('simplyswords:netherite_sai', item => {
		item.attackDamage = 5.0
		item.attackSpeed = -0.8
	});
	event.modify('simplyswords:runic_sai', item => {
		item.attackDamage = 6.0
		item.attackSpeed = -0.8
	});
	event.modify('simplyswords:gobber_compat/gobber/gobber_sai', item => {
		item.attackDamage = 6.0
		item.attackSpeed = -0.8
	});
	event.modify('simplyswords:gobber_compat/gobber_nether/gobber_nether_sai', item => {
		item.attackDamage = 8.0
		item.attackSpeed = -0.8
	});
	event.modify('simplyswords:gobber_compat/gobber_end/gobber_end_sai', item => {
		item.attackDamage = 11.0
		item.attackSpeed = -0.8
	});
	event.modify('samurai_dynasty:sai', item => {
		item.attackSpeed = -0.8
	});
	event.modify('epic_knights__japanese_armory:iron_sai', item => {
		item.attackDamage = 3.0
		item.attackSpeed = -0.8
	});

	//CUTLASSES
	event.modify('better_weaponry:copper_cutlass', item => {
		item.attackDamage = 3.5
		item.attackSpeed = -2.0
	});
	event.modify('better_weaponry:emerald_cutlass', item => {
		item.attackDamage = 5.5
		item.attackSpeed = -2.0
	});
	event.modify('better_weaponry:amethyst_cutlass', item => {
		item.attackDamage = 5.5
		item.attackSpeed = -2.0
	});
	event.modify('ec_cje_plugin:enderite_cutlass', item => {
		item.attackSpeed = -2.0
	});
	event.modify('ec_cje_plugin:gilded_enderite_cutlass', item => {
		item.attackSpeed = -2.0
	});
	event.modify('ec_aquaculture_plugin:neptunium_cutlass', item => {
		item.attackSpeed = -2.0
	});
	event.modify('ec_es_plugin:steel_cutlass', item => {
		item.attackSpeed = -2.0
	});
	event.modify('magistuarmoryaddon:steel_cutlass', item => {
		item.attackSpeed = -2.0
		item.attackDamage = 6.0
	});

	//GLAIVES
	event.modify('better_weaponry:copper_glaive', item => {
		item.attackDamage = 3.5
		item.attackSpeed = -2.6
	});
	event.modify('better_weaponry:emerald_glaive', item => {
		item.attackDamage = 5.5
		item.attackSpeed = -2.6
	});
	event.modify('better_weaponry:amethyst_glaive', item => {
		item.attackDamage = 5.5
		item.attackSpeed = -2.6
	});
	event.modify('divine_weaponry:tunupa_glaive', item => {
		item.attackSpeed = -2.6
	});
	event.modify('ec_cje_plugin:enderite_glaive', item => {
		item.attackSpeed = -2.6
	});
	event.modify('ec_cje_plugin:gilded_enderite_glaive', item => {
		item.attackSpeed = -2.6
	});
	event.modify('ec_aquaculture_plugin:neptunium_glaive', item => {
		item.attackSpeed = -2.6
	});
	event.modify('ec_es_plugin:steel_glaive', item => {
		item.attackSpeed = -2.6
	});
	event.modify('magistuarmoryaddon:steel_glaive', item => {
		item.attackSpeed = -2.6
		item.attackDamage = 6.0
	});

	//SPEARS
	event.modify('better_weaponry:amethyst_spear', item => {
		item.attackDamage = 9.5
	});
	event.modify('divine_weaponry:om_spear', item => {
		item.attackDamage = 12.0
	});
	event.modify('ec_cje_plugin:enderite_spear', item => {
		item.attackSpeed = -2.7
		item.attackDamage = 15.0
	});
	event.modify('ec_cje_plugin:gilded_enderite_spear', item => {
		item.attackSpeed = -2.7
		item.attackDamage = 15.5
	});
	event.modify('ec_aquaculture_plugin:neptunium_spear', item => {
		item.attackSpeed = -2.7
		item.attackDamage = 13.5
	});
	event.modify('ec_es_plugin:steel_spear', item => {
		item.attackSpeed = -2.7
		item.attackDamage = 10.5
	});
	event.modify('magistuarmoryaddon:steel_spear', item => {
		item.attackSpeed = -2.7
		item.attackDamage = 6.0
	});
	// event.modify('cataclysm:coral_spear', item => {
	// 	item.attackSpeed = -2.7
	// 	item.attackDamage = 9.5
	// });
	event.modify('knavesneeds:twilight_forest/fiery/spear', item => {
		item.attackDamage = 12.0
		item.attackSpeed = -2.7
	});
	event.modify('knavesneeds:twilight_forest/steeleaf/spear', item => {
		item.attackDamage = 11.0
		item.attackSpeed = -2.7
	});
	event.modify('knavesneeds:twilight_forest/knightmetal/spear', item => {
		item.attackDamage = 10.0
		item.attackSpeed = -2.7
	});
	event.modify('knavesneeds:twilight_forest/ironwood/spear', item => {
		item.attackDamage = 9.0
		item.attackSpeed = -2.7
	});
	event.modify('knavesneeds:forbidden_arcanus/draco_arcanus/spear', item => {
		item.attackDamage = 12.0
		item.attackSpeed = -2.7
	});
	event.modify('knavesneeds:forbidden_arcanus/reinforced_deorum/spear', item => {
		item.attackDamage = 11.5
		item.attackSpeed = -2.7
	});
	event.modify('knavesneeds:soulsweapons/translucent/spear', item => {
		item.attackDamage = 11.0
		item.attackSpeed = -2.7
	});
	event.modify('knavesneeds:deeperdarker/warden/spear', item => {
		item.attackDamage = 14.0
		item.attackSpeed = -2.7
	});
	event.modify('simplyswords:diamond_spear', item => {
		item.attackDamage = 10.0
		item.attackSpeed = -2.7
	});
	event.modify('simplyswords:netherite_spear', item => {
		item.attackDamage = 11.0
		item.attackSpeed = -2.7
	});
	event.modify('simplyswords:runic_spear', item => {
		item.attackDamage = 12.0
		item.attackSpeed = -2.7
	});
	event.modify('simplyswords:magispear', item => {
		item.attackDamage = 14.0
	});
	event.modify('simplyswords:gobber_compat/gobber/gobber_spear', item => {
		item.attackDamage = 12.0
		item.attackSpeed = -2.7
	});
	event.modify('simplyswords:gobber_compat/gobber_nether/gobber_nether_spear', item => {
		item.attackDamage = 14.0
		item.attackSpeed = -2.7
	});
	event.modify('simplyswords:gobber_compat/gobber_end/gobber_end_spear', item => {
		item.attackDamage = 17.0
		item.attackSpeed = -2.7
	});
	// event.modify('mowziesmobs:spear', item => {
	// 	item.attackDamage = 7.5
	// 	item.attackSpeed = -2.7
	// });
	// event.modify('alexscaves:limestone_spear', item => {
	// 	item.attackDamage = 8.0
	// 	item.attackSpeed = -2.7
	// });
	// event.modify('alexscaves:extinction_spear', item => {
	// 	item.attackDamage = 13.0
	// 	item.attackSpeed = -2.7
	// });
	// event.modify('alexscaves:frostmint_spear', item => {
	// 	item.attackDamage = 9.0
	// 	item.attackSpeed = -2.7
	// 	item.maxDamage = 59
	// });
	
	//HAMMERS
	event.modify('better_weaponry:copper_hammer', item => {
		item.attackDamage = 9.5
		item.attackSpeed = -3.0
	});
	event.modify('better_weaponry:amethyst_hammer', item => {
		item.attackDamage = 10.5
		item.attackSpeed = -3.0
	});
	event.modify('better_weaponry:emerald_hammer', item => {
		item.attackDamage = 10.5
		item.attackSpeed = -3.0
	});
	event.modify('hexerei:warhammer', item => {
		item.attackDamage = 14.0
		item.attackSpeed = -2.8
	});
})