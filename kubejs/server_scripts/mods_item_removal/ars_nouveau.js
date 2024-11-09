//Remove ars noveau animate block glyph

ServerEvents.recipes(event => {
    event.remove({ output: 'ars_nouveau:glyph_animate_block' })
    
    event.remove({ output: 'soulsweapons:moonstone_pickaxe' })
})