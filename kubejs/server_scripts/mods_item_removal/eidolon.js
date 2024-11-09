//Remove ice and fire weapons

ServerEvents.recipes(event => {
    event.remove({ output: 'eidolon:silver_pickaxe'})
    event.remove({ output: 'eidolon:silver_axe'})
    event.remove({ output: 'eidolon:silver_shovel'})
    event.remove({ output: 'eidolon:silver_hoe'})
    event.remove({ output: 'eidolon:silver_sword'})
})