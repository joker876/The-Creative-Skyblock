onEvent('recipes', event => {
    //chest or upgrade shaped recipes
    [
		//chests
		{
			output: 'ironchest:copper_chest',
			main: 'minecraft:chest',
			item: 'create:copper_ingot',
		},
		{
			output: 'ironchest:iron_chest',
			main: 'ironchest:copper_chest',
			item: 'minecraft:iron_ingot',
		},
		{
			output: 'ironchest:gold_chest',
			main: 'ironchest:iron_chest',
			item: 'minecraft:gold_ingot',
		},
		{
			output: 'ironchest:diamond_chest',
			main: 'ironchest:gold_chest',
			item: 'minecraft:diamond',
			item2: 'minecraft:glass',
		},
		{
			output: 'ironchest:crystal_chest',
			main: 'ironchest:diamond_chest',
			item: 'minecraft:glass',
		},
		{
			output: 'ironchest:obsidian_chest',
			main: 'ironchest:diamond_chest',
			item: 'minecraft:obsidian',
		},
		//upgrades
		{
			output: 'ironchest:wood_to_copper_chest_upgrade',
			main: 'minecraft:oak_planks',
			item: 'create:copper_ingot',
		},
		{
			output: 'ironchest:copper_to_iron_chest_upgrade',
			main: 'create:copper_ingot',
			item: 'minecraft:iron_ingot',
		},
		{
			output: 'ironchest:iron_to_gold_chest_upgrade',
			main: 'minecraft:iron_ingot',
			item: 'minecraft:gold_ingot',
		},
		{
			output: 'ironchest:gold_to_diamond_chest_upgrade',
			main: 'minecraft:gold_ingot',
			item: 'minecraft:diamond',
			item2: 'minecraft:glass',
		},
		{
			output: 'ironchest:diamond_to_crystal_chest_upgrade',
			main: 'minecraft:diamond',
			item: 'minecraft:glass',
		},
		{
			output: 'ironchest:diamond_to_obsidian_chest_upgrade',
			main: 'minecraft:diamond',
			item: 'minecraft:obsidian',
		},
	]
    .forEach(rec => {
		event.remove({output: rec.output, type: 'minecraft:crafting_shaped'})
		event.shaped(rec.output, [
			'ABA',
			'BMB',
			'ABA'
		], {
			M: rec.main,
			A: rec.item,
			B: rec.item2 || rec.item,
		});
		if (rec.item2) {
			event.shaped(rec.output, [
				'ABA',
				'BMB',
				'ABA'
			], {
				M: rec.main,
				A: rec.item2,
				B: rec.item,
			});
		}
	});
    //chest + upgrade shapeless recipes
	[
		{
			output: 'ironchest:copper_chest',
			chest: 'minecraft:chest',
			upgrade: 'ironchest:wood_to_copper_chest_upgrade',
		},
		{
			output: 'ironchest:iron_chest',
			chest: 'ironchest:copper_chest',
			upgrade: 'ironchest:copper_to_iron_chest_upgrade',
		},
		{
			output: 'ironchest:gold_chest',
			chest: 'ironchest:iron_chest',
			upgrade: 'ironchest:iron_to_gold_chest_upgrade',
		},
		{
			output: 'ironchest:diamond_chest',
			chest: 'ironchest:gold_chest',
			upgrade: 'ironchest:gold_to_diamond_chest_upgrade',
		},
		{
			output: 'ironchest:crystal_chest',
			chest: 'ironchest:diamond_chest',
			upgrade: 'ironchest:diamond_to_crystal_chest_upgrade',
		},
		{
			output: 'ironchest:obsidian_chest',
			chest: 'ironchest:diamond_chest',
			upgrade: 'ironchest:diamond_to_obsidian_chest_upgrade',
		},
	]
    .forEach(rec => {
		event.shapeless(rec.output, [
			rec.chest, rec.upgrade
		]);
	})
});