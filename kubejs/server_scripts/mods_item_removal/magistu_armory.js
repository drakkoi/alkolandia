//Remove magistu armory weapons

ServerEvents.recipes(event => {
    event.remove({ output: 'magistuarmory:iron_chainmorgenstern'})
    event.remove({ output: 'magistuarmory:wood_chainmorgenstern'})
    event.remove({ output: 'magistuarmory:stone_chainmorgenstern'})
    event.remove({ output: 'magistuarmory:diamond_chainmorgenstern'})
    event.remove({ output: 'magistuarmory:copper_chainmorgenstern'})
    event.remove({ output: 'magistuarmory:steel_chainmorgenstern'})
    event.remove({ output: 'magistuarmory:silver_chainmorgenstern'})
    event.remove({ output: 'magistuarmory:netherite_chainmorgenstern'})
    event.remove({ output: 'magistuarmory:tin_chainmorgenstern'})
    event.remove({ output: 'magistuarmory:bronze_chainmorgenstern'})
})