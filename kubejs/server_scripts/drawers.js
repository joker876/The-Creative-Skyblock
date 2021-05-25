onEvent('recipes', event => {
	//standard upgrades
    [
		{
			output: 'storagedrawers:iron_storage_upgrade',
			main: 'storagedrawers:obsidian_storage_upgrade',
			item: 'minecraft:iron_ingot'
		},
		{
			output: 'storagedrawers:gold_storage_upgrade',
			main: 'storagedrawers:iron_storage_upgrade',
			item: 'minecraft:gold_ingot'
		},
		{
			output: 'storagedrawers:diamond_storage_upgrade',
			main: 'storagedrawers:gold_storage_upgrade',
			item: 'minecraft:diamond'
		},
		{
			output: 'storagedrawers:emerald_storage_upgrade',
			main: 'storagedrawers:diamond_storage_upgrade',
			item: 'minecraft:emerald'
		},
	]
	.forEach(rec => {
		event.remove({output: rec.output, type: 'minecraft:crafting_shaped'})
		event.shaped(rec.output, [
			'SSS',
			'IMI',
			'SSS'
		], {
			S: 'minecraft:stick',
			I: rec.item,
			M: rec.main,
		});
	});
	//void upgrade
	event.remove({output: 'storagedrawers:void_upgrade'});
	event.shapeless('storagedrawers:void_upgrade', ['storagedrawers:upgrade_template', 'minecraft:obsidian']);
});