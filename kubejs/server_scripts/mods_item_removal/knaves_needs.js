//Remove knaves' needs weapons

ServerEvents.recipes(event => {
    event.remove({ output: 'knavesneeds:twilight_forest/fiery/scythe'})
    event.remove({ output: 'knavesneeds:twilight_forest/ironwood/scythe'})
    event.remove({ output: 'knavesneeds:twilight_forest/knightmetal/scythe'})
    event.remove({ output: 'knavesneeds:twilight_forest/steeleaf/scythe'})

    event.remove({ output: 'knavesneeds:twilight_forest/fiery/scythe'})
    event.remove({ output: 'knavesneeds:twilight_forest/ironwood/scythe'})
    event.remove({ output: 'knavesneeds:twilight_forest/knightmetal/scythe'})
    event.remove({ output: 'knavesneeds:twilight_forest/steeleaf/scythe'})
})