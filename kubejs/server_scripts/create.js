onEvent('recipes', event => {
    event.remove({type: "create:milling", input: "minecraft:gravel"})
    event.custom({
        "type": "create:milling",
        "ingredients": [{
            "item": "minecraft:gravel"
        }],
        "results": [{
            "item": "minecraft:sand"
        }],
        "processingTime": 200
    });
    event.remove({type: "create:milling", input: "minecraft:sand"})
    event.custom({
        "type": "create:milling",
        "ingredients": [{
            "item": "minecraft:sand"
        }],
        "results": [{
            "item": "exnihilosequentia:dust"
        }],
        "processingTime": 100
    });
    event.remove({type: "create:milling", input: "minecraft:end_stone"})
    event.custom({
        "type": "create:milling",
        "ingredients": [{
            "item": "minecraft:end_stone"
        }],
        "results": [{
            "item": "exnihilosequentia:crushed_end_stone"
        }],
        "processingTime": 200
    });
    event.remove({type: "create:milling", input: "minecraft:netherrack"})
    event.custom({
        "type": "create:milling",
        "ingredients": [{
            "item": "minecraft:netherrack"
        }],
        "results": [{
            "item": "exnihilosequentia:crushed_netherrack"
        }],
        "processingTime": 200
    });
});