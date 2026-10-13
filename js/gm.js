/**
 * 经典魔塔 - GM 控制后台 (Admin & Cheat Engine)
 * 支持实时数值双向绑定、道具库存修改、超能力作弊开关、关卡跃迁与一键功能
 */
class GMPanel {
    constructor(engine) {
        this.engine = engine;
        this.isOpen = false;
        this.panelEl = null;

        // 绑定引擎状态变更时自动刷新 GM 面板输入框
        this.engine.onStateChange = (hero, cheats) => {
            this.syncFromEngine(hero, cheats);
        };
    }

    init() {
        this.panelEl = document.getElementById('gm-panel');
        this.bindDOMEvents();
        this.populateFloorOptions();
    }

    // 动态载入楼层下拉选项 (适配 21F, 50F 与 新新魔塔 56F)
    populateFloorOptions() {
        const select = document.getElementById('gm-floor-select');
        if (!select || !this.engine || !this.engine.floorMaps) return;

        const currentVal = select.value || '';
        let floors = Object.keys(this.engine.floorMaps);
        if (this.engine.currentVersion === 'xinxin') {
            const getOrder = (f) => {
                if (f.startsWith('main')) return parseInt(f.replace('main', '')) || 0;
                if (f.startsWith('base')) return 100 + (parseInt(f.replace('base', '')) || 0);
                if (f.startsWith('MOTA')) return 200 + (parseInt(f.replace('MOTA', '')) || 0);
                return 999;
            };
            floors.sort((a, b) => getOrder(a) - getOrder(b));
        } else {
            floors = floors.map(Number).filter(n => !isNaN(n)).sort((a, b) => a - b);
        }

        let html = '';
        floors.forEach(f => {
            const map = this.engine.floorMaps[f];
            const name = map && (map.name || map.title) ? (map.name || map.title) : (f === 0 ? '0F - 地下牢房' : `${f}F`);
            html += `<option value="${f}">${name}</option>`;
        });
        select.innerHTML = html;
        if (this.engine.hero && floors.includes(this.engine.hero.floor)) {
            select.value = this.engine.hero.floor;
        } else if (floors.includes(currentVal)) {
            select.value = currentVal;
        }
    }

