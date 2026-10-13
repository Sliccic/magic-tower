/**
 * 经典魔塔 - 原版精灵图渲染引擎
 * 完整加载原版素材：Hero.png、Terrain.png、Enemy1~15.png、Item1.png、Gem.png、Weapon.png 等
 * 深度整合 mota-js 完整高清图集：enemys.png, items.png, npcs.png, terrains.png, animates.png
 * 100% 原汁原味像素还原！
 */
class OriginalSpriteSheet {
    constructor() {
        this.images = {};
        this.loaded = false;
        this.animFrame = 0;
        this.animSteps = [0, 32, 96, 64]; // 原版动画跳帧步长
        this.loadAssets();
        this.initTicker();
    }

    loadAssets() {
        const fileList = [
            'Hero.png', 'Terrain.png', 'Floor.png', 'Stair.png', 'Store.png',
            'Door1.png', 'Door2.png', 'Door3.png', 'Door4.png',
            'Item1.png', 'Item2.png', 'Item3.png', 'Gem.png', 'Weapon.png',
            'Enemy1.png', 'Enemy2.png', 'Enemy3.png', 'Enemy4.png', 'Enemy5.png',
            'Enemy6.png', 'Enemy7.png', 'Enemy8.png', 'Enemy9.png', 'Enemy10.png',
            'Enemy11.png', 'Enemy12.png', 'Enemy13.png', 'Enemy14.png', 'Enemy15.png',
            'Npc1.png', 'Npc2.png', 'Npc3.png', 'Battle1.png',
            'Star.png', 'Lava.png',
            'enemys.png', 'items.png', 'npcs.png', 'terrains.png', 'animates.png',
            'fly.png'
        ];

        let loadedCount = 0;
        fileList.forEach(file => {
            const img = new Image();
            img.src = `res/${file}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === fileList.length) {
                    this.loaded = true;
                    if (window.game) {
                        window.game.updateHUD();
                        window.game.render();
                    }
                }
            };
            img.onerror = () => {
                console.warn(`Failed to load asset: res/${file}`);
                loadedCount++;
                if (loadedCount === fileList.length) {
                    this.loaded = true;
                }
            };
            this.images[file] = img;
        });

        // 默认定义表
        this.defs = {
            'floor': { file: 'Floor.png', x: 0, y: 0 },
            'wall': { file: 'Terrain.png', x: 32, y: 0 },
            'fake_wall': { file: 'Terrain.png', x: 32, y: 0 },
            'star_wall': { file: 'Star.png', anim: true },
            'lava': { file: 'Lava.png', anim: true },
            'stair_up': { file: 'Stair.png', x: 0, y: 0 },
            'stair_down': { file: 'Stair.png', x: 32, y: 0 },
            'arrow_right': { file: 'terrains.png', row: 38 },

            // 门 (静态闭合门：黄门x=0, 蓝门x=32, 红门x=64, 铁门Door4 x=64, 机关特种门x=96，严禁动画变色闪烁)
            'door_yellow': { file: 'Door1.png', x: 0, y: 0, anim: false, openRow: 3 },
            'door_blue': { file: 'Door1.png', x: 32, y: 0, anim: false, openRow: 4 },
            'door_red': { file: 'Door1.png', x: 64, y: 0, anim: false, openRow: 5 },
            'door_iron': { file: 'Door4.png', x: 64, y: 0, anim: false, openRow: 11 },
            'door_special': { file: 'Door1.png', x: 96, y: 0, anim: false, openRow: 7 },

            // 钥匙与消耗品 (原版Gem.png / Item1.png)
            'key_yellow': { file: 'Item1.png', x: 0, y: 0 },
            'key_blue': { file: 'Item1.png', x: 32, y: 0 },
            'key_red': { file: 'Item1.png', x: 64, y: 0 },
            'key_box': { file: 'Item1.png', x: 96, y: 0 },
            'potion_red': { file: 'Gem.png', x: 0, y: 32 },
            'potion_blue': { file: 'Gem.png', x: 32, y: 32 },
            'book': { file: 'Item1.png', x: 32, y: 64 },

            // 宝石与神物
            'gem_red': { file: 'Gem.png', x: 0, y: 0 },
            'gem_blue': { file: 'Gem.png', x: 32, y: 0 },
            'cross': { file: 'items.png', row: 40 },
            'holy_water': { file: 'items.png', row: 49 },
            'coin': { file: 'items.png', row: 11 },
            'fly': { file: 'fly.png', x: 0, y: 0 },
            'center_fly': { file: 'items.png', row: 13 },
            'ice_pickaxe': { file: 'items.png', row: 44 },
            'big_fly': { file: 'fly.png', x: 0, y: 0 },
            'up_fly': { file: 'fly.png', x: 0, y: 0 },
            'down_fly': { file: 'fly.png', x: 0, y: 0 },
            'wand1': { file: 'items.png', row: 30 },
            'wand2': { file: 'items.png', row: 31 },
            'pickaxe': { file: 'items.png', row: 45 },

            // 武器与防具
            'sword_iron': { file: 'Weapon.png', x: 0, y: 0 },
            'sword_silver': { file: 'Weapon.png', x: 32, y: 0 },
            'sword_knight': { file: 'Weapon.png', x: 64, y: 0 },
            'sword_holy': { file: 'Weapon.png', x: 96, y: 0 },
            'sword_god': { file: 'Weapon.png', x: 0, y: 32 },
            'shield_iron': { file: 'Weapon.png', x: 0, y: 64 },
            'shield_silver': { file: 'Weapon.png', x: 32, y: 64 },
            'shield_knight': { file: 'Weapon.png', x: 64, y: 64 },
            'shield_holy': { file: 'Weapon.png', x: 96, y: 64 },
            'shield_god': { file: 'Weapon.png', x: 0, y: 96 },

            // 完整 32 种怪物映射 (全部连接到 enemys.png 像素动画图集)
            'slime_green': { file: 'enemys.png', row: 0 },
            'slime_red': { file: 'enemys.png', row: 1 },
            'slime_black': { file: 'enemys.png', row: 2 },
            'slime_king': { file: 'enemys.png', row: 3 },
            'bat_small': { file: 'enemys.png', row: 4 },
            'bat_big': { file: 'enemys.png', row: 5 },
            'bat_red': { file: 'enemys.png', row: 6 },
            'boss_lord': { file: 'enemys.png', row: 7 },
            'skeleton_normal': { file: 'enemys.png', row: 8 },
            'skeleton_sword': { file: 'enemys.png', row: 9 },
            'skeleton_captain': { file: 'enemys.png', row: 10 },
            'ghost_captain': { file: 'enemys.png', row: 11 },
            'orc': { file: 'enemys.png', row: 12 },
            'orc_knight': { file: 'enemys.png', row: 13 },
            'rock': { file: 'enemys.png', row: 14 },
            'shadow_warrior': { file: 'enemys.png', row: 15 },
            'priest_junior': { file: 'enemys.png', row: 16 },
            'priest_senior': { file: 'enemys.png', row: 17 },
            'wizard_apprentice': { file: 'enemys.png', row: 18 },
            'wizard_red': { file: 'enemys.png', row: 19 },
            'guard_junior': { file: 'enemys.png', row: 20 },
            'guard_senior': { file: 'enemys.png', row: 21 },
            'guard_gold': { file: 'enemys.png', row: 22 },
            'swordsman': { file: 'enemys.png', row: 23 },
            'soldier_ghost': { file: 'enemys.png', row: 24 },
            'knight_iron': { file: 'enemys.png', row: 25 },
            'knight_gold': { file: 'enemys.png', row: 26 },
            'dark_knight': { file: 'enemys.png', row: 27 },
            'boss_captain': { file: 'enemys.png', row: 44 },
            'white_knight': { file: 'enemys.png', row: 45 },
            'black_magician': { file: 'enemys.png', row: 46 },
            'boss_dragon': { file: 'enemys.png', row: 56 },
            'vampire2': { file: 'enemys.png', row: 7 },
            'vampire3': { file: 'enemys.png', row: 7 },
            'redKing2': { file: 'enemys.png', row: 44 },

            // 魔龙 3x3 身体外围拼接瓦片
            'dragon_lt': { file: 'npcs.png', row: 20 },
            'dragon_t':  { file: 'npcs.png', row: 21 },
            'dragon_rt': { file: 'npcs.png', row: 22 },
            'dragon_l':  { file: 'npcs.png', row: 23 },
            'dragon_c':  { file: 'npcs.png', row: 24 },
            'dragon_r':  { file: 'npcs.png', row: 25 },
            'dragon_lb': { file: 'npcs.png', row: 26 },
            'dragon_rb': { file: 'npcs.png', row: 27 },

            // NPC (原版素材对应：Npc1 0=老人, 32=商人, 64=小偷, 96=仙子；Npc2 96=公主)
            'npc_oldman': { file: 'npcs.png', row: 0 },
            'npc_merchant': { file: 'npcs.png', row: 1 },
            'npc_thief': { file: 'npcs.png', row: 2 },
            'npc_fairy': { file: 'npcs.png', row: 3 },
            'npc_princess': { file: 'npcs.png', row: 11 },

            // 商店与圣坛 (Store.png: y=0为蓝色经验圣坛, y=64为金币圣坛；x=0为左翼, x=32为主圣坛, x=64为右翼)
            'shop': { file: 'Store.png', x: 32, y: 64 },
            'shop_gold': { file: 'Store.png', x: 32, y: 64 },
            'shop_exp': { file: 'Store.png', x: 32, y: 0 },
            'altar_gold_left': { file: 'Store.png', x: 0, y: 64 },
            'altar_gold_mid': { file: 'Store.png', x: 32, y: 64 },
            'altar_gold_right': { file: 'Store.png', x: 64, y: 64 },
            'altar_blue_left': { file: 'Store.png', x: 0, y: 0 },
            'altar_blue_mid': { file: 'Store.png', x: 32, y: 0 },
            'altar_blue_right': { file: 'Store.png', x: 64, y: 0 }
        };

        this.mergeXinxinSprites();
    }

    mergeXinxinSprites() {
        if (typeof window !== 'undefined' && window.XINXIN_SPRITES) {
            Object.assign(this.defs, window.XINXIN_SPRITES);
        }
    }

    initTicker() {
        setInterval(() => {
            this.animFrame = (this.animFrame + 1) % 4;
        }, 220);
    }

    // 在目标画布绘制原版瓦片/角色
    draw(ctx, id, dx, dy, dw = 32, dh = 32, options = {}) {
        // 勇士单独处理
        if (id === 'hero') {
            const heroImg = this.images['Hero.png'] || this.images['hero.png'];
            if (!heroImg) return;

            const dirRow = {
                'down': 0,
                'left': 32,
                'right': 64,
                'up': 96
            }[options.direction || 'down'] || 0;

            const frameX = this.animSteps[this.animFrame];
            ctx.drawImage(heroImg, frameX, dirRow, 32, 32, dx, dy, dw, dh);
            return;
        }

        const def = this.defs[id];
        if (!def) return;

        // 开门动画单独处理：使用 animates.png
        if (options.openingFrame !== undefined && def.openRow !== undefined) {
            const animImg = this.images['animates.png'];
            if (animImg) {
                const sx = Math.min(options.openingFrame, 3) * 32;
                const sy = def.openRow * 32;
                ctx.drawImage(animImg, sx, sy, 32, 32, dx, dy, dw, dh);
                return;
            }
        }

        const img = this.images[def.file];
        if (!img) return;

        let sx = def.x || 0;
        let sy = def.y || 0;

        if (def.file === 'Star.png' || def.file === 'Lava.png') {
            sx = (this.animFrame % 4) * 32;
            sy = 0;
        } else if (def.file === 'enemys.png') {
            sx = (this.animFrame % 2) * 32;
            sy = def.row * 32;
        } else if (def.file === 'npcs.png') {
            sx = (this.animFrame % 2) * 32;
            sy = def.row * 32;
        } else if (def.file === 'items.png' || def.file === 'terrains.png') {
            sx = 0;
            sy = def.row * 32;
        } else if (def.file === 'animates.png') {
            sx = (this.animFrame % 4) * 32;
            sy = def.row * 32;
        } else {
            if (def.anim) {
                sx = this.animSteps[this.animFrame];
            }
        }

        ctx.drawImage(img, sx, sy, 32, 32, dx, dy, dw, dh);
    }

    // 获取离线裁剪图像 (供 HUD 图标使用)
    getIconCanvas(id) {
        const c = document.createElement('canvas');
        c.width = 32;
        c.height = 32;
        const ctx = c.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        this.draw(ctx, id, 0, 0, 32, 32);
        return c;
    }
}

window.spriteSheet = new OriginalSpriteSheet();
