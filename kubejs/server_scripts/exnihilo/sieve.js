onEvent('recipes', event => {
    const sieveBlocks = {
        "minecraft:gravel": [
            {
                item: 'minecraft:flint',
                rolls: [
                    {chance: 0.75, mesh: "string"},
                    {chance: 0.25, mesh: "flint"},
                    {chance: 0.05, mesh: "iron"},
                ]
            },
            {
                item: "minecraft:coal",
                rolls: [
                    {chance: 0.075, mesh: "flint"},
                    {chance: 0.1, mesh: "iron"},
                    {chance: 0.15, mesh: "diamond"},
                    {chance: 0.175, mesh: "emerald"},
                    {chance: 0.2, mesh: "netherite"},
                ]
            },
            {
                item: "minecraft:lapis_lazuli",
                rolls: [
                    {chance: 0.05, mesh: "flint"},
                    {chance: 0.075, mesh: "iron"},
                    {chance: 0.1, mesh: "diamond"},
                    {chance: 0.12, mesh: "emerald"},
                    {chance: 0.135, mesh: "netherite"},
                ]
            },
            {
                item: "exnihilosequentia:piece_iron",
                rolls: [
                    {chance: 0.16, mesh: "flint"},
                    {chance: 0.2, mesh: "iron"},
                    {chance: 0.27, mesh: "diamond"},
                    {chance: 0.35, mesh: "emerald"},
                    {chance: 0.41, mesh: "netherite"},
                ]
            },
            {
                item: "exnihilosequentia:piece_gold",
                rolls: [
                    {chance: 0.025, mesh: "flint"},
                    {chance: 0.05, mesh: "iron"},
                    {chance: 0.06, mesh: "diamond"},
                    {chance: 0.07, mesh: "emerald"},
                    {chance: 0.075, mesh: "netherite"},
                ]
            },
            {
                item: "exnihilosequentia:piece_copper",
                rolls: [
                    {chance: 0.04, mesh: "flint"},
                    {chance: 0.06, mesh: "iron"},
                    {chance: 0.09, mesh: "diamond"},
                    {chance: 0.12, mesh: "emerald"},
                    {chance: 0.15, mesh: "netherite"},
                ]
            },
            {
                item: "exnihilosequentia:piece_zinc",
                rolls: [
                    {chance: 0.04, mesh: "flint"},
                    {chance: 0.06, mesh: "iron"},
                    {chance: 0.09, mesh: "diamond"},
                    {chance: 0.12, mesh: "emerald"},
                    {chance: 0.15, mesh: "netherite"},
                ]
            },
            {
                item: "minecraft:diamond",
                rolls: [
                    {chance: 0.0075, mesh: "iron"},
                    {chance: 0.015, mesh: "diamond"},
                    {chance: 0.02, mesh: "emerald"},
                    {chance: 0.024, mesh: "netherite"},
                ]
            },
            {
                item: "minecraft:emerald",
                rolls: [
                    {chance: 0.014, mesh: "diamond"},
                    {chance: 0.019, mesh: "emerald"},
                    {chance: 0.022, mesh: "netherite"},
                ]
            },
        ],
        "TAG:minecraft:sand": [
            {
                item: "minecraft:cocoa_beans",
                rolls: [
                    {chance: 0.075, mesh: "string"},
                ]
            },
            {
                item: "minecraft:dead_bush",
                rolls: [
                    {chance: 0.4, mesh: "string"},
                ]
            },
            {
                item: "pamhc2crops:aridgarden",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2crops:tropicalgarden',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:piece_gold",
                rolls: [
                    {chance: 0.05, mesh: "flint"},
                    {chance: 0.075, mesh: "iron"},
                    {chance: 0.12, mesh: "diamond"},
                    {chance: 0.16, mesh: "emerald"},
                    {chance: 0.21, mesh: "netherite"},
                ]
            },
            {
                item: "minecraft:prismarine_shard",
                rolls: [
                    {chance: 0.35, mesh: "flint"},
                    {chance: 0.45, mesh: "iron"},
                    {chance: 0.65, mesh: "diamond"},
                    {chance: 0.85, mesh: "emerald"},
                    {chance: 1.0, mesh: "netherite"},
                    {chance: 0.2, mesh: "netherite"},
                ]
            },
            {
                item: "minecraft:prismarine_crystals",
                rolls: [
                    {chance: 0.12, mesh: "flint"},
                    {chance: 0.15, mesh: "iron"},
                    {chance: 0.17, mesh: "diamond"},
                    {chance: 0.23, mesh: "emerald"},
                    {chance: 0.3, mesh: "netherite"},
                ]
            },
            {
                item: "exnihilosequentia:seed_kelp",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                    {chance: 0.1, mesh: "flint"},
                    {chance: 0.15, mesh: "iron"},
                ],
                waterlogged: true,
            },
            {
                item: "exnihilosequentia:seed_pickle",
                rolls: [
                    {chance: 0.04, mesh: "string"},
                    {chance: 0.08, mesh: "flint"},
                ],
                waterlogged: true,
            },
            {
                item: "exnihilosequentia:seed_red_coral",
                rolls: [
                    {chance: 0.02, mesh: "flint"},
                    {chance: 0.05, mesh: "iron"},
                    {chance: 0.1, mesh: "diamond"},
                ],
                waterlogged: true,
            },
            {
                item: "exnihilosequentia:seed_yellow_coral",
                rolls: [
                    {chance: 0.02, mesh: "flint"},
                    {chance: 0.05, mesh: "iron"},
                    {chance: 0.1, mesh: "diamond"},
                ],
                waterlogged: true,
            },
            {
                item: "exnihilosequentia:seed_blue_coral",
                rolls: [
                    {chance: 0.02, mesh: "flint"},
                    {chance: 0.05, mesh: "iron"},
                    {chance: 0.1, mesh: "diamond"},
                ],
                waterlogged: true,
            },
            {
                item: "exnihilosequentia:seed_pink_coral",
                rolls: [
                    {chance: 0.02, mesh: "flint"},
                    {chance: 0.05, mesh: "iron"},
                    {chance: 0.1, mesh: "diamond"},
                ],
                waterlogged: true,
            },
            {
                item: "exnihilosequentia:seed_purple_coral",
                rolls: [
                    {chance: 0.02, mesh: "flint"},
                    {chance: 0.05, mesh: "iron"},
                    {chance: 0.1, mesh: "diamond"},
                ],
                waterlogged: true,
            },
            {
                item: "minecraft:wet_sponge",
                rolls: [
                    {chance: 0.08, mesh: "iron"},
                    {chance: 0.035, mesh: "diamond"},
                    {chance: 0.065, mesh: "emerald"},
                ],
                waterlogged: true,
            },
            {
                item: "minecraft:seagrass",
                rolls: [
                    {chance: 0.1, mesh: "string"},
                    {chance: 0.2, mesh: "flint"},
                    {chance: 0.3, mesh: "iron"},
                    {chance: 0.4, mesh: "diamond"},
                ],
                waterlogged: true,
            },
            {
                item: "minecraft:turtle_egg",
                rolls: [
                    {chance: 0.005, mesh: "iron"},
                    {chance: 0.01, mesh: "diamond"},
                    {chance: 0.014, mesh: "emerald"},
                    {chance: 0.017, mesh: "netherite"},
                ],
                waterlogged: true,
            },
            {
                item: "minecraft:nautilus_shell",
                rolls: [
                    {chance: 0.01, mesh: "diamond"},
                    {chance: 0.0125, mesh: "emerald"},
                    {chance: 0.015, mesh: "netherite"},
                ],
                waterlogged: true,
            },
            {
                item: "minecraft:heart_of_the_sea",
                rolls: [
                    {chance: 0.002, mesh: "emerald"},
                    {chance: 0.0045, mesh: "netherite"},
                ],
                waterlogged: true,
            },
        ],
        "exnihilosequentia:dust": [
            {
                item: 'minecraft:gunpowder',
                rolls: [
                    {chance: 0.075, mesh: "string"},
                    {chance: 0.1, mesh: "flint"},
                    {chance: 0.1, mesh: "iron"},
                ]
            },
            {
                item: "minecraft:glowstone_dust",
                rolls: [
                    {chance: 0.03, mesh: "flint"},
                    {chance: 0.0625, mesh: "iron"},
                    {chance: 0.125, mesh: "diamond"},
                    {chance: 0.25, mesh: "emerald"},
                    {chance: 0.45, mesh: "netherite"},
                ]
            },
            {
                item: "minecraft:redstone",
                rolls: [
                    {chance: 0.0625, mesh: "flint"},
                    {chance: 0.125, mesh: "iron"},
                    {chance: 0.25, mesh: "diamond"},
                    {chance: 0.4, mesh: "emerald"},
                    {chance: 0.525, mesh: "netherite"},
                ]
            },
            {
                item: "minecraft:blaze_powder",
                rolls: [
                    {chance: 0.025, mesh: "flint"},
                    {chance: 0.05, mesh: "iron"},
                    {chance: 0.1, mesh: "diamond"},
                    {chance: 0.2, mesh: "emerald"},
                    {chance: 0.3, mesh: "netherite"},
                ]
            },
            {
                item: 'minecraft:bone_meal',
                rolls: [
                    {chance: 0.5, mesh: "string"},
                    {chance: 0.2, mesh: "flint"},
                ]
            },
        ],
        "minecraft:oak_leaves": [
            {
                item: 'minecraft:oak_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                    {chance: 0.1, mesh: "flint"},
                    {chance: 0.15, mesh: "iron"},
                    {chance: 0.2, mesh: "diamond"},
                    {chance: 0.25, mesh: "emerald"},
                    {chance: 0.3, mesh: "netherite"},
                ]
            },
            {
                item: 'pamhc2trees:apple_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:avocado_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:candlenut_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:cherry_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:chestnut_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:gooseberry_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:lemon_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:nutmeg_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:orange_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:pear_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:plum_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:walnut_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:spiderweb_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:hazelnut_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:pawpaw_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:soursop_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:peach_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
        ],
        "minecraft:jungle_leaves": [
            {
                item: 'minecraft:jungle_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                    {chance: 0.1, mesh: "flint"},
                    {chance: 0.15, mesh: "iron"},
                    {chance: 0.2, mesh: "diamond"},
                    {chance: 0.25, mesh: "emerald"},
                    {chance: 0.3, mesh: "netherite"},
                ]
            },
            {
                item: 'pamhc2trees:almond_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:apricot_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:banana_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:cashew_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:cinnamon_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:coconut_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:date_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:dragonfruit_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:durian_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:fig_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:grapefruit_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:lime_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:mango_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:olive_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:papaya_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:paperbark_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:pecan_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:peppercorn_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:persimmon_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:pistachio_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:pomegranate_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:starfruit_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:vanillabean_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:breadfruit_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:guava_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:jackfruit_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:lychee_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:passionfruit_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:rambutan_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:tamarid_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
        ],
        "minecraft:spruce_leaves": [
            {
                item: 'minecraft:spruce_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                    {chance: 0.1, mesh: "flint"},
                    {chance: 0.15, mesh: "iron"},
                    {chance: 0.2, mesh: "diamond"},
                    {chance: 0.25, mesh: "emerald"},
                    {chance: 0.3, mesh: "netherite"},
                ]
            },
            {
                item: 'pamhc2trees:maple_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2trees:pinenut_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
        ],
        "minecraft:birch_leaves": [
            {
                item: 'minecraft:birch_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                    {chance: 0.1, mesh: "flint"},
                    {chance: 0.15, mesh: "iron"},
                    {chance: 0.2, mesh: "diamond"},
                    {chance: 0.25, mesh: "emerald"},
                    {chance: 0.3, mesh: "netherite"},
                ]
            },
        ],
        "minecraft:acacia_sapling": [
            {
                item: 'minecraft:acacia_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                    {chance: 0.1, mesh: "flint"},
                    {chance: 0.15, mesh: "iron"},
                    {chance: 0.2, mesh: "diamond"},
                    {chance: 0.25, mesh: "emerald"},
                    {chance: 0.3, mesh: "netherite"},
                ]
            },
        ],
        "minecraft:dark_oak_leaves": [
            {
                item: 'minecraft:dark_oak_sapling',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                    {chance: 0.1, mesh: "flint"},
                    {chance: 0.15, mesh: "iron"},
                    {chance: 0.2, mesh: "diamond"},
                    {chance: 0.25, mesh: "emerald"},
                    {chance: 0.3, mesh: "netherite"},
                ]
            },
        ],
        "TAG:minecraft:leaves": [
            {
                item: 'minecraft:apple',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                    {chance: 0.1, mesh: "flint"},
                    {chance: 0.15, mesh: "iron"},
                    {chance: 0.2, mesh: "diamond"},
                    {chance: 0.25, mesh: "emerald"},
                    {chance: 0.3, mesh: "netherite"},
                ]
            },
            {
                item: 'minecraft:golden_apple',
                rolls: [
                    {chance: 0.005, mesh: "iron"},
                    {chance: 0.01, mesh: "diamond"},
                    {chance: 0.015, mesh: "emerald"},
                    {chance: 0.02, mesh: "netherite"},
                ]
            },
            {
                item: "minecraft:enchanted_golden_apple",
                rolls: [
                    {chance: 0.001, mesh: "diamond"},
                    {chance: 0.002, mesh: "emerald"},
                    {chance: 0.003, mesh: "netherite"},
                ]
            },
            {
                item: 'exnihilosequentia:silkworm',
                rolls: [
                    {chance: 0.025, mesh: "string"},
                    {chance: 0.05, mesh: "flint"},
                    {chance: 0.1, mesh: "iron"},
                    {chance: 0.2, mesh: "diamond"},
                    {chance: 0.25, mesh: "emerald"},
                    {chance: 0.3, mesh: "netherite"},
                ]
            },
        ],
        "exnihilosequentia:crushed_netherrack": [
            {
                item: "exnihilosequentia:pebble_basalt",
                rolls: [
                    {chance: 1.0, mesh: "string"},
                    {chance: 0.75, mesh: "string"},
                    {chance: 0.5, mesh: "string"},
                    {chance: 0.25, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:pebble_blackstone",
                rolls: [
                    {chance: 1.0, mesh: "string"},
                    {chance: 1.0, mesh: "string"},
                    {chance: 0.75, mesh: "string"},
                    {chance: 0.5, mesh: "string"},
                    {chance: 0.25, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:piece_gold",
                rolls: [
                    {chance: 0.2, mesh: "flint"},
                    {chance: 0.3, mesh: "iron"},
                    {chance: 0.38, mesh: "diamond"},
                    {chance: 0.44, mesh: "emerald"},
                    {chance: 0.48, mesh: "netherite"},
                ]
            },
            { //replaced scraps with debris
                item: "minecraft:ancient_debris",
                rolls: [
                    {chance: 0.008, mesh: "iron"},
                    {chance: 0.016, mesh: "diamond"},
                    {chance: 0.024, mesh: "emerald"},
                    {chance: 0.03, mesh: "netherite"},
                ]
            },
        ],
        "exnihilosequentia:crushed_end_stone": [
            {
                item: "minecraft:ender_pearl",
                rolls: [
                    {chance: 0.04, mesh: "iron"},
                    {chance: 0.08, mesh: "diamond"},
                    {chance: 0.12, mesh: "emerald"},
                    {chance: 0.15, mesh: "netherite"},
                ]
            },
            {
                item: "minecraft:chorus_flower",
                rolls: [
                    {chance: 0.03, mesh: "diamond"},
                    {chance: 0.05, mesh: "emerald"},
                    {chance: 0.075, mesh: "netherite"},
                ]
            },
            {
                item: "minecraft:end_portal_frame",
                rolls: [
                    {chance: 0.001, mesh: "netherite"},
                ]
            },
        ],
        "minecraft:soul_sand": [
            {
                item: "minecraft:nether_wart",
                rolls: [
                    {chance: 0.1, mesh: "string"},
                ]
            },
            {
                item: "minecraft:quartz",
                rolls: [
                    {chance: 0.5, mesh: "flint"},
                    {chance: 0.1, mesh: "flint"},
                    {chance: 0.9, mesh: "iron"},
                    {chance: 0.25, mesh: "iron"},
                    {chance: 1.0, mesh: "diamond"},
                    {chance: 0.3, mesh: "diamond"},
                    {chance: 1, mesh: "emerald"},
                    {chance: 0.55, mesh: "emerald"},
                    {chance: 1, mesh: "netherite"},
                    {chance: 0.8, mesh: "netherite"},
                ]
            },
            {
                item: "minecraft:ghast_tear",
                rolls: [
                    {chance: 0.02, mesh: "diamond"},
                    {chance: 0.04, mesh: "emerald"},
                    {chance: 0.075, mesh: "netherite"},
                ]
            },
            {
                item: "minecraft:bone_block",
                rolls: [
                    {chance: 0.05, mesh: "iron"},
                    {chance: 0.075, mesh: "diamond"},
                    {chance: 0.1, mesh: "emerald"},
                    {chance: 0.12, mesh: "netherite"},
                ]
            },
        ],
        "minecraft:dirt": [
            {
                item: "exnihilosequentia:pebble_stone",
                rolls: [
                    {chance: 1.0, mesh: "string"},
                    {chance: 1.0, mesh: "string"},
                    {chance: 0.5, mesh: "string"},
                    {chance: 0.5, mesh: "string"},
                    {chance: 0.1, mesh: "string"},
                    {chance: 0.1, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:pebble_andesite",
                rolls: [
                    {chance: 0.5, mesh: "string"},
                    {chance: 0.2, mesh: "string"},
                    {chance: 0.1, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:pebble_granite",
                rolls: [
                    {chance: 0.5, mesh: "string"},
                    {chance: 0.2, mesh: "string"},
                    {chance: 0.1, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:pebble_diorite",
                rolls: [
                    {chance: 0.5, mesh: "string"},
                    {chance: 0.2, mesh: "string"},
                    {chance: 0.1, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:seed_oak",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:seed_birch",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:seed_spruce",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:seed_jungle",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:seed_dark_oak",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:seed_acacia",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:seed_grass",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
        ],
        "minecraft:grass_block": [
            {
                item: "exnihilosequentia:seed_berry",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:ancient_spores",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:seed_large_fern",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:seed_cactus",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:seed_bamboo",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:seed_sugarcane",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:seed_carrot",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "exnihilosequentia:seed_fern",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "minecraft:beetroot_seeds",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "minecraft:wheat_seeds",
                rolls: [
                    {chance: 0.15, mesh: "string"},
                ]
            },
            {
                item: "minecraft:melon_seeds",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: "minecraft:pumpkin_seeds",
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2crops:frostgarden',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2crops:windygarden',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2crops:soggygarden',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
            {
                item: 'pamhc2crops:shadedgarden',
                rolls: [
                    {chance: 0.05, mesh: "string"},
                ]
            },
        ]
    }
    const removeSieveRecipes = {
        "minecraft:dirt": [
            "exnihilocreatio:seed_berry",
            "exnihilocreatio:seed_sugarcane",
            "exnihilocreatio:seed_potato",
            "exnihilocreatio:seed_large_fern",
            "exnihilocreatio:seed_cactus",
            "exnihilocreatio:seed_bamboo",
            "exnihilocreatio:seed_carrot",
            "exnihilocreatio:seed_fern",
            "minecraft:beetroot_seeds",
            "minecraft:wheat_seeds",
            "minecraft:melon_seeds",
            "minecraft:pumpkin_seeds",
        ],
        "exnihilosequentia:crushed_netherrack": [
            "minecraft:netherite_scrap",
        ]
    }
    event.remove({
        type: "exnihilosequentia:sieve",
    });
    Object.keys(sieveBlocks).forEach(block => {
        let blockObj = {
            item: block,
        }
        if (block.match(/TAG:/)) {
            blockObj = {
                tag: block.replace(/TAG:/, ''),
            }
        }
        sieveBlocks[block].forEach(rec => {
            event.custom({
                type: "exnihilosequentia:sieve",
                rolls: rec.rolls,
                input: blockObj,
                result: {
                    item: rec.item
                },
                waterlogged: rec.waterlogged || false,
            })
        })
    })
});