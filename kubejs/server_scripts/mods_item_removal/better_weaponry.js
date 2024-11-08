//Remove better weaponry weapons

ServerEvents.recipes(event => {
    event.remove({ output: 'better_weaponry:wooden_scythe'})
    event.remove({ output: 'better_weaponry:stone_scythe'})
    event.remove({ output: 'better_weaponry:golden_scythe'})
    event.remove({ output: 'better_weaponry:diamond_scythe'})
    event.remove({ output: 'better_weaponry:netherite_scythe'})

    event.remove({ output: 'better_weaponry:wooden_knife'})
    event.remove({ output: 'better_weaponry:stone_knife'})
    event.remove({ output: 'better_weaponry:golden_knife'})
    event.remove({ output: 'better_weaponry:diamond_knife'})
    event.remove({ output: 'better_weaponry:netherite_knife'})

    event.remove({ output: 'better_weaponry:wooden_rapier'})
    event.remove({ output: 'better_weaponry:stone_rapier'})
    event.remove({ output: 'better_weaponry:golden_rapier'})
    event.remove({ output: 'better_weaponry:diamond_rapier'})
    event.remove({ output: 'better_weaponry:netherite_rapier'})

    event.remove({ output: 'better_weaponry:wooden_glaive'})
    event.remove({ output: 'better_weaponry:stone_glaive'})
    event.remove({ output: 'better_weaponry:golden_glaive'})
    event.remove({ output: 'better_weaponry:diamond_glaive'})
    event.remove({ output: 'better_weaponry:netherite_glaive'})
})