onEvent('recipes', event => {
	[
        {id: 'minecraft:ens_ancient_debris'},
        {output: 'ironchest:wood_to_iron_chest_upgrade'},
        {output: 'ironchest:copper_to_silver_chest_upgrade'},
        {output: 'ironchest:silver_to_gold_chest_upgrade'},
        {output: 'ironchest:silver_chest'},
        {mod: 'itemfilters'},
        {type: 'create:filling', output: 'minecraft:glowstone_dust'},
        {type: 'create:filling', output: 'minecraft:redstone'},
        {type: 'create:filling', output: 'minecraft:gunpowder'},
        {output: 'exnihilosequentia:ingot_copper'},
        {output: 'exnihilosequentia:ingot_zinc'},
        {output: 'minecraft:end_portal_frame', type: 'minecraft:crafting_shaped'}
    ]
    .forEach(el => {event.remove(el)});
})