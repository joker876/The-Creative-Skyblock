onEvent('recipes', event => {
    event.custom({
        "type": "exnihilosequentia:fluid_item",
        "fluid": {
            "fluid": "minecraft:water"
        },
        "input": {
            "item": "minecraft:dirt"
        },
        "result": {
            "item": "minecraft:grass_block"
        }
    });
});