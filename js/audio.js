/**
 * 经典魔塔 - Web Audio API 复古合成音效引擎
 * 零外部音频文件依赖，完全离线与本地直接可用
 */
class SoundEngine {
    constructor() {
        this.ctx = null;
        this.enabled = true;
        this.bgmPlaying = false;
        this.bgmTimer = null;
        this.initContext();
    }

    initContext() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        } catch (e) {
            console.warn("AudioContext not supported", e);
        }
    }

    ensureContext() {
        if (!this.ctx) {
            this.initContext();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleSound() {
        this.enabled = !this.enabled;
        return this.enabled;
    }

    // 播放基础声波
    playTone(freq, type = 'square', duration = 0.1, gainVal = 0.1, freqEnd = null) {
        if (!this.enabled) return;
        this.ensureContext();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        if (freqEnd !== null) {
            osc.frequency.exponentialRampToValueAtTime(Math.max(10, freqEnd), this.ctx.currentTime + duration);
        }

        gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }

    // 移动音效
    playStep() {
        this.playTone(180, 'triangle', 0.04, 0.03, 120);
    }

    // 拾取物品音效 (清脆向上琶音)
    playItem() {
        if (!this.enabled) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.04);
            gain.gain.setValueAtTime(0.08, now + idx * 0.04);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.12);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + idx * 0.04);
            osc.stop(now + idx * 0.04 + 0.12);
        });
    }

    // 开门音效
    playDoor() {
        if (!this.enabled) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        [220, 330, 440].forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, now + idx * 0.05);
            gain.gain.setValueAtTime(0.06, now + idx * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.15);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + idx * 0.05);
            osc.stop(now + idx * 0.05 + 0.15);
        });
    }

    // 攻击音效 (劈砍噪音)
    playAttack() {
        if (!this.enabled) return;
        this.ensureContext();
        if (!this.ctx) return;

        this.playTone(320, 'sawtooth', 0.08, 0.12, 90);
    }

    // 怪物受击
    playHit() {
        if (!this.enabled) return;
        this.ensureContext();
        if (!this.ctx) return;

        this.playTone(150, 'square', 0.1, 0.12, 60);
    }

    // 击败怪物胜利音效
    playWin() {
        if (!this.enabled) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const notes = [440, 554.37, 659.25, 880];
        notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.06);
            gain.gain.setValueAtTime(0.09, now + idx * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.18);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + idx * 0.06);
            osc.stop(now + idx * 0.06 + 0.18);
        });
    }

    // 楼层切换音效
    playStairs() {
        this.playTone(261.63, 'sine', 0.15, 0.08, 523.25);
    }

    // 商店购买金币音效
    playShop() {
        if (!this.enabled) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        [987.77, 1318.51].forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.08);
            gain.gain.setValueAtTime(0.09, now + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.14);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + idx * 0.08);
            osc.stop(now + idx * 0.08 + 0.14);
        });
    }

    // GM作弊生效魔幻音效
    playCheat() {
        if (!this.enabled) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        [440, 660, 880, 1320, 1760].forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.04);
            gain.gain.setValueAtTime(0.12, now + idx * 0.04);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.2);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + idx * 0.04);
            osc.stop(now + idx * 0.04 + 0.2);
        });
    }

    // 错误 / 撞墙
    playBump() {
        this.playTone(110, 'square', 0.06, 0.05, 80);
    }
}

window.sounds = new SoundEngine();
