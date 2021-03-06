import { FuseBox, JSONPlugin, QuantumPlugin } from 'fuse-box'

;['server', 'ingestor'].forEach((service) => {
  const fuse = FuseBox.init({
    tsConfig: './tsconfig.json',
    homeDir: '.',
    output: 'build/$name.js',
    useTypescriptCompiler: true,
    sourceMaps: true,
    target: 'server@es7',
    plugins: [
      ['node_modules/**/*.json', JSONPlugin()],
      QuantumPlugin({
        bakeApiIntoBundle: true,
        treeshake: true,
        uglify: true,
        target: 'server',
      }),
    ],
  })

  fuse.bundle(service).instructions(`> ${service}/index.ts`)
  fuse.run()
})
