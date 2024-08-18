import { Releases } from 'gitlab-releases';
const createReleases = function () {
    return new Releases({
        host: '',
        baseURL: '/api/v4',
        token: '',
        projectName: ''
    });
};

export default createReleases;
