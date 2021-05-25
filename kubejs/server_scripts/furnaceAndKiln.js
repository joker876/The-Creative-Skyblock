onEvent('recipes', event => {
	// andesite from gravel
	event.smelting('minecraft:andesite', 'minecraft:gravel', 0.1);
	event.custom({
		type: 'ceramics:kiln',
		ingredient: {
			item: 'minecraft:gravel'
		},
		result: 'minecraft:andesite',
		experience: 0.1,
		processingTime: 100
	});
    
	event.remove({type: "minecraft:blasting", output: 'exnihilosequentia:crucible_fired'});
	event.custom({
		type: 'ceramics:kiln',
		ingredient: {
			item: 'exnihilosequentia:crucible_unfired'
		},
		result: 'exnihilosequentia:crucible_fired',
		experience: 0.7,
		processingTime: 100
	});
});