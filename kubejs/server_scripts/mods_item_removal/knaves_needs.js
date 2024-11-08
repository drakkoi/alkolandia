//Remove knaves' needs weapons

ServerEvents.recipes(event => {
    event.remove({ output: 'knavesneeds:twilight_forest/fiery/katana'})
    event.remove({ output: 'knavesneeds:twilight_forest/ironwood/katana'})
    event.remove({ output: 'knavesneeds:twilight_forest/knightmetal/katana'})
    event.remove({ output: 'knavesneeds:twilight_forest/steeleaf/katana'})
})