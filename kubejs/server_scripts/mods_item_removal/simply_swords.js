//Remove simply swords weapons

ServerEvents.recipes(event => {
    event.remove({ output: 'simplyswords:iron_katana'})
    event.remove({ output: 'simplyswords:gold_katana'})

    event.remove({ output: 'simplyswords:iron_scythe'})
    event.remove({ output: 'simplyswords:gold_scythe'})

    event.remove({ output: 'simplyswords:iron_spear'})
    event.remove({ output: 'simplyswords:gold_spear'})
})