    toggle() {
        if (!this.panelEl) return;
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.panelEl.classList.add('active');
            this.syncFromEngine(this.engine.hero, this.engine.cheats);
            window.sounds.playCheat();
        } else {
            this.panelEl.classList.remove('active');
        }
    }

    // 从引擎同步数据至 GM 控制台各输入框
    syncFromEngine(hero, cheats) {
        if (!hero || !this.isOpen) return;

        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el && document.activeElement !== el) {
                el.value = val;
            }
        };

        const setCheck = (id, checked) => {
            const el = document.getElementById(id);
            if (el) el.checked = !!checked;
        };

        // 数值
        setVal('gm-hp', hero.hp);
        setVal('gm-atk', hero.atk);
        setVal('gm-def', hero.def);
        setVal('gm-gold', hero.gold);
        setVal('gm-exp', hero.exp);
        setVal('gm-level', hero.level);

        // 钥匙
        setVal('gm-key-y', hero.yellowKeys);
        setVal('gm-key-b', hero.blueKeys);
        setVal('gm-key-r', hero.redKeys);

        // 作弊开关
        setCheck('gm-toggle-noclip', cheats.noclip);
        setCheck('gm-toggle-god', cheats.godMode);
        setCheck('gm-toggle-onehit', cheats.oneHitKO);
        setCheck('gm-toggle-key', cheats.masterKey);
        setCheck('gm-toggle-damage', cheats.alwaysShowDamage);

        // 楼层传送下拉
        const floorSelect = document.getElementById('gm-floor-select');
        if (floorSelect && document.activeElement !== floorSelect) {
            if (this.engine.floorMaps && floorSelect.options.length !== Object.keys(this.engine.floorMaps).length) {
                this.populateFloorOptions();
            }
            floorSelect.value = hero.floor;
        }
    }

    bindDOMEvents() {
        // Tab 切换逻辑
        document.querySelectorAll('.gm-tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.gm-tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.gm-tab-pane').forEach(p => p.classList.remove('active'));

                btn.classList.add('active');
                const targetId = btn.getAttribute('data-tab');
                const pane = document.getElementById(targetId);
                if (pane) pane.classList.add('active');
            });
        });

        // 属性输入框即时双向绑定
        const bindInput = (id, key) => {
            const el = document.getElementById(id);
            if (!el) return;
            el.addEventListener('input', (e) => {
                const val = parseInt(e.target.value) || 0;
                this.engine.hero[key] = Math.max(0, val);
                this.engine.updateHUD();
            });
        };

        bindInput('gm-hp', 'hp');
        bindInput('gm-atk', 'atk');
        bindInput('gm-def', 'def');
        bindInput('gm-gold', 'gold');
        bindInput('gm-exp', 'exp');
        bindInput('gm-level', 'level');
        bindInput('gm-key-y', 'yellowKeys');
        bindInput('gm-key-b', 'blueKeys');
        bindInput('gm-key-r', 'redKeys');

        // 开关绑定
        const bindCheck = (id, key) => {
            const el = document.getElementById(id);
            if (!el) return;
            el.addEventListener('change', (e) => {
                this.engine.cheats[key] = e.target.checked;
                window.sounds.playCheat();
                this.engine.showMessage(`【GM权限变更】${e.target.labels[0].innerText}：${e.target.checked ? '已开启' : '已关闭'}`);
                this.engine.updateHUD();
            });
        };

        bindCheck('gm-toggle-noclip', 'noclip');
        bindCheck('gm-toggle-god', 'godMode');
        bindCheck('gm-toggle-onehit', 'oneHitKO');
        bindCheck('gm-toggle-key', 'masterKey');
        bindCheck('gm-toggle-damage', 'alwaysShowDamage');
    }

    // 快捷数值加成
    addStat(prop, amount) {
        if (!this.engine.hero) return;
        this.engine.hero[prop] += amount;
        window.sounds.playItem();
        this.engine.showMessage(`【GM加成】${prop.toUpperCase()} +${amount}！`);
        this.engine.updateHUD();
    }

    // 设置指定数值
    setStat(prop, value) {
        if (!this.engine.hero) return;
        this.engine.hero[prop] = value;
        window.sounds.playCheat();
        this.engine.showMessage(`【GM调控】${prop.toUpperCase()} 设定为 ${value}！`);
        this.engine.updateHUD();
    }

    // 一键全套神装
    equipGodSet() {
        this.engine.hero.sword = '神圣真·光辉之剑';
        this.engine.hero.shield = '神圣真·永恒圣盾';
        this.engine.hero.atk += 500;
        this.engine.hero.def += 500;
        this.engine.hero.hasCross = true;
        this.engine.hero.hasBook = true;
        this.engine.hero.yellowKeys += 50;
        this.engine.hero.blueKeys += 50;
        this.engine.hero.redKeys += 20;

        window.sounds.playCheat();
        this.engine.showMessage('【GM赐福】一键神圣毕业套装已全部注入英雄灵魂！');
        this.engine.updateHUD();
    }

    // 楼层传送
    teleport() {
        const select = document.getElementById('gm-floor-select');
        if (!select) return;
        let targetFloor = select.value;
        if (!isNaN(Number(targetFloor))) {
            targetFloor = parseInt(targetFloor);
        }
        this.engine.teleportToFloor(targetFloor);
    }

    // 预设模式一键载入
    applyPreset(type) {
        if (type === 'god') {
            // 一拳超人模式
            this.engine.hero.hp = 999999;
            this.engine.hero.atk = 99999;
            this.engine.hero.def = 99999;
            this.engine.hero.gold = 99999;
            this.engine.hero.exp = 99999;
            this.engine.hero.yellowKeys = 99;
            this.engine.hero.blueKeys = 99;
            this.engine.hero.redKeys = 99;
            this.engine.cheats.noclip = true;
            this.engine.cheats.godMode = true;
            this.engine.cheats.oneHitKO = true;
            this.engine.cheats.masterKey = true;
            this.equipGodSet();
            this.engine.showMessage('🚀【一拳超人模式】已全面启动！穿墙无敌秒杀拉满！');
        } else if (type === 'novice') {
            // 新手礼包
            this.engine.hero.hp = 8000;
            this.engine.hero.atk = 200;
            this.engine.hero.def = 200;
            this.engine.hero.gold = 1000;
            this.engine.hero.exp = 500;
            this.engine.hero.yellowKeys = 10;
            this.engine.hero.blueKeys = 10;
            this.engine.hero.redKeys = 5;
            this.engine.showMessage('🎁【新手舒适礼包】应用成功！');
        } else if (type === 'classic') {
            // 原版重置
            this.engine.resetGame();
            this.engine.showMessage('🔄 游戏数值与进度已完全重置为原版纯净模式！');
        }

        this.syncFromEngine(this.engine.hero, this.engine.cheats);
        this.engine.updateHUD();
    }

    // 存档与读档操作
    saveToStorage() {
        const data = this.engine.getSaveData();
        localStorage.setItem('magic_tower_save_slot', JSON.stringify(data));
        window.sounds.playItem();
        this.engine.showMessage('💾 游戏已成功保存到本地存储 (LocalStorage)！');
    }

    loadFromStorage() {
        const raw = localStorage.getItem('magic_tower_save_slot');
        if (!raw) {
            this.engine.showMessage('没有找到任何本地存档！');
            window.sounds.playBump();
            return;
        }
        try {
            const data = JSON.parse(raw);
            this.engine.loadSaveData(data);
            this.syncFromEngine(this.engine.hero, this.engine.cheats);
        } catch (e) {
            this.engine.showMessage('存档格式损坏，读取失败！');
        }
    }

    // 导出存档为 JSON
    exportSaveJSON() {
        const data = this.engine.getSaveData();
        const str = JSON.stringify(data, null, 2);
        navigator.clipboard.writeText(str).then(() => {
            this.engine.showMessage('📋 存档数据已完整复制到系统剪贴板！');
        }).catch(() => {
            prompt('请复制以下存档 JSON 字符串：', str);
        });
    }

    // 导入存档 JSON
    importSaveJSON() {
        const jsonStr = prompt('请粘贴存档 JSON 字符串：');
        if (!jsonStr) return;
        try {
            const data = JSON.parse(jsonStr);
            if (this.engine.loadSaveData(data)) {
                this.syncFromEngine(this.engine.hero, this.engine.cheats);
                this.engine.showMessage('📥 外部存档导入成功！');
            } else {
                this.engine.showMessage('导入失败：存档数据结构不符合规范！');
            }
        } catch (e) {
            this.engine.showMessage('无效的 JSON 字符串！');
        }
    }
}

window.GMPanel = GMPanel;
