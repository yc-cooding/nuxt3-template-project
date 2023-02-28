import { ElNotification } from 'element-plus';
import Clipboard from 'clipboard';

/**
 * 格式化日期
 */
 export function formatDate(date: string): string {
    const dat = new Date(date);
    const year = dat.getFullYear();
    const mon = (dat.getMonth() + 1) < 10 ? `0${dat.getMonth() + 1}` : dat.getMonth() + 1;
    const data = dat.getDate() < 10 ? `0${dat.getDate()}` : dat.getDate();
    const hour = dat.getHours() < 10 ? `0${dat.getHours()}` : dat.getHours();
    const min = dat.getMinutes() < 10 ? `0${dat.getMinutes()}` : dat.getMinutes();
    const sec = dat.getSeconds() < 10 ? `0${dat.getSeconds()}` : dat.getSeconds();

    const newDate = `${year}-${mon}-${data} ${hour}:${min}:${sec}`;
    return newDate;
}

/**
 * 信息提示
 */
 export function showMessage(text: string, type: any) {
    return ElNotification({
        message: text,
        type,
        duration: 2000,
        showClose: false,
    });
}

/**
 * 防抖
 */
 export function debounce(cb: any, time: number) {
    let timer: any;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb();
        }, time);
    };
}


/**
 * 操作本地存储信息
 */
export function storageHandle(type: string, name: string, data: any): any {
    if (type === 'get') {
        return JSON.parse(window.localStorage.getItem(name) as string);
    }
    if (type === 'set') {
        window.localStorage.setItem(name, JSON.stringify(data));
        return;
    }
    if (type === 'remove') {
        window.localStorage.removeItem(name);
        return;
    }
    if (type === 'clear') {
        window.localStorage.clear();
    }
}


/**
 * 复制
 */
export function copyFunc(domSelect: string) {
    const clip = new Clipboard(domSelect);
    showMessage('复制成功', 'success');
    return clip;
}

/**
 * 获取用户信息
 */
 export function getUserInfo() {
    const userInfo = window.localStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo) : null;
}




