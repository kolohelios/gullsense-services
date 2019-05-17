import { FuseBox, JSONPlugin, QuantumPlugin } from 'fuse-box'
import { context, task } from 'fuse-box/sparky'

const fuse = FuseBox.init({
  tsConfig: './tsconfig.json',
  homeDir: '.',
  output: 'build/$name.js',
  sourceMaps: true,
  target: 'server@es7',
  plugins: [
    ['node_modules/**.json'],
    JSONPlugin(),
    QuantumPlugin({
      bakeApiIntoBundle: true,
      treeshake: true,
      uglify: true,
    }),
  ],
})

fuse.bundle('server').instructions('> server/index.ts')
fuse.bundle('ingestor').instructions('> ingestor/index.ts')

fuse.run()
