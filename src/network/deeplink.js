import {request} from "./request";

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