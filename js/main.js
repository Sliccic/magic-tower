/**
 * 经典魔塔 - 应用程序入口与版本调度器
 */
document.addEventListener('DOMContentLoaded', () => {
    // 实例化引擎与 GM 控制台
    const canvas = document.getElementById('game-canvas');
    const engine = new GameEngine();
    window.game = engine;

    const gmPanel = new GMPanel(engine);
    window.gmPanel = gmPanel;

    // 初始化引擎与 GM
    engine.init(canvas);
    gmPanel.init();

    // 页面交互唤醒音频（防止现代浏览器自动播放限制）
    document.body.addEventListener('click', () => {
        if (window.sounds) window.sounds.ensureContext();
    }, { once: true });

    // 快速保存 (F5) / 快速读档 (F9) / 怪物手册 (L)
    window.addEventListener('keydown', (e) => {
        if (e.key === 'F5') {
            e.preventDefault();
            gmPanel.saveToStorage();
        } else if (e.key === 'F9') {
            e.preventDefault();
            gmPanel.loadFromStorage();
        }
    });

    // 版本选择切换
    window.selectGameVersion = function(version) {
        const launcher = document.getElementById('version-launcher');
        const gameView = document.getElementById('game-container');
        const headerTitle = document.getElementById('current-game-title');

        if (version === 'classic21') {
            headerTitle.innerText = '经典 21/24层魔塔（胖老鼠版）';
            launcher.style.display = 'none';
            gameView.style.display = 'flex';
            engine.resetGame();
        } else if (version === 'tower50') {
            headerTitle.innerText = '经典 50层魔塔（TSW 渡部直 1996 鼻祖版）';
            launcher.style.display = 'none';
            gameView.style.display = 'flex';
            engine.resetGame('tower50');
        } else if (version === 'xinxin') {
            headerTitle.innerText = '新新魔塔（56层策略革新版 - cos105hk）';
            launcher.style.display = 'none';
            gameView.style.display = 'flex';
            engine.resetGame('xinxin');
        }
    };

    // 返回版本选择页面
    window.backToLauncher = function() {
        if (confirm('确定要返回魔塔版本选择主页吗？（当前未保存的进度可能会丢失）')) {
            engine.closeActiveModals(); // 关闭所有未关闭的对话框
            document.getElementById('game-container').style.display = 'none';
            document.getElementById('version-launcher').style.display = 'block';
        }
    };
});
