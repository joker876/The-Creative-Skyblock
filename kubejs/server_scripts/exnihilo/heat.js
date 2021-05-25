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
    //heat sources
    [
        [ 'minecraft:soul_fire', 8 ],
        [ 'minecraft:soul_campfire', 8 ],
        [ 'minecraft:campfire', 4 ],
        [ 'minecraft:soul_torch', 2 ],
        [ 'minecraft:soul_wall_torch', 2 ],
        [ 'create:blaze_burner', 12 ],
        [ 'ceramics:lava_bricks', 2 ],
        [ 'ceramics:lava_bricks_slab', 2 ],
        [ 'ceramics:lava_bricks_stairs', 2 ],
        [ 'ceramics:lava_bricks_wall', 2 ],
    ]
    .forEach(el => {
        event.custom({
            "type": "exnihilosequentia:heat",
            "block": el[0],
            "amount": el[1],
        });
    })
});