/**
 * 经典魔塔 - 核心游戏引擎
 * 负责渲染循环、碰撞检测、战斗运算、道具拾取、楼层跃迁与音画联动
 */
class GameEngine {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.tileSize = 48; // 画布缩放显示尺寸 (32像素经最近邻放大至48)

        this.hero = null;
        this.floorMaps = {}; // 运行时地图克隆副本
        this.cheats = {
            noclip: false,
            godMode: false,
            oneHitKO: false,
            masterKey: false,
            alwaysShowDamage: true,
            superSpeed: false
        };

        this.isBusy = false; // 是否在战斗或对话中
        this.battleModal = null;
        this.dialogModal = null;
        this.shopModal = null;
        this.messageToast = null;
        this.onStateChange = null; // 状态回调给 GM 后台

        this.goldShopPrices = { 3: 20, 11: 100 };
    }

    init(canvasElement) {
        this.canvas = canvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false;

        this.canvas.width = TOWER_CONFIG.GRID_WIDTH * this.tileSize;
        this.canvas.height = TOWER_CONFIG.GRID_HEIGHT * this.tileSize;

        this.resetGame(false); // 初始静默重置，不弹出仙女对话
        this.bindEvents();
        this.startLoop();
    }

    // 重置或新建游戏
    resetGame(version = null) {
        if (version) {
            this.currentVersion = version;
        } else if (!this.currentVersion) {
            this.currentVersion = 'classic21';
        }

        // 深拷贝初始数据
        this.hero = JSON.parse(JSON.stringify(TOWER_CONFIG.INITIAL_HERO));

        if (this.currentVersion === 'xinxin') {
            const rawXinxinMaps = (typeof window !== 'undefined' && window.XINXIN_MAPS) ? window.XINXIN_MAPS : (typeof XINXIN_MAPS !== 'undefined' ? XINXIN_MAPS : null);
            this.floorMaps = JSON.parse(JSON.stringify(rawXinxinMaps || {}));
            this.hero.floor = 'main0'; // 新新魔塔从主塔入口 0F 出发
            this.hero.x = 6;
            this.hero.y = 11; // 0F 开阔空地，朝上
            this.hero.direction = 'up';
            this.hero.hp = 1000;
            this.hero.atk = 10;
            this.hero.def = 10;
            this.hero.gold = 0;
            this.hero.exp = 0;
            this.hero.yellowKeys = 1;
            this.hero.blueKeys = 1;
            this.hero.redKeys = 1;
            this.hero.greenKeys = 0;
            this.hero.cri = 5;
            this.hero.agi = 2;
            this.hero.level = 1;
            this.hero.sword = '无';
            this.hero.shield = '无';
            this.hero.maxVisitedFloor = 'main0';
            this.hero.hasBook = true;
            this.hero.inventory = ['book'];

            if (typeof window !== 'undefined') {
                if (window.XINXIN_MONSTERS) Object.assign(TOWER_CONFIG.MONSTERS, window.XINXIN_MONSTERS);
                if (window.XINXIN_ITEMS) Object.assign(TOWER_CONFIG.ITEMS, window.XINXIN_ITEMS);
                if (window.spriteSheet && window.XINXIN_SPRITES) Object.assign(window.spriteSheet.defs, window.XINXIN_SPRITES);
            }
            this.showMessage('欢迎来到新新魔塔（56层策略革新版 - cos105hk）！');
        } else if (this.currentVersion === 'tower50') {
            const raw50Maps = (typeof window !== 'undefined' && window.TOWER_50_MAPS) ? window.TOWER_50_MAPS : (typeof TOWER_50_MAPS !== 'undefined' ? TOWER_50_MAPS : null);
            this.floorMaps = JSON.parse(JSON.stringify(raw50Maps || {}));
            this.hero.floor = 1; // 50层标准从 1F 出发
            this.hero.x = 6;
            this.hero.y = 11; // 1F开阔空地
            this.hero.direction = 'up';
            this.hero.hp = 1000;
            this.hero.atk = 10;
            this.hero.def = 10;
            this.hero.gold = 0;
            this.hero.exp = 0;
            this.hero.yellowKeys = 1;
            this.hero.blueKeys = 1;
            this.hero.redKeys = 0;
            this.hero.maxVisitedFloor = 1;
            this.hero.goldShopTimes = 0;
            this.showMessage('欢迎来到经典 50层魔塔 (TSW 渡部直 1996)！');
        } else {
            const raw21Maps = (typeof window !== 'undefined' && window.CLASSIC_21_MAPS) ? window.CLASSIC_21_MAPS : (typeof CLASSIC_21_MAPS !== 'undefined' ? CLASSIC_21_MAPS : null);
            this.floorMaps = JSON.parse(JSON.stringify(raw21Maps || {}));
            this.hero.floor = 0; // 21/24层从 0F 地下牢房出发
            this.hero.x = 6;
            this.hero.y = 10;
            this.hero.direction = 'up';
            this.hero.maxVisitedFloor = 0;
            this.goldShopPrices = { 3: 20, 11: 100 };
            this.showMessage('欢迎来到经典 21/24层魔塔（胖老鼠版）！');
        }

        this.isBusy = false;
        this.updateHUD();

        if (window.gmPanel && typeof window.gmPanel.populateFloorOptions === 'function') {
            window.gmPanel.populateFloorOptions();
        }
    }

    // 加载存档
    loadSaveData(data) {
        if (!data || !data.hero || !data.floorMaps) return false;
        if (data.currentVersion) this.currentVersion = data.currentVersion;
        this.hero = JSON.parse(JSON.stringify(data.hero));
        this.floorMaps = JSON.parse(JSON.stringify(data.floorMaps));
        if (data.cheats) this.cheats = Object.assign(this.cheats, data.cheats);
        this.updateHUD();
        this.showMessage('存档加载成功！');
        if (window.gmPanel && typeof window.gmPanel.populateFloorOptions === 'function') {
            window.gmPanel.populateFloorOptions();
        }
        return true;
    }

    // 导出存档
    getSaveData() {
        return {
            currentVersion: this.currentVersion,
            hero: this.hero,
            floorMaps: this.floorMaps,
            cheats: this.cheats,
            timestamp: Date.now()
        };
    }

    getCurrentMap() {
        return this.floorMaps[this.hero.floor] || this.floorMaps[0];
    }

    // 主渲染循环
    startLoop() {
        const render = () => {
            this.render();
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
    }

    render() {
        if (!this.ctx) return;
        const curMap = this.getCurrentMap();
        if (!curMap || !curMap.grid) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 1. 绘制地图瓦片 (原版素材)
        for (let y = 0; y < TOWER_CONFIG.GRID_HEIGHT; y++) {
            for (let x = 0; x < TOWER_CONFIG.GRID_WIDTH; x++) {
                const cell = curMap.grid[y][x];
                const px = x * this.tileSize;
                const py = y * this.tileSize;

                // 先铺底地砖 (原版 Floor.png)
                window.spriteSheet.draw(this.ctx, 'floor', px, py, this.tileSize, this.tileSize);

                if (cell && cell !== 0) {
                    let spriteId = cell;
                    if (cell === 1) spriteId = 'wall';
                    if (cell === 2) spriteId = 'fake_wall';

                    // 检查是否在播放开门动画
                    const opening = this.openingDoors && this.openingDoors[`${x},${y}`];
                    if (opening) {
                        window.spriteSheet.draw(this.ctx, opening.doorType, px, py, this.tileSize, this.tileSize, { openingFrame: opening.frame });
                    } else {
                        window.spriteSheet.draw(this.ctx, spriteId, px, py, this.tileSize, this.tileSize);
                    }

                    // 2. 怪物显伤预测标签
                    if (TOWER_CONFIG.MONSTERS[cell] && (this.hero.hasBook || this.cheats.alwaysShowDamage)) {
                        this.renderMonsterDamageTag(cell, px, py);
                    }
                }
            }
        }

        // 3. 绘制英雄主角 (原版 Hero.png 4方向走动)
        const hx = this.hero.x * this.tileSize;
        const hy = this.hero.y * this.tileSize;
        window.spriteSheet.draw(this.ctx, 'hero', hx, hy, this.tileSize, this.tileSize, { direction: this.hero.direction });

        // 如果处于穿墙模式，在角色周围绘制幽灵光晕
        if (this.cheats.noclip) {
            this.ctx.strokeStyle = 'rgba(56, 189, 248, 0.9)';
            this.ctx.lineWidth = 3;
            this.ctx.strokeRect(hx + 2, hy + 2, this.tileSize - 4, this.tileSize - 4);
        }
    }

    // 在怪物格子上绘制战损预估
    renderMonsterDamageTag(monsterId, px, py) {
        const monster = TOWER_CONFIG.MONSTERS[monsterId];
        if (!monster) return;

        const battle = TOWER_CONFIG.calculateBattle(this.hero, monster, this.cheats);

        this.ctx.save();
        this.ctx.font = 'bold 11px sans-serif';
        this.ctx.textAlign = 'center';

        const tagY = py + this.tileSize - 2;
        if (!battle.canWin) {
            // 无法击败 -> 黑色半透明背景 + 亮红文字
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
            this.ctx.fillRect(px + 2, tagY - 12, this.tileSize - 4, 13);
            this.ctx.fillStyle = '#ff3333';
            this.ctx.fillText('?? 危险', px + this.tileSize / 2, tagY - 2);
        } else {
            // 可以击败 -> 战损数字（无伤为绿色0，有伤为金/橙色）
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
            this.ctx.fillRect(px + 2, tagY - 12, this.tileSize - 4, 13);
            this.ctx.fillStyle = battle.damage === 0 ? '#4ade80' : '#fbbf24';
            this.ctx.fillText(`${battle.damage}`, px + this.tileSize / 2, tagY - 2);
        }
        this.ctx.restore();
    }

    // 键盘监听
    bindEvents() {
        window.addEventListener('keydown', (e) => {
            // 如果按下快捷键呼出 GM (~ 或 F1 或 G)
            if (e.key === '`' || e.key === '~' || e.key === 'F1') {
                e.preventDefault();
                if (window.gmPanel) window.gmPanel.toggle();
                return;
            }

            if (this.isBusy) {
                // 如果在战斗或对话界面，按空格或回车可加速关闭
                if (e.key === ' ' || e.key === 'Enter' || e.key === 'Escape') {
                    this.closeActiveModals();
                }
                return;
            }

            let dx = 0;
            let dy = 0;
            let dir = this.hero.direction;

            switch (e.key) {
                case 'ArrowUp':
                case 'w':
                case 'W':
                    dy = -1;
                    dir = 'up';
                    break;
                case 'ArrowDown':
                case 's':
                case 'S':
                    dy = 1;
                    dir = 'down';
                    break;
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    dx = -1;
                    dir = 'left';
                    break;
                case 'ArrowRight':
                case 'd':
                case 'D':
                    dx = 1;
                    dir = 'right';
                    break;
                case 'l':
                case 'L':
                    // 打开怪物手册
                    this.openMonsterBook();
                    return;
                case 'j':
                case 'J':
                case 't':
                case 'T':
                    // 楼层传送器
                    this.openFlyModal();
                    return;
                case 'c':
                case 'C':
                    // 中心对称飞行器
                    this.useCenterFly();
                    return;
                default:
                    return;
            }

            e.preventDefault();
            this.hero.direction = dir;
            this.moveHero(dx, dy);
        });
    }

    // 移动与碰撞主逻辑
    moveHero(dx, dy) {
        const curMap = this.getCurrentMap();
        const nx = this.hero.x + dx;
        const ny = this.hero.y + dy;

        // 边界检查
        if (nx < 0 || nx >= TOWER_CONFIG.GRID_WIDTH || ny < 0 || ny >= TOWER_CONFIG.GRID_HEIGHT) {
            if (curMap && curMap.grid[this.hero.y]) {
                const currentTile = curMap.grid[this.hero.y][this.hero.x];
                if (currentTile === 'stair_up' || currentTile === 'upFloor') {
                    if (this.currentVersion === 'xinxin') this.handleXinxinStairs('up');
                    else this.changeFloor(this.hero.floor + 1, 'up');
                    return;
                }
                if (currentTile === 'stair_down' || currentTile === 'downFloor') {
                    if (this.currentVersion === 'xinxin') this.handleXinxinStairs('down');
                    else this.changeFloor(this.hero.floor - 1, 'down');
                    return;
                }
            }
            window.sounds.playBump();
            return;
        }

        const target = curMap.grid[ny][nx];

        // 优先检查当前楼层的 changeFloor 映射 (Xinxin 核心非线性楼层跳跃)
        if (curMap && curMap.changeFloor && curMap.changeFloor[`${nx},${ny}`]) {
            const cf = curMap.changeFloor[`${nx},${ny}`];
            if (cf && cf.floorId) {
                let customPos = null;
                let dir = 'up';
                if (cf.loc) {
                    customPos = { x: cf.loc[0], y: cf.loc[1] };
                } else if (cf.stair === 'downFloor') {
                    dir = 'up';
                } else if (cf.stair === 'upFloor') {
                    dir = 'down';
                }
                this.changeFloor(cf.floorId, dir, customPos);
                return;
            }
        }

        // 楼梯优先级最高：无论是普通模式还是穿墙模式，走上楼梯必须能切换楼层！
        if (target === 'stair_up' || target === 'upFloor') {
            if (this.currentVersion === 'xinxin') this.handleXinxinStairs('up');
            else this.changeFloor(this.hero.floor + 1, 'up');
            return;
        }
        if (target === 'stair_down' || target === 'downFloor') {
            if (this.currentVersion === 'xinxin') this.handleXinxinStairs('down');
            else this.changeFloor(this.hero.floor - 1, 'down');
            return;
        }

        // 如果勇士当前正好站在楼梯格上，且朝死角墙面走，同样触发切楼层
        if (curMap && curMap.grid[this.hero.y]) {
            const currentTile = curMap.grid[this.hero.y][this.hero.x];
            if ((currentTile === 'stair_up' || currentTile === 'upFloor') && (target === 'wall' || target === 1 || target === 'yellowWall')) {
                if (this.currentVersion === 'xinxin') this.handleXinxinStairs('up');
                else this.changeFloor(this.hero.floor + 1, 'up');
                return;
            }
            if ((currentTile === 'stair_down' || currentTile === 'downFloor') && (target === 'wall' || target === 1 || target === 'yellowWall')) {
                if (this.currentVersion === 'xinxin') this.handleXinxinStairs('down');
                else this.changeFloor(this.hero.floor - 1, 'down');
                return;
            }
        }

        // 统一实体识别
        const isMonster = !!(TOWER_CONFIG.MONSTERS[target] || (typeof window !== 'undefined' && window.XINXIN_MONSTERS && window.XINXIN_MONSTERS[target]));
        const isItem = !!(TOWER_CONFIG.ITEMS[target] || (typeof window !== 'undefined' && window.XINXIN_ITEMS && window.XINXIN_ITEMS[target]));
        const isDoor = (typeof target === 'string') && (
            target.startsWith('door_') ||
            ['yellowDoor', 'blueDoor', 'redDoor', 'greenDoor', 'steelDoor', 'specialDoor', 'whiteWallDoor'].includes(target)
        );
        const isNPC = (typeof target === 'string') && (
            target.startsWith('npc_') ||
            ['man', 'woman', 'thief', 'fairy', 'princess', 'realPrincess', 'womanMagician', 'N353', 'N354'].includes(target)
        );
        const isShop = (typeof target === 'string') && (
            target.startsWith('shop_') || target.startsWith('altar_') ||
            ['blueShop', 'blueShop-left', 'blueShop-right', 'pinkShop', 'pinkShop-left', 'pinkShop-right'].includes(target)
        );

        // 穿墙模式处理：无视障碍、墙体、锁门
        if (this.cheats.noclip) {
            if (target === 'boss_dragon' || (typeof target === 'string' && target.startsWith('dragon_'))) {
                this.handleCombat(nx, ny, 'boss_dragon');
                return;
            }
            if (isMonster) {
                this.handleCombat(nx, ny, target);
                return;
            }
            if (isItem) {
                this.handleItemPickup(nx, ny, target);
            }
            if (isNPC) {
                this.handleNPC(nx, ny, target);
                return;
            }
            if (isShop) {
                if (target.includes('pink') || target === 'shop_exp') this.openExpShop();
                else this.openGoldShop();
                return;
            }
            this.hero.x = nx;
            this.hero.y = ny;
            window.sounds.playStep();
            this.updateHUD();
            return;
        }

        // 普通模式逻辑
        if (target === 0 || target === 'arrow_right') {
            this.hero.x = nx;
            this.hero.y = ny;
            window.sounds.playStep();
            this.updateHUD();
            return;
        }

        // 魔龙全身体判定
        if (target === 'boss_dragon' || (typeof target === 'string' && target.startsWith('dragon_'))) {
            this.handleCombat(nx, ny, 'boss_dragon');
            return;
        }

        // 坚硬不可通行墙体与熔岩
        const isWall = target === 1 || target === 'wall' || target === 'star_wall' || target === 'lava' ||
                       target === 'yellowWall' || target === 'whiteWall' || target === 'blueWall' || target === 'blue_wall' || target === 'star';
        if (isWall) {
            window.sounds.playBump();
            return;
        }

        // 隐形暗墙/暗门撞开
        const isFakeWall = target === 2 || target === 'fake_wall' || target === 'walldoor' || target === 'walldoor3';
        if (isFakeWall) {
            curMap.grid[ny][nx] = 0;
            this.hero.x = nx;
            this.hero.y = ny;
            window.sounds.playDoor();
            this.showMessage('发现了隐藏的秘密通道！');
            this.updateHUD();
            return;
        }

        // 门处理
        if (isDoor) {
            this.handleDoor(nx, ny, target);
            return;
        }

        // 道具处理
        if (isItem) {
            this.handleItemPickup(nx, ny, target);
            this.hero.x = nx;
            this.hero.y = ny;
            this.updateHUD();
            return;
        }

        // 怪物对战处理
        if (isMonster) {
            this.handleCombat(nx, ny, target);
            return;
        }

        // NPC 对话
        if (isNPC) {
            this.handleNPC(nx, ny, target);
            return;
        }

        // 商店与圣坛处理
        if (isShop) {
            if (target.includes('pink') || target === 'shop_exp') {
                this.openExpShop();
            } else {
                this.openGoldShop();
            }
            return;
        }
    }

    // 开门逻辑
    handleDoor(x, y, doorType) {
        const curMap = this.getCurrentMap();
        let canOpen = false;

        if (this.cheats.masterKey) {
            canOpen = true;
        } else {
            if (doorType === 'door_yellow' || doorType === 'yellowDoor') {
                if (this.hero.yellowKeys > 0) {
                    this.hero.yellowKeys--;
                    canOpen = true;
                }
            } else if (doorType === 'door_blue' || doorType === 'blueDoor') {
                if (this.hero.blueKeys > 0) {
                    this.hero.blueKeys--;
                    canOpen = true;
                }
            } else if (doorType === 'door_red' || doorType === 'redDoor') {
                if (this.hero.redKeys > 0) {
                    this.hero.redKeys--;
                    canOpen = true;
                }
            } else if (doorType === 'greenDoor') {
                if ((this.hero.greenKeys || 0) > 0) {
                    this.hero.greenKeys--;
                    canOpen = true;
                } else {
                    this.showMessage('缺少【绿钥匙】，无法开启此结界之门！');
                    window.sounds.playBump();
                    return;
                }
            } else if (doorType === 'door_iron' || doorType === 'door_special' || doorType === 'steelDoor' || doorType === 'specialDoor' || doorType === 'whiteWallDoor') {
                canOpen = true; // 机关铁门与特种牢门触发即开
            }
        }

        if (canOpen) {
            window.sounds.playDoor();
            this.showMessage(this.cheats.masterKey ? '【万能钥匙】大门被无损推开！' : '大门已开启！');
            this.updateHUD();

            // 播放开门动画 (4帧依次敞开后消除)
            let frame = 1;
            this.openingDoors = this.openingDoors || {};
            this.openingDoors[`${x},${y}`] = { doorType, frame: 0 };
            const animTimer = setInterval(() => {
                if (frame > 3) {
                    clearInterval(animTimer);
                    curMap.grid[y][x] = 0;
                    delete this.openingDoors[`${x},${y}`];
                } else {
                    this.openingDoors[`${x},${y}`] = { doorType, frame: frame };
                    frame++;
                }
            }, 45);
        } else {
            window.sounds.playBump();
            this.showMessage('钥匙不足，无法开启此门！');
        }
    }

    // 道具拾取
    handleItemPickup(x, y, itemId) {
        const curMap = this.getCurrentMap();
        const item = TOWER_CONFIG.ITEMS[itemId];
        if (!item) return;

        curMap.grid[y][x] = 0;
        window.sounds.playItem();

        // 宝物与工具入包
        const inventoryItems = [
            'book', 'cross', 'coin', 'fly', 'big_fly', 'center_fly', 'up_fly', 'down_fly', 'ice_pickaxe', 'pickaxe', 'wand1', 'wand2',
            'knife', 'shoes', 'Lvupfly', 'proof_brave', 'proof_tyrant', 'proof_sage', 'poisonWine', 'weakWine'
        ];
        if (inventoryItems.includes(itemId)) {
            if (!this.hero.inventory) this.hero.inventory = [];
            if (!this.hero.inventory.includes(itemId)) {
                this.hero.inventory.push(itemId);
            }
        }

        switch (itemId) {
            case 'key_yellow':
            case 'yellowKey':
                this.hero.yellowKeys++;
                this.showMessage('获得 黄钥匙 +1');
                break;
            case 'key_blue':
            case 'blueKey':
                this.hero.blueKeys++;
                this.showMessage('获得 蓝钥匙 +1');
                break;
            case 'key_red':
            case 'redKey':
                this.hero.redKeys++;
                this.showMessage('获得 珍贵的红钥匙 +1');
                break;
            case 'greenKey':
                this.hero.greenKeys = (this.hero.greenKeys || 0) + 1;
                this.showMessage('获得【绿钥匙】+1！可开启绿色结界大门！');
                break;
            case 'key_box':
            case 'bigKey':
                this.hero.yellowKeys++;
                this.hero.blueKeys++;
                this.hero.redKeys++;
                this.showMessage('打开大钥匙盒！获得 黄钥匙+1，蓝钥匙+1，红钥匙+1！');
                break;
            case 'potion_red':
            case 'redPotion':
                this.hero.hp += (item.value || 200);
                this.showMessage(`喝下伤药，生命值 +${item.value || 200}`);
                break;
            case 'potion_blue':
            case 'bluePotion':
                this.hero.hp += (item.value || 500);
                this.showMessage(`喝下高级伤药，生命值 +${item.value || 500}`);
                break;
            case 'superPotion':
            case 'holy_water':
                this.hero.hp = Math.floor(this.hero.hp * 1.5) + 1000;
                this.showMessage(`饮用圣水！生命值大幅暴增！当前HP: ${this.hero.hp}`);
                break;
            case 'gem_red':
            case 'redGem':
                this.hero.atk += (item.value || 3);
                this.showMessage(`吸收红宝石，攻击力 +${item.value || 3}`);
                break;
            case 'gem_blue':
            case 'blueGem':
                this.hero.def += (item.value || 3);
                this.showMessage(`吸收蓝宝石，防御力 +${item.value || 3}`);
                break;
            case 'greenGem':
                this.hero.agi = (this.hero.agi || 2) + 2;
                this.showMessage('吸收绿宝石，身法敏捷闪避率 +2%！');
                break;
            case 'sword_iron':
            case 'sword_silver':
            case 'sword_knight':
            case 'sword_holy':
            case 'sword_god':
                this.hero.sword = item.name;
                this.hero.atk += item.value;
                this.showMessage(`装备神兵【${item.name}】，攻击力提升 +${item.value}！`);
                break;
            case 'sword1':
                this.hero.sword = '铁剑';
                this.hero.atk += 10;
                this.hero.cri = (this.hero.cri || 5) + 5;
                this.showMessage('装备神兵【铁剑】，攻击力 +10，暴击率 +5%！');
                break;
            case 'sword2':
                this.hero.sword = '长剑';
                this.hero.atk += 20;
                this.hero.cri = (this.hero.cri || 5) + 10;
                this.showMessage('装备神兵【长剑】，攻击力 +20，暴击率 +10%！');
                break;
            case 'sword3':
                this.hero.sword = '宝石剑';
                this.hero.atk += 40;
                this.hero.cri = (this.hero.cri || 5) + 15;
                this.showMessage('装备神兵【宝石剑】，攻击力 +40，暴击率 +15%！');
                break;
            case 'sword4':
                this.hero.sword = '灵光剑';
                this.hero.atk += 80;
                this.hero.cri = (this.hero.cri || 5) + 20;
                this.showMessage('装备神兵【灵光剑】，攻击力 +80，暴击率 +20%！');
                break;
            case 'sword5':
                this.hero.sword = '神圣剑';
                this.hero.atk += 150;
                this.hero.cri = (this.hero.cri || 5) + 30;
                this.showMessage('装备神兵【神圣剑】，攻击力 +150，暴击率 +30%！');
                break;
            case 'shield_iron':
            case 'shield_silver':
            case 'shield_knight':
            case 'shield_holy':
            case 'shield_god':
                this.hero.shield = item.name;
                this.hero.def += item.value;
                this.showMessage(`装备坚盾【${item.name}】，防御力提升 +${item.value}！`);
                break;
            case 'shield1':
                this.hero.shield = '铁盾';
                this.hero.def += 10;
                this.showMessage('装备坚盾【铁盾】，防御力 +10！');
                break;
            case 'shield2':
                this.hero.shield = '长盾';
                this.hero.def += 20;
                this.showMessage('装备坚盾【长盾】，防御力 +20！');
                break;
            case 'shield3':
                this.hero.shield = '宝石盾';
                this.hero.def += 40;
                this.showMessage('装备坚盾【宝石盾】，防御力 +40！');
                break;
            case 'shield4':
                this.hero.shield = '灵光盾';
                this.hero.def += 80;
                this.showMessage('装备坚盾【灵光盾】，防御力 +80！');
                break;
            case 'shield5':
                this.hero.shield = '神圣盾';
                this.hero.def += 150;
                this.showMessage('装备坚盾【神圣盾】，防御力 +150！');
                break;
            case 'knife':
                this.hero.hasKnife = true;
                this.showMessage('获得【屠龙匕首】！对远古巨龙造成的伤害翻倍！已入宝物背包！');
                break;
            case 'moneyPocket':
                this.hero.gold += 500;
                this.showMessage('打开【金币袋】！获得 500 枚金币！');
                break;
            case 'shoes':
                this.hero.agi = (this.hero.agi || 2) + 5;
                this.showMessage('穿上【神行之靴】！身法敏捷闪避率 +5%！');
                break;
            case 'Lvupfly':
                this.hero.level++;
                this.hero.hp += 1000;
                this.hero.atk += 7;
                this.hero.def += 7;
                this.showMessage('获得【飞升羽翼】！勇士等级提升1级，全属性激增！');
                break;
            case 'proof_brave':
                this.hero.atk += 30;
                this.hero.cri = (this.hero.cri || 5) + 20;
                this.hero.hasBraveProof = true;
                this.showMessage('获得【勇者之证】！成功转职为勇者：攻击力 +30，暴击率 +20%！');
                break;
            case 'proof_tyrant':
                this.hero.def += 30;
                this.hero.hp += 1000;
                this.hero.hasTyrantProof = true;
                this.showMessage('获得【霸者之证】！成功转职为霸者：防御力 +30，生命上限 +1000！');
                break;
            case 'proof_sage':
                this.hero.def += 20;
                this.hero.atk += 20;
                this.hero.hasSageProof = true;
                this.showMessage('获得【贤者之证】！成功转职为贤者：攻防均衡觉醒神圣抗性！');
                break;
            case 'poisonWine':
                this.showMessage('饮用【解毒药水】！体内毒素已被彻底净化！');
                break;
            case 'weakWine':
                this.showMessage('饮用【解衰药水】！虚弱诅咒已被完全解除！');
                break;
            case 'cross':
                this.hero.hasCross = true;
                const boostAtk = Math.floor(this.hero.atk * 0.2);
                const boostDef = Math.floor(this.hero.def * 0.2);
                this.hero.atk += boostAtk;
                this.hero.def += boostDef;
                this.showMessage(`获得圣器十字架！全属性提升20%（攻+${boostAtk}，防+${boostDef}），生命归零自动复活！已收入宝物背包！`);
                break;
            case 'coin':
                this.hero.hasCoin = true;
                this.showMessage('获得【幸运金币】！战斗金币掉落永久翻倍！已收入宝物背包！');
                break;
            case 'fly':
                this.hero.hasFly = true;
                this.showMessage('获得【楼层传送器】！按 J 键或点击左侧按钮，即可穿梭已探明楼层！');
                break;
            case 'big_fly':
                this.hero.hasFly = true;
                this.hero.hasBigFly = true;
                this.showMessage('获得神器【大飞行器】！突破空间结界！全塔所有楼层全部解除限制自由穿梭！');
                break;
            case 'up_fly':
                this.hero.hasUpFly = true;
                this.showMessage('获得【上楼飞行器】！在背包中点击即可直接上升一层！');
                break;
            case 'down_fly':
                this.hero.hasDownFly = true;
                this.showMessage('获得【下楼飞行器】！在背包中点击即可直接下降一层！');
                break;
            case 'center_fly':
                this.hero.hasCenterFly = true;
                this.showMessage('获得【中心对称飞行器】！按 C 键或在背包点击，可在魔塔中心对称点瞬间跃迁！');
                break;
            case 'pickaxe':
                this.hero.hasPickaxe = true;
                this.showMessage('获得【破墙镐】！面朝墙壁并在背包中点击，即可开凿坚硬石墙！');
                break;
            case 'ice_pickaxe':
                this.hero.hasIcePickaxe = true;
                this.showMessage('获得【破冰镐】！触碰冰霜结界即可自动破冰！');
                break;
            case 'book':
                this.hero.hasBook = true;
                this.showMessage('获得【怪物手册】！按 L 键或点击按钮随时洞悉全塔怪物！');
                break;
            default:
                this.showMessage(`获得【${item.name}】`);
                break;
        }

        this.updateHUD();
    }

    // 战斗逻辑
    handleCombat(x, y, monsterId) {
        const monster = TOWER_CONFIG.MONSTERS[monsterId];
        if (!monster) return;

        const battle = TOWER_CONFIG.calculateBattle(this.hero, monster, this.cheats);

        if (!battle.canWin) {
            window.sounds.playBump();
            this.showMessage(`无法战胜【${monster.name}】！需要更强攻防或更多生命！`);
            return;
        }

        // 结算战斗
        this.isBusy = true;
        this.showBattleModal(monster, battle, () => {
            const curMap = this.getCurrentMap();
            let monsterGold = monster.gold;
            if (this.hero.hasCoin) {
                monsterGold *= 2;
            }
            if (this.hero.hp - battle.damage <= 0 && this.hero.hasCross) {
                this.hero.hp = Math.max(1, (this.hero.hp - battle.damage) + 2000);
                this.hero.hasCross = false;
                const idx = this.hero.inventory ? this.hero.inventory.indexOf('cross') : -1;
                if (idx !== -1) this.hero.inventory.splice(idx, 1);
                this.showMessage('✨【神圣十字架】触发神迹复活！恢复 2000 点生命值！');
            } else {
                this.hero.hp -= battle.damage;
            }
            this.hero.gold += monsterGold;
            this.hero.exp += monster.exp;
            curMap.grid[y][x] = 0; // 消灭怪物
            this.hero.x = x;
            this.hero.y = y;

            window.sounds.playWin();
            this.showMessage(`击败【${monster.name}】，获得金币 +${monsterGold}${this.hero.hasCoin ? ' (幸运金币翻倍!)' : ''}，经验 +${monster.exp}！`);
            this.isBusy = false;
            this.updateHUD();

            // 特殊 Boss 胜利判定
            if (monsterId === 'boss_lord') {
                this.showStoryModal('冥灵魔王发出了痛苦的哀嚎，化为飞灰！通向 21F 王座的道路终于敞开！');
            } else if (monsterId === 'boss_dragon') {
                // 清除 3x3 远古魔龙全部 9 格瓦片
                for (let dy = 0; dy < curMap.grid.length; dy++) {
                    for (let dx = 0; dx < curMap.grid[dy].length; dx++) {
                        const tile = curMap.grid[dy][dx];
                        if (tile === 'boss_dragon' || (typeof tile === 'string' && tile.startsWith('dragon_'))) {
                            curMap.grid[dy][dx] = 0;
                        }
                    }
                }
                // 打开牢笼铁门
                for (let dy = 1; dy <= 5; dy++) {
                    for (let dx = 4; dx <= 8; dx++) {
                        if (curMap.grid[dy] && curMap.grid[dy][dx] === 'door_iron') {
                            curMap.grid[dy][dx] = 0;
                        }
                    }
                }
                this.updateHUD();
                this.showStoryModal('恭喜你！！远古魔龙轰然倒下，化为尘埃！整座魔塔的魔气被彻底净化，你拯救了王国，成为了名垂青史的终极救世英雄！！');
            }
        });
    }

    // 楼层切换
    changeFloor(targetFloor, direction = 'up', customPos = null) {
        if (!this.floorMaps[targetFloor]) {
            this.showMessage('楼梯被神秘结界封印，暂时无法通行！');
            return;
        }

        this.hero.floor = targetFloor;
        if (typeof targetFloor === 'number') {
            this.hero.maxVisitedFloor = Math.max(this.hero.maxVisitedFloor || 0, targetFloor);
        } else {
            this.hero.maxVisitedFloor = targetFloor;
        }
        const newMap = this.floorMaps[targetFloor];

        if (customPos) {
            this.hero.x = customPos.x;
            this.hero.y = customPos.y;
        } else if (direction === 'up') {
            if (newMap.downPos) {
                this.hero.x = newMap.downPos.x;
                this.hero.y = newMap.downPos.y;
            } else if (newMap.upPos) {
                this.hero.x = newMap.upPos.x;
                this.hero.y = newMap.upPos.y;
            } else {
                this.hero.x = 6;
                this.hero.y = 10;
            }
        } else if (direction === 'down') {
            if (newMap.upPos) {
                this.hero.x = newMap.upPos.x;
                this.hero.y = newMap.upPos.y;
            } else if (newMap.downPos) {
                this.hero.x = newMap.downPos.x;
                this.hero.y = newMap.downPos.y;
            } else {
                this.hero.x = 6;
                this.hero.y = 10;
            }
        }

        window.sounds.playStairs();
        this.showMessage(`进入：${newMap.name || newMap.title || targetFloor}`);
        this.updateHUD();
    }

    // 新新魔塔无显式 changeFloor 时的线性梯口推断
    handleXinxinStairs(dir) {
        const curFloor = String(this.hero.floor);
        let prefix = 'main';
        let num = 0;
        if (curFloor.startsWith('main')) {
            prefix = 'main';
            num = parseInt(curFloor.replace('main', '')) || 0;
        } else if (curFloor.startsWith('base')) {
            prefix = 'base';
            num = parseInt(curFloor.replace('base', '')) || 1;
        } else if (curFloor.startsWith('MOTA')) {
            prefix = 'MOTA';
            num = parseInt(curFloor.replace('MOTA', '')) || 1;
        }

        const nextNum = dir === 'up' ? num + 1 : num - 1;
        const targetFloor = prefix + nextNum;
        if (this.floorMaps[targetFloor]) {
            this.changeFloor(targetFloor, dir);
        } else {
            this.showMessage('楼梯被结界阻隔，无法通行！');
        }
    }

    // 直接瞬移传送到指定楼层 (GM专用)
    teleportToFloor(floor) {
        if (!this.floorMaps[floor]) return false;
        this.hero.floor = floor;
        if (typeof floor === 'number') {
            this.hero.maxVisitedFloor = Math.max(this.hero.maxVisitedFloor || 0, floor);
        } else {
            this.hero.maxVisitedFloor = floor;
        }
        const map = this.floorMaps[floor];
        if (map.downPos) {
            this.hero.x = map.downPos.x;
            this.hero.y = map.downPos.y;
        } else if (map.upPos) {
            this.hero.x = map.upPos.x;
            this.hero.y = map.upPos.y;
        } else {
            this.hero.x = 6;
            this.hero.y = 10;
        }
        window.sounds.playCheat();
        this.showMessage(`【GM跃迁】已瞬间抵达 ${map.name || map.title || floor}！`);
        this.updateHUD();
        return true;
    }

    // 一键消灭当前层所有怪物 (GM专用)
    clearCurrentFloorMonsters() {
        const curMap = this.getCurrentMap();
        let count = 0;
        let totalGold = 0;
        let totalExp = 0;

        for (let y = 0; y < TOWER_CONFIG.GRID_HEIGHT; y++) {
            for (let x = 0; x < TOWER_CONFIG.GRID_WIDTH; x++) {
                const cell = curMap.grid[y][x];
                if (TOWER_CONFIG.MONSTERS[cell]) {
                    const m = TOWER_CONFIG.MONSTERS[cell];
                    totalGold += m.gold;
                    totalExp += m.exp;
                    curMap.grid[y][x] = 0;
                    count++;
                }
            }
        }

        this.hero.gold += totalGold;
        this.hero.exp += totalExp;
        window.sounds.playCheat();
        this.showMessage(`【GM天罚】一键秒杀当前层 ${count} 只怪物！搜刮金币 +${totalGold}，经验 +${totalExp}！`);
        this.updateHUD();
    }

    // 一键拾取当前层所有物品钥匙 (GM专用)
    lootCurrentFloor() {
        const curMap = this.getCurrentMap();
        let count = 0;

        for (let y = 0; y < TOWER_CONFIG.GRID_HEIGHT; y++) {
            for (let x = 0; x < TOWER_CONFIG.GRID_WIDTH; x++) {
                const cell = curMap.grid[y][x];
                if (TOWER_CONFIG.ITEMS[cell]) {
                    this.handleItemPickup(x, y, cell);
                    count++;
                }
            }
        }

        window.sounds.playCheat();
        this.showMessage(`【GM引力】瞬间全图吸取 ${count} 件道具钥匙！`);
        this.updateHUD();
    }

    // NPC 对话
    handleNPC(x, y, npcId) {
        const curMap = this.getCurrentMap();
        const eventKey = `${x},${y}`;
        const eventData = (curMap.events && curMap.events[eventKey]) ? curMap.events[eventKey] : null;

        if (eventData) {
            this.showDialog(eventData.name, eventData.dialog, npcId);
            return;
        }

        if (npcId === 'npc_princess') {
            if (this.currentVersion === 'tower50') {
                this.showDialog('美丽聪慧的公主', '“英勇的战士！你终于突破重重试炼来到了这里！然而这只是魔王留下的时空幻影，魔王真身就在塔顶第50层！请务必登上塔顶，彻底诛灭魔王，拯救整座王国！”', 'npc_princess');
                return;
            }
            if (!this.hero.rescuedPrincess) {
                this.hero.rescuedPrincess = true;
                this.hero.hp += 3000;
                this.hero.atk += 20;
                this.hero.def += 20;
                this.hero.redKeys += 1;
                window.sounds.playWin();
                this.showDialog('美丽聪慧的公主', '“勇士！你终于突破重重星空险阻来救我了！\n\n然而魔塔最深处的魔王与24层远古恶龙仍在为祸人间，我赠予你【王室圣恩加护】（生命+3000，攻击+20，防御+20，珍贵红钥匙+1）！请务必彻底消灭魔龙，拯救整座王国！”', 'npc_princess');
                this.showMessage('👑 成功营救公主！获得王室圣恩加护：生命+3000，攻击+20，防御+20，红钥匙+1！');
                this.updateHUD();
            } else {
                this.showDialog('美丽聪慧的公主', '“英勇的战士，我相信你一定能够击败21层的魔王与24层的远古魔龙，拯救整座王国！”', 'npc_princess');
            }
            return;
        }

        if (npcId === 'npc_thief') {
            if (this.currentVersion === 'tower50') {
                if (this.hero.floor === 2) {
                    this.showDialog('敏捷的小偷', '“哈哈！多亏了你，我们终于从牢房里逃出来了！听说你的剑和盾被警卫夺走了，铁剑在5楼，铁盾在9楼，快去夺回武器武装自己吧！我先去前面探路了，再见！”', 'npc_thief');
                } else if (this.hero.floor === 15 || this.hero.floor === 29) {
                    this.showDialog('敏捷的小偷', '“嘿！多亏你救了我，我会在前方的关键楼层帮你开启隐藏暗道！”', 'npc_thief');
                } else {
                    this.showDialog('敏捷的小偷', '“勇士，坚持住！胜利就在眼前！”', 'npc_thief');
                }
                return;
            }
            this.showDialog('敏捷的小偷', '“嘿！多亏你救了我！我在18层为你开辟了跨越星空的秘密走廊（正中央第6列），直通公主寝宫的红门！快带上红钥匙去救公主吧！”', 'npc_thief');
            return;
        }

        if (npcId === 'npc_fairy') {
            if (this.currentVersion === 'tower50') {
                this.showDialog('✨ 神秘仙子', '“年轻的勇士，欢迎来到这座50层神秘魔塔！传说魔王将公主封印在顶层，并布下了严密的魔物守卫。运用你的智慧与力量，一步一步突破难关，救出公主吧！”', 'npc_fairy');
                return;
            }
            if (this.hero.floor === 0) {
                // 触碰开局仙女：触发对话、施法开门并化作神圣光芒消散开辟通路
                this.showDialog('✨ 神秘仙子', '“年轻的勇士，你终于醒了！你被魔王剥夺了力量并囚禁于此。我用仙灵法力为你打开了前方的牢门，并赐予你初始钥匙。快向上突破牢狱，消灭魔王，拯救公主！”', 'npc_fairy');
                if (curMap.grid[8] && curMap.grid[8][6] === 'door_yellow') {
                    curMap.grid[8][6] = 0;
                    window.sounds.playDoor();
                }
                curMap.grid[y][x] = 0;
                this.showMessage('仙子施法打开牢门，化作一道神圣光芒消散！');
                this.updateHUD();
                return;
            } else {
                this.showDialog('✨ 神秘仙子', '“勇敢的勇士，你背负着王国的使命。运用好每一把钥匙与每一份属性，正义终将战胜邪恶！”', 'npc_fairy');
                return;
            }
        }

        if (npcId === 'npc_oldman') {
            if (this.currentVersion === 'tower50') {
                this.showDialog('睿智的长者', '“年轻人，在50层魔塔中，不要急于在低层圣坛消耗过多祈福次数。随着楼层提升，高层圣坛的赐福增益将呈倍数增强，合理的金币分配是通关的真谛！”', 'npc_oldman');
                return;
            }
            this.showDialog('睿智的长者', '“孩子，在这座魔塔里，不要盲目战斗。每次战斗前，多思考一下如何将损失降到最低。”', 'npc_oldman');
            return;
        }

        if (npcId === 'npc_merchant') {
            if (this.currentVersion === 'tower50') {
                this.showDialog('精明的商人', '“嘿朋友，魔塔里的钥匙是最宝贵的战略资源。每一把钥匙都必须精打细算，绝不可随意挥霍！”', 'npc_merchant');
                return;
            }
            this.showDialog('精明的商人', '“嘿朋友，需要帮助吗？只要有足够的金币和经验，一切阻碍都将迎刃而解！”', 'npc_merchant');
            return;
        }

        if (npcId === 'thief') {
            this.showDialog('被困的盗贼', '“哇！谢谢你救了我！听着，这魔塔深处有很多隐藏的暗墙和机关，只要留意墙壁的裂纹就能找到通往地下的捷径！”', 'thief');
            return;
        }
        if (npcId === 'man' || npcId === 'oldMan') {
            this.showDialog('睿智的长者', '“年轻人，新新魔塔中拥有勇者、霸者与贤者三大神圣转职之证！暴击与身法闪避将成为逆转战局的关键要素！”', 'man');
            return;
        }
        if (npcId === 'woman' || npcId === 'womanMagician') {
            this.showDialog('神秘魔女', '“前方怪物异常狡诈，注意剧毒与衰弱诅咒，随身携带解药才能安全探索深层！”', 'woman');
            return;
        }
        if (npcId === 'princess' || npcId === 'realPrincess') {
            this.showDialog('落难公主', '“英勇的救世骑士！你终于突破万难来到了这里！整座王国的黎民百姓都在传颂着你的传奇功绩，谢谢你拯救了我！”', 'princess');
            return;
        }
        if (npcId === 'N353' || npcId === 'N354') {
            this.showDialog('远古侍卫', '“前方乃是整座魔塔的禁忌核心领域，请勇士备齐神兵良药，万事小心！”', 'N353');
            return;
        }

        this.showDialog('神秘人物', '……旅人，前方的道路充满未知与凶险，保重！', npcId);
    }

    // 金币商店
    openGoldShop() {
        this.isBusy = true;
        const modal = document.getElementById('shop-modal');
        const content = document.getElementById('shop-content');
        if (!modal || !content) return;

        if (this.currentVersion === 'tower50') {
            const times = this.hero.goldShopTimes || 0;
            const price = 20 + 10 * (times + 1) * times;
            let ratio = 1;
            if (this.hero.floor >= 46) ratio = 5;
            else if (this.hero.floor >= 32) ratio = 4;
            else if (this.hero.floor >= 12) ratio = 2;
            else ratio = 1;

            const hpGain = 100 * (times + 1);
            const atkGain = 2 * ratio;
            const defGain = 4 * ratio;

            content.innerHTML = `
                <div style="display:flex; align-items:center; gap:12px; justify-content:center; margin-bottom:8px;">
                    <canvas id="shop-gold-avatar" width="40" height="40" class="pixel-avatar"></canvas>
                    <h3 style="margin:0; color:#38bdf8;">✨ 50层蓝色金币圣坛</h3>
                </div>
                <p>供奉 <b>${price}</b> 枚金币可获得神圣祝福（当前拥有 <b>${this.hero.gold}</b> 金币，第 <b>${this.hero.floor}</b> 层增益倍率: <b>x${ratio}</b>）：</p>
                <div class="shop-buttons">
                    <button onclick="window.game.buyGoldShop('hp', ${price}, ${hpGain})">❤️ 增加生命值 (+${hpGain} HP)</button>
                    <button onclick="window.game.buyGoldShop('atk', ${price}, ${atkGain})">⚔️ 增加攻击力 (+${atkGain} 攻击)</button>
                    <button onclick="window.game.buyGoldShop('def', ${price}, ${defGain})">🛡️ 增加防御力 (+${defGain} 防御)</button>
                    <button class="btn-cancel" onclick="window.game.closeActiveModals()">离开圣坛</button>
                </div>
            `;
            const avatarCanvas = document.getElementById('shop-gold-avatar');
            if (avatarCanvas && window.spriteSheet) {
                const ctx = avatarCanvas.getContext('2d');
                window.spriteSheet.draw(ctx, 'altar_blue_mid', 0, 0, avatarCanvas.width, avatarCanvas.height);
            }
        } else {
            const price = (this.goldShopPrices && this.goldShopPrices[this.hero.floor]) || 20;
            content.innerHTML = `
                <div style="display:flex; align-items:center; gap:12px; justify-content:center; margin-bottom:8px;">
                    <canvas id="shop-gold-avatar" width="40" height="40" class="pixel-avatar"></canvas>
                    <h3 style="margin:0; color:#fbbf24;">💰 金币圣坛</h3>
                </div>
                <p>贪婪与力量的交易处。当前每次祈福需支付 <b>${price}</b> 枚金币（你拥有 <b>${this.hero.gold}</b> 金币）：</p>
                <div class="shop-buttons">
                    <button onclick="window.game.buyGoldShop('hp', ${price}, 800)">❤️ 增加生命值 (+800 HP)</button>
                    <button onclick="window.game.buyGoldShop('atk', ${price}, 4)">⚔️ 增加攻击力 (+4 攻击)</button>
                    <button onclick="window.game.buyGoldShop('def', ${price}, 4)">🛡️ 增加防御力 (+4 防御)</button>
                    <button class="btn-cancel" onclick="window.game.closeActiveModals()">离开圣坛</button>
                </div>
            `;
            const avatarCanvas = document.getElementById('shop-gold-avatar');
            if (avatarCanvas && window.spriteSheet) {
                const ctx = avatarCanvas.getContext('2d');
                window.spriteSheet.draw(ctx, 'shop_gold', 0, 0, avatarCanvas.width, avatarCanvas.height);
            }
        }
        modal.classList.add('active');
    }

    buyGoldShop(type, price, gain = 4) {
        if (this.hero.gold < price) {
            this.showMessage('金币不足！无法祈福！');
            window.sounds.playBump();
            return;
        }

        this.hero.gold -= price;
        window.sounds.playShop();

        if (this.currentVersion === 'tower50') {
            this.hero.goldShopTimes = (this.hero.goldShopTimes || 0) + 1;
            if (type === 'hp') {
                this.hero.hp += gain;
                this.showMessage(`祈福成功：生命值 +${gain}！`);
            } else if (type === 'atk') {
                this.hero.atk += gain;
                this.showMessage(`祈福成功：攻击力 +${gain}！`);
            } else if (type === 'def') {
                this.hero.def += gain;
                this.showMessage(`祈福成功：防御力 +${gain}！`);
            }
        } else {
            // 经典21/24层价格翻倍机制
            if (!this.goldShopPrices) this.goldShopPrices = {};
            const curPrice = this.goldShopPrices[this.hero.floor] || 20;
            this.goldShopPrices[this.hero.floor] = curPrice * 2;

            if (type === 'hp') {
                this.hero.hp += gain || 800;
                this.showMessage(`祈福成功：生命值 +${gain || 800}！`);
            } else if (type === 'atk') {
                this.hero.atk += gain || 4;
                this.showMessage(`祈福成功：攻击力 +${gain || 4}！`);
            } else if (type === 'def') {
                this.hero.def += gain || 4;
                this.showMessage(`祈福成功：防御力 +${gain || 4}！`);
            }
        }

        this.updateHUD();
        this.openGoldShop(); // 刷新价格与金币显示
    }

    // 经验商店
    openExpShop() {
        this.isBusy = true;
        const modal = document.getElementById('shop-modal');
        const content = document.getElementById('shop-content');
        if (!modal || !content) return;

        content.innerHTML = `
            <div style="display:flex; align-items:center; gap:12px; justify-content:center; margin-bottom:8px;">
                <canvas id="shop-exp-avatar" width="40" height="40" class="pixel-avatar"></canvas>
                <h3 style="margin:0; color:#38bdf8;">✨ 经验圣坛</h3>
            </div>
            <p>将历练化为肉体蜕变。当前拥有 <b>${this.hero.exp}</b> 点经验：</p>
            <div class="shop-buttons">
                <button onclick="window.game.buyExpShop('level', 100)">⭐ 提升1级 (需100EXP: HP+1000, 攻+5, 防+5)</button>
                <button onclick="window.game.buyExpShop('atk', 30)">⚔️ 历练攻击力 (需30EXP: 攻+5)</button>
                <button onclick="window.game.buyExpShop('def', 30)">🛡️ 历练防御力 (需30EXP: 防+5)</button>
                <button class="btn-cancel" onclick="window.game.closeActiveModals()">离开圣坛</button>
            </div>
        `;
        const avatarCanvas = document.getElementById('shop-exp-avatar');
        if (avatarCanvas && window.spriteSheet) {
            const ctx = avatarCanvas.getContext('2d');
            window.spriteSheet.draw(ctx, 'shop_exp', 0, 0, avatarCanvas.width, avatarCanvas.height);
        }
        modal.classList.add('active');
    }

    buyExpShop(type, cost) {
        if (this.hero.exp < cost) {
            this.showMessage('经验不足！');
            window.sounds.playBump();
            return;
        }

        this.hero.exp -= cost;
        window.sounds.playShop();

        if (type === 'level') {
            this.hero.level++;
            this.hero.hp += 1000;
            this.hero.atk += 5;
            this.hero.def += 5;
            this.showMessage('升级成功！全属性大幅增强！');
        } else if (type === 'atk') {
            this.hero.atk += 5;
            this.showMessage('强化成功：攻击力 +5！');
        } else if (type === 'def') {
            this.hero.def += 5;
            this.showMessage('强化成功：防御力 +5！');
        }

        this.updateHUD();
        this.openExpShop();
    }

    // 获取当前装备的剑盾 Sprite ID
    getEquippedSwordSprite() {
        if (!this.hero.sword || this.hero.sword === '无') return 'sword_iron';
        if (this.hero.sword === '铁剑') return 'sword1';
        if (this.hero.sword === '长剑') return 'sword2';
        if (this.hero.sword === '宝石剑') return 'sword3';
        if (this.hero.sword === '灵光剑') return 'sword4';
        if (this.hero.sword === '神圣剑') return 'sword5';
        if (this.hero.sword.includes('神圣')) return 'sword_god';
        if (this.hero.sword.includes('圣')) return 'sword_holy';
        if (this.hero.sword.includes('骑士')) return 'sword_knight';
        if (this.hero.sword.includes('银')) return 'sword_silver';
        return 'sword_iron';
    }

    getEquippedShieldSprite() {
        if (!this.hero.shield || this.hero.shield === '无') return 'shield_iron';
        if (this.hero.shield === '铁盾') return 'shield1';
        if (this.hero.shield === '长盾') return 'shield2';
        if (this.hero.shield === '宝石盾') return 'shield3';
        if (this.hero.shield === '灵光盾') return 'shield4';
        if (this.hero.shield === '神圣盾') return 'shield5';
        if (this.hero.shield.includes('神圣')) return 'shield_god';
        if (this.hero.shield.includes('圣')) return 'shield_holy';
        if (this.hero.shield.includes('骑士')) return 'shield_knight';
        if (this.hero.shield.includes('银')) return 'shield_silver';
        return 'shield_iron';
    }

    // 战斗动画与弹窗
    showBattleModal(monster, battle, onFinish) {
        const modal = document.getElementById('battle-modal');
        if (!modal) {
            onFinish();
            return;
        }

        const mName = document.getElementById('battle-m-name');
        const mHp = document.getElementById('battle-m-hp');
        const mAtk = document.getElementById('battle-m-atk');
        const mDef = document.getElementById('battle-m-def');
        const hHp = document.getElementById('battle-h-hp');
        const hDmg = document.getElementById('battle-loss');

        if (mName) mName.innerText = monster.name;
        if (mHp) mHp.innerText = monster.hp;
        if (mAtk) mAtk.innerText = monster.atk;
        if (mDef) mDef.innerText = monster.def;
        if (hHp) hHp.innerText = this.hero.hp;
        if (hDmg) hDmg.innerText = battle.damage;

        // 绘制原版战斗角色立绘
        const mCanvas = document.getElementById('battle-m-canvas');
        if (mCanvas && window.spriteSheet) {
            const ctx = mCanvas.getContext('2d');
            ctx.clearRect(0, 0, mCanvas.width, mCanvas.height);
            window.spriteSheet.draw(ctx, monster.id, 0, 0, mCanvas.width, mCanvas.height);
        }
        const hCanvas = document.getElementById('battle-h-canvas');
        if (hCanvas && window.spriteSheet) {
            const ctx = hCanvas.getContext('2d');
            ctx.clearRect(0, 0, hCanvas.width, hCanvas.height);
            window.spriteSheet.draw(ctx, 'hero', 0, 0, hCanvas.width, hCanvas.height, { direction: 'down' });
        }

        modal.classList.add('active');
        window.sounds.playAttack();

        // 快速战斗交锋音效
        setTimeout(() => {
            window.sounds.playHit();
        }, 150);

        setTimeout(() => {
            modal.classList.remove('active');
            onFinish();
        }, 380);
    }

    // 对话弹窗
    showDialog(speaker, text, avatarId) {
        this.isBusy = true;
        const modal = document.getElementById('dialog-modal');
        const speakerEl = document.getElementById('dialog-speaker');
        const textEl = document.getElementById('dialog-text');
        const avatarCanvas = document.getElementById('dialog-avatar');

        if (speakerEl) speakerEl.innerText = speaker;
        if (textEl) textEl.innerText = text;

        if (avatarCanvas && window.spriteSheet) {
            const ctx = avatarCanvas.getContext('2d');
            ctx.clearRect(0, 0, avatarCanvas.width, avatarCanvas.height);
            let spriteId = avatarId;
            if (!spriteId) {
                if (speaker.includes('仙子') || speaker.includes('仙女')) spriteId = 'npc_fairy';
                else if (speaker.includes('老人')) spriteId = 'npc_oldman';
                else if (speaker.includes('商人')) spriteId = 'npc_merchant';
                else if (speaker.includes('小偷')) spriteId = 'npc_thief';
                else if (speaker.includes('公主')) spriteId = 'npc_princess';
                else spriteId = 'hero';
            }
            window.spriteSheet.draw(ctx, spriteId, 0, 0, avatarCanvas.width, avatarCanvas.height);
        }

        if (modal) modal.classList.add('active');
    }

    // 剧情公告弹窗
    showStoryModal(text) {
        this.showDialog('👑 魔塔史诗通报', text);
    }

    // 打开楼层传送器 / 大飞行器面板
    openFlyModal() {
        if (!this.hero.hasFly && !this.hero.hasBigFly) {
            this.showMessage('尚未获得【楼层传送器】！请在魔塔 9F 等楼层探索获取。');
            return;
        }
        this.isBusy = true;
        const modal = document.getElementById('fly-modal');
        const listContainer = document.getElementById('fly-floor-list');
        const titleEl = modal ? modal.querySelector('h3') : null;
        const descEl = modal ? modal.querySelector('p') : null;
        if (!modal || !listContainer) return;

        const isBig = !!this.hero.hasBigFly;
        if (titleEl) {
            titleEl.innerHTML = isBig ? '✨ 大飞行器 (全域任意跃迁)' : '🪽 楼层传送器 (已探明楼层)';
        }
        if (descEl) {
            descEl.innerText = isBig 
                ? '【大飞行器已激活】神圣空间结界解除，可随意跃迁至全塔任意楼层：'
                : '选择已探明并解锁的楼层，瞬间跃迁至该层楼梯口：';
        }

        let totalFloors = Object.keys(this.floorMaps);
        if (this.currentVersion === 'xinxin') {
            const getOrder = (f) => {
                if (f.startsWith('main')) return parseInt(f.replace('main', '')) || 0;
                if (f.startsWith('base')) return 100 + (parseInt(f.replace('base', '')) || 0);
                if (f.startsWith('MOTA')) return 200 + (parseInt(f.replace('MOTA', '')) || 0);
                return 999;
            };
            totalFloors.sort((a, b) => getOrder(a) - getOrder(b));
        } else {
            totalFloors = totalFloors.map(Number).filter(n => !isNaN(n)).sort((a, b) => a - b);
        }

        const maxF = this.hero.maxVisitedFloor;

        let html = '';
        totalFloors.forEach(f => {
            const map = this.floorMaps[f];
            if (this.currentVersion === 'xinxin') {
                if (map && map.canFlyTo === false && !isBig) return;
            } else {
                if (!isBig && typeof f === 'number' && typeof maxF === 'number' && f > maxF) return;
            }
            const isCurrent = f === this.hero.floor;
            const floorLabel = (map && (map.name || map.title)) ? (map.name || map.title) : (f === 0 ? '0F 牢房' : `${f}F`);
            const arg = typeof f === 'string' ? `'${f}'` : f;
            html += `<button class="fly-floor-btn ${isCurrent ? 'current' : ''} ${isBig ? 'big-fly-btn' : ''}" onclick="window.game.teleportByFly(${arg})">${floorLabel}${isCurrent ? ' (当前)' : ''}</button>`;
        });
        listContainer.innerHTML = html;
        modal.classList.add('active');
    }

    // 楼层传送器瞬间跃迁
    teleportByFly(targetFloor) {
        this.closeActiveModals();
        if (targetFloor === this.hero.floor) {
            this.showMessage('您当前已在此楼层！');
            return;
        }
        if (!this.floorMaps[targetFloor]) {
            this.showMessage('该楼层尚未开放！');
            return;
        }

        const map = this.floorMaps[targetFloor];
        this.hero.floor = targetFloor;
        if (typeof targetFloor === 'number') {
            this.hero.maxVisitedFloor = Math.max(this.hero.maxVisitedFloor || 0, targetFloor);
        } else {
            this.hero.maxVisitedFloor = targetFloor;
        }

        if (map.downPos) {
            this.hero.x = map.downPos.x;
            this.hero.y = map.downPos.y;
        } else if (map.upPos) {
            this.hero.x = map.upPos.x;
            this.hero.y = map.upPos.y;
        } else {
            this.hero.x = 6;
            this.hero.y = 10;
        }

        const toolName = this.hero.hasBigFly ? '大飞行器' : '楼层传送器';
        window.sounds.playStairs();
        this.showMessage(`🪽 使用【${toolName}】成功！已瞬间降临至 ${map.name || map.title || targetFloor} 楼梯口！`);
        this.updateHUD();
    }

    // 中心对称飞行器 (6F / 24F)
    useCenterFly() {
        if (!this.hero.hasCenterFly) {
            this.showMessage('尚未获得【中心对称飞行器】！');
            return;
        }
        const targetX = 12 - this.hero.x;
        const targetY = 12 - this.hero.y;
        const curMap = this.getCurrentMap();
        const cell = curMap.grid[targetY][targetX];

        if (cell === 'wall' || cell === 'iron_wall' || cell === 'yellow_wall' || cell === 'white_wall' || cell === 'lava' || (typeof cell === 'string' && cell.startsWith('door_')) || TOWER_CONFIG.MONSTERS[cell]) {
            this.showMessage('中心对称落点存在障碍阻挡，无法瞬移！');
            window.sounds.playBump();
            return;
        }

        this.hero.x = targetX;
        this.hero.y = targetY;
        window.sounds.playItem();
        this.showMessage(`✨ 使用中心对称飞行器！已瞬间跃迁至坐标 (${targetX}, ${targetY})！`);
        if (TOWER_CONFIG.ITEMS[cell]) {
            this.handleItemPickup(targetX, targetY, cell);
        }
        this.updateHUD();
    }

    // 破墙镐
    usePickaxe() {
        if (!this.hero.hasPickaxe) {
            this.showMessage('尚未获得【破墙镐】！');
            return;
        }
        const dirMap = {
            up: { dx: 0, dy: -1 },
            down: { dx: 0, dy: 1 },
            left: { dx: -1, dy: 0 },
            right: { dx: 1, dy: 0 }
        };
        const delta = dirMap[this.hero.direction] || { dx: 0, dy: -1 };
        const tx = this.hero.x + delta.dx;
        const ty = this.hero.y + delta.dy;
        const curMap = this.getCurrentMap();

        if (tx < 0 || tx >= TOWER_CONFIG.GRID_WIDTH || ty < 0 || ty >= TOWER_CONFIG.GRID_HEIGHT) {
            this.showMessage('前方已是魔塔外壁，无法开凿！');
            return;
        }

        const cell = curMap.grid[ty][tx];
        if (cell === 'wall' || cell === 'yellow_wall' || cell === 'white_wall' || cell === 1) {
            curMap.grid[ty][tx] = 0;
            window.sounds.playDoor();
            this.showMessage('⛏️ 挥动破墙镐！前方的石墙被彻底粉碎！');
            const idx = this.hero.inventory ? this.hero.inventory.indexOf('pickaxe') : -1;
            if (idx !== -1) {
                this.hero.inventory.splice(idx, 1);
            }
            this.hero.hasPickaxe = false;
            this.updateHUD();
        } else {
            this.showMessage('前方并不是普通石墙，无法使用破墙镐！');
        }
    }

    // 上楼飞行器
    useUpFly() {
        if (!this.hero.hasUpFly) {
            this.showMessage('尚未获得【上楼飞行器】！');
            return;
        }
        const maxFloor = Math.max(...Object.keys(this.floorMaps).map(Number));
        if (this.hero.floor >= maxFloor) {
            this.showMessage('已经是魔塔最高层，无法继续上飞！');
            return;
        }
        this.changeFloor(this.hero.floor + 1, 'up');
        this.showMessage(`🪽 使用【上楼飞行器】成功升至 ${this.hero.floor}F！`);
    }

    // 下楼飞行器
    useDownFly() {
        if (!this.hero.hasDownFly) {
            this.showMessage('尚未获得【下楼飞行器】！');
            return;
        }
        if (this.hero.floor <= 0) {
            this.showMessage('已经是魔塔最底层，无法继续下飞！');
            return;
        }
        this.changeFloor(this.hero.floor - 1, 'down');
        this.showMessage(`🪽 使用【下楼飞行器】成功降至 ${this.hero.floor}F！`);
    }

    // 统一道具使用与查看
    useItem(itemId) {
        if (itemId === 'fly' || itemId === 'big_fly') {
            this.openFlyModal();
        } else if (itemId === 'up_fly') {
            this.useUpFly();
        } else if (itemId === 'down_fly') {
            this.useDownFly();
        } else if (itemId === 'book') {
            this.openMonsterBook();
        } else if (itemId === 'center_fly') {
            this.useCenterFly();
        } else if (itemId === 'pickaxe') {
            this.usePickaxe();
        } else if (itemId === 'cross') {
            this.showMessage('【神圣十字架】被动圣器：全属性额外提升 20%，生命归零自动复活！');
        } else if (itemId === 'proof_brave') {
            this.showMessage('【勇者之证】职业神物：转职勇者，攻击力大幅提升，暴击率提升 20%！');
        } else if (itemId === 'proof_tyrant') {
            this.showMessage('【霸者之证】职业神物：转职霸者，防御力大幅强化，生命上限提升 1000！');
        } else if (itemId === 'proof_sage') {
            this.showMessage('【贤者之证】职业神物：转职贤者，攻防兼备，觉醒魔力抗性！');
        } else if (itemId === 'knife') {
            this.showMessage('【屠龙匕首】克制神物：对恶龙类怪物拥有致命暴击翻倍威能！');
        } else if (itemId === 'shoes') {
            this.showMessage('【神行之靴】身法圣器：敏捷与闪避率提升 5%！');
        } else if (itemId === 'poisonWine') {
            this.showMessage('【解毒药水】：随时使用可解除身体的中毒状态！');
        } else if (itemId === 'weakWine') {
            this.showMessage('【解衰药水】：随时使用可解除身体的虚弱诅咒！');
        } else if (itemId === 'coin') {
            this.showMessage('【幸运金币】被动宝物：每次击败怪物获得的金币永久翻倍！');
        } else if (itemId === 'ice_pickaxe') {
            this.showMessage('【破冰镐】被动圣器：可自动开凿撞碎坚冰结界！');
        } else {
            const item = TOWER_CONFIG.ITEMS[itemId];
            this.showMessage(`【${item ? item.name : itemId}】: ${item ? item.desc : '神秘宝物'}`);
        }
    }

    // 打开怪物手册
    openMonsterBook() {
        const curMap = this.getCurrentMap();
        const monstersOnFloor = {};

        // 统计当前层出现的怪物
        for (let y = 0; y < TOWER_CONFIG.GRID_HEIGHT; y++) {
            for (let x = 0; x < TOWER_CONFIG.GRID_WIDTH; x++) {
                const cell = curMap.grid[y][x];
                if (TOWER_CONFIG.MONSTERS[cell]) {
                    monstersOnFloor[cell] = (monstersOnFloor[cell] || 0) + 1;
                }
            }
        }

        const list = Object.keys(monstersOnFloor);
        if (list.length === 0) {
            this.showMessage('本层没有探测到任何怪物，十分安全！');
            return;
        }

        this.isBusy = true;
        const modal = document.getElementById('book-modal');
        const content = document.getElementById('book-list');
        if (!modal || !content) return;

        let html = '';
        list.forEach(mId => {
            const m = TOWER_CONFIG.MONSTERS[mId];
            const battle = TOWER_CONFIG.calculateBattle(this.hero, m, this.cheats);
            const count = monstersOnFloor[mId];

            const lossColor = battle.canWin ? (battle.damage === 0 ? '#4ade80' : '#f59e0b') : '#ef4444';
            const statusText = battle.canWin ? `损失 ${battle.damage} HP (需${battle.rounds}回合)` : '不可战胜 (破防不足或HP不够)';

            html += `
                <div class="book-card">
                    <div class="book-card-header">
                        <h4>${m.name} <span class="badge">数量: ${count}</span></h4>
                    </div>
                    <div class="book-card-body">
                        <div>生命: <b>${m.hp}</b></div>
                        <div>攻击: <b>${m.atk}</b></div>
                        <div>防御: <b>${m.def}</b></div>
                        <div>金币: <b>+${m.gold}</b></div>
                        <div>经验: <b>+${m.exp}</b></div>
                    </div>
                    <div class="book-card-calc" style="color: ${lossColor};">
                        <b>战斗预测:</b> ${statusText}
                    </div>
                </div>
            `;
        });

        content.innerHTML = html;
        modal.classList.add('active');
    }

    closeActiveModals() {
        document.querySelectorAll('.game-modal').forEach(m => m.classList.remove('active'));
        this.isBusy = false;
    }

    // 消息 Toast
    showMessage(msg) {
        const toast = document.getElementById('game-toast');
        if (toast) {
            toast.innerText = msg;
            toast.classList.add('show');
            clearTimeout(this._toastTimer);
            this._toastTimer = setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    }

    // 更新左侧 HUD 状态栏
    updateHUD() {
        if (!this.hero) return;

        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.innerText = val;
        };

        const curMap = this.getCurrentMap();
        setVal('hud-floor', curMap ? (curMap.name || curMap.title || `${this.hero.floor}F`) : `${this.hero.floor}F`);
        setVal('hud-level', this.hero.level);
        setVal('hud-hp', this.hero.hp);
        setVal('hud-atk', this.hero.atk);
        setVal('hud-def', this.hero.def);
        setVal('hud-gold', this.hero.gold);
        setVal('hud-exp', this.hero.exp);
        setVal('hud-yellow-keys', this.hero.yellowKeys);
        setVal('hud-blue-keys', this.hero.blueKeys);
        setVal('hud-red-keys', this.hero.redKeys);
        setVal('hud-sword', this.hero.sword);
        setVal('hud-shield', this.hero.shield);

        const criRow = document.getElementById('hud-row-cri');
        const agiRow = document.getElementById('hud-row-agi');
        const greenSlot = document.getElementById('hud-key-green-slot');
        if (this.currentVersion === 'xinxin') {
            if (criRow) { criRow.style.display = 'flex'; setVal('hud-cri', (this.hero.cri || 5) + '%'); }
            if (agiRow) { agiRow.style.display = 'flex'; setVal('hud-agi', (this.hero.agi || 2) + '%'); }
            if (greenSlot) {
                greenSlot.style.display = 'flex';
                setVal('hud-green-keys', this.hero.greenKeys || 0);
            }
        } else {
            if (criRow) criRow.style.display = 'none';
            if (agiRow) agiRow.style.display = 'none';
            if (greenSlot) greenSlot.style.display = 'none';
        }

        // 绘制原版图标到 HUD 各槽位
        const drawSlot = (canvasId, spriteId) => {
            const c = document.getElementById(canvasId);
            if (!c) return;
            const ctx = c.getContext('2d');
            ctx.clearRect(0, 0, c.width, c.height);
            if (window.spriteSheet && window.spriteSheet.loaded) {
                window.spriteSheet.draw(ctx, spriteId, 0, 0, c.width, c.height);
            }
        };

        drawSlot('hud-hero-icon', 'hero');
        drawSlot('hud-key-yellow-icon', this.currentVersion === 'xinxin' ? 'yellowKey' : 'key_yellow');
        drawSlot('hud-key-blue-icon', this.currentVersion === 'xinxin' ? 'blueKey' : 'key_blue');
        drawSlot('hud-key-red-icon', this.currentVersion === 'xinxin' ? 'redKey' : 'key_red');
        if (this.currentVersion === 'xinxin') {
            drawSlot('hud-key-green-icon', 'greenKey');
        }
        drawSlot('hud-sword-icon', this.getEquippedSwordSprite());
        drawSlot('hud-shield-icon', this.getEquippedShieldSprite());

        // 渲染宝物背包格子
        const invGrid = document.getElementById('hud-inventory-grid');
        if (invGrid) {
            const inv = this.hero.inventory || [];
            if (inv.length === 0) {
                invGrid.innerHTML = '<div class="inventory-empty-tip">暂无收集的宝物</div>';
            } else {
                invGrid.innerHTML = '';
                inv.forEach(itemId => {
                    const item = TOWER_CONFIG.ITEMS[itemId];
                    const slot = document.createElement('div');
                    const isUsable = ['fly', 'big_fly', 'book', 'center_fly', 'pickaxe'].includes(itemId);
                    slot.className = 'inventory-slot' + (isUsable ? ' active-usable' : '');
                    slot.title = `${item ? item.name : itemId}：${item ? item.desc : ''} (${isUsable ? '点击使用' : '常驻被动生效'})`;
                    slot.onclick = () => this.useItem(itemId);

                    const canvas = document.createElement('canvas');
                    canvas.width = 32;
                    canvas.height = 32;
                    const ctx = canvas.getContext('2d');
                    if (window.spriteSheet && window.spriteSheet.loaded) {
                        window.spriteSheet.draw(ctx, itemId, 0, 0, 32, 32);
                    }
                    slot.appendChild(canvas);

                    const nameSpan = document.createElement('span');
                    nameSpan.className = 'inventory-slot-name';
                    nameSpan.innerText = item ? item.name : itemId;
                    slot.appendChild(nameSpan);

                    invGrid.appendChild(slot);
                });
            }
        }

        // 传送按钮高亮状态
        const flyBtn = document.getElementById('hud-fly-btn');
        if (flyBtn) {
            if (this.hero.hasFly) {
                flyBtn.style.borderColor = '#38bdf8';
                flyBtn.style.color = '#38bdf8';
                flyBtn.style.boxShadow = '0 0 10px rgba(56, 189, 248, 0.3)';
            } else {
                flyBtn.style.borderColor = '#334155';
                flyBtn.style.color = '#64748b';
                flyBtn.style.boxShadow = 'none';
            }
        }

        // 如果 GM 后台已挂载，同步更新 GM 控件
        if (this.onStateChange) {
            this.onStateChange(this.hero, this.cheats);
        }
    }
}

window.GameEngine = GameEngine;
