/*
 * @Author: Jackie
 * @Date: 2023-06-06 14:01:01
 * @LastEditTime: 2023-06-06 14:01:10
 * @LastEditors: Jackie
 * @Description: 自动检测前端页面更新，提示用户刷新前端页面
 * @FilePath: /demo-vue-package/src/plugin/auto-update.js
 * @version: 
 */

let lastSrcs; //上一次获取script地址

const scriptReg = /\<script.*src=["'](?<src>[^"']+)/gm;

/**
 * 获取最新页面中script链接
 */
async function extractNewScripts() {
    const html = await fetch('/?_timestamp=' + Date.now()).then((resp) => resp.text());
    scriptReg.lastIndex = 0;
    let result = [];
    let match;
    while ((match = scriptReg.exec(html))) {
        result.push(match.groups.src);
    }
    return result;
}

async function needUpdate() {
    const newScripts = await extractNewScripts();
    if (!lastSrcs) {
        lastSrcs = newScripts;
        return false;
    }
    let result = false;
    if (lastSrcs.length !== newScripts.length) {
        return true;
    }
    for (let i = 0; i < lastSrcs.length; i++) {
        if (lastSrcs[i] !== newScripts[i]) {
            result = true;
            break;
        }
    }
    lastSrcs = newScripts;
    return result;
}

const DURATION = 2000;
function autoRefresh() {
    setTimeout(async () => {
        const willUpdate = await needUpdate();
        if (willUpdate) {
            const result = confirm("页面有更新，点击确定刷新页面");
            if (result) {
                location.reload();
            }
        }
        autoRefresh();
    }, DURATION);
}

autoRefresh();