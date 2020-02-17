import Vue from 'vue'
import axios from './axios'
import {Message} from 'element-ui'
Vue.component(Message)
export function post (url, data, error) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(res => {
            resolve(res)
        }, err => {
            err = error ? error : err
            Message({
                message: err,
                duration: 500
            })
            reject(err)
        })
    })
}
export function get (url, data, error) {
    return new Promise((resolve, reject) => {
        axios.get(url, data).then(res => {
            resolve(res)
        }, err => {
            err = error ? error : err
            Message({
                message: err,
                duration: 500
            })
            reject(err)
        })
    })
}