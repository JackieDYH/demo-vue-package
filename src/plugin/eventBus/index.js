/*
 * @Author: Jackie
 * @Date: 2023-06-15 09:10:50
 * @LastEditTime: 2023-06-15 09:11:09
 * @LastEditors: Jackie
 * @Description: eventBus.js入口文件
 * @FilePath: /demo-vue-package/src/plugin/eventBus/index.js
 * @version: 
 */
export default class EventBus{
    constructor(){
        this.events = {};
    }
    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function(fn) {
                fn(data);
            });
        }
    }
    on(eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    }

    off(eventName, fn) {
        if (this.events[eventName]) {
            for (var i = 0; i < this.events[eventName].length; i++) {
                if (this.events[eventName][i] === fn) {
                    this.events[eventName].splice(i, 1);
                    break;
                }
            };
        }
    }
}