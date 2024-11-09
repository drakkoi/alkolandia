//Remove ice and fire weapons

ServerEvents.recipes(event => {
    event.remove({ output: 'iceandfire:copper_pickaxe'})
    event.remove({ output: 'iceandfire:copper_axe'})
    event.remove({ output: 'iceandfire:copper_shovel'})
    event.remove({ output: 'iceandfire:copper_hoe'})
    event.remove({ output: 'iceandfire:copper_sword'})
})