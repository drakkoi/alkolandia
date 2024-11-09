//Remove nether's delight weapons

ServerEvents.recipes(event => {
    event.remove({ output: 'nethersdelight:iron_machete'})
    event.remove({ output: 'nethersdelight:golden_machete'})
    event.remove({ output: 'nethersdelight:diamond_machete'})
    event.remove({ output: 'nethersdelight:netherite_machete'})
})