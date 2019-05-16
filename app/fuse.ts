import { FuseBox, JSONPlugin, QuantumPlugin } from 'fuse-box'
import { context, task } from 'fuse-box/sparky'

context(
  class {
    noWatch = false
    noServer = false

    getConfig() {
      return FuseBox.init({
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
    }

    createBundle(fuse: FuseBox) {
      const app = fuse.bundle('compiled/server')
      // const vendor = fuse.bundle('compiled/vendor');
      app.instructions('> server/index.ts')
      // app.instructions('> [server/index.ts]');
      // vendor.instructions('~ server/index.ts');

      if (!this.noWatch) {
        app.watch('app/**')
        // vendor.watch('package.json');
      }

      if (!this.noServer) {
        app.completed(async (proc) => {
          await proc.start()
        })
      }
    }
  }
)

task('default', async (context: any) => {
  const fuse = context.getConfig()
  context.createBundle(fuse)
  await fuse.run()
})

task('noServer', async (context: any) => {
  context.noServer = true

  const fuse = context.getConfig()
  context.createBundle(fuse)
  await fuse.run()
})

task('set-prod-env', (context: any) => {
  context.noServer = true
  context.noWatch = true
})

task('build', ['set-prod-env'], async (context: any) => {
  const fuse = context.getConfig()
  context.createBundle(fuse)
  await fuse.run()
})
