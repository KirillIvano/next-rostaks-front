const Client = require('ssh2-sftp-client');
const path = require('path');
const fs = require('fs');
const glob = require('glob-all');


const DIST_PATH = path.resolve(__dirname);

const DEST_PATH = '/root/front';
const SSH_CONFIG = {
    host: '5.63.152.182',
    port: 22,
    username: 'root',
    password: 'thai4ahWaeso',
};

const getDistPath = f =>
    path.join(DIST_PATH, f);

const getDestPath = f =>
    `${DEST_PATH}/${f}`;


const divide = (arr, predicate) =>
    arr.reduce((acc, el, ind) => {
        if (predicate(el, ind)) {
            acc[0].push(el);
        } else {
            acc[1].push(el);
        }

        return acc;
    }, [[], []]);


const getDistContent = () => new Promise(
    (resolve, reject) =>
        glob(
            ['**', '!test/**', '!src/**', '!node_modules/**', '!.git/**'],
            {cwd: DIST_PATH, dot: true},
            (err, files) => err !== null ? reject(err) : resolve(files),
        ),
);

const divideDistContent = files =>
    divide(files, f => fs.statSync(getDistPath(f)).isFile());


const deploy = async (distFiles, distFolders) => {
    const client = new Client();

    await client.connect(SSH_CONFIG);

    await Promise.all(distFolders.map(
        folder => client.mkdir(getDestPath(folder)).catch(() => void(0)),
    ));

    await Promise.all(distFiles.map(
        async file => {
            await client.put(
                getDistPath(file),
                getDestPath(file),
            );
        },
    ));

    await client.end();
};


const run = async () => {
    const distContent = await getDistContent();
    const [distFiles, distFolders] = divideDistContent(distContent);

    await deploy(distFiles, distFolders);
};

run();
