import {request} from "./request";
import Qs from 'qs';

export function getProjectList() {
    return request({
        url: '/brazeNotification/',
        params: {
            format: 'json'
        }

    })
}

export function getProjectDetail(projectName) {
    return request({
        url: `/brazeNotification/${projectName}/`,
        params: {
            format: 'json'
        }
    })
}

export function createProject(projectName, projectScheme, apiKey, instanceUrl) {
    return request({
        url: '/brazeNotification/',
        method: 'post',
        data: Qs.stringify({
            project_name: projectName,
            project_scheme: projectScheme,
            project_api_key: apiKey,
            project_instance_url: instanceUrl
        })
    })
}

export function deleteProject(nid) {
    return request({
        url: '/brazeNotification/delete/',
        method: 'post',
        data: Qs.stringify({
            nid: nid
        })
    })
}

export function getNotificationDetail(projectName) {
    return request({
        url: `/brazeNotification/${projectName}`,
        params: {
            format: 'json'
        }
    })
}