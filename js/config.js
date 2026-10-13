/**
 * 经典魔塔 - 游戏配置、怪物数据、道具字典及数值公式
 */
const TOWER_CONFIG = {
    TILE_SIZE: 32,
    GRID_WIDTH: 13,
    GRID_HEIGHT: 13,

    // 经典初始英雄属性 (24层胖老鼠原版模式)
    INITIAL_HERO: {
        hp: 1000,
        atk: 10,
        def: 10,
        gold: 0,
        exp: 0,
        level: 1,
        yellowKeys: 1,
        blueKeys: 1,
        redKeys: 1,
        floor: 0, // 0表示地牢序章
        x: 6,
        y: 10,
        direction: 'up', // 'up', 'down', 'left', 'right'
        sword: '无',
        shield: '无',
        hasBook: true, // 默认解锁怪物手册方能随时查看
        hasCompass: true,
        hasCross: false,
        hasFly: false,
        hasBigFly: false,
        hasCenterFly: false,
        hasCoin: false,
        hasIcePickaxe: false,
        hasPickaxe: false,
        maxVisitedFloor: 0,
        inventory: ['book']
    },

    // 怪物字典定义
    MONSTERS: {
        'slime_green': {
            id: 'slime_green',
            name: '绿史莱姆',
            hp: 50,
            atk: 20,
            def: 1,
            gold: 1,
            exp: 1,
            desc: '塔中最弱小的泥状怪物。'
        },
        'slime_red': {
            id: 'slime_red',
            name: '红史莱姆',
            hp: 70,
            atk: 15,
            def: 2,
            gold: 2,
            exp: 2,
            desc: '稍微具备些攻击力的红色史莱姆。'
        },
        'slime_black': {
            id: 'slime_black',
            name: '黑史莱姆',
            hp: 200,
            atk: 35,
            def: 10,
            gold: 5,
            exp: 5,
            desc: '体内凝聚着暗影毒素的黑色史莱姆。'
        },
        'slime_king': {
            id: 'slime_king',
            name: '史莱姆王',
            hp: 360,
            atk: 130,
            def: 20,
            gold: 30,
            exp: 25,
            desc: '史莱姆族的领袖，身躯庞大。'
        },
        'bat_small': {
            id: 'bat_small',
            name: '小蝙蝠',
            hp: 100,
            atk: 20,
            def: 5,
            gold: 3,
            exp: 3,
            desc: '敏捷的吸血飞蝠。'
        },
        'bat_big': {
            id: 'bat_big',
            name: '大蝙蝠',
            hp: 150,
            atk: 65,
            def: 30,
            gold: 10,
            exp: 8,
            desc: '栖息在深处的巨大血蝠。'
        },
        'bat_red': {
            id: 'bat_red',
            name: '红蝙蝠',
            hp: 550,
            atk: 160,
            def: 90,
            gold: 25,
            exp: 20,
            desc: '嗜血如命的凶猛红蝠。'
        },
        'skeleton_normal': {
            id: 'skeleton_normal',
            name: '骷髅人',
            hp: 110,
            atk: 25,
            def: 5,
            gold: 5,
            exp: 4,
            desc: '手持骨棒的白骨骷髅。'
        },
        'skeleton_sword': {
            id: 'skeleton_sword',
            name: '骷髅剑士',
            hp: 150,
            atk: 40,
            def: 20,
            gold: 8,
            exp: 6,
            desc: '装备锈剑与木盾的骷髅兵。'
        },
        'skeleton_captain': {
            id: 'skeleton_captain',
            name: '骷髅队长',
            hp: 400,
            atk: 90,
            def: 50,
            gold: 15,
            exp: 12,
            desc: '挥舞双刀的精锐骷髅军官。'
        },
        'wizard_apprentice': {
            id: 'wizard_apprentice',
            name: '初级巫师',
            hp: 125,
            atk: 50,
            def: 25,
            gold: 10,
            exp: 7,
            desc: '研习火系魔法的学徒。'
        },
        'wizard_red': {
            id: 'wizard_red',
            name: '高级巫师',
            hp: 260,
            atk: 120,
            def: 70,
            gold: 20,
            exp: 17,
            desc: '掌握烈焰魔法的邪恶法师。'
        },
        'guard_junior': {
            id: 'guard_junior',
            name: '初级卫兵',
            hp: 450,
            atk: 150,
            def: 90,
            gold: 22,
            exp: 19,
            desc: '守卫魔塔走廊的装甲重兵。'
        },
        'guard_senior': {
            id: 'guard_senior',
            name: '高级卫兵',
            hp: 1250,
            atk: 500,
            def: 400,
            gold: 55,
            exp: 55,
            desc: '全副金甲重盔的近卫队长。'
        },
        'knight_iron': {
            id: 'knight_iron',
            name: '铁骑士',
            hp: 900,
            atk: 450,
            def: 330,
            gold: 50,
            exp: 50,
            desc: '身着厚重铁甲的亡灵铁骑。'
        },
        'knight_gold': {
            id: 'knight_gold',
            name: '黄金骑士',
            hp: 1600,
            atk: 1300,
            def: 1200,
            gold: 115,
            exp: 100,
            desc: '魔塔守备核心力量，攻守兼备。'
        },
        'ghost_captain': {
            id: 'ghost_captain',
            name: '冥队长',
            hp: 2500,
            atk: 900,
            def: 850,
            gold: 84,
            exp: 75,
            desc: '镇守要塞的冥灵队长。'
        },
        'orc': {
            id: 'orc',
            name: '兽人',
            hp: 300,
            atk: 75,
            def: 45,
            gold: 13,
            exp: 10,
            desc: '强壮凶悍的蛮荒兽人。'
        },
        'orc_knight': {
            id: 'orc_knight',
            name: '兽人武士',
            hp: 900,
            atk: 450,
            def: 330,
            gold: 50,
            exp: 50,
            desc: '手持巨斧的嗜血兽人武士。'
        },
        'rock': {
            id: 'rock',
            name: '石头人',
            hp: 500,
            atk: 115,
            def: 65,
            gold: 15,
            exp: 15,
            desc: '浑身由坚岩筑成的巨石怪。'
        },
        'shadow_warrior': {
            id: 'shadow_warrior',
            name: '影子战士',
            hp: 3100,
            atk: 1150,
            def: 1050,
            gold: 92,
            exp: 80,
            desc: '穿梭在阴影中的隐匿暗杀者。'
        },
        'priest_junior': {
            id: 'priest_junior',
            name: '初级法师',
            hp: 125,
            atk: 50,
            def: 25,
            gold: 10,
            exp: 7,
            desc: '掌控基础奥术的蓝袍法师。'
        },
        'priest_senior': {
            id: 'priest_senior',
            name: '高级法师',
            hp: 100,
            atk: 200,
            def: 110,
            gold: 30,
            exp: 25,
            desc: '掌控高阶爆炎的红袍法师。'
        },
        'guard_gold': {
            id: 'guard_gold',
            name: '高级卫兵',
            hp: 1500,
            atk: 560,
            def: 460,
            gold: 60,
            exp: 60,
            desc: '身披重铠的高级精锐守卫。'
        },
        'swordsman': {
            id: 'swordsman',
            name: '双手剑士',
            hp: 1200,
            atk: 620,
            def: 520,
            gold: 65,
            exp: 75,
            desc: '剑术高超的双持死士。'
        },
        'soldier_ghost': {
            id: 'soldier_ghost',
            name: '冥战士',
            hp: 2000,
            atk: 680,
            def: 590,
            gold: 70,
            exp: 65,
            desc: '死灵军团核心步卒。'
        },
        'dark_knight': {
            id: 'dark_knight',
            name: '灵武士',
            hp: 1200,
            atk: 980,
            def: 900,
            gold: 88,
            exp: 75,
            desc: '幽暗深渊的灵武战士。'
        },
        'white_knight': {
            id: 'white_knight',
            name: '白衣武士',
            hp: 1300,
            atk: 300,
            def: 150,
            gold: 40,
            exp: 35,
            desc: '守备祭坛的白衣骑士。'
        },
        'black_magician': {
            id: 'black_magician',
            name: '灵法师',
            hp: 1500,
            atk: 830,
            def: 730,
            gold: 80,
            exp: 70,
            desc: '精通黑暗诅咒的灵族法师。'
        },
        'boss_captain': {
            id: 'boss_captain',
            name: '红衣魔王 (10F Boss)',
            hp: 15000,
            atk: 1000,
            def: 1000,
            gold: 100,
            exp: 100,
            desc: '镇守魔塔第10层的红衣魔王！'
        },
        'boss_lord': {
            id: 'boss_lord',
            name: '冥灵魔王 (20F Final Boss)',
            hp: 30000,
            atk: 1700,
            def: 1500,
            gold: 250,
            exp: 220,
            desc: '统治整座魔塔的邪灵魔王！'
        },
        'vampire2': {
            id: 'vampire2',
            name: '冥灵魔王 (狂怒形态)',
            hp: 45000,
            atk: 2550,
            def: 2250,
            gold: 312,
            exp: 275,
            desc: '暴怒觉醒的冥灵魔王。'
        },
        'vampire3': {
            id: 'vampire3',
            name: '冥灵魔王 (完全体)',
            hp: 60000,
            atk: 3400,
            def: 3000,
            gold: 390,
            exp: 343,
            desc: '完全觉醒的极境冥灵魔王。'
        },
        'redKing2': {
            id: 'redKing2',
            name: '红衣魔王 (狂暴)',
            hp: 20000,
            atk: 1333,
            def: 1333,
            gold: 133,
            exp: 133,
            desc: '极度凶残的狂暴红衣魔王。'
        },
        'boss_dragon': {
            id: 'boss_dragon',
            name: '魔龙 (24F 地下终极Boss)',
            hp: 99999,
            atk: 9999,
            def: 5000,
            gold: 999,
            exp: 999,
            desc: '栖息在地下龙渊的焚天魔龙，拥有毁天灭地的威能！'
        }
    },

    // 道具字典
    ITEMS: {
        'key_yellow': { name: '黄钥匙', type: 'key', desc: '可开启黄色石门' },
        'key_blue': { name: '蓝钥匙', type: 'key', desc: '可开启蓝色铁门' },
        'key_red': { name: '红钥匙', type: 'key', desc: '可开启红色重甲大门' },
        'key_box': { name: '大钥匙盒', type: 'key_box', desc: '黄、蓝、红钥匙各 +1' },
        'potion_red': { name: '红药水', type: 'potion', value: 200, desc: '生命值 +200' },
        'potion_blue': { name: '蓝药水', type: 'potion', value: 500, desc: '生命值 +500' },
        'gem_red': { name: '红宝石', type: 'gem', value: 3, desc: '攻击力 +3' },
        'gem_blue': { name: '蓝宝石', type: 'gem', value: 3, desc: '防御力 +3' },
        'sword_iron': { name: '铁剑', type: 'weapon', value: 10, desc: '攻击力 +10' },
        'sword_silver': { name: '银剑', type: 'weapon', value: 20, desc: '攻击力 +20' },
        'sword_knight': { name: '骑士剑', type: 'weapon', value: 70, desc: '攻击力 +70' },
        'sword_holy': { name: '圣剑', type: 'weapon', value: 80, desc: '攻击力 +80' },
        'sword_god': { name: '神圣剑', type: 'weapon', value: 150, desc: '攻击力 +150' },
        'shield_iron': { name: '铁盾', type: 'shield', value: 10, desc: '防御力 +10' },
        'shield_silver': { name: '银盾', type: 'shield', value: 20, desc: '防御力 +20' },
        'shield_knight': { name: '骑士盾', type: 'shield', value: 85, desc: '防御力 +85' },
        'shield_holy': { name: '圣盾', type: 'shield', value: 80, desc: '防御力 +80' },
        'shield_god': { name: '神圣盾', type: 'shield', value: 190, desc: '防御力 +190' },
        'book': { name: '怪物手册', type: 'special', desc: '可实时查看所有怪物的攻防与战斗预测' },
        'cross': { name: '十字架', type: 'special', desc: '神圣遗物，攻防各提升 20%' },
        'holy_water': { name: '圣水', type: 'special', desc: '令当前生命值直接翻倍' },
        'coin': { name: '幸运金币', type: 'special', desc: '击败怪物时获得双倍金币' },
        'fly': { name: '楼层传送器', type: 'special', desc: '可自由往返到达过的楼层' },
        'center_fly': { name: '中心对称飞行器', type: 'special', desc: '可在中心对称坐标间瞬移' },
        'ice_pickaxe': { name: '破冰镐', type: 'special', desc: '可凿开严寒冰霜墙' },
        'big_fly': { name: '大飞行器', type: 'special', desc: '高阶楼层传送圣器' },
        'up_fly': { name: '上楼飞行器', type: 'special', desc: '可直接飞升至上一楼层' },
        'down_fly': { name: '下楼飞行器', type: 'special', desc: '可直接降落至下一楼层' },
        'wand1': { name: '地震神杖', type: 'special', desc: '引发震荡击碎机关' },
        'wand2': { name: '风之神杖', type: 'special', desc: '掌控魔塔气流的神杖' },
        'pickaxe': { name: '破墙镐', type: 'special', desc: '可瞬间砸碎一堵阻挡前进的坚硬墙壁' }
    },

    // 战斗伤害模拟与计算
    calculateBattle: function(hero, monster, cheats = {}) {
        // 作弊判定：一击必杀
        if (cheats.oneHitKO) {
            return {
                canWin: true,
                damage: 0,
                rounds: 1,
                heroDmgPerTurn: monster.hp,
                enemyDmgPerTurn: 0,
                desc: '一击必杀'
            };
        }

        // 作弊判定：绝对无敌
        if (cheats.godMode) {
            const heroDmg = Math.max(1, hero.atk - monster.def);
            const rounds = Math.ceil(monster.hp / heroDmg);
            return {
                canWin: true,
                damage: 0,
                rounds: rounds,
                heroDmgPerTurn: heroDmg,
                enemyDmgPerTurn: 0,
                desc: '绝对无敌'
            };
        }

        // 破防判定：主角攻击力必须大于怪物防御力
        let heroDmgPerRound = hero.atk - monster.def;
        if (hero.hasKnife && (monster.id === 'magicDragon' || monster.id === 'boss_dragon')) {
            heroDmgPerRound = Math.max(1, heroDmgPerRound * 2);
        }
        if (heroDmgPerRound <= 0) {
            return {
                canWin: false,
                damage: Infinity,
                rounds: Infinity,
                heroDmgPerTurn: 0,
                enemyDmgPerTurn: monster.atk - hero.def,
                desc: '无法破防'
            };
        }

        // 需要的回合数
        const rounds = Math.ceil(monster.hp / heroDmgPerRound);

        // 怪物每回合对英雄造成的伤害
        const enemyDmgPerRound = Math.max(0, monster.atk - hero.def);

        // 主角先手攻击，当回合数为 rounds 时，怪物反击 (rounds - 1) 次
        const totalDamage = (rounds - 1) * enemyDmgPerRound;

        const effectiveHp = hero.hp + (hero.hasCross ? 2000 : 0);
        const canWin = effectiveHp > totalDamage;

        return {
            canWin: canWin,
            damage: totalDamage,
            rounds: rounds,
            heroDmgPerTurn: heroDmgPerRound,
            enemyDmgPerTurn: enemyDmgPerRound,
            desc: canWin ? (totalDamage === 0 ? '无伤战胜' : `战损 ${totalDamage} HP`) : '生命不足'
        };
    }
};

window.TOWER_CONFIG = TOWER_CONFIG;
