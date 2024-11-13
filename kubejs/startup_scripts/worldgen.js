//Removes ores from world generation

WorldgenEvents.remove(event => {
  event.removeOres(props => {
    props.worldgenLayer = 'underground_ores';
    props.blocks = [
      "galosphere:deepslate_silver_ore",
      "iceandfire:deepslate_silver_ore",
      "samurai_dynasty:deepslate_silver_ore",
      "eidolon:deep_silver_ore",
      "epic_knigts_ores_and_alloys:silver_ore",
      "epic_knigts_ores_and_alloys:silver_ore",
    ]
  })
})