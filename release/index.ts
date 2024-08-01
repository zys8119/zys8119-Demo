import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { template } from 'lodash';
import createReleases from './createReleases';
import argv from './argv';
(async () => {
    try {
        if (argv.syncTag) {
            execSync(`git tag -l | xargs git tag -d`);
            execSync(`git fetch --tags`);
            return;
        }
        const releases = createReleases();
        const rlist = await releases.list();
        const ref = execSync(`git log -n 1 --pretty=format:"%H"`).toString().trim();
        const defaultVerions = typeof argv.version === 'string' ? argv.version : '3.0.0';
        let version =
            typeof argv.version === 'string'
                ? argv.version
                : argv.update
                ? rlist?.[0]?.name || defaultVerions
                : rlist?.[0]?.name
                ? execSync(`semver ${rlist?.[0]?.name} -i`).toString().trim()
                : defaultVerions;
        if (argv.update && typeof rlist?.[0]?.tag_name === 'string') {
            const tag_name = rlist?.[0]?.tag_name;
            execSync(`git tag -d ${tag_name}`);
            execSync(`git push origin --delete ${tag_name}`);
            execSync(`git tag -l | xargs git tag -d`);
            execSync(`git fetch --tags`);
            await releases.delete({
                tag_name
            });
        }
        releases
            .create({
                description: template(readFileSync(resolve(__dirname, '../changelog.md'), 'utf-8'))(
                    {
                        version,
                        commitHex: ref
                    }
                ),
                tag_name: version,
                ref,
                zipDir: 'dist/**',
                filename: '前端部署资源包'
            })
            .then((res) => {
                execSync(`git tag -l | xargs git tag -d`);
                execSync(`git fetch --tags`);
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
