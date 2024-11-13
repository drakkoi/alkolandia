ServerEvents.tags('item', event => {

    // Organic materials for Compost Recipe
    event.add('forge:compost',
        'hexerei:mugwort_flowers',
        'hexerei:mugwort_leaves',
        'hexerei:yellow_dock_flowers',
        'hexerei:yellow_dock_leaves',
        'hexerei:belladonna_flowers',
        'hexerei:belladonna_berries',
        'hexerei:mandrake_root',
        'hexerei:mandrake_flowers',
        'hexerei:dried_sage',
        'hexerei:dried_belladonna_flowers',
        'hexerei:dried_mandrake_flowers',
        'hexerei:dried_mugwort_flowers',
        'hexerei:dried_mugwort_leaves',
        'hexerei:dried_yellow_dock_flowers',
        'hexerei:dried_yellow_dock_leaves',
        'farmersdelight:tree_bark'
    )

    // Rope Tags
    event.add('supplementaries:ropes',
        'farmersdelight:rope',
        'beautify:rope'
    )

    // Eyes tags
    event.add('forge:eyes',
        'endrem:evil_eye',
        'endrem:cursed_eye',
        'endrem:rogue_eye',
        'endrem:old_eye',
        'endrem:nether_eye',
        'endrem:lost_eye',
        'endrem:corrupted_eye',
        'endrem:cold_eye',
        'endrem:black_eye',
        'endrem:guardian_eye',
        'endrem:magical_eye',
        'endrem:wither_eye',
        'endrem:witch_eye',
        'endrem:undead_eye',
        'endrem:exotic_eye'
    )

    // Waystone Tags
    event.add('forge:waystones',
        'waystones:waystone',
        'waystones:mossy_waystone',
        'waystones:sandy_waystone'
    )

    // Wrench Tags
    event.add('forge:wrenches',
    'supplementaries:wrench'
    )

    // Bowl Tagging
    event.add('forge:bowls',
        'minecraft:bowl',
        'ecologics:coconut_husk'
    )

    // Banning Uncraftables
    event.add('twilightforest:banned_uncraftables',
        '#forge:eyes',
        'ends_delight:non_hatchable_dragon_egg',
        'aquaculture:nether_star_hook',
    )
    event.add('twilightforest:banned_uncrafting_ingredients',
        '#forge:eyes',
        'minecraft:nether_star',
        'minecraft:dragon_egg'
    )

    // Sleeping Bags
    event.add('forge:sleeping_bags',
        'comforts:sleeping_bag_purple',
        'comforts:sleeping_bag_blue',
        'comforts:sleeping_bag_brown',
        'comforts:sleeping_bag_green',
        'comforts:sleeping_bag_red',
        'comforts:sleeping_bag_black',
        'comforts:sleeping_bag_white',
        'comforts:sleeping_bag_orange',
        'comforts:sleeping_bag_magenta',
        'comforts:sleeping_bag_light_blue',
        'comforts:sleeping_bag_yellow',
        'comforts:sleeping_bag_lime',
        'comforts:sleeping_bag_pink',
        'comforts:sleeping_bag_gray',
        'comforts:sleeping_bag_light_gray',
        'comforts:sleeping_bag_cyan'
    )

    event.add('minecraft:fishes',
        'alexsmobs:raw_catfish',
        'alexsmobs:cooked_catfish',
        'alexsdelight:cooked_catfish_slice',
        'alexsdelight:raw_catfish_slice'
    )

    // String
    event.add('forge:string',
        'crittersandcompanions:silk'
    )

    // Majrusz's Accessories
    event.add('forge:maj_acs',
        'majruszsaccessories:certificate_of_taming',
        'majruszsaccessories:idol_of_fertility',
        'majruszsaccessories:lucky_rock',
        'majruszsaccessories:tamed_potato_beetle',
        'majruszsaccessories:angler_trophy',
        'majruszsaccessories:discount_voucher',
        'majruszsaccessories:dream_catcher',
        'majruszsaccessories:metal_lure',
        'majruszsaccessories:miner_guide',
        'majruszsaccessories:adventurer_kit',
        'majruszsaccessories:tool_scraps',
        'majruszsaccessories:unbreakable_fishing_line',
        'majruszsaccessories:adventurer_rune',
        'majruszsaccessories:angler_rune',
        'majruszsaccessories:household_rune',
        'majruszsaccessories:miner_rune',
        'majruszsaccessories:nature_rune',
        'majruszsaccessories:soul_of_minecraft',
        'majruszsaccessories:secret_ingredient',
        'majruszsaccessories:swimmer_guide'
    )

    // Majruzs's Boosters
    event.add('forge:maj_boosters',
        'majruszsaccessories:onyx',
        'majruszsaccessories:dice',
        'majruszsaccessories:owl_feather',
        'majruszsaccessories:golden_dice',
        'majruszsaccessories:golden_horseshoe',
        'majruszsaccessories:horseshoe'
    )

    // Majruzs's Cards
    event.add('forge:maj_cards',
        'majruszsaccessories:gambling_card',
        'majruszsaccessories:removal_card',
        'majruszsaccessories:reverse_card'
    )

    // Aquaculture Tags
    // Fishing Rods
    event.add('forge:fishing_rods',
        'aquaculture:iron_fishing_rod',
        'aquaculture:gold_fishing_rod',
        'aquaculture:diamond_fishing_rod'
    )

    // Refined Storage Controllers/Lodestones
    event.add('forge:creative_controller',
        'refinedstorage:white_creative_controller',
        'refinedstorage:orange_creative_controller',
        'refinedstorage:magenta_creative_controller',
        'refinedstorage:creative_controller',
        'refinedstorage:yellow_creative_controller',
        'refinedstorage:lime_creative_controller',
        'refinedstorage:pink_creative_controller',
        'refinedstorage:gray_creative_controller',
        'refinedstorage:light_gray_creative_controller',
        'refinedstorage:cyan_creative_controller',
        'refinedstorage:purple_creative_controller',
        'refinedstorage:blue_creative_controller',
        'refinedstorage:brown_creative_controller',
        'refinedstorage:green_creative_controller',
        'refinedstorage:red_creative_controller',
        'refinedstorage:black_creative_controller'

    )

   event.add(
        'forge:overworld_vines',
        'minecraft:vine', 
        'hexerei:willow_vines', 
    )

    event.add('forbidden_arcanus:modifier/eternal_incompatible',[
        'minecraft:nether_star','bloodmagic:sanguinereverter','#occultism:miners/ores','apotheosis:potion_charm'
    ])
})

ServerEvents.tags('block', event => {
    event.add('forge:needs_netherite_tool',[
        'waystones:mossy_waystone','waystones:sandy_waystone','waystones:waystone'
    ])
})
