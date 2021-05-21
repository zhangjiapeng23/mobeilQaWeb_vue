import {request} from "./request";

export function getProjectList() {
    return request({
        url: '/appReviews/',
        method: 'get',
        params: {
            format: 'json'
        }
    })
}


export function createProject(formData) {
    return request({
        url: '/appReviews/',
        method: 'post',
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export function  getProjectDetail(platform, project, querySet) {
    return request({
        url: `/appReviews/${project}/${platform}/`,
        method: 'get',
        params: querySet
    })
}

export  function getScrfToken() {
    return request({
        url: '/getCsrfToken/'
    })
}