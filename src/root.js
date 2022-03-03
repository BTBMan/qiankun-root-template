import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'sub1',
    entry: '//localhost:3400',
    container: '#container',
    activeRule: '/sub1',
  },
]);

start();
