ItemEvents.modification(event => {
    event.modify('alexsmobs:emu_egg', item => {
      item.maxStackSize = 16
  })
    event.modify('minecraft:egg', item => {
      item.maxStackSize = 64
    })
    event.modify('minecraft:turtle_egg', item => {
      item.maxStackSize = 64
    })
    event.modify('alexsmobs:crocodile_egg', item => {
      item.maxStackSize = 64
    })
    event.modify('alexsmobs:terrapin_egg', item => {
      item.maxStackSize = 64
    })
})