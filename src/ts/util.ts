/**
 * document#querySelectorのalias
 * @param elem p, #id, .class
 */
export const $ = (elem: string) => document.querySelector(elem)

/**
 * document#querySelectorAllのalias
 * @param elem p, #id, .class
 */
export const $$ = (elem: string) => document.querySelectorAll(elem)

/**
 * Objectの配列から、特定のkeyの値を配列として抽出する
 * @param arr Objectの配列
 * @param key 配列として取得したいkey
 */
export const extractObjectValue = <T>(arr: T[], key: keyof T) => arr.map(item => item[key])
