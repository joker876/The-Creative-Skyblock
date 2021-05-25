onEvent('recipes', event => {
    //porcelain fixes
    event.replaceInput({}, 'exnihilosequentia:porcelain_clay', 'ceramics:unfired_porcelain');
    event.replaceOutput({}, 'exnihilosequentia:porcelain_clay', 'ceramics:unfired_porcelain');
    event.remove({output: 'ceramics:unfired_porcelain', input: 'minecraft:quartz'});
    event.shapeless('7x ceramics:unfired_porcelain', ['exnihilosequentia:crucible_unfired']);
    event.shapeless('9x ceramics:unfired_porcelain', ['minecraft:quartz', '8x minecraft:clay_ball']);

    //drawer key fixes
    event.remove({output: 'storagedrawers:quantify_key'});
    event.shapeless('storagedrawers:quantify_key', 'storagedrawers:drawer_key');
    event.shapeless('storagedrawers:drawer_key', 'storagedrawers:quantify_key');
});