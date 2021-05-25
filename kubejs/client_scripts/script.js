// priority: 0

onEvent('jei.hide.items', event => {
	const hideItems = [
		'exnihilosequentia:ingot_zinc',
		'exnihilosequentia:ingot_copper',
		'ironchest:wood_to_iron_chest_upgrade',
		'ironchest:copper_to_silver_chest_upgrade',
		'ironchest:silver_to_gold_chest_upgrade',
		'ironchest:silver_chest',
		/itemfilters:*/,
		'exnihilosequentia:porcelain_clay',
	]
	hideItems.forEach(item => {
		event.hide(item);
	});
});
