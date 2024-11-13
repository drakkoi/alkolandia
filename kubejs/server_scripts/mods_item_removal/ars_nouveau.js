//Remove ars noveau animate block glyph

ServerEvents.recipes(event => {
    event.remove({ output: 'ars_nouveau:glyph_animate_block' })
    
    event.remove({ output: 'soulsweapons:moonstone_pickaxe' })

    event.remove({ output: 'aquaculture:iron_fillet_knife' })
    event.remove({ output: 'aquaculture:gold_fillet_knife' })
    event.remove({ output: 'aquaculture:diamond_fillet_knife' })
    event.remove({ output: 'aquaculture:neptunium_fillet_knife' })
})