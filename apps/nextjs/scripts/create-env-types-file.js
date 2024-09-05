async function createEnvTypesFile() {
  const fs = await import('node:fs')
  const path = await import('node:path')
  const dotenv = await import('dotenv')
  const rootDir = path.resolve(__dirname, '..')

  const result = {}
  const files = await fs.promises.readdir(rootDir)
  let envFiles = files.filter(
    file => file.startsWith('.env') && !file.endsWith('.template'),
  )

  if (!envFiles.length) {
    // Use .env.template files if .env files are not present
    envFiles = files.filter(
      file => file.startsWith('.env') && file.endsWith('.template'),
    )
  }

  for (const file of envFiles) {
    const filePath = path.resolve(rootDir, file)
    const parsed = dotenv.parse(await fs.promises.readFile(filePath))

    for (const [key, value] of Object.entries(parsed)) {
      result[key] = typeof value
    }
  }

  const envTypes = Object.entries(result).map(([key, value]) => `${key}: ${value}`).join('\n')

  const fileContent = `/* eslint-disable */  
// This file was generated automatically by create-env-types-file.js script
// Please do not modify it manually
  
declare namespace NodeJS { 
  export interface ProcessEnv {
${envTypes} 
  } 
}`

  await fs.promises.writeFile(
    path.resolve(rootDir, 'environment.d.ts'),
    fileContent,
  )
}

(async () => {
  try {
    await createEnvTypesFile()
  }
  catch (error) {
    console.error('\u001B[31mError creating environment types file:', error)
    const process = await import('node:process')
    process.exit(1)
  }
})()
