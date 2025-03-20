function simplifyPath(path: string): string {
    const directories = [];
    
    const names = path.split('/').filter(p => p.length);

    for (const name of names) {
        if (name === '.') continue;
        else if (name === '..') directories.pop();
        else directories.push(name);
    }

    return '/' + directories.join('/');
};