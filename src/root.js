import { registerMicroApps, loadMicroApp, start } from 'qiankun';

registerMicroApps([
  {
    name: 'sub1',
    entry: '//localhost:3400',
    container: '#container',
    activeRule: '/sub1',
  },
]);

loadMicroApp(
  {
    name: 'utils',
    entry: {
      scripts: ['//localhost:3401/index.js'],
    },
    container: '#container',
    props: {
      //
    },
  },
  {
    sandbox: false, // false之后 在util里往window上挂载属性就不会被隔离
  },
);

start();
