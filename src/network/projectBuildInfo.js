import {request} from "./request";

export function getProjectList(system) {
    return request({
        url: `/projectInfo/${system}ProjectList/`,
        params: {
            format: "json"
        }
    })
}

export function getBuildRecordList(system, projectName, page, pageSize) {
    return request({
        url: `/projectInfo/${system}ProjectList/${projectName}/`,
        params: {
            page: page,
            pageSize: pageSize,
            format: "json"
        }
    })
}

export function getBuildRecordDetail(system, nid) {
    return request({
        url: `projectInfo/${system}LibraryDetail/`,
        params: {
            id: nid,
            format: 'json'
        }
    })
}