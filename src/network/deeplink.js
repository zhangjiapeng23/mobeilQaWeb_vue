import {request} from "./request";
import Qs from 'qs';

export function getProjects() {
    return request({
        url: "/deeplink/",
        params: {
            format: 'json'
        }
    })
}

export function getDeeplinkList(project) {
    return request({
        url: `/deeplink/list/${project}/`,
        params: {
            format: 'json'
        }
    })
}

export function modifyDeeplink(id, body) {
    const data = {
        deeplink_id: id,
        deeplink_body: body
    }
    return request({
        url: '/deeplink/modifyDeeplink/',
        method: 'post',
        data: Qs.stringify(data)
    })
}

export function removeDeeplink(id) {
    const data = {
        nid: id
    }
    return request({
        url: '/deeplink/removeDeeplink/',
        method: 'post',
        data: Qs.stringify(data)
    })
}

export function addDeeplink(project, content) {
    return request({
        url: `/deeplink/edit/${project}/`,
        method: 'post',
        data: Qs.stringify({
            body: content
        })
    })
}