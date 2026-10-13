/**
 * 新新魔塔 (56层策略革新版 - cos105hk) 全关卡官方正统地图数据
 * 包含：
 * - 主塔 0F ~ 20F (main0 ~ main20)
 * - 地下侧塔 B1F ~ B25F (base1 ~ base25)
 * - 秘密魔塔 M1F ~ M10F (MOTA1 ~ MOTA10)
 * 纯原生 JSON 规范，杜绝合成重复地图
 */
const XINXIN_MAPS = {
    "main0": {
        "id": "main0",
        "name": "主塔 0F",
        "title": "主塔  入口",
        "upPos": {
            "x": 6,
            "y": 2
        },
        "downPos": null,
        "canFlyTo": true,
        "changeFloor": {
            "6,2": {
                "floorId": "main1",
                "stair": "downFloor"
            },
            "2,2": null
        },
        "events": {
            "9,2": [
                {
                    "type": "if",
                    "condition": "((status:lv>=20)&&(flag:proof_brave===1))",
                    "true": [
                        {
                            "type": "choices",
                            "text": "\t[奸商,woman]是勇者之证呢~\n我有它的增幅器，\n这样吧~$500卖给你，\n好吗？",
                            "choices": [
                                {
                                    "text": "买！",
                                    "action": [
                                        {
                                            "type": "if",
                                            "condition": "(status:money>=500)",
                                            "true": [
                                                {
                                                    "type": "setValue",
                                                    "name": "status:money",
                                                    "operator": "-=",
                                                    "value": "500"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:proof_brave",
                                                    "operator": "+=",
                                                    "value": "1"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:proof_lv",
                                                    "operator": "+=",
                                                    "value": "1"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:atkTimes",
                                                    "operator": "+=",
                                                    "value": "1"
                                                },
                                                "${flags.臸娥语==1?'彻':'章'}的等级升为${core.getFlag('proof_brave')}",
                                                {
                                                    "type": "playSound",
                                                    "name": "商店"
                                                }
                                            ],
                                            "false": [
                                                {
                                                    "type": "playSound",
                                                    "name": "操作失败"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "text": "不买",
                                    "action": [
                                        {
                                            "type": "playSound",
                                            "name": "取消"
                                        },
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "false": [
                        "\t[奸商,woman]又是挑战者吗？\n希望你能活着回去，\n嘻嘻嘻嘻. . . "
                    ]
                }
            ],
            "9,3": null,
            "2,2": [
                {
                    "type": "if",
                    "condition": "core.terrainExists(2,2, 'downFloor')",
                    "true": [
                        {
                            "type": "changeFloor",
                            "floorId": "base1",
                            "loc": [
                                2,
                                2
                            ],
                            "time": 500
                        }
                    ],
                    "false": []
                }
            ],
            "7,6": null,
            "6,10": [
                "\t[勇士,hero]就是这里了……\n攻进去!!",
                {
                    "type": "hide",
                    "time": 0
                }
            ],
            "3,2": {
                "trigger": null,
                "enable": false,
                "noPass": null,
                "displayDamage": true,
                "opacity": 1,
                "filter": {
                    "blur": 0,
                    "hue": 0,
                    "grayscale": 0,
                    "invert": false,
                    "shadow": 0
                },
                "data": [
                    {
                        "type": "openShop",
                        "id": "keyShop",
                        "open": true
                    }
                ]
            }
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "thief",
                "whiteWall",
                "whiteWall",
                "upFloor",
                "whiteWall",
                0,
                "woman",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                0,
                0,
                "whiteWall",
                "whiteWall",
                "greenSlime",
                "whiteWall",
                0,
                0,
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "steelDoor",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "lava",
                "whiteWall",
                "lava",
                "whiteWall",
                0,
                "whiteWall",
                "lava",
                "whiteWall",
                "lava",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "lava",
                "lava",
                "lava",
                "lava",
                "whiteWall",
                0,
                "whiteWall",
                "lava",
                "lava",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "lava",
                "lava",
                "lava",
                "lava",
                "whiteWall",
                0,
                "whiteWall",
                "lava",
                "lava",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "lava",
                "lava",
                "lava",
                "lava",
                "whiteWall",
                0,
                "whiteWall",
                "lava",
                "lava",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main1": {
        "id": "main1",
        "name": "主塔 1F",
        "title": "主塔  1F",
        "upPos": {
            "x": 8,
            "y": 2
        },
        "downPos": {
            "x": 6,
            "y": 2
        },
        "canFlyTo": true,
        "changeFloor": {
            "6,2": {
                "floorId": "main0",
                "stair": "upFloor"
            },
            "8,2": {
                "floorId": "main2",
                "stair": "downFloor"
            }
        },
        "events": {
            "8,9": [
                {
                    "type": "if",
                    "condition": "((flag:proof_tyrant>=1)||((flag:proof_sage>=1)||(flag:proof_brave>=1)))",
                    "true": [
                        "\t[商人,woman]你已经获得了${flags.臸娥语==1?'彻':'章'}的能力，祝贺你！"
                    ],
                    "false": [
                        "\t[商人,woman]你知道什么是${flags.臸娥语==1?'彻':'章'}吗？\n在这里有数个不同的${flags.臸娥语==1?'彻':'章'}，只要\n拿到就可以得到一些有利于战斗的能力，",
                        "\t[商人,woman]但是${flags.臸娥语==1?'彻':'章'}要被鉴定后才可使用\n你必须找一个懂鉴定的人！"
                    ]
                }
            ],
            "2,2": [
                {
                    "type": "if",
                    "condition": "((status:lv>=20)&&(flag:proof_tyrant==1))",
                    "true": [
                        "\t[老人,man]你是来救公主的吧？\n这个无条件送给你啦！\n但你一定要将公主给救出来！",
                        {
                            "type": "setValue",
                            "name": "flag:proof_tyrant",
                            "operator": "+=",
                            "value": "1"
                        },
                        {
                            "type": "setValue",
                            "name": "flag:proof_lv",
                            "operator": "+=",
                            "value": "1"
                        },
                        "${flags.臸娥语==1?'彻':'章'}的等级升为${core.getFlag('proof_tyrant',null)}"
                    ],
                    "false": [
                        "\t[老人,man]听说这座${flags.臸娥语==1?'娥':'塔'}不止20层. . .\n但是最高只能去到第20层. .\n真叫人头痛. . ."
                    ]
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "man",
                "greenSlime",
                0,
                0,
                "downFloor",
                "whiteWall",
                "upFloor",
                0,
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "redSlime",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "bat",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                0,
                0,
                0,
                0,
                0,
                "whiteWall",
                "greenSlime",
                "redSlime",
                "greenSlime",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "bat",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "bat",
                0,
                0,
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                0,
                0,
                0,
                0,
                0,
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "blueDoor",
                "whiteWall",
                "whiteWall",
                0,
                "yellowDoor",
                0,
                0,
                "skeleton",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "greenSlime",
                0,
                "greenSlime",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "redPotion",
                "zombie",
                "redPotion",
                "whiteWall",
                0,
                "whiteWall",
                "woman",
                0,
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "redGem",
                "yellowKey",
                "blueGem",
                "whiteWall",
                "greenSlime",
                "whiteWall",
                "redKey",
                "yellowKey",
                "yellowKey",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main2": {
        "id": "main2",
        "name": "主塔 2F",
        "title": "主塔  2F",
        "upPos": {
            "x": 8,
            "y": 10
        },
        "downPos": {
            "x": 8,
            "y": 2
        },
        "canFlyTo": true,
        "changeFloor": {
            "10,10": {
                "floorId": "main3",
                "loc": [
                    10,
                    10
                ]
            },
            "8,10": {
                "floorId": "main3",
                "loc": [
                    8,
                    10
                ]
            },
            "8,2": {
                "floorId": "main1",
                "stair": "upFloor"
            }
        },
        "events": {
            "6,10": [
                "\t[商人,woman]你认识那个被抓住的${flags.臸娥语==1?'祍搁':'盗贼'}吗？\n听说他来这里是为了找一个${flags.臸娥语==1?'維繷':'锄头'}。不知他要来干什么呢..."
            ],
            "6,2": [
                {
                    "type": "if",
                    "condition": "core.hasItem('pickaxe')",
                    "true": [
                        "\t[${flags.臸娥语==1?'祍搁':'盗贼'},thief]咦！这不就是我的${flags.臸娥语==1?'維繷':'锄头'}吗！\n谢谢你替我找回来！\n让我替你打开\n通往地下的通道吧！",
                        {
                            "type": "hide"
                        },
                        {
                            "type": "setBlock",
                            "number": "88",
                            "loc": [
                                [
                                    2,
                                    2
                                ]
                            ],
                            "floorId": "main0"
                        },
                        {
                            "type": "show",
                            "loc": [
                                [
                                    3,
                                    2
                                ]
                            ],
                            "floorId": "main0"
                        },
                        {
                            "type": "setValue",
                            "name": "item:pickaxe",
                            "value": "0"
                        }
                    ],
                    "false": [
                        {
                            "type": "openShop",
                            "id": "keyShop",
                            "open": true
                        }
                    ]
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "redGem",
                "blueGem",
                0,
                "whiteWall",
                "thief",
                "whiteWall",
                "downFloor",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "redPotion",
                "redPotion",
                0,
                "whiteWall",
                0,
                "whiteWall",
                0,
                0,
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                0,
                "skeletonCaptain",
                0,
                "redBat",
                "steelDoor",
                "whiteWall",
                "whiteWall",
                "redSlime",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "redDoor",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                0,
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                0,
                "yellowKnight",
                0,
                "redDoor",
                0,
                "blueKey",
                0,
                "whiteWall",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "greenSlime",
                "whiteWall",
                "bat",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                0,
                "whiteWall",
                "redGem",
                0,
                0,
                "whiteWall",
                "greenSlime",
                "whiteWall",
                "bat",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "redKey",
                "whiteWall",
                "blueGem",
                0,
                "yellowKey",
                "whiteWall",
                0,
                "whiteWall",
                "bluePotion",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "redKey",
                "whiteWall",
                0,
                "blueKey",
                "woman",
                "whiteWall",
                "upFloor",
                "whiteWall",
                "upFloor",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main3": {
        "id": "main3",
        "name": "主塔 3F",
        "title": "主塔  3F",
        "upPos": {
            "x": 2,
            "y": 9
        },
        "downPos": {
            "x": 8,
            "y": 10
        },
        "canFlyTo": true,
        "changeFloor": {
            "1,6": {
                "floorId": "main4",
                "loc": [
                    1,
                    6
                ]
            },
            "2,2": {
                "floorId": "main4",
                "loc": [
                    2,
                    2
                ]
            },
            "2,9": {
                "floorId": "main4",
                "loc": [
                    2,
                    9
                ]
            },
            "8,10": {
                "floorId": "main2",
                "loc": [
                    8,
                    10
                ]
            },
            "10,10": {
                "floorId": "main2",
                "loc": [
                    10,
                    10
                ]
            }
        },
        "events": {
            "4,8": [
                {
                    "type": "openShop",
                    "id": "moneyShop3F",
                    "open": true
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "upFloor",
                0,
                "bat",
                "whiteWall",
                0,
                0,
                "bluePriest",
                "blueDoor",
                "blueGem",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                0,
                "whiteWall",
                0,
                "whiteWall",
                "redSlime",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "weakWine",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "bat",
                0,
                0,
                "redSlime",
                "bat",
                0,
                0,
                "whiteWall",
                "poisonWine",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "upFloor",
                0,
                0,
                "bat",
                0,
                0,
                "blueDoor",
                0,
                "whiteWall",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWallDoor",
                "whiteWallDoor",
                "whiteWallDoor",
                "whiteWallDoor",
                "whiteWall",
                0,
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "blueShop-left",
                "blueShop",
                "blueShop-right",
                0,
                "whiteWall",
                0,
                "whiteWall",
                "skeleton",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "upFloor",
                "greenSlime",
                "redSlime",
                0,
                0,
                "redSlime",
                0,
                "whiteWall",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "bluePotion",
                0,
                0,
                0,
                "whiteWall",
                "downFloor",
                "whiteWall",
                "downFloor",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main4": {
        "id": "main4",
        "name": "主塔 4F",
        "title": "主塔  4F",
        "upPos": {
            "x": 6,
            "y": 6
        },
        "downPos": {
            "x": 2,
            "y": 2
        },
        "canFlyTo": true,
        "changeFloor": {
            "6,6": {
                "floorId": "main5",
                "stair": "downFloor"
            },
            "2,2": {
                "floorId": "main3",
                "loc": [
                    2,
                    2
                ]
            },
            "1,6": {
                "floorId": "main3",
                "loc": [
                    1,
                    6
                ]
            },
            "2,9": {
                "floorId": "main3",
                "loc": [
                    2,
                    9
                ]
            }
        },
        "events": {
            "7,4": [
                {
                    "type": "choices",
                    "text": "\t[商人,woman]$15就可以恢复200${flags.臸娥语==1?'砰':'体力'}\n需要吗？",
                    "choices": [
                        {
                            "text": "要！",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "(status:money>=15)",
                                    "true": [
                                        {
                                            "type": "setValue",
                                            "name": "status:money",
                                            "operator": "-=",
                                            "value": "15"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "status:hp",
                                            "operator": "+=",
                                            "value": "200"
                                        },
                                        {
                                            "type": "hide",
                                            "remove": true
                                        },
                                        {
                                            "type": "playSound",
                                            "name": "商店"
                                        },
                                        {
                                            "type": "exit"
                                        }
                                    ],
                                    "false": [
                                        {
                                            "type": "playSound",
                                            "name": "操作失败"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "离开",
                            "action": [
                                {
                                    "type": "playSound",
                                    "name": "取消"
                                },
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "downFloor",
                0,
                0,
                0,
                0,
                "blackSlime",
                "redSlime",
                0,
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "whiteWall",
                "redSlime",
                "bluePriest",
                "whiteWall",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "bluePotion",
                0,
                "skeleton",
                "whiteWall",
                "whiteWall",
                "woman",
                "Lvupfly",
                "whiteWall",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "downFloor",
                0,
                "bluePriest",
                "sword1",
                "whiteWall",
                "upFloor",
                "redSlime",
                "blackSlime",
                0,
                "bluePriest",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "blueKey",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "yellowKey",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "downFloor",
                0,
                "whiteWall",
                0,
                0,
                0,
                0,
                "blueDoor",
                "skeleton",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "greenSlime",
                "redSlime",
                "greenSlime",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "blueKey",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main5": {
        "id": "main5",
        "name": "主塔 5F",
        "title": "主塔  5F",
        "upPos": {
            "x": 6,
            "y": 1
        },
        "downPos": {
            "x": 6,
            "y": 6
        },
        "canFlyTo": true,
        "changeFloor": {
            "6,1": {
                "floorId": "main6",
                "stair": "downFloor"
            },
            "6,6": {
                "floorId": "main4",
                "stair": "upFloor"
            }
        },
        "events": {
            "6,11": [
                "\t[神秘老人,man]这个给你....\n有了这个，\n就可看清楚怪物的能力....",
                {
                    "type": "hide"
                }
            ],
            "8,1": [
                {
                    "type": "choices",
                    "text": "\t[${flags.臸娥语==1?'腳ホ':'宝石'}商人,woman]我这里有${flags.臸娥语==1?'ㄢ聋腳ホ':'两颗红宝石'}，\n你想要吗？\n$40卖给你吧",
                    "choices": [
                        {
                            "text": "要！",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "(status:money>=40)",
                                    "true": [
                                        {
                                            "type": "setValue",
                                            "name": "status:money",
                                            "operator": "-=",
                                            "value": "40"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "status:atk",
                                            "operator": "+=",
                                            "value": "core.values.redGem *2"
                                        },
                                        {
                                            "type": "tip",
                                            "text": "获得 ${flags.臸娥语==1?'ㄢ聋腳ホ':'两颗红宝石'}，攻击力 +4",
                                            "icon": "redGem"
                                        },
                                        {
                                            "type": "playSound",
                                            "name": "商店"
                                        },
                                        {
                                            "type": "hide"
                                        },
                                        {
                                            "type": "exit"
                                        }
                                    ],
                                    "false": [
                                        "\t[宝石商人,woman]你没有足够的${flags.臸娥语==1?'刽':'金币'}！"
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "离开",
                            "action": [
                                {
                                    "type": "playSound",
                                    "name": "取消"
                                },
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "weakWine",
                "poisonWine",
                "redPotion",
                "whiteWall",
                "upFloor",
                "whiteWall",
                "woman",
                0,
                "yellowKey",
                "blueKey",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "bat",
                "bigBat",
                "bat",
                "whiteWall",
                "redSlime",
                "whiteWall",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                0,
                0,
                0,
                "whiteWall",
                "blackSlime",
                "whiteWall",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                0,
                "blackSlime",
                "whiteWall",
                "whiteWall",
                "redSlime",
                "whiteWall",
                "whiteWall",
                0,
                0,
                "redPotion",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "steelDoor",
                "whiteWall",
                0,
                0,
                0,
                "whiteWall",
                "bat",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "bluePriest",
                "skeleton",
                0,
                "downFloor",
                0,
                0,
                0,
                "blackSlime",
                "yellowDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                0,
                0,
                0,
                "whiteWall",
                "blueDoor",
                "whiteWall",
                "yellowDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "bigBat",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "redGem",
                "redKey",
                "blueGem",
                "whiteWall",
                0,
                "whiteWall",
                0,
                "skeleton",
                "skeleton",
                "skeleton",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "greenGem",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "man",
                "whiteWall",
                0,
                0,
                "redPotion",
                "yellowKey",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main6": {
        "id": "main6",
        "name": "主塔 6F",
        "title": "主塔  6F",
        "upPos": {
            "x": 8,
            "y": 11
        },
        "downPos": {
            "x": 6,
            "y": 1
        },
        "canFlyTo": true,
        "changeFloor": {
            "3,1": {
                "floorId": "main7",
                "loc": [
                    3,
                    1
                ]
            },
            "8,11": {
                "floorId": "main7",
                "loc": [
                    8,
                    11
                ]
            },
            "6,1": {
                "floorId": "main5",
                "stair": "upFloor"
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "shield3",
                0,
                "upFloor",
                "whiteWall",
                "whiteWall",
                "downFloor",
                "whiteWall",
                "bluePriest",
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "zombie",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                0,
                "whiteWall",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "redKey",
                "skeletonSoilder",
                0,
                0,
                "whiteWall",
                0,
                "whiteWall",
                0,
                "whiteWall",
                "skeleton",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "blueKey",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "bigBat",
                0,
                0,
                "whiteWall",
                "yellowKey",
                "whiteWall",
                "blackSlime",
                "whiteWall",
                0,
                "bat",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                0,
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowGuard",
                "yellowDoor",
                0,
                "whiteWall",
                "bluePotion",
                "whiteWall",
                0,
                "whiteWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                0,
                "whiteWall",
                0,
                "whiteWall",
                "redGem",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                0,
                "whiteWall",
                0,
                "whiteWall",
                0,
                "bat",
                0,
                "whiteWall",
                0,
                "bluePriest",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "grayPriest",
                "whiteWall",
                0,
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "redGem",
                "whiteWall",
                0,
                "blackSlime",
                0,
                "whiteWall",
                "upFloor",
                0,
                0,
                "redPotion",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main7": {
        "id": "main7",
        "name": "主塔 7F",
        "title": "主塔  7F",
        "upPos": {
            "x": 1,
            "y": 6
        },
        "downPos": {
            "x": 8,
            "y": 11
        },
        "canFlyTo": true,
        "changeFloor": {
            "1,6": {
                "floorId": "main8",
                "stair": "downFloor"
            },
            "3,1": {
                "floorId": "main6",
                "loc": [
                    3,
                    1
                ]
            },
            "8,11": {
                "floorId": "main6",
                "loc": [
                    8,
                    11
                ]
            }
        },
        "events": {
            "3,10": [
                {
                    "type": "openShop",
                    "id": "expShop7F",
                    "open": true
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "downFloor",
                "whiteWall",
                "yellowKey",
                "yellowKey",
                "whiteWall",
                0,
                0,
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "rock",
                "redDoor",
                "whiteWall",
                "yellowKey",
                "skeletonSoilder",
                "whiteWall",
                0,
                "whiteWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowKey",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "rock",
                "whiteWall",
                "bigBat",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "skeleton",
                "yellowGuard",
                0,
                "whiteWall",
                "blueKey",
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "yellowGuard",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "grayPriest",
                "whiteWall",
                "yellowKey",
                "whiteWall",
                0,
                "whiteWall",
                0,
                "whiteWall",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "upFloor",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "grayPriest",
                "whiteWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "skeleton",
                "bluePriest",
                0,
                "yellowDoor",
                "bat",
                "whiteWall",
                "redPotion",
                "whiteWall",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "redPotion",
                "whiteWall",
                "redPotion",
                "whiteWall",
                "bat",
                "whiteWall",
                "bluePotion",
                "whiteWall",
                "skeleton",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "pinkShop-left",
                "pinkShop",
                "pinkShop-right",
                "whiteWall",
                0,
                0,
                0,
                0,
                "yellowDoor",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "blueGem",
                0,
                "redGem",
                "blueDoor",
                "skeleton",
                "whiteWall",
                "downFloor",
                "whiteWall",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main8": {
        "id": "main8",
        "name": "主塔 8F",
        "title": "主塔  8F",
        "upPos": {
            "x": 11,
            "y": 6
        },
        "downPos": {
            "x": 1,
            "y": 6
        },
        "canFlyTo": true,
        "changeFloor": {
            "11,6": {
                "floorId": "main9",
                "stair": "downFloor"
            },
            "1,6": {
                "floorId": "main7",
                "stair": "upFloor"
            }
        },
        "events": {
            "10,8": [
                "\t[神秘老人,man]你真了不起\n竟然能来到这层！\n这个给你吧",
                {
                    "type": "setValue",
                    "name": "item:fly",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            10,
                            8
                        ]
                    ]
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "rock",
                0,
                0,
                "whiteWall",
                "slimeMan",
                "bigBat",
                0,
                "whiteWall",
                "zombie",
                "yellowKey",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "yellowGuard",
                "whiteWall",
                0,
                "yellowDoor",
                0,
                "whiteWall",
                0,
                0,
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blackSlime",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "zombie",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "whiteWall",
                "whiteWall",
                "redGem",
                "whiteWall",
                0,
                "whiteWall",
                "blueGem",
                "whiteWall",
                "whiteWall",
                "skeletonSoilder",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "whiteWall",
                "redGem",
                "whiteWall",
                "skeletonCaptain",
                "whiteWall",
                "blueGem",
                "whiteWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "downFloor",
                0,
                "whiteWall",
                "yellowKey",
                "blueDoor",
                "soldier",
                "blueDoor",
                "yellowKey",
                "whiteWall",
                0,
                "upFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                0,
                "whiteWall",
                "bluePotion",
                "whiteWall",
                "skeletonCaptain",
                "whiteWall",
                "redPotion",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "whiteWall",
                "bluePotion",
                "whiteWall",
                0,
                "whiteWall",
                "redPotion",
                "whiteWall",
                "man",
                "bluePotion",
                "blueWall"
            ],
            [
                "blueWall",
                "bigBat",
                "bigBat",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "redGem",
                "blueGem",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                "slimeMan",
                0,
                0,
                0,
                "bluePriest",
                0,
                "grayPriest",
                "grayPriest",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                "slimeMan",
                0,
                0,
                0,
                "bluePriest",
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main9": {
        "id": "main9",
        "name": "主塔 9F",
        "title": "主塔  9F",
        "upPos": {
            "x": 10,
            "y": 8
        },
        "downPos": {
            "x": 11,
            "y": 6
        },
        "canFlyTo": true,
        "changeFloor": {
            "10,8": {
                "floorId": "main10",
                "loc": [
                    10,
                    8
                ]
            },
            "2,7": {
                "floorId": "main10",
                "loc": [
                    2,
                    7
                ]
            },
            "11,6": {
                "floorId": "main8",
                "stair": "upFloor"
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                0,
                "blackSlime",
                "whiteWall",
                "rock",
                "redPotion",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "skeletonSoilder",
                0,
                "whiteWall",
                "grayPriest",
                "blackSlime",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "bluePotion",
                "yellowKey",
                "whiteWall",
                0,
                "whiteWall",
                "slimeMan",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowKey",
                "yellowKnight",
                "whiteWall",
                "zombie",
                "whiteWall",
                "slimeMan",
                "whiteWall",
                "bigBat",
                "whiteWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowKnight",
                "zombie",
                "blueDoor",
                "bigBat",
                0,
                "slimeMan",
                "whiteWall",
                "bigBat",
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "bigBat",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "downFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "upFloor",
                "whiteWall",
                0,
                "whiteWall",
                "redGem",
                "whiteWall",
                "blueGem",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "redPotion",
                "redPotion",
                "whiteWall",
                0,
                "whiteWall",
                "yellowKey",
                "whiteWall",
                "yellowKey",
                "whiteWall",
                "upFloor",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "bigBat",
                "bigBat",
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "yellowKnight",
                "whiteWall",
                "yellowKnight",
                "whiteWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "grayPriest",
                "bluePriest",
                "grayPriest",
                0,
                "yellowGuard",
                0,
                "whiteWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "yellowDoor",
                "zombie",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main10": {
        "id": "main10",
        "name": "主塔 10F",
        "title": "主塔  10F",
        "upPos": {
            "x": 5,
            "y": 1
        },
        "downPos": {
            "x": 2,
            "y": 7
        },
        "canFlyTo": true,
        "changeFloor": {
            "5,1": {
                "floorId": "main11",
                "loc": [
                    5,
                    1
                ]
            },
            "11,1": {
                "floorId": "main11",
                "loc": [
                    11,
                    1
                ]
            },
            "10,8": {
                "floorId": "main9",
                "loc": [
                    10,
                    8
                ]
            }
        },
        "events": {
            "1,1": [
                {
                    "type": "if",
                    "condition": "core.terrainExists(1,1,'flower')",
                    "true": [
                        {
                            "type": "if",
                            "condition": "flag:10f隐藏",
                            "true": [
                                {
                                    "type": "changeFloor",
                                    "floorId": "MOTA10",
                                    "loc": [
                                        6,
                                        11
                                    ],
                                    "time": 500
                                }
                            ],
                            "false": [
                                {
                                    "type": "tip",
                                    "text": "需要依次询问B17F跟B18F的商人兄弟，才能进入这里"
                                }
                            ]
                        }
                    ],
                    "false": []
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "walldoor",
                "walldoor",
                "whiteWall",
                "whiteWall",
                "upFloor",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "upFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "walldoor",
                "whiteWall",
                "whiteWall",
                "yellowKnight",
                "whiteWall",
                "whiteWall",
                0,
                "yellowKey",
                "blueKey",
                "redKey",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "walldoor",
                "whiteWall",
                "whiteWall",
                "blackSlime",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "walldoor",
                "whiteWall",
                "whiteWall",
                "grayPriest",
                "whiteWall",
                "whiteWall",
                "poisonWine",
                "skeletonSoilder",
                "weakWine",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "walldoor",
                "whiteWall",
                "whiteWall",
                "slimeMan",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "redPotion",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "walldoor",
                "whiteWall",
                "skeletonSoilder",
                "zombie",
                "whiteWall",
                "whiteWall",
                "blueGem",
                "zombie",
                "redPotion",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                0,
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowGuard",
                "yellowGuard",
                "whiteWall",
                "greenGem",
                "yellowKey",
                "whiteWall",
                "whiteWall",
                "redGem",
                "whiteWall",
                "downFloor",
                "yellowGuard",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowGuard",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "bigBat",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "yellowKnight",
                "blueWall"
            ],
            [
                "blueWall",
                "rock",
                "rock",
                0,
                "bigBat",
                "bigBat",
                "whiteWall",
                "whiteWall",
                0,
                "steelDoor",
                "poisonWine",
                "weakWine",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main11": {
        "id": "main11",
        "name": "主塔 11F",
        "title": "主塔  11F",
        "upPos": {
            "x": 6,
            "y": 10
        },
        "downPos": {
            "x": 5,
            "y": 1
        },
        "canFlyTo": true,
        "changeFloor": {
            "6,10": {
                "floorId": "main12",
                "stair": "downFloor"
            },
            "5,1": {
                "floorId": "main10",
                "loc": [
                    5,
                    1
                ]
            },
            "11,1": {
                "floorId": "main10",
                "loc": [
                    11,
                    1
                ]
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "skeletonSoilder",
                0,
                "downFloor",
                0,
                "grayPriest",
                "slimeMan",
                "grayPriest",
                0,
                "downFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "bigBat",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                0,
                0,
                "slimeMan",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "Lvupfly",
                "whiteWall",
                "redDoor",
                "whiteWall",
                "yellowGuard",
                "whiteWall",
                "whiteWall",
                "skeletonSoilder",
                "zombie",
                0,
                "grayPriest",
                "blueWall"
            ],
            [
                "blueWall",
                "redGem",
                "whiteWall",
                "swordsman",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "zombie",
                "whiteWall",
                "whiteWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueGem",
                "whiteWall",
                0,
                "whiteWall",
                "redDoor",
                "whiteWall",
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "whiteWall",
                "yellowKnight",
                "blueWall"
            ],
            [
                "blueWall",
                "greenKey",
                "whiteWall",
                "skeletonCaptain",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "whiteWall",
                "blueDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "redPotion",
                "whiteWall",
                "redPriest",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "whiteWall",
                "blueDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "bluePotion",
                "whiteWall",
                "redPriest",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "moneyPocket",
                "whiteWall",
                "whiteWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueGuard",
                "whiteWall",
                0,
                "whiteWall",
                "bigBat",
                "upFloor",
                "yellowKnight",
                "rock",
                "yellowKnight",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                "whiteWall",
                0,
                0,
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main12": {
        "id": "main12",
        "name": "主塔 12F",
        "title": "主塔  12F",
        "upPos": {
            "x": 8,
            "y": 10
        },
        "downPos": {
            "x": 6,
            "y": 10
        },
        "canFlyTo": true,
        "changeFloor": {
            "8,10": {
                "floorId": "main13",
                "stair": "downFloor"
            },
            "6,10": {
                "floorId": "main11",
                "stair": "upFloor"
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "zombie",
                "yellowKnight",
                "zombie",
                0,
                0,
                0,
                0,
                "slimelord",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "zombie",
                "yellowKnight",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "whiteWall",
                "redGem",
                "redPotion",
                "slimelord",
                "moneyPocket",
                "whiteWall",
                "yellowKey",
                "yellowKey",
                "whiteWall",
                "blueDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "blueGem",
                "whiteWall",
                0,
                0,
                0,
                "slimelord",
                "whiteWall",
                "slimeMan",
                "slimeMan",
                0,
                "zombie",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "steelDoor",
                "whiteWall",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                "rock",
                "rock",
                0,
                0,
                0,
                0,
                "skeletonSoilder",
                "blueWall"
            ],
            [
                "blueWall",
                "zombie",
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "redDoor",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "whiteWall",
                0,
                "yellowGuard",
                "redBat",
                "bigKey",
                "whiteWall",
                "shield1",
                "specialDoor",
                "redBat",
                "redBat",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "redBat",
                "redBat",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "whiteWall",
                "grayPriest",
                "bigBat",
                0,
                "downFloor",
                0,
                "upFloor",
                "whiteWall",
                "blueKey",
                "redKey",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "grayPriest",
                "whiteWall",
                0,
                0,
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main13": {
        "id": "main13",
        "name": "主塔 13F",
        "title": "主塔  13F",
        "upPos": {
            "x": 2,
            "y": 7
        },
        "downPos": {
            "x": 8,
            "y": 10
        },
        "canFlyTo": true,
        "changeFloor": {
            "2,7": {
                "floorId": "main14",
                "stair": "downFloor"
            },
            "8,10": {
                "floorId": "main12",
                "stair": "upFloor"
            },
            "4,9": null
        },
        "events": {
            "10,6": [
                "\t[商人,woman]那些${flags.臸娥语==1?'肕':'骑士'}的暴击率高达30%，\n请小心..."
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "zombie",
                "skeletonSoilder",
                0,
                0,
                0,
                "slimelord",
                0,
                "whiteWall",
                "redPotion",
                "bluePotion",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueDoor",
                "whiteWall",
                "bigBat",
                "bigBat",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "whiteWall",
                "bluePotion",
                "zombie",
                0,
                0,
                "whiteWall",
                0,
                "whiteWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "bigBat",
                "whiteWall",
                "blueKey",
                "zombie",
                0,
                "yellowKnight",
                "blueDoor",
                0,
                "whiteWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueGem",
                "whiteWall",
                "zombie",
                0,
                0,
                0,
                "whiteWall",
                0,
                "yellowDoor",
                "yellowKnight",
                "zombie",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                0,
                0,
                0,
                0,
                "whiteWall",
                0,
                "whiteWall",
                "woman",
                "redPotion",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "upFloor",
                "zombie",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                0,
                0,
                "slimeMan",
                0,
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "weakWine",
                "whiteWall",
                "whiteWall",
                "skeletonSoilder",
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "poisonWine",
                "whiteWall",
                "slimelord",
                0,
                "whiteWall",
                "slimelord",
                "whiteWall",
                "downFloor",
                "whiteWall",
                "yellowKnight",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueKey",
                "slimeMan",
                "yellowKnight",
                "whiteWall",
                "whiteWall",
                0,
                "zombie",
                0,
                "yellowKnight",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main14": {
        "id": "main14",
        "name": "主塔 14F",
        "title": "主塔  14F",
        "upPos": {
            "x": 6,
            "y": 11
        },
        "downPos": {
            "x": 2,
            "y": 7
        },
        "canFlyTo": true,
        "changeFloor": {
            "6,11": {
                "floorId": "main15",
                "stair": "downFloor"
            },
            "2,7": {
                "floorId": "main13",
                "stair": "upFloor"
            }
        },
        "events": {
            "2,1": [
                {
                    "type": "if",
                    "condition": "(flag:npc13_times==0)",
                    "true": [
                        "\t[老人,man]啊!!!!!!!\n你的${flags.臸娥语==1?'糃':'剑'}!!你的${flags.臸娥语==1?'':'盾'}!!!!都是古董呢!!!!!",
                        "\t[${flags.臸娥语==1?'玦':'勇士'},hero]？\n你懂鉴定的吗？",
                        "\t[老人,man]这简单的东西怎会难到我？",
                        "\t[${flags.臸娥语==1?'玦':'勇士'},hero]啊！\n我有东西给你鉴定\n你等我一下！",
                        "\t[老人,man]随时欢迎",
                        {
                            "type": "setValue",
                            "name": "flag:npc13_times",
                            "operator": "+=",
                            "value": "1"
                        }
                    ],
                    "false": [
                        {
                            "type": "if",
                            "condition": "(flag:npc13_times==1)",
                            "true": [
                                {
                                    "type": "if",
                                    "condition": "(core.hasItem('proof_brave') && !core.hasFlag('proof'))",
                                    "true": [
                                        "\t[${flags.臸娥语==1?'玦':'勇士'},hero]老伯，\n请你看看这个",
                                        "\t[老人,man]嗯...\n这${flags.臸娥语==1?'腳ホ':'红宝石'}...这形状...\n错不了了！是${flags.臸娥语==1?'玦ぇ谍':'勇者之证'}！",
                                        "\t[${flags.臸娥语==1?'玦':'勇士'},hero]${flags.臸娥语==1?'玦...玦ぇ谍':'勇...勇者之证'}？",
                                        "\t[老人,man]没错！有了这个再配合增幅器\n你的攻击次数就会上升\n对于战斗十分有利的啊！",
                                        {
                                            "type": "function",
                                            "function": "function(){\ncore.plugin.useProof('proof_brave')\n}"
                                        },
                                        {
                                            "type": "tip",
                                            "text": "${flags.臸娥语==1?'彻':'章'}的能力已激活，已晋升为${flags.臸娥语==1?'玦':'勇者'}！",
                                            "icon": "proof_brave"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "flag:npc13_times",
                                            "value": "flag:npc13_times+1"
                                        },
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                },
                                {
                                    "type": "if",
                                    "condition": "(core.hasItem('proof_tyrant') && !core.hasFlag('proof'))",
                                    "true": [
                                        "\t[${flags.臸娥语==1?'玦':'勇士'},hero]老伯，\n请你看看这个",
                                        "\t[老人,man]噢！是${flags.臸娥语==1?'堵痌':'黑珍珠'}！\n不用看了！是${flags.臸娥语==1?'臦ぇ谍':'霸者之证'}！",
                                        "\t[${flags.臸娥语==1?'玦':'勇士'},hero]${flags.臸娥语==1?'臦ぇ谍':'霸者之证'}？\n那是什么？",
                                        "\t[老人,man]你知道的真少嘛~只要拥有它\n你就可以反弹对手的攻击\n使它也同时受伤，\n出现机会颇高，要好好活用呢！",
                                        {
                                            "type": "function",
                                            "function": "function(){\ncore.plugin.useProof('proof_tyrant')\n}"
                                        },
                                        {
                                            "type": "tip",
                                            "text": "${flags.臸娥语==1?'彻':'章'}的能力已激活，已晋升为${flags.臸娥语==1?'臦':'霸者'}",
                                            "icon": "proof_tyrant"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "flag:npc13_times",
                                            "value": "flag:npc13_times+1"
                                        },
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                },
                                {
                                    "type": "if",
                                    "condition": "(core.hasItem('proof_sage') && !core.hasFlag('proof'))",
                                    "true": [
                                        "\t[${flags.臸娥语==1?'玦':'勇士'},hero]老伯，\n请你看看这个",
                                        "\t[老人,man]嗯...\n是一颗珍贵的钻石！\n还有....！\n错不了了！是${flags.臸娥语==1?'藉ぇ谍':'贤者之证'}！",
                                        "\t[${flags.臸娥语==1?'玦':'勇士'},hero]${flags.臸娥语==1?'藉ぇ谍':'贤者之证'}！？",
                                        "\t[老人,man]对！有了它你就可以将对手\n的攻击化成你的体力，\n虽然出现机会不高，但它还有\n附加能力，有一定机会令你在\n战斗后恢复少量体力",
                                        {
                                            "type": "function",
                                            "function": "function(){\ncore.plugin.useProof('proof_sage')\n}"
                                        },
                                        {
                                            "type": "tip",
                                            "text": "${flags.臸娥语==1?'彻':'章'}的能力已激活，已晋升为${flags.臸娥语==1?'藉':'贤者'}",
                                            "icon": "proof_sage"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "flag:npc13_times",
                                            "value": "flag:npc13_times+1"
                                        },
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                },
                                "\t[老人,man]怎样？\n不是有东西要判定吗？"
                            ],
                            "false": []
                        }
                    ]
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "man",
                0,
                "whiteWall",
                "yellowKey",
                "redPotion",
                "whiteWall",
                0,
                "yellowDoor",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "grayPriest",
                "whiteWall",
                0,
                "whiteWall",
                0,
                "whiteWall",
                "whiteWall",
                "slimeMan",
                "whiteWall",
                "skeletonCaptain",
                "zombie",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "whiteWall",
                0,
                "whiteWall",
                0,
                0,
                "whiteWall",
                "slimeMan",
                "whiteWall",
                "yellowKey",
                "Lvupfly",
                "blueWall"
            ],
            [
                "blueWall",
                "grayPriest",
                "whiteWall",
                "skeletonCaptain",
                "whiteWall",
                0,
                "yellowKnight",
                "yellowDoor",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                "whiteWall",
                0,
                0,
                "whiteWall",
                "zombie",
                "blueDoor",
                "zombie",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "blueDoor",
                "whiteWall",
                "slimelord",
                0,
                "whiteWall",
                0,
                "whiteWall",
                "redPotion",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "downFloor",
                "yellowGuard",
                "yellowDoor",
                0,
                "whiteWall",
                "whiteWall",
                "yellowDoor",
                "whiteWall",
                "slimelord",
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "whiteWall",
                "blueDoor",
                "whiteWall",
                "slimelord",
                0,
                "yellowDoor",
                "rock",
                "whiteWall",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueGem",
                "zombie",
                0,
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "yellowKnight",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                0,
                "yellowKnight",
                "skeletonSoilder",
                0,
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "whiteWall",
                "redGem",
                "whiteWall",
                "whiteWall",
                "whiteWall",
                "upFloor",
                "whiteWall",
                "skeletonCaptain",
                0,
                0,
                "whiteWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main15": {
        "id": "main15",
        "name": "主塔 15F",
        "title": "主塔  15F",
        "upPos": {
            "x": 10,
            "y": 11
        },
        "downPos": {
            "x": 6,
            "y": 11
        },
        "canFlyTo": true,
        "changeFloor": {
            "10,11": {
                "floorId": "main16",
                "loc": [
                    10,
                    11
                ]
            },
            "6,1": {
                "floorId": "main16",
                "loc": [
                    6,
                    1
                ]
            },
            "6,11": {
                "floorId": "main14",
                "stair": "upFloor"
            }
        },
        "events": {
            "9,1": [
                {
                    "type": "if",
                    "condition": "((flag:proof_sage==2)&&(status:lv>=35))",
                    "true": [
                        "\t[商人,woman]很久没有人能拿到\n${flags.臸娥语==1?'藉ぇ谍':'贤者之证'}了，\n这个就当是奖励吧",
                        {
                            "type": "setValue",
                            "name": "flag:proof_sage",
                            "operator": "+=",
                            "value": "1"
                        },
                        {
                            "type": "setValue",
                            "name": "flag:proof_lv",
                            "operator": "+=",
                            "value": "1"
                        },
                        "${flags.臸娥语==1?'彻':'章'}的等级升为${core.getFlag('proof_sage',null)}"
                    ],
                    "false": [
                        {
                            "type": "openShop",
                            "id": "keyAcquirer",
                            "open": true
                        }
                    ]
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "bluePotion",
                "star",
                "blueKey",
                "star",
                "star",
                "upFloor",
                "star",
                "star",
                "woman",
                "redKey",
                "redGem",
                "blueWall"
            ],
            [
                "blueWall",
                "blueGem",
                "star",
                "yellowKey",
                "star",
                0,
                0,
                0,
                "star",
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "star",
                "yellowKey",
                "star",
                0,
                0,
                0,
                "star",
                "yellowKnight",
                "skeletonCaptain",
                "yellowKnight",
                "blueWall"
            ],
            [
                "blueWall",
                "zombie",
                "star",
                0,
                "star",
                0,
                "octopus",
                0,
                "star",
                "star",
                "yellowDoor",
                "star",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueDoor",
                0,
                "star",
                "star",
                0,
                "star",
                "star",
                "slimelord",
                "redBat",
                "star",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "star",
                0,
                0,
                "star",
                "redDoor",
                "star",
                0,
                0,
                "slimelord",
                "star",
                "blueWall"
            ],
            [
                "blueWall",
                "skeletonCaptain",
                "star",
                0,
                0,
                "star",
                "redPriest",
                "star",
                0,
                0,
                0,
                "star",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "star",
                "slimelord",
                0,
                0,
                0,
                "yellowDoor",
                0,
                0,
                0,
                "star",
                "blueWall"
            ],
            [
                "blueWall",
                "zombie",
                "star",
                "redBat",
                "slimelord",
                "star",
                0,
                "star",
                0,
                0,
                0,
                "star",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "star",
                "yellowKey",
                "star",
                "star",
                0,
                "star",
                0,
                0,
                "star",
                "star",
                "blueWall"
            ],
            [
                "blueWall",
                "redPotion",
                "star",
                "star",
                "star",
                "star",
                "downFloor",
                "star",
                0,
                "redGem",
                "upFloor",
                "star",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main16": {
        "id": "main16",
        "name": "主塔 16F",
        "title": "主塔  16F",
        "upPos": {
            "x": 6,
            "y": 4
        },
        "downPos": {
            "x": 10,
            "y": 11
        },
        "canFlyTo": true,
        "changeFloor": {
            "1,1": {
                "floorId": "main17",
                "loc": [
                    1,
                    1
                ]
            },
            "6,4": {
                "floorId": "main17",
                "loc": [
                    6,
                    4
                ]
            },
            "10,2": {
                "floorId": "main17",
                "loc": [
                    10,
                    2
                ]
            },
            "6,1": {
                "floorId": "main15",
                "loc": [
                    6,
                    1
                ]
            },
            "10,11": {
                "floorId": "main15",
                "loc": [
                    10,
                    11
                ]
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "upFloor",
                "star",
                "star",
                "star",
                "star",
                "downFloor",
                "star",
                "star",
                "yellowKey",
                "grayPriest",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "steelDoor",
                0,
                0,
                0,
                "star",
                "star",
                0,
                "upFloor",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "star",
                "star",
                "star",
                "star",
                "star",
                "star",
                "star",
                "star",
                "grayPriest",
                "star",
                "skeletonCaptain",
                "blueWall"
            ],
            [
                "blueWall",
                "blueKey",
                "skeletonCaptain",
                "yellowKnight",
                "star",
                "redGem",
                "upFloor",
                "blueGem",
                "star",
                "slimelord",
                "star",
                "redPriest",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "star",
                "redPriest",
                "star",
                "yellowKnight",
                "redPriest",
                "yellowKnight",
                "star",
                0,
                "star",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "star",
                0,
                "star",
                "star",
                0,
                "star",
                0,
                0,
                "star",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "star",
                0,
                0,
                "star",
                "yellowDoor",
                "star",
                0,
                "star",
                "star",
                "slimelord",
                "blueWall"
            ],
            [
                "blueWall",
                "redBat",
                0,
                "star",
                0,
                "star",
                0,
                0,
                0,
                "star",
                "star",
                "zombie",
                "blueWall"
            ],
            [
                "blueWall",
                "star",
                0,
                "star",
                0,
                0,
                0,
                "star",
                0,
                "redPotion",
                "star",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "star",
                0,
                "star",
                "star",
                "star",
                "star",
                "star",
                "star",
                "star",
                "star",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "star",
                "slimelord",
                0,
                0,
                "zombie",
                "yellowKnight",
                0,
                0,
                0,
                "downFloor",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main17": {
        "id": "main17",
        "name": "主塔 17F",
        "title": "主塔  17F",
        "upPos": {
            "x": 6,
            "y": 1
        },
        "downPos": {
            "x": 6,
            "y": 4
        },
        "canFlyTo": true,
        "changeFloor": {
            "6,1": {
                "floorId": "main18",
                "loc": [
                    6,
                    1
                ]
            },
            "8,1": {
                "floorId": "main18",
                "loc": [
                    8,
                    1
                ]
            },
            "3,1": null,
            "1,1": {
                "floorId": "main16",
                "loc": [
                    1,
                    1
                ]
            },
            "6,4": {
                "floorId": "main16",
                "loc": [
                    6,
                    4
                ]
            },
            "10,2": {
                "floorId": "main16",
                "loc": [
                    10,
                    2
                ]
            }
        },
        "events": {
            "3,1": [
                {
                    "type": "if",
                    "condition": "(core.hasItem('magicKey')&&('flower'==core.getBlockId(3,1)))",
                    "true": [
                        {
                            "type": "changeFloor",
                            "floorId": "MOTA1",
                            "loc": [
                                6,
                                11
                            ],
                            "time": 500
                        }
                    ]
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "downFloor",
                0,
                "redDoor",
                "star",
                "star",
                "upFloor",
                "star",
                "upFloor",
                "star",
                "star",
                "star",
                "blueWall"
            ],
            [
                "blueWall",
                "star",
                "star",
                "star",
                "star",
                0,
                "slimelord",
                "star",
                0,
                "star",
                "downFloor",
                "star",
                "blueWall"
            ],
            [
                "blueWall",
                "star",
                "star",
                "star",
                "star",
                "yellowKnight",
                "star",
                "star",
                "redPriest",
                "star",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "weakWine",
                "poisonWine",
                "star",
                0,
                0,
                "downFloor",
                "star",
                "skeletonCaptain",
                "star",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "star",
                0,
                0,
                "star",
                "star",
                "redPriest",
                "star",
                "yellowKey",
                "redKey",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "redBat",
                "steelDoor",
                "yellowKnight",
                0,
                "star",
                "star",
                0,
                "star",
                "skeletonCaptain",
                "redBat",
                "blueWall"
            ],
            [
                "blueWall",
                "redPotion",
                "redPotion",
                "star",
                "swordsman",
                "yellowKnight",
                "blueKey",
                "star",
                0,
                "star",
                "swordsman",
                "yellowKnight",
                "blueWall"
            ],
            [
                "blueWall",
                "star",
                "star",
                "star",
                "star",
                "yellowDoor",
                "star",
                "star",
                0,
                "star",
                "redPotion",
                "bluePotion",
                "blueWall"
            ],
            [
                "blueWall",
                "star",
                "brownWizard",
                0,
                0,
                "moneyPocket",
                "redPotion",
                "star",
                0,
                "star",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "star",
                0,
                "star",
                "star",
                "star",
                "star",
                "star",
                0,
                "star",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "star",
                0,
                0,
                "blueGuard",
                "blueGuard",
                "shield2",
                "star",
                "slimelord",
                "yellowKnight",
                "slimelord",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main18": {
        "id": "main18",
        "name": "主塔 18F",
        "title": "主塔  18F",
        "upPos": {
            "x": 9,
            "y": 3
        },
        "downPos": {
            "x": 6,
            "y": 1
        },
        "canFlyTo": true,
        "changeFloor": {
            "9,3": {
                "floorId": "main19",
                "loc": [
                    9,
                    3
                ]
            },
            "1,1": {
                "floorId": "main19",
                "loc": [
                    1,
                    1
                ]
            },
            "6,1": {
                "floorId": "main17",
                "loc": [
                    6,
                    1
                ]
            },
            "8,1": {
                "floorId": "main17",
                "loc": [
                    8,
                    1
                ]
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "upFloor",
                0,
                "star",
                "redKey",
                "star",
                "downFloor",
                "star",
                "downFloor",
                0,
                "redPriest",
                "slimelord",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "redGem",
                "swordsman",
                0,
                "star",
                0,
                "star",
                "star",
                "star",
                "star",
                "redPriest",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "star",
                0,
                0,
                "star",
                0,
                "star",
                "blueGem",
                "upFloor",
                "star",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                "swordsman",
                "star",
                "slimelord",
                "star",
                "redGem",
                0,
                "star",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "star",
                "yellowKnight",
                "star",
                "star",
                "star",
                "skeletonCaptain",
                "star",
                "star",
                "blueDoor",
                "star",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "slimelord",
                "yellowGuard",
                "slimelord",
                "blueDoor",
                "star",
                "slimelord",
                "star",
                0,
                0,
                "star",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "star",
                "redBat",
                "star",
                0,
                "star",
                0,
                "star",
                "star",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "redPriest",
                0,
                0,
                "star",
                0,
                "star",
                "redPriest",
                0,
                "star",
                "yellowDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "star",
                0,
                0,
                "star",
                "star",
                0,
                "blueDoor",
                "yellowKnight",
                "redPriest",
                "star",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "sword2",
                "star",
                "zombie",
                0,
                "star",
                "star",
                "star",
                "star",
                "star",
                "star",
                "redBat",
                "blueWall"
            ],
            [
                "blueWall",
                "redBat",
                "redBat",
                0,
                "skeletonCaptain",
                0,
                "blueDoor",
                "yellowKnight",
                "skeletonCaptain",
                "yellowKnight",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main19": {
        "id": "main19",
        "name": "主塔 19F",
        "title": "主塔  19F",
        "upPos": {
            "x": 5,
            "y": 11
        },
        "downPos": {
            "x": 9,
            "y": 3
        },
        "canFlyTo": true,
        "changeFloor": {
            "7,11": {
                "floorId": "main20",
                "loc": [
                    7,
                    11
                ]
            },
            "5,11": {
                "floorId": "main20",
                "loc": [
                    5,
                    11
                ]
            },
            "9,3": {
                "floorId": "main18",
                "loc": [
                    9,
                    3
                ]
            },
            "1,1": {
                "floorId": "main18",
                "loc": [
                    1,
                    1
                ]
            }
        },
        "events": {
            "5,1": [
                {
                    "type": "if",
                    "condition": "((flag:proof_tyrant==2)&&(status:lv>=35))",
                    "true": [
                        {
                            "type": "choices",
                            "text": "\t[老人,man]100经验值换增幅器，\n怎样？",
                            "choices": [
                                {
                                    "text": "成交！",
                                    "action": [
                                        {
                                            "type": "if",
                                            "condition": "(status:exp>=100)",
                                            "true": [
                                                {
                                                    "type": "playSound",
                                                    "name": "商店"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:exp",
                                                    "operator": "-=",
                                                    "value": "100"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:proof_tyrant",
                                                    "operator": "+=",
                                                    "value": "1"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:proof_lv",
                                                    "operator": "+=",
                                                    "value": "1"
                                                },
                                                {
                                                    "type": "update"
                                                },
                                                "${flags.臸娥语==1?'彻':'章'}的的等级升为${core.getFlag('proof_tyrant',null)}"
                                            ],
                                            "false": [
                                                {
                                                    "type": "playSound",
                                                    "name": "操作失败"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "text": "再想一想",
                                    "action": [
                                        {
                                            "type": "playSound",
                                            "name": "取消"
                                        },
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "false": [
                        "\t[老人,man]${flags.臸娥语==1?'そ':'公主'}就在上一层，\n但听说有${flags.臸娥语==1?'碿臸':'恶魔'}守着，\n如果实力不够的话千万不要上去"
                    ]
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "downFloor",
                0,
                0,
                0,
                "man",
                "star",
                0,
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                0,
                "star",
                0,
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "star",
                0,
                0,
                "star",
                0,
                "star",
                "downFloor",
                "star",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "star",
                "star",
                "star",
                0,
                "star",
                0,
                0,
                "star",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "star",
                0,
                0,
                "star",
                0,
                "star",
                0,
                "star",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                0,
                "star",
                0,
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                0,
                "star",
                0,
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "star",
                "blueDoor",
                "star",
                "star",
                0,
                "star",
                0,
                "star",
                "star",
                "blueDoor",
                "star",
                "blueWall"
            ],
            [
                "blueWall",
                "redPriest",
                "skeletonCaptain",
                "redPriest",
                "star",
                0,
                "star",
                0,
                "star",
                "redBat",
                "yellowKnight",
                "redBat",
                "blueWall"
            ],
            [
                "blueWall",
                "redGem",
                "redPriest",
                "redGem",
                "star",
                "swordsman",
                "star",
                "swordsman",
                "star",
                "blueGem",
                "redBat",
                "blueGem",
                "blueWall"
            ],
            [
                "blueWall",
                "bluePotion",
                "greenKey",
                "bluePotion",
                "star",
                "upFloor",
                "star",
                "upFloor",
                "star",
                "redPotion",
                "redKey",
                "redPotion",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "main20": {
        "id": "main20",
        "name": "主塔 20F",
        "title": "主塔  20F",
        "upPos": null,
        "downPos": {
            "x": 7,
            "y": 11
        },
        "canFlyTo": false,
        "changeFloor": {
            "1,5": {
                "floorId": "main19",
                "loc": [
                    1,
                    5
                ]
            },
            "11,5": {
                "floorId": "main19",
                "loc": [
                    11,
                    5
                ]
            }
        },
        "events": {
            "1,5": {
                "trigger": null,
                "enable": false,
                "noPass": null,
                "displayDamage": true,
                "opacity": 1,
                "filter": {
                    "blur": 0,
                    "hue": 0,
                    "grayscale": 0,
                    "invert": false,
                    "shadow": 0
                },
                "data": []
            },
            "11,5": {
                "trigger": null,
                "enable": false,
                "noPass": null,
                "displayDamage": true,
                "opacity": 1,
                "filter": {
                    "blur": 0,
                    "hue": 0,
                    "grayscale": 0,
                    "invert": false,
                    "shadow": 0
                },
                "data": []
            },
            "6,2": [
                "\t[${flags.臸娥语==1?'玦':'勇士'},hero]公主，\n我们走吧！这里很危险的！",
                "\t[${flags.臸娥语==1?'そ':'公主'},princess].......................",
                "\t[${flags.臸娥语==1?'玦':'勇士'},hero]怎么了？",
                "\t[${flags.臸娥语==1?'そ':'公主'},princess]哈哈哈哈哈哈哈哈哈\n受死吧！！！（男声）",
                {
                    "type": "setBlock",
                    "number": "2",
                    "loc": [
                        [
                            6,
                            4
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "251",
                    "loc": [
                        [
                            6,
                            1
                        ]
                    ]
                },
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                "whiteWall",
                "N353",
                "whiteWall",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                "whiteWall",
                0,
                "whiteWall",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                "whiteWall",
                0,
                "whiteWall",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "blueWall",
                0,
                0,
                0,
                0,
                0,
                "blueWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "downFloor",
                "blueWall",
                "star",
                "blueWall",
                0,
                0,
                0,
                "blueWall",
                "star",
                "blueWall",
                "downFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "steelDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                0,
                "greenGem",
                0,
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "star",
                "star",
                "star",
                "star",
                "star",
                "star",
                "star",
                "star",
                "star",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "star",
                "star",
                "star",
                "star",
                "star",
                "star",
                "star",
                "star",
                "star",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "star",
                "star",
                "star",
                "star",
                0,
                "star",
                0,
                "star",
                "star",
                "star",
                "star",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base1": {
        "id": "base1",
        "name": "地下 B1F",
        "title": "地下  1F",
        "upPos": {
            "x": 2,
            "y": 2
        },
        "downPos": {
            "x": 11,
            "y": 11
        },
        "canFlyTo": true,
        "changeFloor": {
            "11,11": {
                "floorId": "base2",
                "stair": "upFloor"
            },
            "2,2": {
                "floorId": "main0",
                "stair": "downFloor"
            }
        },
        "events": {
            "2,11": [
                "\t[老人,man]看到${flags.臸娥语==1?'竧':'圣水'}先不要着急去取，\n因为你体力越多${flags.臸娥语==1?'竧':'圣水'}的\n效果越明显！"
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "soldier",
                "redGem",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "upFloor",
                "yellowWall",
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                "brownWizard",
                "soldier",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                0,
                "yellowWall",
                0,
                0,
                "brownWizard",
                0,
                "blueGuard",
                "yellowWall",
                "redPotion",
                "blueKey",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                0,
                "yellowWall",
                0,
                0,
                0,
                "yellowWall",
                0,
                "yellowWall",
                "weakWine",
                "poisonWine",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "redPriest",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                0,
                0,
                "redPriest",
                0,
                0,
                0,
                "swordsman",
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "blueGuard",
                0,
                "yellowWall",
                0,
                0,
                "ghostSkeleton",
                0,
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "yellowWall",
                "blueKnight",
                "yellowWall",
                0,
                "yellowWall",
                "bluePotion",
                0,
                "yellowWall",
                "redBat",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "bigKey",
                "man",
                "yellowWall",
                0,
                "ghostSkeleton",
                0,
                "soldier",
                "yellowKey",
                0,
                "yellowWall",
                "downFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base2": {
        "id": "base2",
        "name": "地下 B2F",
        "title": "地下  2F",
        "upPos": {
            "x": 11,
            "y": 11
        },
        "downPos": {
            "x": 1,
            "y": 1
        },
        "canFlyTo": true,
        "changeFloor": {
            "1,1": {
                "floorId": ":before",
                "stair": "upFloor"
            },
            "11,11": {
                "floorId": "base1",
                "stair": "downFloor"
            }
        },
        "events": {
            "6,6": [
                {
                    "type": "switch",
                    "condition": "flag:npcb2times",
                    "caseList": [
                        {
                            "case": "0",
                            "action": [
                                "\t[妖精,fairy]稀客呢~是来救公主的吧？\n但这层往后的魔物会变得更强\n以你现时的实力\n是绝对赢不了的！",
                                "\t[勇者,hero]是吗？\n那怎么办？",
                                "\t[妖精,fairy]嗯~~\n我还是建议你到17F取宝物\n这个你拿去吧\n拿到宝物后你的力量就会大增\n到时再来找我~",
                                {
                                    "type": "setValue",
                                    "name": "item:magicKey",
                                    "operator": "+=",
                                    "value": "1"
                                },
                                {
                                    "type": "setValue",
                                    "name": "flag:npcb2times",
                                    "operator": "+=",
                                    "value": "1"
                                }
                            ]
                        },
                        {
                            "case": "1",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "(core.hasItem('proof_brave')||(core.hasItem('proof_tyrant')||core.hasItem('proof_sage')))",
                                    "true": [
                                        {
                                            "type": "if",
                                            "condition": "(!flag:proof)",
                                            "true": [
                                                "\t[勇者,hero]我拿到宝物了，谢谢你！",
                                                "\t[妖精,fairy]你的勇气让我十分敬佩，不过谢我这种事还是等你救出公主再说吧。\n加油，我看好你哟～"
                                            ],
                                            "false": [
                                                "\t[勇者,hero]我拿到了！\n力量真的增加了不少！\n谢谢你！",
                                                "\t[妖精,fairy]不客气。\n等你救回了公主再谢吧~\n那么，加油！"
                                            ]
                                        },
                                        {
                                            "type": "show",
                                            "loc": [
                                                [
                                                    1,
                                                    1
                                                ]
                                            ]
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "flag:npcb2times",
                                            "operator": "+=",
                                            "value": "1"
                                        }
                                    ],
                                    "false": [
                                        "\t[妖精,fairy]加油吧！\n要是你救不了公主的话，\n我不会放过你的~"
                                    ]
                                }
                            ]
                        },
                        {
                            "case": "2",
                            "action": [
                                "\t[妖精,fairy]加油吧！\n要是你救不了公主的话，\n我不会放过你的~"
                            ]
                        }
                    ]
                }
            ],
            "1,1": {
                "trigger": null,
                "enable": false,
                "noPass": null,
                "displayDamage": true,
                "opacity": 1,
                "filter": {
                    "blur": 0,
                    "hue": 0,
                    "grayscale": 0,
                    "invert": false,
                    "shadow": 0
                },
                "data": []
            }
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "downFloor",
                0,
                0,
                0,
                0,
                "yellowWall",
                0,
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                0,
                "yellowWall",
                0,
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "yellowWall",
                0,
                0,
                0,
                0,
                0,
                "yellowWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                "yellowWall",
                0,
                "yellowDoor",
                0,
                "yellowWall",
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                0,
                "fairy",
                0,
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                "yellowWall",
                0,
                "yellowDoor",
                0,
                "yellowWall",
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "yellowWall",
                0,
                0,
                0,
                0,
                0,
                "yellowWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                0,
                "yellowWall",
                0,
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                0,
                "yellowWall",
                0,
                0,
                0,
                0,
                "upFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base3": {
        "id": "base3",
        "name": "地下 B3F",
        "title": "地下  3F",
        "upPos": {
            "x": 1,
            "y": 1
        },
        "downPos": {
            "x": 11,
            "y": 11
        },
        "canFlyTo": true,
        "changeFloor": {
            "1,1": {
                "floorId": "base2",
                "stair": "downFloor"
            },
            "11,11": {
                "floorId": "base4",
                "stair": "upFloor"
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "upFloor",
                "yellowWall",
                "yellowKey",
                "yellowKey",
                "yellowKey",
                "yellowWall",
                "redPotion",
                "redPotion",
                "redPotion",
                0,
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                0,
                0,
                0,
                "yellowWall",
                0,
                0,
                0,
                "yellowWall",
                "redPotion",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "yellowWall",
                0,
                "whiteKing",
                0,
                "whiteKing",
                0,
                "yellowWall",
                "blueGem",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "redPotion",
                "yellowWall",
                0,
                0,
                0,
                "yellowWall",
                "redGem",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                0,
                0,
                "yellowWall",
                "redBat",
                "yellowWall",
                "yellowDoor",
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                0,
                0,
                "zombieKnight",
                "yellowDoor",
                "redPriest",
                "whiteKing",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "redBat",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowDoor",
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "redPotion",
                "yellowWall",
                0,
                0,
                "yellowWall",
                "yellowWall",
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowKey",
                "yellowKey",
                "yellowKey",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "redPriest",
                "yellowWall",
                "yellowWall",
                "blueDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                0,
                0,
                "swordsman",
                0,
                "swordsman",
                0,
                0,
                "redBat",
                "downFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base4": {
        "id": "base4",
        "name": "地下 B4F",
        "title": "地下  4F",
        "upPos": {
            "x": 11,
            "y": 11
        },
        "downPos": {
            "x": 6,
            "y": 1
        },
        "canFlyTo": true,
        "changeFloor": {
            "11,11": {
                "floorId": "base3",
                "stair": "downFloor"
            },
            "3,2": {
                "floorId": "base5",
                "loc": [
                    3,
                    2
                ]
            },
            "6,1": {
                "floorId": "base5",
                "loc": [
                    6,
                    1
                ]
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowDoor",
                0,
                "yellowWall",
                "whiteKing",
                "downFloor",
                "whiteKing",
                "blueDoor",
                "swordsman",
                0,
                "swordsman",
                "blueWall"
            ],
            [
                "blueWall",
                "blueKnight",
                "yellowWall",
                "downFloor",
                "yellowWall",
                0,
                "whiteKing",
                0,
                "yellowWall",
                0,
                "zombieKnight",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteKing",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueGem",
                0,
                0,
                "yellowWall",
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueKnight",
                "yellowWall",
                "redGem",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "blueKnight",
                0,
                0,
                0,
                0,
                0,
                "blueGem",
                "blueGem",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                "swordsman",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "redPotion",
                "yellowKey",
                "yellowKey",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "redPotion",
                "redPotion",
                "yellowDoor",
                "zombieKnight",
                0,
                0,
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                0,
                "yellowWall",
                "redPotion",
                "redPotion",
                "yellowWall",
                0,
                0,
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueKey",
                "swordsman",
                0,
                "swordsman",
                "whiteKing",
                "swordsman",
                0,
                0,
                "yellowDoor",
                0,
                "upFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base5": {
        "id": "base5",
        "name": "地下 B5F",
        "title": "地下  5F",
        "upPos": {
            "x": 6,
            "y": 1
        },
        "downPos": {
            "x": 11,
            "y": 1
        },
        "canFlyTo": true,
        "changeFloor": {
            "3,2": {
                "floorId": "base4",
                "loc": [
                    3,
                    2
                ]
            },
            "6,1": {
                "floorId": "base4",
                "loc": [
                    6,
                    1
                ]
            },
            "11,1": {
                "floorId": "base6",
                "loc": [
                    11,
                    1
                ]
            }
        },
        "events": {
            "8,1": [
                "\t[商人,woman]告诉你吧，\n${flags.臸娥语==1?'玦ぇ谍':'勇者之证'}必须安装至少一个\n增幅器才可发挥功效。"
            ],
            "10,8": [
                {
                    "type": "openShop",
                    "id": "moneyShopB5F",
                    "open": true
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueGem",
                "redGem",
                "yellowWall",
                0,
                "upFloor",
                "yellowWall",
                "woman",
                "yellowWall",
                0,
                "downFloor",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "upFloor",
                "yellowWall",
                0,
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                "yellowWall",
                0,
                0,
                "yellowWall",
                0,
                "zombieKnight",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "zombieKnight",
                "whiteKing",
                "zombieKnight",
                "yellowWall",
                "whiteKing",
                "whiteKing",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                "yellowWall",
                "whiteKing",
                "whiteKing",
                "yellowWall",
                "bluePotion",
                0,
                "blueKnight",
                "swordsman",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                "yellowWall",
                0,
                0,
                "yellowWall",
                0,
                0,
                0,
                "blueKnight",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                "yellowDoor",
                0,
                0,
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "zombieKnight",
                "blueShop-left",
                "blueShop",
                "blueShop-right",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "whiteKing",
                "whiteKing",
                "whiteKing",
                "yellowWall",
                "yellowDoor",
                "yellowDoor",
                "swordsman",
                0,
                0,
                "blueKey",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                "yellowWall",
                "swordsman",
                "yellowWall",
                "zombieKnight",
                0,
                0,
                "yellowKey",
                "blueWall"
            ],
            [
                "blueWall",
                "blueGem",
                "redGem",
                "redPotion",
                "yellowKey",
                "yellowWall",
                "yellowKey",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base6": {
        "id": "base6",
        "name": "地下 B6F",
        "title": "地下  6F",
        "upPos": {
            "x": 11,
            "y": 1
        },
        "downPos": {
            "x": 1,
            "y": 1
        },
        "canFlyTo": true,
        "changeFloor": {
            "11,1": {
                "floorId": "base5",
                "stair": "downFloor"
            },
            "1,1": {
                "floorId": "base7",
                "stair": "upFloor"
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "downFloor",
                "yellowWall",
                "redGem",
                "yellowWall",
                "redPotion",
                "yellowWall",
                "redPotion",
                "yellowWall",
                "yellowKey",
                "yellowWall",
                "upFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "ghostSkeleton",
                "yellowWall",
                0,
                "yellowWall",
                "whiteKing",
                "yellowWall",
                "greenKing",
                "yellowWall",
                "greenKing",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "ghostSkeleton",
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                0,
                0,
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "yellowDoor",
                0,
                0,
                "yellowWall",
                0,
                "yellowWall",
                "yellowDoor",
                "yellowDoor",
                "blueKnight",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "yellowKey",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowKey",
                "yellowWall",
                "blueKnight",
                "yellowWall",
                0,
                "yellowDoor",
                "zombieKnight",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowDoor",
                0,
                "yellowWall",
                "yellowDoor",
                "yellowDoor",
                "yellowDoor",
                "yellowWall",
                0,
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                0,
                "yellowWall",
                "blueGuard",
                "yellowWall",
                "yellowKey",
                "yellowWall",
                0,
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "ghostSkeleton",
                "yellowWall",
                "blueGuard",
                "yellowDoor",
                0,
                "yellowWall",
                "greenKing",
                0,
                0,
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueGem",
                "yellowWall",
                0,
                "yellowWall",
                0,
                "yellowWall",
                "blueKey",
                "yellowWall",
                "blueGuard",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base7": {
        "id": "base7",
        "name": "地下 B7F",
        "title": "地下  7F",
        "upPos": {
            "x": 1,
            "y": 1
        },
        "downPos": {
            "x": 1,
            "y": 4
        },
        "canFlyTo": true,
        "changeFloor": {
            "1,1": {
                "floorId": "base6",
                "stair": "downFloor"
            },
            "1,4": {
                "floorId": "base8",
                "stair": "upFloor"
            }
        },
        "events": {
            "11,9": [
                {
                    "type": "if",
                    "condition": "((status:lv>=20)&&(flag:proof_sage==1))",
                    "true": [
                        "\t[商人,woman]这是贤者之证？！\n这个送给你，\n对你有帮助的！",
                        {
                            "type": "setValue",
                            "name": "flag:proof_sage",
                            "operator": "+=",
                            "value": "1"
                        },
                        {
                            "type": "setValue",
                            "name": "flag:proof_lv",
                            "operator": "+=",
                            "value": "1"
                        },
                        "${flags.臸娥语==1?'彻':'章'}的等级升为${core.getFlag('proof_sage',null)}"
                    ],
                    "false": [
                        "\t[商人,woman]你知道什么是防御临界值吗？\n只要你的防御力比怪物的攻击力高出一定数值，\n他们的攻击就伤不了你。当然，\n这个数值越低越好。"
                    ]
                }
            ],
            "4,8": [
                "\t[老人,man]这是随意门，送给你吧。\n你不但可以用它移除\n某些墙壁，\n还可以移除地上的熔岩！",
                {
                    "type": "setValue",
                    "name": "item:keydoor",
                    "operator": "+=",
                    "value": "10"
                },
                {
                    "type": "hide",
                    "time": 500
                }
            ],
            "3,4": [
                {
                    "type": "openShop",
                    "id": "expShopB7F",
                    "open": true
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "upFloor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueKnight",
                "zombieKnight",
                0,
                0,
                0,
                "yellowDoor",
                0,
                0,
                "greenKing",
                "bluePotion",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "downFloor",
                "pinkShop-left",
                "pinkShop",
                "pinkShop-right",
                "yellowWall",
                0,
                "yellowWall",
                "moneyPocket",
                "whiteKing",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                "blueDoor",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowKey",
                0,
                0,
                "blueGem",
                "yellowWall",
                0,
                "yellowWall",
                0,
                0,
                "ghostSkeleton",
                "brownWizard",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "blueKnight",
                0,
                0,
                0,
                "ghostSkeleton",
                "blueWall"
            ],
            [
                "blueWall",
                "sword3",
                "walldoor3",
                "lavaNet",
                "man",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                0,
                0,
                "yellowWall",
                0,
                "yellowDoor",
                "brownWizard",
                "yellowWall",
                "redPotion",
                "woman",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowKey",
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowKey",
                0,
                "blueDoor",
                "blueGuard",
                "yellowWall",
                0,
                "yellowDoor",
                "greenKing",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base8": {
        "id": "base8",
        "name": "地下 B8F",
        "title": "地下  8F",
        "upPos": {
            "x": 1,
            "y": 4
        },
        "downPos": {
            "x": 7,
            "y": 8
        },
        "canFlyTo": true,
        "changeFloor": {
            "1,4": {
                "floorId": "base7",
                "stair": "downFloor"
            },
            "7,8": {
                "floorId": "base9",
                "stair": "upFloor"
            }
        },
        "events": {
            "11,11": [
                "\t[老人,man]告诉你吧，\n${flags.臸娥语==1?'臦ぇ谍':'霸者之证'}对${flags.臸娥语==1?'臸猭畍':'魔法师'}无效的"
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                0,
                "blueGuard",
                0,
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "whiteKing",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "redPotion",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                "ghostSkeleton",
                "redPotion",
                "yellowWall",
                "bluePotion",
                "yellowWall",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "upFloor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "ghostSkeleton",
                "redPotion",
                "yellowWall",
                "redGem",
                "blueGem",
                "yellowWall",
                "yellowDoor",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "walldoor3",
                "Lvupfly",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "greenKing",
                "brownWizard",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowKey",
                "yellowKey",
                "yellowWall",
                "yellowWall",
                "blueDoor",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                "yellowDoor",
                "whiteKing",
                "greenKing",
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "downFloor",
                "yellowWall",
                "blueGuard",
                "yellowDoor",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueGuard",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "whiteKing",
                0,
                0,
                "blueKnight",
                0,
                0,
                0,
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "whiteKing",
                0,
                0,
                "blueKnight",
                0,
                0,
                0,
                "yellowWall",
                "man",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base9": {
        "id": "base9",
        "name": "地下 B9F",
        "title": "地下  9F",
        "upPos": {
            "x": 7,
            "y": 8
        },
        "downPos": {
            "x": 7,
            "y": 1
        },
        "canFlyTo": true,
        "changeFloor": {
            "7,8": {
                "floorId": "base8",
                "stair": "downFloor"
            },
            "7,1": {
                "floorId": "base10",
                "stair": "upFloor"
            },
            "5,1": null
        },
        "events": {
            "1,1": [
                {
                    "type": "choices",
                    "text": "\t[老人,man]你的面色好像不太好…\n我以前当过医生的，\n要不要替你治疗一下？\n（这里只要有70及以上的金币，就可以解毒！）",
                    "choices": [
                        {
                            "text": "解${flags.臸娥语==1?'瑀':'毒'}（$100 ）",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "flag:poison",
                                    "true": [
                                        {
                                            "type": "if",
                                            "condition": "(status:money>=70)",
                                            "true": [
                                                {
                                                    "type": "setValue",
                                                    "name": "status:money",
                                                    "operator": "-=",
                                                    "value": "100"
                                                },
                                                {
                                                    "type": "function",
                                                    "function": "function(){\ncore.triggerDebuff('remove', 'poison')\n}"
                                                },
                                                {
                                                    "type": "playSound",
                                                    "name": "商店"
                                                },
                                                {
                                                    "type": "tip",
                                                    "text": "${flags.臸娥语==1?'い瑀':'中毒'}状态已解除"
                                                }
                                            ],
                                            "false": [
                                                {
                                                    "type": "playSound",
                                                    "name": "操作失败"
                                                }
                                            ]
                                        }
                                    ],
                                    "false": [
                                        {
                                            "type": "playSound",
                                            "name": "操作失败"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "离开",
                            "action": [
                                {
                                    "type": "playSound",
                                    "name": "取消"
                                },
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                }
            ],
            "5,1": [
                {
                    "type": "if",
                    "condition": "core.terrainExists(5,1 ,'flower')",
                    "true": [
                        {
                            "type": "changeFloor",
                            "floorId": "MOTA6",
                            "loc": [
                                6,
                                11
                            ],
                            "time": 500
                        }
                    ],
                    "false": []
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "man",
                0,
                "walldoor3",
                "redGem",
                "walldoor3",
                "yellowWall",
                "downFloor",
                "walldoor3",
                0,
                "yellowWall",
                "blueGem",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowKing",
                "yellowWall",
                "walldoor3",
                "yellowWall",
                "blueGem",
                "blueWall"
            ],
            [
                "blueWall",
                "ghostSkeleton",
                0,
                "blueDoor",
                0,
                0,
                "yellowWall",
                0,
                "yellowDoor",
                "blueGuard",
                "blueDoor",
                "soldier",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowKey",
                "blueGuard",
                "yellowWall",
                0,
                0,
                "yellowDoor",
                "brownWizard",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                "yellowWall",
                "redKey",
                "blueWall"
            ],
            [
                "blueWall",
                "redPotion",
                "blueKnight",
                "blueKnight",
                0,
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                0,
                "yellowDoor",
                "blueDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "ghostSkeleton",
                0,
                0,
                "brownWizard",
                0,
                "upFloor",
                0,
                0,
                "ghostSkeleton",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                0,
                0,
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "greenKing",
                0,
                0,
                0,
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "ghostSkeleton",
                "redPotion",
                "blueWall"
            ],
            [
                "blueWall",
                "redPotion",
                "yellowWall",
                "yellowWall",
                0,
                "greenKing",
                "yellowDoor",
                "brownWizard",
                "yellowDoor",
                "ghostSkeleton",
                "redPotion",
                "yellowKey",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base10": {
        "id": "base10",
        "name": "地下 B10F",
        "title": "地下  10F",
        "upPos": {
            "x": 7,
            "y": 1
        },
        "downPos": {
            "x": 5,
            "y": 1
        },
        "canFlyTo": true,
        "changeFloor": {
            "7,1": {
                "floorId": "base9",
                "stair": "downFloor"
            },
            "5,1": {
                "floorId": "base11",
                "stair": "upFloor"
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueKnight",
                "lavaNet",
                "blueKnight",
                "blueKnight",
                "downFloor",
                "yellowWall",
                "upFloor",
                0,
                0,
                "greenKing",
                "greenKing",
                "blueWall"
            ],
            [
                "blueWall",
                "lavaNet",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "blueKey",
                "redKey",
                "yellowWall",
                "knife",
                "yellowWall",
                "redPotion",
                "redPotion",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "yellowKey",
                "yellowKey",
                "yellowWall",
                "redDoor",
                "yellowWall",
                "redPotion",
                "redPotion",
                "yellowWall",
                "brownWizard",
                "blueWall"
            ],
            [
                "blueWall",
                "blueGuard",
                "yellowWall",
                0,
                "soldier",
                "blueDoor",
                "yellowKing",
                "blueDoor",
                "soldier",
                0,
                "yellowWall",
                "lavaNet",
                "blueWall"
            ],
            [
                "blueWall",
                "blueGuard",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "redGem",
                "yellowWall",
                0,
                0,
                0,
                "yellowWall",
                "blueGem",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "redGem",
                "yellowWall",
                0,
                0,
                0,
                "yellowWall",
                "blueGem",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "redGem",
                "yellowWall",
                0,
                "magicDragon",
                0,
                "yellowWall",
                "blueGem",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "lavaNet",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "redDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "ghostSkeleton",
                "ghostSkeleton",
                0,
                0,
                "greenKing",
                0,
                0,
                0,
                0,
                "lavaNet",
                "ghostSkeleton",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base11": {
        "id": "base11",
        "name": "地下 B11F",
        "title": "地下  11F",
        "upPos": {
            "x": 5,
            "y": 1
        },
        "downPos": {
            "x": 7,
            "y": 11
        },
        "canFlyTo": true,
        "changeFloor": {
            "5,1": {
                "floorId": "base10",
                "stair": "downFloor"
            },
            "5,11": {
                "floorId": "base12",
                "loc": [
                    5,
                    11
                ]
            },
            "7,11": {
                "floorId": "base12",
                "loc": [
                    7,
                    11
                ]
            }
        },
        "events": {
            "1,4": [
                "\t[商人,women]你发现与一些防御力超高的\n怪物战斗时，完全伤不了它吗？\n这与攻击临界值有关",
                "\t[商人,women]当它们的防御力比你的\n攻击力高，并且高于这个数值时\n你就伤不了它，请留意"
            ],
            "4,1": [
                "\t[老人,man]每一个章只能安装一个适合\n的增幅器，而它们均各自拥有\n一种潜在能力\n要使出来就要看你够不够运了\n（此处信息并不正确，每个章可以安装两个而不是一个增幅器）"
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowKey",
                "yellowKey",
                "yellowWall",
                "man",
                "upFloor",
                "yellowWall",
                "yellowWall",
                "redGem",
                "redGem",
                "blueGem",
                "blueGem",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowKey",
                "yellowKey",
                "yellowWall",
                0,
                0,
                "blueKnight",
                "yellowWall",
                "redPotion",
                "redPotion",
                "redPotion",
                "blueKey",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "redWizard",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueKnight",
                "yellowWall",
                "weakWine",
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "woman",
                0,
                "redWizard",
                "poisonWine",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "specialDoor",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "blueDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                0,
                "yellowKing",
                0,
                "yellowKing",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "greenKing",
                0,
                "blueGuard",
                0,
                "blueGuard",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "greenKing",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "greenKing",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "greenKing",
                "yellowWall",
                "yellowKey",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowKey",
                "yellowWall",
                "yellowDoor",
                "yellowDoor",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "yellowWall",
                0,
                "soldier",
                "ghostSkeleton",
                "soldier",
                0,
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "blueDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "greenKing",
                "blueWall"
            ],
            [
                "blueWall",
                "brownWizard",
                0,
                "brownWizard",
                0,
                "downFloor",
                "yellowWall",
                "downFloor",
                0,
                "brownWizard",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base12": {
        "id": "base12",
        "name": "地下 B12F",
        "title": "地下  12F",
        "upPos": {
            "x": 7,
            "y": 11
        },
        "downPos": {
            "x": 11,
            "y": 1
        },
        "canFlyTo": true,
        "changeFloor": {
            "5,11": {
                "floorId": "base11",
                "loc": [
                    5,
                    11
                ]
            },
            "7,11": {
                "floorId": "base11",
                "loc": [
                    7,
                    11
                ]
            },
            "1,11": {
                "floorId": "base13",
                "loc": [
                    1,
                    11
                ]
            },
            "11,1": {
                "floorId": "base13",
                "loc": [
                    11,
                    1
                ]
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "brownWizard",
                "redKey",
                "yellowWall",
                "blueGem",
                "walldoor3",
                "walldoor3",
                "redGem",
                "moneyPocket",
                "blueGem",
                "yellowWall",
                "downFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                "walldoor3",
                "yellowWall",
                "yellowWall",
                0,
                0,
                0,
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                "greenKing",
                "redPotion",
                "yellowWall",
                "yellowWall",
                "specialDoor",
                "yellowWall",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "redWizard",
                0,
                "redWizard",
                "yellowWall",
                "brownWizard",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                "yellowKing",
                "yellowKey",
                "yellowWall",
                0,
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "blueDoor",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "greenKing",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "greenKing",
                "yellowWall",
                "greenKing",
                "yellowWall",
                "yellowWall",
                "redPotion",
                "yellowKey",
                "yellowWall",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                "soldier",
                "ghostSkeleton",
                "yellowDoor",
                "yellowDoor",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueGuard",
                0,
                "blueGuard",
                "redPotion",
                "yellowWall",
                "redPotion",
                "yellowKey",
                "yellowWall",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "ghostSkeleton",
                "blueWall"
            ],
            [
                "blueWall",
                "downFloor",
                0,
                "brownWizard",
                0,
                "upFloor",
                "yellowWall",
                "upFloor",
                0,
                0,
                "ghostSkeleton",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base13": {
        "id": "base13",
        "name": "地下 B13F",
        "title": "地下  13F",
        "upPos": {
            "x": 11,
            "y": 1
        },
        "downPos": {
            "x": 11,
            "y": 11
        },
        "canFlyTo": true,
        "changeFloor": {
            "1,11": {
                "floorId": "base12",
                "loc": [
                    1,
                    11
                ]
            },
            "11,1": {
                "floorId": "base12",
                "loc": [
                    11,
                    1
                ]
            },
            "11,11": {
                "floorId": "base14",
                "loc": [
                    11,
                    11
                ]
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "cross",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "yellowWall",
                "upFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "lavaNet",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "lavaNet",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "ghostSkeleton",
                "blueWall"
            ],
            [
                "blueWall",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "yellowWall",
                "Lvupfly",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "lavaNet",
                "yellowWall",
                "yellowKey",
                "blueWall"
            ],
            [
                "blueWall",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "yellowWall",
                "yellowKey",
                "blueWall"
            ],
            [
                "blueWall",
                "lavaNet",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "redPotion",
                "blueWall"
            ],
            [
                "blueWall",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "yellowWall",
                "brownWizard",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "lavaNet",
                "yellowWall",
                "yellowKing",
                "blueWall"
            ],
            [
                "blueWall",
                "upFloor",
                0,
                "redWizard",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "yellowWall",
                "downFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base14": {
        "id": "base14",
        "name": "地下 B14F",
        "title": "地下  14F",
        "upPos": {
            "x": 11,
            "y": 11
        },
        "downPos": {
            "x": 9,
            "y": 11
        },
        "canFlyTo": true,
        "changeFloor": {
            "11,11": {
                "floorId": "base13",
                "stair": "downFloor"
            },
            "9,11": {
                "floorId": "base15",
                "stair": "upFloor"
            }
        },
        "events": {
            "7,11": [
                {
                    "type": "openShop",
                    "id": "doorShop",
                    "open": true
                }
            ],
            "3,11": [
                {
                    "type": "if",
                    "condition": "((flag:proof_brave==2 )&&( status:lv>=35))",
                    "true": [
                        "\t[商人,woman]又是挑战者吗？\n我送这个给你\n不过当你救出了公主\n巨额重酬我要七成！",
                        {
                            "type": "setValue",
                            "name": "flag:proof_brave",
                            "operator": "+=",
                            "value": "1"
                        },
                        {
                            "type": "setValue",
                            "name": "flag:proof_lv",
                            "operator": "+=",
                            "value": "1"
                        },
                        "${flags.臸娥语==1?'彻':'章'}的等级升为${core.getFlag('proof_brave',null)}"
                    ],
                    "false": [
                        {
                            "type": "if",
                            "condition": "item:knife",
                            "true": [
                                "\t[商人,woman]啊啊，是神剑之证！\n只要你在怪物前使用，\n那么它就会变成最弱的\n绿色史莱姆，但次数有限，\n考虑清楚才用啊！"
                            ],
                            "false": [
                                "\t[商人,woman]你见过那条${flags.臸娥语==1?'エ纒':'巨龙'}了吧？\n打败它后可以拿到神剑之证，\n非常有用！拿到后来找我，\n我教你如何使用！"
                            ]
                        }
                    ]
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "poisonWine",
                0,
                "yellowWall",
                "blueGem",
                "walldoor3",
                0,
                "weakWine",
                "yellowWall",
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "redWizard",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "redWizard",
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "steelDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "steelDoor",
                "yellowWall",
                "yellowWall",
                "brownWizard",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "soldier",
                0,
                0,
                0,
                "soldier",
                0,
                0,
                0,
                "yellowWall",
                "brownWizard",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "brownWizard",
                "blueWall"
            ],
            [
                "blueWall",
                "bluePotion",
                0,
                "redPotion",
                "yellowWall",
                "blueKey",
                0,
                "yellowKey",
                "yellowWall",
                "redWizard",
                "yellowWall",
                "brownWizard",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "brownWizard",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "redGuard",
                0,
                0,
                0,
                "yellowKing",
                0,
                0,
                "brownWizard",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "redDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "redDoor",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "greenGem",
                0,
                0,
                "yellowWall",
                0,
                "yellowKing",
                0,
                "yellowWall",
                "redWizard",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueGem",
                0,
                "woman",
                "yellowWall",
                "redGem",
                0,
                "man",
                "yellowWall",
                "downFloor",
                "yellowWall",
                "upFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base15": {
        "id": "base15",
        "name": "地下 B15F",
        "title": "地下  15F",
        "upPos": {
            "x": 9,
            "y": 11
        },
        "downPos": {
            "x": 3,
            "y": 11
        },
        "canFlyTo": true,
        "changeFloor": {
            "9,11": {
                "floorId": "base14",
                "stair": "downFloor"
            },
            "3,11": {
                "floorId": "base16",
                "loc": [
                    3,
                    11
                ]
            },
            "1,5": {
                "floorId": "base16",
                "loc": [
                    1,
                    5
                ]
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "redKnight",
                "redKnight",
                "redKnight",
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "redGuard",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "shoes",
                "yellowWall",
                "redPotion",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowKey",
                "yellowWall",
                "shield4",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "redDoor",
                "yellowWall",
                "redPotion",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowKey",
                "yellowWall",
                "redDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "downFloor",
                "yellowWall",
                "redDoor",
                "redDoor",
                "redPotion",
                "blueDoor",
                "redGuard",
                "blueDoor",
                "yellowKey",
                "redDoor",
                "redDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "soldier",
                "soldier",
                "soldier",
                0,
                0,
                "lavaNet",
                0,
                0,
                0,
                "yellowKey",
                "blueWall"
            ],
            [
                "blueWall",
                "lavaNet",
                "yellowWall",
                0,
                "yellowWall",
                "yellowKing",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "redWizard",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "lavaNet",
                "yellowWall",
                0,
                "yellowWall",
                "lavaNet",
                "yellowWall",
                0,
                0,
                "redWizard",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowKing",
                "yellowWall",
                0,
                "yellowWall",
                "yellowKing",
                "yellowWall",
                "brownWizard",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "brownWizard",
                "blueWall"
            ],
            [
                "blueWall",
                "blueGem",
                "yellowWall",
                "downFloor",
                "yellowWall",
                "redGem",
                "yellowWall",
                0,
                0,
                "upFloor",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base16": {
        "id": "base16",
        "name": "地下 B16F",
        "title": "地下  16F",
        "upPos": {
            "x": 3,
            "y": 11
        },
        "downPos": {
            "x": 9,
            "y": 11
        },
        "canFlyTo": true,
        "changeFloor": {
            "3,11": {
                "floorId": "base15",
                "loc": [
                    3,
                    11
                ]
            },
            "1,5": {
                "floorId": "base15",
                "loc": [
                    1,
                    5
                ]
            },
            "9,11": {
                "floorId": "base17",
                "loc": [
                    9,
                    11
                ]
            },
            "11,5": {
                "floorId": "base17",
                "loc": [
                    11,
                    5
                ]
            }
        },
        "events": {
            "1,7": [
                {
                    "type": "choices",
                    "text": "\t[商人,woman]$700!!\n${flags.臸娥语==1?'臸猭臔才':'魔法护符'}只售700!!",
                    "choices": [
                        {
                            "text": "买！",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "(status:money>=700)",
                                    "true": [
                                        {
                                            "type": "playSound",
                                            "name": "商店"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "status:money",
                                            "operator": "-=",
                                            "value": "700"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "item:magic_amulet",
                                            "operator": "+=",
                                            "value": "1"
                                        },
                                        {
                                            "type": "hide",
                                            "remove": true
                                        }
                                    ],
                                    "false": [
                                        {
                                            "type": "playSound",
                                            "name": "操作失败"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "不买",
                            "action": [
                                {
                                    "type": "playSound",
                                    "name": "取消"
                                },
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "moneyPocket",
                "redGuard",
                "redGuard",
                0,
                0,
                0,
                0,
                0,
                "redWizard",
                "redWizard",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "redGuard",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "lavaNet",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "lavaNet",
                "blueWall"
            ],
            [
                "blueWall",
                "redGuard",
                "yellowWall",
                "yellowKey",
                "blueKey",
                "yellowKey",
                "yellowWall",
                0,
                "yellowWall",
                "redGem",
                "yellowWall",
                "redWizard",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "whiteGhost",
                "whiteGhost",
                "whiteGhost",
                "yellowWall",
                "redKnight",
                "yellowWall",
                "blueGem",
                "yellowWall",
                "redWizard",
                "blueWall"
            ],
            [
                "blueWall",
                "upFloor",
                "yellowWall",
                "lavaNet",
                0,
                "lavaNet",
                "yellowDoor",
                "redKnight",
                "yellowDoor",
                "blueKey",
                "yellowWall",
                "downFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "woman",
                "redWizard",
                "lavaNet",
                0,
                0,
                "blueGem",
                "redGem",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "walldoor3",
                "yellowWall",
                "brownWizard",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "lavaNet",
                "yellowWall",
                "redGuard",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "brownWizard",
                0,
                "lavaNet",
                "yellowWall",
                "redKnight",
                "yellowWall",
                0,
                "yellowWall",
                "redGuard",
                "blueWall"
            ],
            [
                "blueWall",
                "brownWizard",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "redWizard",
                "yellowWall",
                "redGuard",
                "yellowWall",
                0,
                "yellowWall",
                "lavaNet",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "upFloor",
                0,
                0,
                "yellowWall",
                "redPotion",
                "yellowWall",
                "downFloor",
                "yellowWall",
                "bluePotion",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base17": {
        "id": "base17",
        "name": "地下 B17F",
        "title": "地下  17F",
        "upPos": {
            "x": 9,
            "y": 11
        },
        "downPos": {
            "x": 6,
            "y": 9
        },
        "canFlyTo": true,
        "changeFloor": {
            "9,11": {
                "floorId": "base16",
                "loc": [
                    9,
                    11
                ]
            },
            "11,5": {
                "floorId": "base16",
                "loc": [
                    11,
                    5
                ]
            },
            "6,9": {
                "floorId": "base18",
                "loc": [
                    6,
                    9
                ]
            },
            "11,11": null
        },
        "events": {
            "6,4": [
                "\t[老人,man]你的回避力会直接影响到\n贤者之证发挥功效的机会。"
            ],
            "11,11": [
                {
                    "type": "if",
                    "condition": "core.terrainExists(11,11,'flower')",
                    "true": [
                        {
                            "type": "changeFloor",
                            "floorId": "MOTA7",
                            "loc": [
                                6,
                                11
                            ],
                            "time": 500
                        }
                    ]
                }
            ],
            "1,11": [
                "\t[商人,woman]我听说10F有一条秘密通道，\n但不太肯定，\n因为那里有很多怪物。\n你试着去问我哥哥，他在B18F。",
                {
                    "type": "setValue",
                    "name": "flag:npcb17times",
                    "operator": "+=",
                    "value": "1"
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "steelRock",
                0,
                "redKnight",
                0,
                "lavaNet",
                "blueGem",
                "redKnight",
                "blueGem",
                "redKnight",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "lavaNet",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "steelRock",
                "lavaNet",
                "redPotion",
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "redPotion",
                "lavaNet",
                "blueWall"
            ],
            [
                "blueWall",
                "redKnight",
                "yellowDoor",
                0,
                "yellowWall",
                "redPotion",
                "man",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "redPotion",
                "whiteGhost",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "upFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowKey",
                "bluePotion",
                0,
                "whiteGhost",
                0,
                0,
                "moneyPocket",
                "redKnight",
                "lavaNet",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowDoor",
                "yellowWall",
                "lavaNet",
                "yellowWall",
                "yellowWall",
                "blueDoor",
                "yellowWall",
                "yellowWall",
                0,
                "blueDoor",
                "redWizard",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowDoor",
                "yellowWall",
                "yellowKey",
                "yellowWall",
                "yellowKey",
                "redKey",
                "yellowKey",
                "yellowWall",
                "brownWizard",
                "yellowWall",
                "redGem",
                "blueWall"
            ],
            [
                "blueWall",
                "redGuard",
                "yellowWall",
                "yellowKey",
                "yellowWall",
                "redPotion",
                "downFloor",
                "redPotion",
                "yellowWall",
                0,
                "yellowWall",
                "walldoor3",
                "blueWall"
            ],
            [
                "blueWall",
                "redGuard",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "walldoor3",
                "blueWall"
            ],
            [
                "blueWall",
                "woman",
                "yellowWall",
                0,
                "lavaNet",
                "redKnight",
                "redKnight",
                0,
                0,
                "upFloor",
                "yellowWall",
                "sword4",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base18": {
        "id": "base18",
        "name": "地下 B18F",
        "title": "地下  18F",
        "upPos": {
            "x": 6,
            "y": 9
        },
        "downPos": {
            "x": 11,
            "y": 9
        },
        "canFlyTo": true,
        "changeFloor": {
            "6,9": {
                "floorId": "base17",
                "stair": "downFloor"
            },
            "1,9": {
                "floorId": "base19",
                "loc": [
                    1,
                    9
                ]
            },
            "1,3": {
                "floorId": "base19",
                "loc": [
                    1,
                    3
                ]
            },
            "11,3": {
                "floorId": "base19",
                "loc": [
                    11,
                    3
                ]
            },
            "11,9": {
                "floorId": "base19",
                "loc": [
                    11,
                    9
                ]
            },
            "5,3": null,
            "7,3": null
        },
        "events": {
            "6,2": {
                "trigger": "action",
                "enable": true,
                "noPass": null,
                "displayDamage": true,
                "opacity": 1,
                "filter": {
                    "blur": 0,
                    "hue": 0,
                    "grayscale": 0,
                    "invert": false,
                    "shadow": 0
                },
                "data": [
                    {
                        "type": "if",
                        "condition": "(flag:doorB18==4)",
                        "true": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    2
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "playSound",
                                "name": "操作失败"
                            },
                            {
                                "type": "tip",
                                "text": "请先击败位于本层四个角落的怪物"
                            }
                        ]
                    }
                ]
            },
            "4,8": [
                {
                    "type": "if",
                    "condition": "(flag:npcb17times>0)",
                    "true": [
                        "\t[商人,woman]啊，说到秘密通道，\n我记得10F是有的，\n不过要有足够的随意门！",
                        {
                            "type": "setValue",
                            "name": "flag:10f隐藏",
                            "value": "true"
                        }
                    ],
                    "false": [
                        "\t[商人,woman]你也看到吧？这里到处都是\n神的尸体...\n若果你实力不够的话...\n还是建议你好好探索一下..."
                    ]
                }
            ],
            "5,4": [
                "\t[老人,man]那些剑王的攻击很快，\n一回合可以作多次攻击，\n如果你有霸者之证\n对付他们会比较容易"
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "redSwordsman",
                "steelDoor",
                "whiteGhost",
                0,
                "yellowWall",
                "superPotion",
                "yellowWall",
                0,
                "whiteGhost",
                "steelDoor",
                "redSwordsman",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "pinkShop-left",
                0,
                "yellowWall",
                "specialDoor",
                "yellowWall",
                0,
                "lavaNet",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "downFloor",
                0,
                0,
                "lavaNet",
                "redKnight",
                "silverSlime",
                "redKnight",
                "blueShop-left",
                0,
                "blueShop-right",
                "downFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "redWizard",
                0,
                0,
                "pinkShop-left",
                "man",
                "pinkShop-right",
                "lavaNet",
                0,
                0,
                0,
                "redWizard",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "pinkShop-left",
                0,
                "pinkShop-right",
                "yellowKey",
                0,
                "blueKey",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "steelRock",
                0,
                0,
                0,
                "redGuard",
                "blueShop-left",
                0,
                "blueShop-right",
                "steelRock",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueShop-left",
                0,
                "blueShop-right",
                "blueKey",
                0,
                "yellowKey",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "redWizard",
                0,
                "pinkShop-left",
                "woman",
                "pinkShop-right",
                0,
                0,
                "pinkShop-left",
                0,
                "pinkShop-right",
                "redWizard",
                "blueWall"
            ],
            [
                "blueWall",
                "downFloor",
                0,
                0,
                0,
                0,
                "upFloor",
                0,
                "lavaNet",
                0,
                0,
                "downFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "lavaNet",
                0,
                0,
                0,
                "blueShop-left",
                0,
                "blueShop-right",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "redSwordsman",
                "steelDoor",
                "redKnight",
                0,
                0,
                0,
                0,
                "lavaNet",
                "redKnight",
                "steelDoor",
                "redSwordsman",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base19": {
        "id": "base19",
        "name": "地下 B19F",
        "title": "地下  19F",
        "upPos": {
            "x": 11,
            "y": 9
        },
        "downPos": {
            "x": 8,
            "y": 1
        },
        "canFlyTo": true,
        "changeFloor": {
            "1,3": {
                "floorId": "base18",
                "loc": [
                    1,
                    3
                ]
            },
            "1,9": {
                "floorId": "base18",
                "loc": [
                    1,
                    9
                ]
            },
            "11,9": {
                "floorId": "base18",
                "loc": [
                    11,
                    9
                ]
            },
            "11,3": {
                "floorId": "base18",
                "loc": [
                    11,
                    3
                ]
            },
            "8,1": {
                "floorId": "base20",
                "stair": "upFloor"
            }
        },
        "events": {
            "8,11": [
                "\t[老人,man]这一层往后开始会陆续出现\n一些懂得状态攻击的怪物。\n骷髅骨会使你衰弱，\n蝙蝠和丧尸会使你中毒"
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "lavaNet",
                "yellowKey",
                "redKey",
                "yellowWall",
                0,
                "redPotion",
                "yellowWall",
                "downFloor",
                "yellowWall",
                "lavaNet",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "redSwordsman",
                "lavaNet",
                "yellowKey",
                "yellowWall",
                "lavaNet",
                0,
                "yellowWall",
                "whiteGhost",
                "yellowWall",
                "lavaNet",
                "redGuard",
                "blueWall"
            ],
            [
                "blueWall",
                "upFloor",
                "whiteGhost",
                0,
                "yellowWall",
                0,
                0,
                "yellowWall",
                "whiteGhost",
                "yellowWall",
                "blueKey",
                "upFloor",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "lavaNet",
                "redSwordsman",
                "yellowWall",
                "redWizard",
                "lavaNet",
                0,
                "redWizard",
                "yellowWall",
                "bluePotion",
                "redGuard",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "whiteGhost",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "redPotion",
                0,
                "lavaNet",
                0,
                "redWizard",
                0,
                "whiteGhost",
                "yellowWall",
                "yellowWall",
                "redPotion",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "whiteGhost",
                "lavaNet",
                "lavaNet",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "lavaNet",
                0,
                "whiteGhost",
                "redSwordsman",
                "moneyPocket",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "upFloor",
                0,
                0,
                "whiteGhost",
                "yellowWall",
                "yellowWall",
                "redKnight",
                "redKnight",
                "lavaNet",
                0,
                "upFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "blueGem",
                0,
                "lavaNet",
                "yellowWall",
                "redGem",
                "yellowWall",
                "redKnight",
                "yellowWall",
                "yellowWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "redGem",
                "yellowWall",
                "walldoor3",
                "walldoor3",
                "blueGem",
                "yellowWall",
                0,
                "man",
                "yellowWall",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base20": {
        "id": "base20",
        "name": "地下 B20F",
        "title": "地下  20F",
        "upPos": {
            "x": 8,
            "y": 1
        },
        "downPos": {
            "x": 4,
            "y": 11
        },
        "canFlyTo": true,
        "changeFloor": {
            "8,1": {
                "floorId": "base19",
                "stair": "downFloor"
            },
            "4,11": {
                "floorId": "base21",
                "stair": "upFloor"
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueGem",
                "walldoor3",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "upFloor",
                "yellowWall",
                "yellowWall",
                "blueGem",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "redGem",
                "yellowWall",
                "redKnight",
                "yellowWall",
                0,
                "redKnight",
                "whiteGhost",
                "redKnight",
                0,
                "walldoor3",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "steelRock",
                "blueDoor",
                "whiteGhost",
                "yellowWall",
                0,
                "whiteGhost",
                "redKnight",
                "whiteGhost",
                0,
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "blueGem",
                "yellowWall",
                "redKnight",
                "yellowWall",
                0,
                0,
                0,
                0,
                0,
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowKey",
                "yellowKey",
                "whiteGhost",
                "redKnight",
                0,
                0,
                0,
                "redKnight",
                "whiteGhost",
                "yellowKey",
                "yellowKey",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "redKey",
                "poisonSkeleton",
                "steelRock",
                "poisonSkeleton",
                "redKey",
                "yellowWall",
                "redSwordsman",
                "yellowWall",
                "bluePotion",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "redKey",
                "poisonSkeleton",
                "steelRock",
                "poisonSkeleton",
                "redKey",
                "yellowWall",
                "poisonBat",
                "blueDoor",
                "greenKey",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                "walldoor3",
                "redKey",
                "poisonSkeleton",
                "steelRock",
                "poisonSkeleton",
                "redKey",
                "yellowWall",
                "redSwordsman",
                "yellowWall",
                "bluePotion",
                "walldoor3",
                "blueWall"
            ],
            [
                "blueWall",
                "redGem",
                "yellowWall",
                "yellowWall",
                "downFloor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "blueGem",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base21": {
        "id": "base21",
        "name": "地下 B21F",
        "title": "地下  21F",
        "upPos": {
            "x": 4,
            "y": 11
        },
        "downPos": {
            "x": 6,
            "y": 7
        },
        "canFlyTo": true,
        "changeFloor": {
            "4,11": {
                "floorId": "base20",
                "stair": "downFloor"
            },
            "6,7": {
                "floorId": "base22",
                "stair": "upFloor"
            }
        },
        "events": {
            "6,5": [
                "\t[老人,man]你的${flags.臸娥语==1?'':'盾'}越强\n${flags.臸娥语==1?'ň縨羬':'防御临界'}值就越低\n当你的${flags.臸娥语==1?'糃':'剑'}越强\n${flags.臸娥语==1?'ю阑羬':'攻击临界'}值就会越高"
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                0,
                0,
                0,
                0,
                0,
                0,
                "whiteGhost",
                "redSwordsman",
                "whiteGhost",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "poisonBat",
                0,
                "yellowWall",
                "whiteGhost",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "poisonZombie",
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowKey",
                "yellowKey",
                "whiteGhost",
                "redSwordsman",
                "whiteGhost",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "poisonBat",
                0,
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "man",
                0,
                0,
                "blueGem",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "poisonBat",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "whiteGhost",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "walldoor3",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "downFloor",
                "moneyPocket",
                "yellowDoor",
                "yellowDoor",
                "yellowDoor",
                "steelRock",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "walldoor3",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                "poisonBat",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "whiteGhost",
                "blueWall"
            ],
            [
                "blueWall",
                "walldoor3",
                "walldoor3",
                "yellowWall",
                "yellowDoor",
                "yellowWall",
                0,
                0,
                0,
                "redGem",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "darkKnight",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "bluePotion",
                "redGem",
                "yellowWall",
                "upFloor",
                "yellowWall",
                "yellowKey",
                "yellowKey",
                "redSwordsman",
                "poisonZombie",
                "redSwordsman",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base22": {
        "id": "base22",
        "name": "地下 B22F",
        "title": "地下  22F",
        "upPos": {
            "x": 6,
            "y": 7
        },
        "downPos": {
            "x": 11,
            "y": 11
        },
        "canFlyTo": true,
        "changeFloor": {
            "6,7": {
                "floorId": "base21",
                "stair": "downFloor"
            },
            "11,11": {
                "floorId": "base23",
                "stair": "upFloor"
            }
        },
        "events": {
            "9,3": [
                "\t[老人,man]这一层的四道逻辑门必须要用\n宝石锄头凿开。"
            ],
            "11,1": [
                {
                    "type": "if",
                    "condition": "( 'flower'==core.getBlockId(11,1))",
                    "true": [
                        {
                            "type": "changeFloor",
                            "floorId": "MOTA9",
                            "loc": [
                                6,
                                11
                            ],
                            "time": 500
                        }
                    ]
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "redKey",
                "yellowWall",
                "redGem",
                "poisonBat",
                "redSwordsman",
                0,
                "poisonSkeleton",
                "poisonBat",
                "blueGem",
                "yellowWall",
                "greenDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "steelRock",
                "yellowWall",
                "yellowWall",
                "redSwordsman",
                "yellowWall",
                0,
                "yellowWall",
                "poisonSkeleton",
                "yellowWall",
                "yellowWall",
                "greenDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "blueGem",
                "yellowWall",
                0,
                0,
                "yellowWall",
                0,
                0,
                0,
                "man",
                "yellowWall",
                "greenDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "greenDoor",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "poisonSkeleton",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "silverSlime",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "poisonZombie",
                "yellowWall",
                "poisonZombie",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "poisonSkeleton",
                0,
                0,
                0,
                "upFloor",
                0,
                0,
                0,
                "steelRock",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "redGem",
                "yellowWall",
                "redPotion",
                "poisonZombie",
                0,
                0,
                0,
                "poisonSkeleton",
                "blueKey",
                "yellowWall",
                "steelRock",
                "blueWall"
            ],
            [
                "blueWall",
                "darkKnight",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                0,
                "yellowWall",
                "poisonBat",
                "yellowWall",
                "yellowWall",
                "blueGem",
                "blueWall"
            ],
            [
                "blueWall",
                "redGem",
                "yellowWall",
                "redPotion",
                "poisonZombie",
                0,
                0,
                0,
                "poisonSkeleton",
                "yellowKey",
                "yellowWall",
                "downFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base23": {
        "id": "base23",
        "name": "地下 B23F",
        "title": "地下  23F",
        "upPos": {
            "x": 11,
            "y": 11
        },
        "downPos": {
            "x": 1,
            "y": 1
        },
        "canFlyTo": true,
        "changeFloor": {
            "11,11": {
                "floorId": "base22",
                "stair": "downFloor"
            },
            "1,1": {
                "floorId": "base24",
                "stair": "upFloor"
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "downFloor",
                0,
                0,
                "yellowDoor",
                0,
                "poisonZombie",
                0,
                "poisonZombie",
                0,
                "poisonSkeleton",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "darkKnight",
                "yellowWall",
                0,
                "yellowWall",
                "darkKnight",
                "yellowWall",
                "darkKnight",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "greenGem",
                "yellowWall",
                0,
                "walldoor3",
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "greenKey",
                "yellowWall",
                0,
                "yellowWall",
                0,
                "walldoor3",
                0,
                "walldoor3",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "blueDoor",
                "yellowWall",
                0,
                "yellowWall",
                "darkKnight",
                "yellowWall",
                "darkKnight",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "redSwordsman",
                0,
                0,
                "poisonSkeleton",
                0,
                "poisonBat",
                0,
                "poisonBat",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "steelRock",
                "steelRock",
                "steelRock",
                "yellowKey",
                "blueKey",
                "redKey",
                "steelRock",
                "steelRock",
                "steelRock",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "redSwordsman",
                "redSwordsman",
                "redPotion",
                "redPotion",
                "redPotion",
                "redSwordsman",
                "redSwordsman",
                0,
                "upFloor",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base24": {
        "id": "base24",
        "name": "地下 B24F",
        "title": "地下  24F",
        "upPos": {
            "x": 1,
            "y": 1
        },
        "downPos": {
            "x": 6,
            "y": 1
        },
        "canFlyTo": true,
        "changeFloor": {
            "1,1": {
                "floorId": "base23",
                "stair": "downFloor"
            },
            "6,1": {
                "floorId": "base25",
                "loc": [
                    6,
                    1
                ]
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "upFloor",
                "yellowWall",
                "lava",
                "lava",
                "yellowWall",
                "downFloor",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "lavaNet",
                "blueWall"
            ],
            [
                "blueWall",
                "steelDoor",
                "yellowWall",
                "lava",
                "lava",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "lavaNet",
                "blueWall"
            ],
            [
                "blueWall",
                "steelRock",
                "yellowWall",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "yellowWall",
                "lavaNet",
                "blueWall"
            ],
            [
                "blueWall",
                "steelRock",
                "yellowWall",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "yellowWall",
                "lavaNet",
                "blueWall"
            ],
            [
                "blueWall",
                "steelRock",
                "yellowWall",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lavaNet",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "darkKnight",
                "poisonZombie",
                "poisonZombie",
                "poisonSkeleton",
                "poisonSkeleton",
                "poisonBat",
                "poisonBat",
                "steelDoor",
                "redKing",
                "Lvupfly",
                "blueWall"
            ],
            [
                "blueWall",
                "steelRock",
                "yellowWall",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "steelRock",
                "yellowWall",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "silverSlime",
                "yellowWall",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "steelDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "lava",
                "lava",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "N354",
                "walldoor3",
                "walldoor3",
                "walldoor3",
                "walldoor3",
                "Lvupfly",
                "yellowWall",
                "lava",
                "lava",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "base25": {
        "id": "base25",
        "name": "地下 B25F",
        "title": "地下  25F",
        "upPos": {
            "x": 6,
            "y": 1
        },
        "downPos": null,
        "canFlyTo": false,
        "changeFloor": {
            "6,11": null,
            "6,1": {
                "floorId": "sample24",
                "loc": [
                    6,
                    1
                ],
                "time": 500
            }
        },
        "events": {
            "6,7": null,
            "6,10": [
                "\t[${flags.臸娥语==1?'玦':'勇士'},hero]是${flags.臸娥语==1?'そ':'公主'}？",
                "\t[${flags.臸娥语==1?'そ':'公主'},princess]你是来救我的吗？\n太好了，我们走吧！\n回国后我一定要爸爸打赏你。",
                "\t[${flags.臸娥语==1?'玦':'勇士'},hero]是真正的${flags.臸娥语==1?'そ':'公主'}！\n太好了！\n我们走吧！",
                {
                    "type": "setCurtain",
                    "color": [
                        0,
                        0,
                        0,
                        1
                    ],
                    "time": 2000
                },
                {
                    "type": "scrollText",
                    "text": "\\c[15]\\g[HuaKangKanTing]这位勇士终于成功将公主救了出来…\n魔塔也被毁灭了…剩下的只是一堆石头而已…\n不过，却比他预期中花多了两天才完成任务…\n照当初的约定，他没有领取任何奖金就离开这个国家了…\n不久，这个国家传出灭亡的消息…凶手不知是谁…\n奇怪的是找遍了整个国家都找不到公主的尸体究竟是逃走\n了，还是被毁尸了？没有人知道…\n唯一知道的是，在魔塔遗址又有怪物出没…\n似乎是有漏网之鱼…\n无论如何，\n任务已完成，其他事都不用去想了……",
                    "time": 5000,
                    "lineHeight": 1.4
                },
                {
                    "type": "setValue",
                    "name": "flag:doNotDisplayGameover",
                    "value": "true"
                },
                {
                    "type": "lose",
                    "reason": "救出假公主"
                }
            ],
            "6,11": [
                {
                    "type": "if",
                    "condition": "core.terrainExists(6,11, 'flower')",
                    "true": [
                        {
                            "type": "changeFloor",
                            "floorId": "MOTA8",
                            "loc": [
                                6,
                                11
                            ],
                            "time": 0
                        }
                    ]
                }
            ],
            "6,1": {
                "trigger": null,
                "enable": false,
                "noPass": null,
                "displayDamage": false,
                "data": []
            }
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "lava",
                "lava",
                "yellowWall",
                "redKey",
                "redKey",
                "upFloor",
                "redKey",
                "redKey",
                "yellowWall",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "lava",
                "lava",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "lava",
                "lava",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "lava",
                "lava",
                "yellowWall",
                "bluePotion",
                0,
                0,
                0,
                "bluePotion",
                "yellowWall",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "lava",
                "lava",
                "yellowWall",
                "yellowWall",
                "blueGem",
                0,
                "redGem",
                "yellowWall",
                "yellowWall",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "lava",
                "lava",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "redDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "lava",
                "lava",
                "yellowWall",
                "yellowWall",
                "redKey",
                "vamp",
                "redKey",
                "yellowWall",
                "yellowWall",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "lava",
                "lava",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                0,
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "lava",
                "lava",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "redDoor",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "lava",
                "lava",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "princess",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "lava",
                "lava",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "walldoor3",
                "yellowWall",
                "yellowWall",
                "yellowWall",
                "lava",
                "lava",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "MOTA1": {
        "id": "MOTA1",
        "name": "秘密魔塔 M1F",
        "title": "魔塔  1F",
        "upPos": {
            "x": 6,
            "y": 1
        },
        "downPos": {
            "x": 6,
            "y": 11
        },
        "canFlyTo": true,
        "changeFloor": {
            "6,2": null,
            "6,1": {
                "floorId": "MOTA2",
                "loc": [
                    6,
                    1
                ]
            },
            "6,11": {
                "floorId": "main17",
                "loc": [
                    3,
                    1
                ]
            }
        },
        "events": {
            "6,10": null,
            "9,2": null
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "redGem",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "upFloor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueGem",
                "blueWall"
            ],
            [
                "blueWall",
                "slimelord",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "slimelord",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "slimelord",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "redDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "redDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "redDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "blackSlime",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blackSlime",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blackSlime",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "redSlime",
                "redSlime",
                0,
                0,
                0,
                0,
                "redSlime",
                "redSlime",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "yellowDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "greenSlime",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "star",
                "downPortal",
                "star",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "MOTA2": {
        "id": "MOTA2",
        "name": "秘密魔塔 M2F",
        "title": "魔塔  2F",
        "upPos": {
            "x": 6,
            "y": 11
        },
        "downPos": {
            "x": 6,
            "y": 1
        },
        "canFlyTo": true,
        "changeFloor": {
            "6,1": {
                "floorId": "MOTA1",
                "stair": "upFloor"
            },
            "6,11": {
                "floorId": "MOTA3",
                "stair": "downFloor"
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "bluePriest",
                0,
                0,
                "downFloor",
                0,
                0,
                "bluePriest",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                "redPotion",
                "blueGem",
                "blueWall",
                "redPriest",
                "steelDoor",
                "bluePriest",
                "yellowKey",
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                0,
                "redPriest",
                "blueWall",
                0,
                "blueWall",
                0,
                "weakWine",
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "bluePriest",
                "blueWall",
                "blueWall",
                "steelDoor",
                "blueWall",
                "redDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "bluePriest",
                "blueWall"
            ],
            [
                "blueWall",
                "grayPriest",
                0,
                0,
                0,
                0,
                "brownWizard",
                0,
                0,
                0,
                0,
                "grayPriest",
                "blueWall"
            ],
            [
                "blueWall",
                "bluePriest",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "yellowDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "bluePriest",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                0,
                "redPriest",
                "steelDoor",
                "grayPriest",
                "blueWall",
                "redKey",
                "poisonWine",
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                "bluePotion",
                "redGem",
                "blueWall",
                0,
                "blueWall",
                "redPriest",
                0,
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "steelDoor",
                "blueWall",
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "redPriest",
                0,
                0,
                "upFloor",
                0,
                0,
                "redPriest",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "MOTA3": {
        "id": "MOTA3",
        "name": "秘密魔塔 M3F",
        "title": "魔塔  3F",
        "upPos": {
            "x": 6,
            "y": 1
        },
        "downPos": {
            "x": 6,
            "y": 11
        },
        "canFlyTo": true,
        "changeFloor": {
            "6,1": {
                "floorId": "MOTA4",
                "stair": "downFloor"
            },
            "6,11": {
                "floorId": "MOTA2",
                "stair": "upFloor"
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "redGem",
                "blueWall",
                0,
                0,
                "blueWall",
                "upFloor",
                "blueWall",
                0,
                0,
                "blueWall",
                "blueGem",
                "blueWall"
            ],
            [
                "blueWall",
                "redPotion",
                "redBat",
                0,
                0,
                "blueWall",
                "bigBat",
                "redBat",
                "redBat",
                0,
                "redBat",
                "redPotion",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowKey",
                "blueWall",
                0,
                "redBat",
                "redBat",
                "steelDoor",
                "blueWall",
                0,
                0,
                "blueWall",
                "yellowKey",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "steelDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "bigBat",
                0,
                "bigBat",
                0,
                0,
                0,
                0,
                "bigBat",
                "bat",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "steelDoor",
                "blueWall",
                "steelDoor",
                "blueWall",
                "blueWall",
                "steelDoor",
                "blueWall",
                "blueWall",
                "steelDoor",
                "blueWall",
                "steelDoor",
                "blueWall"
            ],
            [
                "blueWall",
                "redBat",
                0,
                "redBat",
                "blueWall",
                "blueWall",
                "bat",
                "blueWall",
                "blueWall",
                "redBat",
                "redBat",
                "redBat",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                "blueWall",
                0,
                0,
                0,
                "blueWall",
                "blueWall",
                "redBat",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "yellowKey",
                "blueKey",
                "yellowKey",
                "blueWall",
                0,
                "downFloor",
                0,
                "blueWall",
                "blueWall",
                "redKey",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "MOTA4": {
        "id": "MOTA4",
        "name": "秘密魔塔 M4F",
        "title": "魔塔  4F",
        "upPos": {
            "x": 6,
            "y": 11
        },
        "downPos": {
            "x": 6,
            "y": 1
        },
        "canFlyTo": true,
        "changeFloor": {
            "6,1": {
                "floorId": "MOTA3",
                "stair": "upFloor"
            },
            "6,11": {
                "floorId": "MOTA5",
                "stair": "downFloor"
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueKey",
                "yellowKey",
                "greenKing",
                0,
                "blueWall",
                "downFloor",
                "blueWall",
                "blueWall",
                "yellowKey",
                "greenKing",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "whiteKing",
                "blueWall",
                "whiteKing",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "whiteKing",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                0,
                "steelDoor",
                0,
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "steelDoor",
                "blueWall",
                "whiteKing",
                "blueWall",
                "blueWall",
                "steelDoor",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                0,
                0,
                "blueWall",
                "redGem",
                "blueWall",
                "blueWall",
                0,
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "steelDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "steelDoor",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "redPotion",
                0,
                0,
                "yellowKey",
                "blueWall",
                "blueWall",
                "blueWall",
                "yellowKey",
                0,
                0,
                "bluePotion",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "steelDoor",
                "blueWall",
                "blueWall",
                "blueGem",
                "blueWall",
                "blueWall",
                "steelDoor",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                0,
                "blueWall",
                "blueWall",
                "steelDoor",
                "blueWall",
                "blueWall",
                0,
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                0,
                "greenKing",
                0,
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                "steelDoor",
                0,
                0,
                "upFloor",
                0,
                0,
                "steelDoor",
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "MOTA5": {
        "id": "MOTA5",
        "name": "秘密魔塔 M5F",
        "title": "魔塔  5F",
        "upPos": {
            "x": 6,
            "y": 11
        },
        "downPos": {
            "x": 6,
            "y": 11
        },
        "canFlyTo": true,
        "changeFloor": {
            "6,11": {
                "floorId": "MOTA4",
                "stair": "upFloor",
                "time": 500
            }
        },
        "events": {
            "1,11": [
                "\t[老人,man]这里是魔塔，除了首五层是\n互相连接外，其余层数均要由\n不同的传送点传送。"
            ],
            "6,10": {
                "trigger": null,
                "enable": false,
                "noPass": null,
                "displayDamage": true,
                "opacity": 1,
                "filter": {
                    "blur": 0,
                    "hue": 0,
                    "grayscale": 0,
                    "invert": false,
                    "shadow": 0
                },
                "data": [
                    "\t[${flags.臸娥语==1?'玦':'勇士'},hero]你是……我？",
                    "\t[？？？,badHero]要使用${flags.臸娥语==1?'彻':'章'}...必须要有强大的\n精神力...所以你要先\n打败自己来释放精神力！\n来吧！！",
                    {
                        "type": "setBlock",
                        "number": "badHero"
                    }
                ]
            }
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "proof_sage",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "proof_tyrant",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "proof_brave",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "redDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "redDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "redDoor",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                "blueDoor",
                "yellowDoor",
                "blueDoor",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "yellowDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "yellowDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "womanMagician",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "man",
                0,
                0,
                0,
                0,
                "downFloor",
                0,
                0,
                0,
                0,
                "redKey",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "MOTA6": {
        "id": "MOTA6",
        "name": "秘密魔塔 M6F",
        "title": "魔塔  6F",
        "upPos": null,
        "downPos": null,
        "canFlyTo": true,
        "changeFloor": {
            "6,11": {
                "floorId": "base9",
                "loc": [
                    4,
                    1
                ]
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "poisonWine",
                "poisonWine",
                "weakWine",
                "weakWine",
                "blueWall",
                "redKey",
                "blueWall",
                "redPotion",
                "redPotion",
                "redPotion",
                "redPotion",
                "blueWall"
            ],
            [
                "blueWall",
                "poisonWine",
                "poisonWine",
                "weakWine",
                "weakWine",
                "blueWall",
                "greenGem",
                "blueWall",
                "redPotion",
                "redPotion",
                "redPotion",
                "redPotion",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                "blueWall",
                "Lvupfly",
                "blueWall",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                "blueWall",
                0,
                "blueWall",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "redDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "redDoor",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "redDoor",
                "blueWall",
                0,
                "blueWall",
                "redDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                "blueWall",
                0,
                "blueWall",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                "blueWall",
                0,
                "blueWall",
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueGem",
                "blueGem",
                "blueGem",
                "blueGem",
                "blueWall",
                0,
                "blueWall",
                "redGem",
                "redGem",
                "redGem",
                "redGem",
                "blueWall"
            ],
            [
                "blueWall",
                "blueGem",
                "blueGem",
                "blueGem",
                "blueGem",
                "star",
                "downPortal",
                "star",
                "redGem",
                "redGem",
                "redGem",
                "redGem",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "MOTA7": {
        "id": "MOTA7",
        "name": "秘密魔塔 M7F",
        "title": "魔塔  7F",
        "upPos": null,
        "downPos": null,
        "canFlyTo": true,
        "changeFloor": {
            "6,11": {
                "floorId": "base17",
                "loc": [
                    11,
                    11
                ]
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueGem",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "superPotion",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "N354",
                "blueWall"
            ],
            [
                "blueWall",
                "moneyPocket",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "moneyPocket",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "moneyPocket",
                "blueWall"
            ],
            [
                "blueWall",
                "moneyPocket",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "moneyPocket",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "moneyPocket",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "silverSlime",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueDoor",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "yellowDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueDoor",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                0,
                0,
                0,
                "redGem",
                "star",
                "downPortal",
                "star",
                "greenGem",
                0,
                0,
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "MOTA8": {
        "id": "MOTA8",
        "name": "秘密魔塔 M8F",
        "title": "魔塔  8F",
        "upPos": null,
        "downPos": null,
        "canFlyTo": false,
        "changeFloor": {},
        "events": {
            "6,1": [
                "\t[${flags.臸娥语==1?'そ' : '公主'},princess]太好了~....\n终于有人来到了.......\n这个星期过得很辛苦呢....",
                "\t[${flags.臸娥语==1?'玦'  : '勇士'},hero]不用怕！\n我是来救你的！",
                "\t[${flags.臸娥语==1?'そ' : '公主'},princess](昏倒)",
                "\t[${flags.臸娥语==1?'玦'  : '勇士'},hero]看来一切都结束了......\n${flags.臸娥语==1?'そ':'公主'}的身体似乎很虚弱\n还是先逃出这里吧。",
                {
                    "type": "setCurtain",
                    "color": [
                        0,
                        0,
                        0,
                        1
                    ],
                    "time": 2000
                },
                {
                    "type": "scrollText",
                    "text": "\\c[15]\\g[HuaKangKanTing]这位勇士终于成功将${flags.臸娥语==1?'そ':'公主'}救了出来…${flags.臸娥语==1?'臸娥':'魔塔'}也被毁灭了…\n剩下的只是一堆石头而已…\n虽然，却比他预想中花多了两天才完成任务\n不过国王在${flags.臸娥语==1?'そ':'公主'}的说服下，奖金仍然是给了他\n接过奖金，这位勇士就离开这个国家了\n自此之后，再没有人见过他的踪影…\n究竟他是谁？究竟为何而来？至今依然是个谜\n总之，任务完成了，这个国家也回复一片和平的景象……",
                    "time": 5000,
                    "lineHeight": 1.4
                },
                {
                    "type": "setValue",
                    "name": "flag:jieju",
                    "value": "1"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.triggerDebuff('remove', 'weak');\n}"
                },
                {
                    "type": "if",
                    "condition": "flags.useBattleAnimate",
                    "true": [
                        {
                            "type": "setValue",
                            "name": "flag:jiejuming",
                            "value": "'最高血量'"
                        }
                    ],
                    "false": [
                        {
                            "type": "dowhile",
                            "condition": "true",
                            "data": [
                                {
                                    "type": "choices",
                                    "text": "选择榜单",
                                    "choices": [
                                        {
                                            "text": "上一页",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jieju",
                                                    "operator": "-=",
                                                    "value": "1"
                                                }
                                            ]
                                        },
                                        {
                                            "text": "最高血量",
                                            "condition": "core.getFlag('jieju')===1",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jiejuming",
                                                    "value": "'最高血量'"
                                                },
                                                {
                                                    "type": "break",
                                                    "n": 1
                                                }
                                            ]
                                        },
                                        {
                                            "text": "最高攻防和",
                                            "condition": "core.getFlag('jieju')===1",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jiejuming",
                                                    "value": "'最高攻防和'"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "value": "(status:atk+status:def)",
                                                    "norefresh": true
                                                },
                                                {
                                                    "type": "break",
                                                    "n": 1
                                                }
                                            ]
                                        },
                                        {
                                            "text": "最高攻击",
                                            "condition": "core.getFlag('jieju')===1",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jiejuming",
                                                    "value": "'最高攻击'"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "value": "status:atk",
                                                    "norefresh": true
                                                },
                                                {
                                                    "type": "break",
                                                    "n": 1
                                                }
                                            ]
                                        },
                                        {
                                            "text": "最高防御",
                                            "condition": "core.getFlag('jieju')===1",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jiejuming",
                                                    "value": "'最高防御'"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "value": "status:def",
                                                    "norefresh": true
                                                },
                                                {
                                                    "type": "break",
                                                    "n": 1
                                                }
                                            ]
                                        },
                                        {
                                            "text": "最多金币",
                                            "condition": "core.getFlag('jieju')===1",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jiejuming",
                                                    "value": "'最多金币'"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "value": "status:money",
                                                    "norefresh": true
                                                },
                                                {
                                                    "type": "break",
                                                    "n": 1
                                                }
                                            ]
                                        },
                                        {
                                            "text": "最多经验",
                                            "condition": "core.getFlag('jieju')===2",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jiejuming",
                                                    "value": "'最多经验'"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "value": "status:exp",
                                                    "norefresh": true
                                                },
                                                {
                                                    "type": "break",
                                                    "n": 1
                                                }
                                            ]
                                        },
                                        {
                                            "text": "最多留存怪物",
                                            "condition": "core.getFlag('jieju')===2",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jiejuming",
                                                    "value": "'最多留存怪物'"
                                                },
                                                {
                                                    "type": "function",
                                                    "function": "function(){\nlet n = 0;\nfor (const f of core.floorIds) {\n\tn += core.searchBlockWithFilter(b => b.event.cls === 'enemys' || b.event.cls === 'enemy48', f).length;\n}\nflags.t = n\n}"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "value": "flag:t",
                                                    "norefresh": true
                                                },
                                                {
                                                    "type": "break",
                                                    "n": 1
                                                }
                                            ]
                                        },
                                        {
                                            "text": "最多金币商店加点次数",
                                            "condition": "core.getFlag('jieju')===2",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jiejuming",
                                                    "value": "'最多金币商店加点次数'"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "value": "(flag:moneyShop3F_times+flag:moneyShopB5F_times)",
                                                    "norefresh": true
                                                },
                                                {
                                                    "type": "break",
                                                    "n": 1
                                                }
                                            ]
                                        },
                                        {
                                            "text": "最多经验商店加点次数",
                                            "condition": "core.getFlag('jieju')===2",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jiejuming",
                                                    "value": "'最多经验商店加点次数'"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "value": "(flag:expShop7F_times+flag:expShopB7F_times)",
                                                    "norefresh": true
                                                },
                                                {
                                                    "type": "break",
                                                    "n": 1
                                                }
                                            ]
                                        },
                                        {
                                            "text": "最低攻防和",
                                            "condition": "core.getFlag('jieju')===2",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jiejuming",
                                                    "value": "'最低攻防和'"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "value": "(status:atk + status:def) + (1000000000 - 100000*(status:atk + status:def))",
                                                    "norefresh": true
                                                },
                                                {
                                                    "type": "break",
                                                    "n": 1
                                                }
                                            ]
                                        },
                                        {
                                            "text": "最低攻击",
                                            "condition": "core.getFlag('jieju')===3",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jiejuming",
                                                    "value": "'最低攻击'"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "value": "status:atk + (1000000000 - 100000*status:atk)",
                                                    "norefresh": true
                                                },
                                                {
                                                    "type": "break",
                                                    "n": 1
                                                }
                                            ]
                                        },
                                        {
                                            "text": "最低防御",
                                            "condition": "core.getFlag('jieju')===3",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jiejuming",
                                                    "value": "'最低防御'"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "value": "status:def + (1000000000 - 100000*status:def)",
                                                    "norefresh": true
                                                },
                                                {
                                                    "type": "break",
                                                    "n": 1
                                                }
                                            ]
                                        },
                                        {
                                            "text": "最少金币商店加点次数",
                                            "condition": "core.getFlag('jieju')===3",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jiejuming",
                                                    "value": "'最少金币商店加点次数'"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "value": "100000000-10000*(flag:moneyShop3F_times+flag:moneyShopB5F_times)+ (flag:moneyShop3F_times+flag:moneyShopB5F_times)",
                                                    "norefresh": true
                                                },
                                                {
                                                    "type": "break",
                                                    "n": 1
                                                }
                                            ]
                                        },
                                        {
                                            "text": "最少经验商店加点次数",
                                            "condition": "core.getFlag('jieju')===3",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jiejuming",
                                                    "value": "'最少经验商店加点次数'"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "value": "100000000-10000*(flag:expShop7F_times+flag:expShopB7F_times)+ (flag:expShop7F_times+flag:expShopB7F_times)",
                                                    "norefresh": true
                                                },
                                                {
                                                    "type": "break",
                                                    "n": 1
                                                }
                                            ]
                                        },
                                        {
                                            "text": "最多红钥匙数量",
                                            "condition": "core.getFlag('jieju')===3",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jiejuming",
                                                    "value": "'最多红钥匙数量'"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "value": "item:redKey",
                                                    "norefresh": true
                                                },
                                                {
                                                    "type": "break",
                                                    "n": 1
                                                }
                                            ]
                                        },
                                        {
                                            "text": "下一页",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:jieju",
                                                    "operator": "+=",
                                                    "value": "1"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "if",
                                    "condition": "(flag:jieju>3)",
                                    "true": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:jieju",
                                            "value": "1"
                                        }
                                    ]
                                },
                                {
                                    "type": "if",
                                    "condition": "(flag:jieju<1)",
                                    "true": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:jieju",
                                            "value": "3"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "flags.useBattleAnimate",
                    "true": [
                        {
                            "type": "win",
                            "reason": "回味经典(不计榜)",
                            "norank": 1
                        }
                    ],
                    "false": [
                        {
                            "type": "if",
                            "condition": "(flag:proof_brave>0)",
                            "true": [
                                {
                                    "type": "win",
                                    "reason": "勇者之证（${flags.jiejuming}）"
                                }
                            ],
                            "false": [
                                {
                                    "type": "if",
                                    "condition": "(flag:proof_sage>0)",
                                    "true": [
                                        {
                                            "type": "win",
                                            "reason": "贤者之证（${flags.jiejuming}）"
                                        }
                                    ],
                                    "false": [
                                        {
                                            "type": "if",
                                            "condition": "(flag:proof_tyrant>0)",
                                            "true": [
                                                {
                                                    "type": "win",
                                                    "reason": "霸者之证（${flags.jiejuming}）"
                                                }
                                            ],
                                            "false": [
                                                {
                                                    "type": "win",
                                                    "reason": "无章通关（${flags.jiejuming}）"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "realPrincess",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "redDoor",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "redDoor",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "redDoor",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "goldSlime",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "silverSlime",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "slimelord",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "blackSlime",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "redSlime",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "greenSlime",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "star",
                0,
                "star",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "MOTA9": {
        "id": "MOTA9",
        "name": "秘密魔塔 M9F",
        "title": "魔塔  9F",
        "upPos": null,
        "downPos": null,
        "canFlyTo": true,
        "changeFloor": {
            "6,11": {
                "floorId": "base22",
                "loc": [
                    11,
                    1
                ]
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "sword5",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                0,
                0,
                "blueWall",
                "redDoor",
                "blueWall",
                0,
                0,
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "redDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                0,
                "blueWall",
                0,
                0,
                0,
                "blueWall",
                0,
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                0,
                "blueWall",
                0,
                0,
                0,
                "blueWall",
                0,
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "E336",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                0,
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                0,
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                0,
                "star",
                "downPortal",
                "star",
                0,
                "blueWall",
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    },
    "MOTA10": {
        "id": "MOTA10",
        "name": "秘密魔塔 M10F",
        "title": "魔塔  10F",
        "upPos": null,
        "downPos": null,
        "canFlyTo": true,
        "changeFloor": {
            "6,11": {
                "floorId": "main10",
                "loc": [
                    1,
                    1
                ]
            }
        },
        "events": {},
        "grid": [
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blue_wall",
                "blue_wall",
                "blue_wall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "shield5",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "redDoor",
                "blueWall",
                0,
                "blueWall",
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "redDoor",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blackMagician",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                0,
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                0,
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                0,
                0,
                "blueWall",
                0,
                "blueWall",
                0,
                0,
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                0,
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                0,
                0,
                0,
                "blueWall",
                0,
                "blueWall",
                0,
                0,
                0,
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "star",
                "downPortal",
                "star",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ],
            [
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall",
                "blueWall"
            ]
        ]
    }
};

const XINXIN_MONSTERS = {
    "greenSlime": {
        "id": "greenSlime",
        "name": "绿色史莱姆",
        "hp": 40,
        "atk": 18,
        "def": 1,
        "gold": 1,
        "exp": 1,
        "cri": 0,
        "agi": 0,
        "special": null,
        "row": 0
    },
    "redSlime": {
        "id": "redSlime",
        "name": "红色史莱姆",
        "hp": 50,
        "atk": 20,
        "def": 4,
        "gold": 2,
        "exp": 1,
        "cri": 1,
        "agi": 0,
        "special": null,
        "row": 1
    },
    "blackSlime": {
        "id": "blackSlime",
        "name": "黑色史莱姆",
        "hp": 80,
        "atk": 37,
        "def": 9,
        "gold": 5,
        "exp": 1,
        "cri": 4,
        "agi": 0,
        "special": null,
        "row": 2
    },
    "slimelord": {
        "id": "slimelord",
        "name": "史莱姆王",
        "hp": 172,
        "atk": 130,
        "def": 60,
        "gold": 19,
        "exp": 2,
        "cri": 6,
        "agi": 2,
        "special": null,
        "row": 3
    },
    "bat": {
        "id": "bat",
        "name": "蝙蝠",
        "hp": 55,
        "atk": 32,
        "def": 2,
        "gold": 3,
        "exp": 1,
        "cri": 4,
        "agi": 4,
        "special": null,
        "row": 4
    },
    "bigBat": {
        "id": "bigBat",
        "name": "大蝙蝠",
        "hp": 66,
        "atk": 55,
        "def": 12,
        "gold": 6,
        "exp": 1,
        "cri": 5,
        "agi": 4,
        "special": 4,
        "row": 5
    },
    "redBat": {
        "id": "redBat",
        "name": "红蝙蝠",
        "hp": 210,
        "atk": 185,
        "def": 70,
        "gold": 24,
        "exp": 3,
        "cri": 5,
        "agi": 4,
        "special": 5,
        "row": 6
    },
    "vampire": {
        "id": "vampire",
        "name": "vampire",
        "hp": 5000,
        "atk": 1500,
        "def": 1200,
        "gold": 1,
        "exp": 1,
        "cri": 40,
        "agi": 20,
        "special": 4,
        "row": 7
    },
    "skeleton": {
        "id": "skeleton",
        "name": "骷髅",
        "hp": 95,
        "atk": 70,
        "def": 10,
        "gold": 5,
        "exp": 1,
        "cri": 4,
        "agi": 3,
        "special": null,
        "row": 8
    },
    "skeletonSoilder": {
        "id": "skeletonSoilder",
        "name": "骷髅兵",
        "hp": 190,
        "atk": 100,
        "def": 5,
        "gold": 13,
        "exp": 2,
        "cri": 4,
        "agi": 3,
        "special": null,
        "row": 9
    },
    "skeletonCaptain": {
        "id": "skeletonCaptain",
        "name": "中级骷髅兵",
        "hp": 290,
        "atk": 170,
        "def": 23,
        "gold": 21,
        "exp": 3,
        "cri": 5,
        "agi": 3,
        "special": null,
        "row": 10
    },
    "ghostSkeleton": {
        "id": "ghostSkeleton",
        "name": "灵骷髅",
        "hp": 295,
        "atk": 404,
        "def": 282,
        "gold": 70,
        "exp": 8,
        "cri": 5,
        "agi": 3,
        "special": [],
        "row": 11
    },
    "zombie": {
        "id": "zombie",
        "name": "丧尸",
        "hp": 190,
        "atk": 90,
        "def": 33,
        "gold": 15,
        "exp": 2,
        "cri": 4,
        "agi": 2,
        "special": null,
        "row": 12
    },
    "zombieKnight": {
        "id": "zombieKnight",
        "name": "丧尸士兵",
        "hp": 511,
        "atk": 353,
        "def": 230,
        "gold": 50,
        "exp": 6,
        "cri": 4,
        "agi": 1,
        "special": null,
        "row": 13
    },
    "rock": {
        "id": "rock",
        "name": "石怪",
        "hp": 30,
        "atk": 45,
        "def": 70,
        "gold": 7,
        "exp": 1,
        "cri": 2,
        "agi": 0,
        "special": null,
        "row": 14
    },
    "slimeMan": {
        "id": "slimeMan",
        "name": "史莱姆人",
        "hp": 90,
        "atk": 79,
        "def": 24,
        "gold": 10,
        "exp": 2,
        "cri": 4,
        "agi": 30,
        "special": [],
        "row": 15
    },
    "bluePriest": {
        "id": "bluePriest",
        "name": "魔法师",
        "hp": 65,
        "atk": 10,
        "def": 5,
        "gold": 4,
        "exp": 1,
        "cri": 2,
        "agi": 0,
        "special": [
            30
        ],
        "row": 16
    },
    "redPriest": {
        "id": "redPriest",
        "name": "上级魔法师",
        "hp": 290,
        "atk": 40,
        "def": 90,
        "gold": 27,
        "exp": 3,
        "cri": 2,
        "agi": 0,
        "special": [
            30
        ],
        "row": 17
    },
    "brownWizard": {
        "id": "brownWizard",
        "name": "大法师",
        "hp": 450,
        "atk": 100,
        "def": 302,
        "gold": 77,
        "exp": 8,
        "cri": 2,
        "agi": 1,
        "special": [
            30
        ],
        "row": 18
    },
    "redWizard": {
        "id": "redWizard",
        "name": "红衣大法师",
        "hp": 875,
        "atk": 120,
        "def": 513,
        "gold": 101,
        "exp": 11,
        "cri": 2,
        "agi": 1,
        "special": [
            30
        ],
        "row": 19
    },
    "yellowGuard": {
        "id": "yellowGuard",
        "name": "守卫",
        "hp": 85,
        "atk": 40,
        "def": 55,
        "gold": 6,
        "exp": 1,
        "cri": 5,
        "agi": 3,
        "special": null,
        "row": 20
    },
    "blueGuard": {
        "id": "blueGuard",
        "name": "中级守卫",
        "hp": 775,
        "atk": 220,
        "def": 310,
        "gold": 63,
        "exp": 7,
        "cri": 5,
        "agi": 3,
        "special": null,
        "row": 21
    },
    "redGuard": {
        "id": "redGuard",
        "name": "高级守卫",
        "hp": 1150,
        "atk": 651,
        "def": 860,
        "gold": 110,
        "exp": 12,
        "cri": 5,
        "agi": 4,
        "special": null,
        "row": 22
    },
    "swordsman": {
        "id": "swordsman",
        "name": "双手剑兵",
        "hp": 280,
        "atk": 210,
        "def": 110,
        "gold": 34,
        "exp": 4,
        "cri": 7,
        "agi": 4,
        "special": 4,
        "row": 23
    },
    "soldier": {
        "id": "soldier",
        "name": "灵骷髅兵",
        "hp": 800,
        "atk": 602,
        "def": 560,
        "gold": 30,
        "exp": 4,
        "cri": 5,
        "agi": 4,
        "special": [
            34
        ],
        "row": 24
    },
    "yellowKnight": {
        "id": "yellowKnight",
        "name": "骑士",
        "hp": 130,
        "atk": 115,
        "def": 43,
        "gold": 17,
        "exp": 2,
        "cri": 30,
        "agi": 4,
        "special": [
            28
        ],
        "row": 25
    },
    "redKnight": {
        "id": "redKnight",
        "name": "近卫骑士",
        "hp": 992,
        "atk": 737,
        "def": 677,
        "gold": 124,
        "exp": 13,
        "cri": 50,
        "agi": 4,
        "special": [
            28,
            35
        ],
        "row": 26
    },
    "darkKnight": {
        "id": "darkKnight",
        "name": "灵武士",
        "hp": 1060,
        "atk": 1118,
        "def": 1030,
        "gold": 100,
        "exp": 11,
        "cri": 5,
        "agi": 5,
        "special": [
            34
        ],
        "row": 27
    },
    "blackKing": {
        "id": "blackKing",
        "name": "黑魔王",
        "hp": 1000,
        "atk": 500,
        "def": 10,
        "gold": 1000,
        "exp": 1000,
        "cri": 0,
        "agi": 0,
        "special": null,
        "row": 28
    },
    "yellowKing": {
        "id": "yellowKing",
        "name": "魔王",
        "hp": 635,
        "atk": 600,
        "def": 500,
        "gold": 88,
        "exp": 9,
        "cri": 14,
        "agi": 6,
        "special": null,
        "row": 29
    },
    "greenKing": {
        "id": "greenKing",
        "name": "魔法师元帅",
        "hp": 380,
        "atk": 90,
        "def": 280,
        "gold": 59,
        "exp": 6,
        "cri": 12,
        "agi": 5,
        "special": [
            30
        ],
        "row": 30
    },
    "blueKnight": {
        "id": "blueKnight",
        "name": "铁骑士",
        "hp": 420,
        "atk": 380,
        "def": 258,
        "gold": 54,
        "exp": 6,
        "cri": 40,
        "agi": 4,
        "special": [
            28
        ],
        "row": 31
    },
    "goldSlime": {
        "id": "goldSlime",
        "name": "黄金史莱姆",
        "hp": 1,
        "atk": 10,
        "def": 10,
        "gold": 1,
        "exp": 1,
        "cri": -1,
        "agi": -1,
        "special": [
            33,
            36
        ],
        "row": 32
    },
    "poisonSkeleton": {
        "id": "poisonSkeleton",
        "name": "高级骷髅兵",
        "hp": 1020,
        "atk": 1341,
        "def": 600,
        "gold": 145,
        "exp": 15,
        "cri": 5,
        "agi": 3,
        "special": 13,
        "row": 33
    },
    "poisonBat": {
        "id": "poisonBat",
        "name": "毒蝙蝠",
        "hp": 1091,
        "atk": 971,
        "def": 950,
        "gold": 150,
        "exp": 16,
        "cri": 8,
        "agi": 5,
        "special": [
            4,
            12
        ],
        "row": 34
    },
    "steelRock": {
        "id": "steelRock",
        "name": "铁怪",
        "hp": 50,
        "atk": 600,
        "def": 990,
        "gold": 132,
        "exp": 14,
        "cri": 2,
        "agi": 0,
        "special": [
            31
        ],
        "row": 35
    },
    "skeletonPriest": {
        "id": "skeletonPriest",
        "name": "骷髅法师",
        "hp": 100,
        "atk": 100,
        "def": 10,
        "gold": 1,
        "exp": 1,
        "cri": 0,
        "agi": 0,
        "special": 18,
        "row": 36
    },
    "skeletonKing": {
        "id": "skeletonKing",
        "name": "骷髅王",
        "hp": 100,
        "atk": 10,
        "def": 10,
        "gold": 1,
        "exp": 1,
        "cri": 0,
        "agi": 0,
        "special": null,
        "row": 37
    },
    "skeletonWizard": {
        "id": "skeletonWizard",
        "name": "骷髅巫师",
        "hp": 100,
        "atk": 10,
        "def": 10,
        "gold": 1,
        "exp": 1,
        "cri": 0,
        "agi": 0,
        "special": null,
        "row": 38
    },
    "redSkeletonCaption": {
        "id": "redSkeletonCaption",
        "name": "骷髅武士",
        "hp": 100,
        "atk": 10,
        "def": 10,
        "gold": 1,
        "exp": 1,
        "cri": 0,
        "agi": 0,
        "special": null,
        "row": 39
    },
    "badHero": {
        "id": "badHero",
        "name": "自己",
        "hp": 1100,
        "atk": 325,
        "def": 160,
        "gold": 300,
        "exp": 31,
        "cri": 5,
        "agi": 5,
        "special": null,
        "row": 40
    },
    "demon": {
        "id": "demon",
        "name": "恶魔首领",
        "hp": 5000,
        "atk": 1500,
        "def": 1200,
        "gold": 1,
        "exp": 1,
        "cri": 20,
        "agi": 20,
        "special": 4,
        "row": 41
    },
    "demonPriest": {
        "id": "demonPriest",
        "name": "魔神法师",
        "hp": 100,
        "atk": 10,
        "def": 10,
        "gold": 1,
        "exp": 1,
        "cri": 0,
        "agi": 0,
        "special": null,
        "row": 42
    },
    "goldHornSlime": {
        "id": "goldHornSlime",
        "name": "金角怪",
        "hp": 100,
        "atk": 10,
        "def": 10,
        "gold": 1,
        "exp": 1,
        "cri": 0,
        "agi": 0,
        "special": null,
        "row": 43
    },
    "redKing": {
        "id": "redKing",
        "name": "大魔王",
        "hp": 1000,
        "atk": 1200,
        "def": 980,
        "gold": 400,
        "exp": 41,
        "cri": 16,
        "agi": 7,
        "special": [
            13,
            32
        ],
        "row": 44
    },
    "whiteKing": {
        "id": "whiteKing",
        "name": "魔法师首领",
        "hp": 330,
        "atk": 70,
        "def": 150,
        "gold": 43,
        "exp": 5,
        "cri": 10,
        "agi": 5,
        "special": [
            30
        ],
        "row": 45
    },
    "blackMagician": {
        "id": "blackMagician",
        "name": "暗黑魔法师",
        "hp": 1650,
        "atk": 220,
        "def": 920,
        "gold": 500,
        "exp": 51,
        "cri": 8,
        "agi": 6,
        "special": [
            30,
            37
        ],
        "row": 46
    },
    "silverSlime": {
        "id": "silverSlime",
        "name": "白银史莱姆",
        "hp": 1,
        "atk": 10,
        "def": 10,
        "gold": 1,
        "exp": 1,
        "cri": -1,
        "agi": -1,
        "special": [
            36
        ],
        "row": 47
    },
    "swordEmperor": {
        "id": "swordEmperor",
        "name": "剑圣",
        "hp": 999999,
        "atk": 1,
        "def": 10,
        "gold": 1,
        "exp": 1,
        "cri": 0,
        "agi": 0,
        "special": [
            3
        ],
        "row": 48
    },
    "whiteHornSlime": {
        "id": "whiteHornSlime",
        "name": "尖角怪",
        "hp": 99999,
        "atk": 1,
        "def": 10,
        "gold": 1,
        "exp": 1,
        "cri": 0,
        "agi": 0,
        "special": null,
        "row": 49
    },
    "badPrincess": {
        "id": "badPrincess",
        "name": "假公主",
        "hp": 600,
        "atk": 270,
        "def": 160,
        "gold": 120,
        "exp": 13,
        "cri": 5,
        "agi": 5,
        "special": null,
        "row": 50
    },
    "badFairy": {
        "id": "badFairy",
        "name": "黑暗妖精",
        "hp": 100000,
        "atk": 900,
        "def": 1150,
        "gold": 1,
        "exp": 1,
        "cri": 20,
        "agi": 20,
        "special": 4,
        "row": 51
    },
    "grayPriest": {
        "id": "grayPriest",
        "name": "中级魔法师",
        "hp": 190,
        "atk": 20,
        "def": 20,
        "gold": 8,
        "exp": 1,
        "cri": 2,
        "agi": 0,
        "special": [
            30
        ],
        "row": 52
    },
    "redSwordsman": {
        "id": "redSwordsman",
        "name": "剑王",
        "hp": 1065,
        "atk": 894,
        "def": 770,
        "gold": 145,
        "exp": 15,
        "cri": 10,
        "agi": 6,
        "special": 6,
        "row": 53
    },
    "whiteGhost": {
        "id": "whiteGhost",
        "name": "水银人",
        "hp": 810,
        "atk": 802,
        "def": 753,
        "gold": 140,
        "exp": 15,
        "cri": 4,
        "agi": 50,
        "special": [],
        "row": 54
    },
    "poisonZombie": {
        "id": "poisonZombie",
        "name": "毒丧尸",
        "hp": 1310,
        "atk": 1083,
        "def": 951,
        "gold": 152,
        "exp": 16,
        "cri": 4,
        "agi": 2,
        "special": 12,
        "row": 55
    },
    "magicDragon": {
        "id": "magicDragon",
        "name": "巨龙",
        "hp": 1350,
        "atk": 891,
        "def": 668,
        "gold": 400,
        "exp": 41,
        "cri": 8,
        "agi": 5,
        "special": null,
        "row": 56
    },
    "octopus": {
        "id": "octopus",
        "name": "巨型八爪鱼",
        "hp": 700,
        "atk": 295,
        "def": 120,
        "gold": 170,
        "exp": 18,
        "cri": 7,
        "agi": 5,
        "special": 13,
        "row": 57
    },
    "darkFairy": {
        "id": "darkFairy",
        "name": "仙子",
        "hp": 9999999,
        "atk": 10,
        "def": 999,
        "gold": 1,
        "exp": 1,
        "cri": 0,
        "agi": 0,
        "special": null,
        "row": 58
    },
    "greenKnight": {
        "id": "greenKnight",
        "name": "毒龙（已弃用）",
        "hp": 2350,
        "atk": 1400,
        "def": 930,
        "gold": 600,
        "exp": 61,
        "cri": 0,
        "agi": 7,
        "special": 12,
        "row": 59
    },
    "E336": {
        "id": "E336",
        "name": "毒龙",
        "hp": 2350,
        "atk": 1400,
        "def": 930,
        "gold": 600,
        "exp": 61,
        "cri": 15,
        "agi": 7,
        "special": [
            12,
            32
        ],
        "row": 60
    },
    "vamp": {
        "id": "vamp",
        "name": "魔王·格勒第",
        "hp": 5000,
        "atk": 1500,
        "def": 1200,
        "gold": 1,
        "exp": 1,
        "cri": 50,
        "agi": 20,
        "special": [
            4,
            32,
            33
        ],
        "row": 61
    }
};

const XINXIN_ITEMS = {
    "yellowKey": {
        "name": "黄钥匙",
        "type": "key",
        "desc": "可开启黄色石门"
    },
    "blueKey": {
        "name": "蓝钥匙",
        "type": "key",
        "desc": "可开启蓝色铁门"
    },
    "redKey": {
        "name": "红钥匙",
        "type": "key",
        "desc": "可开启红色重甲大门"
    },
    "greenKey": {
        "name": "绿钥匙",
        "type": "key",
        "desc": "可开启绿色结界之门"
    },
    "bigKey": {
        "name": "大钥匙盒",
        "type": "key_box",
        "desc": "各种钥匙各增加 1 把"
    },
    "redGem": {
        "name": "红宝石",
        "type": "gem",
        "value": 3,
        "desc": "攻击力 +3"
    },
    "blueGem": {
        "name": "蓝宝石",
        "type": "gem",
        "value": 3,
        "desc": "防御力 +3"
    },
    "greenGem": {
        "name": "绿宝石",
        "type": "gem",
        "value": 2,
        "desc": "敏捷与闪避率 +2%"
    },
    "redPotion": {
        "name": "伤药",
        "type": "potion",
        "value": 200,
        "desc": "生命值 +200"
    },
    "bluePotion": {
        "name": "高级伤药",
        "type": "potion",
        "value": 500,
        "desc": "生命值 +500"
    },
    "superPotion": {
        "name": "圣水",
        "type": "special",
        "desc": "按比例大幅提升生命值"
    },
    "sword1": {
        "name": "铁剑",
        "type": "weapon",
        "value": 10,
        "desc": "攻击力 +10"
    },
    "sword2": {
        "name": "长剑",
        "type": "weapon",
        "value": 20,
        "desc": "攻击力 +20"
    },
    "sword3": {
        "name": "宝石剑",
        "type": "weapon",
        "value": 40,
        "desc": "攻击力 +40"
    },
    "sword4": {
        "name": "灵光剑",
        "type": "weapon",
        "value": 80,
        "desc": "攻击力 +80"
    },
    "sword5": {
        "name": "神圣剑",
        "type": "weapon",
        "value": 150,
        "desc": "攻击力 +150"
    },
    "shield1": {
        "name": "铁盾",
        "type": "shield",
        "value": 10,
        "desc": "防御力 +10"
    },
    "shield2": {
        "name": "长盾",
        "type": "shield",
        "value": 20,
        "desc": "防御力 +20"
    },
    "shield3": {
        "name": "宝石盾",
        "type": "shield",
        "value": 40,
        "desc": "防御力 +40"
    },
    "shield4": {
        "name": "灵光盾",
        "type": "shield",
        "value": 80,
        "desc": "防御力 +80"
    },
    "shield5": {
        "name": "神圣盾",
        "type": "shield",
        "value": 150,
        "desc": "防御力 +150"
    },
    "cross": {
        "name": "神圣十字架",
        "type": "special",
        "desc": "生命归零时自动复活并恢复 2000 点生命"
    },
    "knife": {
        "name": "屠龙匕首",
        "type": "special",
        "desc": "对巨龙类生物造成致命克制伤害"
    },
    "moneyPocket": {
        "name": "金币袋",
        "type": "special",
        "value": 500,
        "desc": "获得 500 枚金币"
    },
    "shoes": {
        "name": "神行之靴",
        "type": "special",
        "desc": "提升移动速度与身法敏捷"
    },
    "Lvupfly": {
        "name": "飞升羽翼",
        "type": "special",
        "desc": "等级直接提升 1 级"
    },
    "proof_brave": {
        "name": "勇者之证",
        "type": "proof",
        "desc": "转职为勇者：大幅提升攻击力与暴击概率"
    },
    "proof_tyrant": {
        "name": "霸者之证",
        "type": "proof",
        "desc": "转职为霸者：大幅强化防御力"
    },
    "proof_sage": {
        "name": "贤者之证",
        "type": "proof",
        "desc": "转职为贤者：提升魔防抗性"
    },
    "poisonWine": {
        "name": "解毒药水",
        "type": "potion",
        "desc": "解除中毒状态"
    },
    "weakWine": {
        "name": "解衰药水",
        "type": "potion",
        "desc": "解除虚弱状态"
    }
};

const XINXIN_SPRITES = {
    "ground": {
        "file": "terrains.png",
        "row": 0
    },
    "grass": {
        "file": "terrains.png",
        "row": 1
    },
    "grass2": {
        "file": "terrains.png",
        "row": 2
    },
    "yellowWall": {
        "file": "terrains.png",
        "row": 3
    },
    "whiteWall": {
        "file": "terrains.png",
        "row": 4
    },
    "blueWall": {
        "file": "terrains.png",
        "row": 5
    },
    "snowGround": {
        "file": "terrains.png",
        "row": 6
    },
    "ground2": {
        "file": "terrains.png",
        "row": 7
    },
    "ground3": {
        "file": "terrains.png",
        "row": 8
    },
    "ground4": {
        "file": "terrains.png",
        "row": 9
    },
    "sand": {
        "file": "terrains.png",
        "row": 10
    },
    "ground5": {
        "file": "terrains.png",
        "row": 11
    },
    "yellowWall2": {
        "file": "terrains.png",
        "row": 12
    },
    "whiteWall2": {
        "file": "terrains.png",
        "row": 13
    },
    "blueWall2": {
        "file": "terrains.png",
        "row": 14
    },
    "blockWall": {
        "file": "terrains.png",
        "row": 15
    },
    "grayWall": {
        "file": "terrains.png",
        "row": 16
    },
    "white": {
        "file": "terrains.png",
        "row": 17
    },
    "ground6": {
        "file": "terrains.png",
        "row": 18
    },
    "soil": {
        "file": "terrains.png",
        "row": 19
    },
    "star": {
        "file": "Star.png",
        "anim": true
    },
    "lava": {
        "file": "Lava.png",
        "anim": true
    },
    "ice": {
        "file": "terrains.png",
        "row": 22
    },
    "downFloor": {
        "file": "Stair.png",
        "x": 32,
        "y": 0
    },
    "upFloor": {
        "file": "Stair.png",
        "x": 0,
        "y": 0
    },
    "yellowDoor": {
        "file": "Door1.png",
        "x": 0,
        "y": 0,
        "anim": false,
        "openRow": 3
    },
    "blueDoor": {
        "file": "Door1.png",
        "x": 32,
        "y": 0,
        "anim": false,
        "openRow": 4
    },
    "redDoor": {
        "file": "Door1.png",
        "x": 64,
        "y": 0,
        "anim": false,
        "openRow": 5
    },
    "greenDoor": {
        "file": "animates.png",
        "row": 6,
        "anim": false,
        "openRow": 6
    },
    "specialDoor": {
        "file": "Door1.png",
        "x": 96,
        "y": 0,
        "anim": false,
        "openRow": 7
    },
    "steelDoor": {
        "file": "Door4.png",
        "x": 64,
        "y": 0,
        "anim": false,
        "openRow": 11
    },
    "blueShop-left": {
        "file": "Store.png",
        "x": 0,
        "y": 0
    },
    "blueShop-right": {
        "file": "Store.png",
        "x": 64,
        "y": 0
    },
    "pinkShop-left": {
        "file": "Store.png",
        "x": 0,
        "y": 64
    },
    "pinkShop-right": {
        "file": "Store.png",
        "x": 64,
        "y": 64
    },
    "arrowUp": {
        "file": "terrains.png",
        "row": 35
    },
    "arrowDown": {
        "file": "terrains.png",
        "row": 36
    },
    "arrowLeft": {
        "file": "terrains.png",
        "row": 37
    },
    "arrowRight": {
        "file": "terrains.png",
        "row": 38
    },
    "light": {
        "file": "terrains.png",
        "row": 39
    },
    "darkLight": {
        "file": "terrains.png",
        "row": 40
    },
    "ski": {
        "file": "terrains.png",
        "row": 41
    },
    "flower": {
        "file": "terrains.png",
        "row": 42
    },
    "box": {
        "file": "terrains.png",
        "row": 43
    },
    "boxed": {
        "file": "terrains.png",
        "row": 44
    },
    "walldoor": {
        "file": "Terrain.png",
        "x": 32,
        "y": 0
    },
    "walldoor3": {
        "file": "Terrain.png",
        "x": 32,
        "y": 0
    },
    "black": {
        "file": "terrains.png",
        "row": 1
    },
    "waterWall": {
        "file": "animates.png",
        "row": 2
    },
    "blueWallDoor": {
        "file": "animates.png",
        "row": 8
    },
    "yellowWallDoor": {
        "file": "animates.png",
        "row": 9
    },
    "whiteWallDoor": {
        "file": "animates.png",
        "row": 10,
        "anim": false,
        "openRow": 10
    },
    "lavaDoor": {
        "file": "animates.png",
        "row": 12
    },
    "grayLavaDoor": {
        "file": "animates.png",
        "row": 13
    },
    "starDoor": {
        "file": "animates.png",
        "row": 14
    },
    "mockBlueWallDoor": {
        "file": "animates.png",
        "row": 15
    },
    "mockYellowWallDoor": {
        "file": "animates.png",
        "row": 16
    },
    "mockWhiteWallDoor": {
        "file": "animates.png",
        "row": 17
    },
    "iceYellowWallDoor": {
        "file": "animates.png",
        "row": 18
    },
    "starPortal": {
        "file": "animates.png",
        "row": 19
    },
    "exclamation": {
        "file": "animates.png",
        "row": 20
    },
    "portal": {
        "file": "animates.png",
        "row": 21
    },
    "switch": {
        "file": "animates.png",
        "row": 22
    },
    "lavaNet": {
        "file": "animates.png",
        "row": 23
    },
    "poisonNet": {
        "file": "animates.png",
        "row": 24
    },
    "weakNet": {
        "file": "animates.png",
        "row": 25
    },
    "curseNet": {
        "file": "animates.png",
        "row": 26
    },
    "downPortal": {
        "file": "animates.png",
        "row": 27
    },
    "leftPortal": {
        "file": "animates.png",
        "row": 28
    },
    "rightPortal": {
        "file": "animates.png",
        "row": 29
    },
    "upPortal": {
        "file": "animates.png",
        "row": 30
    },
    "water": {
        "file": "animates.png",
        "row": 31
    },
    "walldoor1": {
        "file": "animates.png",
        "row": 10
    },
    "walldoor2": {
        "file": "animates.png",
        "row": 9
    },
    "yellowKey": {
        "file": "items.png",
        "row": 0
    },
    "blueKey": {
        "file": "items.png",
        "row": 1
    },
    "redKey": {
        "file": "items.png",
        "row": 2
    },
    "greenKey": {
        "file": "items.png",
        "row": 3
    },
    "steelKey": {
        "file": "items.png",
        "row": 4
    },
    "bigKey": {
        "file": "items.png",
        "row": 6
    },
    "redGem": {
        "file": "items.png",
        "row": 16
    },
    "blueGem": {
        "file": "items.png",
        "row": 17
    },
    "greenGem": {
        "file": "items.png",
        "row": 18
    },
    "yellowGem": {
        "file": "items.png",
        "row": 19
    },
    "redPotion": {
        "file": "items.png",
        "row": 20
    },
    "bluePotion": {
        "file": "items.png",
        "row": 21
    },
    "greenPotion": {
        "file": "items.png",
        "row": 22
    },
    "yellowPotion": {
        "file": "items.png",
        "row": 23
    },
    "sword0": {
        "file": "items.png",
        "row": 60
    },
    "sword1": {
        "file": "items.png",
        "row": 50
    },
    "sword2": {
        "file": "items.png",
        "row": 51
    },
    "sword3": {
        "file": "items.png",
        "row": 52
    },
    "sword4": {
        "file": "items.png",
        "row": 53
    },
    "sword5": {
        "file": "items.png",
        "row": 54
    },
    "shield0": {
        "file": "items.png",
        "row": 61
    },
    "shield1": {
        "file": "items.png",
        "row": 55
    },
    "shield2": {
        "file": "items.png",
        "row": 56
    },
    "shield3": {
        "file": "items.png",
        "row": 57
    },
    "shield4": {
        "file": "items.png",
        "row": 58
    },
    "shield5": {
        "file": "items.png",
        "row": 59
    },
    "pickaxe": {
        "file": "items.png",
        "row": 45
    },
    "icePickaxe": {
        "file": "items.png",
        "row": 44
    },
    "bomb": {
        "file": "items.png",
        "row": 43
    },
    "centerFly": {
        "file": "items.png",
        "row": 13
    },
    "upFly": {
        "file": "items.png",
        "row": 15
    },
    "downFly": {
        "file": "items.png",
        "row": 14
    },
    "coin": {
        "file": "items.png",
        "row": 11
    },
    "snow": {
        "file": "items.png",
        "row": 41
    },
    "cross": {
        "file": "items.png",
        "row": 40
    },
    "superPotion": {
        "file": "items.png",
        "row": 29
    },
    "earthquake": {
        "file": "items.png",
        "row": 8
    },
    "poisonWine": {
        "file": "items.png",
        "row": 24
    },
    "weakWine": {
        "file": "items.png",
        "row": 25
    },
    "curseWine": {
        "file": "items.png",
        "row": 27
    },
    "superWine": {
        "file": "items.png",
        "row": 28
    },
    "knife": {
        "file": "items.png",
        "row": 42
    },
    "moneyPocket": {
        "file": "items.png",
        "row": 46
    },
    "shoes": {
        "file": "items.png",
        "row": 47
    },
    "hammer": {
        "file": "items.png",
        "row": 48
    },
    "Lvupfly": {
        "file": "items.png",
        "row": 35
    },
    "proof_brave": {
        "file": "items.png",
        "row": 30
    },
    "proof_tyrant": {
        "file": "items.png",
        "row": 34
    },
    "proof_sage": {
        "file": "items.png",
        "row": 31
    },
    "magicKey": {
        "file": "items.png",
        "row": 5
    },
    "keydoor": {
        "file": "items.png",
        "row": 7
    },
    "magic_amulet": {
        "file": "items.png",
        "row": 10
    },
    "agi_fly": {
        "file": "items.png",
        "row": 38
    },
    "lvBoost": {
        "file": "items.png",
        "row": 36
    },
    "I341": {
        "file": "items.png",
        "row": 26
    },
    "I343": {
        "file": "items.png",
        "row": 32
    },
    "I344": {
        "file": "items.png",
        "row": 33
    },
    "I345": {
        "file": "items.png",
        "row": 37
    },
    "I346": {
        "file": "items.png",
        "row": 39
    },
    "I347": {
        "file": "items.png",
        "row": 49
    },
    "I348": {
        "file": "items.png",
        "row": 60
    },
    "I349": {
        "file": "items.png",
        "row": 61
    },
    "book1": {
        "file": "items.png",
        "row": 9
    },
    "fly1": {
        "file": "items.png",
        "row": 12
    },
    "fly": {
        "file": "items.png",
        "row": 63
    },
    "book": {
        "file": "items.png",
        "row": 62
    },
    "I337": {
        "file": "items.png",
        "row": 64
    },
    "man": {
        "file": "npcs.png",
        "row": 0
    },
    "woman": {
        "file": "npcs.png",
        "row": 1
    },
    "thief": {
        "file": "npcs.png",
        "row": 2
    },
    "fairy": {
        "file": "npcs.png",
        "row": 3
    },
    "magician": {
        "file": "npcs.png",
        "row": 4
    },
    "womanMagician": {
        "file": "npcs.png",
        "row": 5
    },
    "oldMan": {
        "file": "npcs.png",
        "row": 6
    },
    "wood": {
        "file": "npcs.png",
        "row": 8
    },
    "pinkShop": {
        "file": "Store.png",
        "x": 32,
        "y": 64
    },
    "blueShop": {
        "file": "Store.png",
        "x": 32,
        "y": 0
    },
    "princess": {
        "file": "npcs.png",
        "row": 11
    },
    "N300": {
        "file": "npcs.png",
        "row": 12
    },
    "N301": {
        "file": "npcs.png",
        "row": 13
    },
    "N302": {
        "file": "npcs.png",
        "row": 14
    },
    "N303": {
        "file": "npcs.png",
        "row": 15
    },
    "N304": {
        "file": "npcs.png",
        "row": 16
    },
    "N305": {
        "file": "npcs.png",
        "row": 17
    },
    "N306": {
        "file": "npcs.png",
        "row": 18
    },
    "N307": {
        "file": "npcs.png",
        "row": 19
    },
    "N308": {
        "file": "npcs.png",
        "row": 20
    },
    "N309": {
        "file": "npcs.png",
        "row": 21
    },
    "N310": {
        "file": "npcs.png",
        "row": 22
    },
    "N311": {
        "file": "npcs.png",
        "row": 23
    },
    "N312": {
        "file": "npcs.png",
        "row": 24
    },
    "N313": {
        "file": "npcs.png",
        "row": 25
    },
    "N314": {
        "file": "npcs.png",
        "row": 26
    },
    "N315": {
        "file": "npcs.png",
        "row": 27
    },
    "N316": {
        "file": "npcs.png",
        "row": 28
    },
    "N317": {
        "file": "npcs.png",
        "row": 29
    },
    "N318": {
        "file": "npcs.png",
        "row": 30
    },
    "N319": {
        "file": "npcs.png",
        "row": 31
    },
    "N332": {
        "file": "npcs.png",
        "row": 32
    },
    "N333": {
        "file": "npcs.png",
        "row": 33
    },
    "N334": {
        "file": "npcs.png",
        "row": 34
    },
    "N335": {
        "file": "npcs.png",
        "row": 35
    },
    "realPrincess": {
        "file": "npcs.png",
        "row": 11
    },
    "N353": {
        "file": "npcs.png",
        "row": 36
    },
    "N354": {
        "file": "npcs.png",
        "row": 37
    },
    "greenSlime": {
        "file": "enemys.png",
        "row": 0
    },
    "redSlime": {
        "file": "enemys.png",
        "row": 1
    },
    "blackSlime": {
        "file": "enemys.png",
        "row": 2
    },
    "slimelord": {
        "file": "enemys.png",
        "row": 3
    },
    "bat": {
        "file": "enemys.png",
        "row": 4
    },
    "bigBat": {
        "file": "enemys.png",
        "row": 5
    },
    "redBat": {
        "file": "enemys.png",
        "row": 6
    },
    "vampire": {
        "file": "enemys.png",
        "row": 7
    },
    "skeleton": {
        "file": "enemys.png",
        "row": 8
    },
    "skeletonSoilder": {
        "file": "enemys.png",
        "row": 9
    },
    "skeletonCaptain": {
        "file": "enemys.png",
        "row": 10
    },
    "ghostSkeleton": {
        "file": "enemys.png",
        "row": 11
    },
    "zombie": {
        "file": "enemys.png",
        "row": 12
    },
    "zombieKnight": {
        "file": "enemys.png",
        "row": 13
    },
    "rock": {
        "file": "enemys.png",
        "row": 14
    },
    "slimeMan": {
        "file": "enemys.png",
        "row": 15
    },
    "bluePriest": {
        "file": "enemys.png",
        "row": 16
    },
    "redPriest": {
        "file": "enemys.png",
        "row": 17
    },
    "brownWizard": {
        "file": "enemys.png",
        "row": 18
    },
    "redWizard": {
        "file": "enemys.png",
        "row": 19
    },
    "yellowGuard": {
        "file": "enemys.png",
        "row": 20
    },
    "blueGuard": {
        "file": "enemys.png",
        "row": 21
    },
    "redGuard": {
        "file": "enemys.png",
        "row": 22
    },
    "swordsman": {
        "file": "enemys.png",
        "row": 23
    },
    "soldier": {
        "file": "enemys.png",
        "row": 24
    },
    "yellowKnight": {
        "file": "enemys.png",
        "row": 25
    },
    "redKnight": {
        "file": "enemys.png",
        "row": 26
    },
    "darkKnight": {
        "file": "enemys.png",
        "row": 27
    },
    "blackKing": {
        "file": "enemys.png",
        "row": 28
    },
    "yellowKing": {
        "file": "enemys.png",
        "row": 29
    },
    "greenKing": {
        "file": "enemys.png",
        "row": 30
    },
    "blueKnight": {
        "file": "enemys.png",
        "row": 31
    },
    "goldSlime": {
        "file": "enemys.png",
        "row": 32
    },
    "poisonSkeleton": {
        "file": "enemys.png",
        "row": 33
    },
    "poisonBat": {
        "file": "enemys.png",
        "row": 34
    },
    "steelRock": {
        "file": "enemys.png",
        "row": 35
    },
    "skeletonPriest": {
        "file": "enemys.png",
        "row": 36
    },
    "skeletonKing": {
        "file": "enemys.png",
        "row": 37
    },
    "skeletonWizard": {
        "file": "enemys.png",
        "row": 38
    },
    "redSkeletonCaption": {
        "file": "enemys.png",
        "row": 39
    },
    "badHero": {
        "file": "enemys.png",
        "row": 40
    },
    "demon": {
        "file": "enemys.png",
        "row": 41
    },
    "demonPriest": {
        "file": "enemys.png",
        "row": 42
    },
    "goldHornSlime": {
        "file": "enemys.png",
        "row": 43
    },
    "redKing": {
        "file": "enemys.png",
        "row": 44
    },
    "whiteKing": {
        "file": "enemys.png",
        "row": 45
    },
    "blackMagician": {
        "file": "enemys.png",
        "row": 46
    },
    "silverSlime": {
        "file": "enemys.png",
        "row": 47
    },
    "swordEmperor": {
        "file": "enemys.png",
        "row": 48
    },
    "whiteHornSlime": {
        "file": "enemys.png",
        "row": 49
    },
    "badPrincess": {
        "file": "enemys.png",
        "row": 50
    },
    "badFairy": {
        "file": "enemys.png",
        "row": 51
    },
    "grayPriest": {
        "file": "enemys.png",
        "row": 52
    },
    "redSwordsman": {
        "file": "enemys.png",
        "row": 53
    },
    "whiteGhost": {
        "file": "enemys.png",
        "row": 54
    },
    "poisonZombie": {
        "file": "enemys.png",
        "row": 55
    },
    "magicDragon": {
        "file": "enemys.png",
        "row": 56
    },
    "octopus": {
        "file": "enemys.png",
        "row": 57
    },
    "darkFairy": {
        "file": "enemys.png",
        "row": 58
    },
    "greenKnight": {
        "file": "enemys.png",
        "row": 59
    },
    "E336": {
        "file": "enemys.png",
        "row": 60
    },
    "vamp": {
        "file": "enemys.png",
        "row": 61
    },
    "floor": {
        "file": "Floor.png",
        "x": 0,
        "y": 0
    },
    "wall": {
        "file": "Terrain.png",
        "x": 32,
        "y": 0
    },
    "blue_wall": {
        "file": "terrains.png",
        "row": 5
    }
};

if (typeof window !== "undefined") {
    window.XINXIN_MAPS = XINXIN_MAPS;
    window.XINXIN_MONSTERS = XINXIN_MONSTERS;
    window.XINXIN_ITEMS = XINXIN_ITEMS;
    window.XINXIN_SPRITES = XINXIN_SPRITES;
}
if (typeof module !== "undefined") {
    module.exports = { XINXIN_MAPS, XINXIN_MONSTERS, XINXIN_ITEMS, XINXIN_SPRITES };
}
