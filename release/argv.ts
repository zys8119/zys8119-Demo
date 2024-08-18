export default process.argv.slice(2).reduce((a, b, k, arr) => {
    if (/^-/.test(b)) {
        const lastKey = b.replace(/^-+/, '');
        a[lastKey] = true;
        a['_lastKey'] = lastKey;
    } else {
        switch (typeof a[a['_lastKey']]) {
            case 'string':
                a[a['_lastKey']] = [a[a['_lastKey']], b];
                break;
            case 'boolean':
                a[a['_lastKey']] = b;
                break;
            default:
                a[a['_lastKey']].push(b);
                break;
        }
    }
    if (k === arr.length - 1) {
        delete a['_lastKey'];
    }
    return a;
}, {}) as Record<any, any>;
