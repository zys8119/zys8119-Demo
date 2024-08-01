import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { template } from 'lodash';
import createReleases from './createReleases';
import argv from './argv';
(async () => {
    try {
        const releases = createReleases();
        const a = await releases.list();
        const defaultVerions = typeof argv.version === 'string' ? argv.version : '3.0.0';
        let version =
            typeof argv.version === 'string'
                ? argv.version
                : argv.update
                ? a?.[0]?.name || defaultVerions
                : a?.[0]?.name
                ? execSync(`semver ${a?.[0]?.name} -i`).toString().trim()
                : defaultVerions;
        releases[argv.update ? 'update' : 'create']({
            description: template(readFileSync(resolve(__dirname, '../changelog.md'), 'utf-8'))({
                version
            }),
            tag_name: version,
            ref: execSync(`git log -n 1 --pretty=format:"%H"`).toString().trim(),
            zipDir: 'dist/**',
            filename: '前端部署资源包'
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response.data);
                console.log(version);
            });
    } catch (e) {
        console.log(e);
    }
})();
