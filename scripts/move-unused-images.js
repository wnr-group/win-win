#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, statSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const publicDir = path.join(projectRoot, 'public')
const assetsDir = path.join(publicDir, 'assets')
const unusedImagesDir = path.join(assetsDir, 'unused-images')

const imageFileNames = [...new Set([
  '55HRCEndMillBG.png',
  'aluSeriesBG.png',
  'aluSeriesFlatEndTool1.png',
  'AluSeriesTool.png',
  'aluSeriesTool1.png',
  'aluSeriesTool2.png',
  'aluSeriesTool3.png',
  'aluSeriesTool4.png',
  'aluSuperBrightPageBG.png',
  'BNEndTool.png',
  'pcd.jpg',
  'winwin.jpg',
  'cornerRadiusEndtool.png',
  'economySeriesTool3.png',
  'economySeriesTool4.png',
  'economySeriesTool5.png',
  'economySeriesTool6.png',
  'flatEndHighlyPolished.png',
  'flatStdHRC55Tool.png',
  'highMouldEndMillBg.png',
  'HRC55Tool.png',
  'HRC582FN.png',
  'HRC58EndMill.png',
  'HRC58LongNeck.png',
  'HRC58LongNeckRadiusRibber.png',
  'Hrc58LongNeckRibber.png',
  'HRC58RougherEndMillTool.png',
  'HRC58Tool.png',
  'HRC65Tool.png',
  'longNeckPocketMill2.png',
  'longNeckPocketMill3.png',
  'longNeckPocketMill4.png',
  'lonNeckPOcketMill1.png',
  'neckMillingTool2.png',
  'neckMillingTool3.png',
  'neckMillingTool5.png',
  'neckRibberNoseTool.png',
  'neckribberRadiusTool.png',
  'neckRibberTool.png',
  'primeSeriesTool1.png',
  'primeSeriesTool2.png',
  'primeSeriesTool3.png',
  'economy-2f-bn.png',
  'riffdatabgimage.png',
  'riffDataTool1.png',
  'riffDataTool2.png',
  'riffDataTool3.png',
  'riffDataTool4.png',
  'riffDataTool5.png',
  'rougherFlatTool.png',
  'roughingApplicationBG.png',
  'stdBallEndTool2.png',
  'stdFlatTool.png',
  'suitableForLongNeckBG.png',
  'toMachineAluPageBg.png',
  'ultraFinePageBg.png',
  'favicon-32.png',
  'favicon.png',
  'favicon.svg',
  'bilzthermaltool.jpg',
  'bilztool.jpg',
  'bilztool3.jpg',
  'bilztool4.jpg',
  'bilztool5.jpg',
  'bilztool6.jpg',
  'bilztool7.jpg',
  'Blum-tool-bg.webp',
  'blum-tool-bg1.webp',
  'blum-tool-bg2.webp',
  'blum-tool-bg3.webp',
  'blum-tool-bg4.webp',
  'blum-tool-bg5.webp',
  'blum-tool-bg6.webp',
  'emkaytool1.png',
  'emkaytool2.png',
  'emkaytool3.png',
  'emkaytool4.png',
  'emkaytool5.png',
  'emkaytool6.png',
  'emkaytool7.png',
  'etpcnc.jpg',
  'etpcncturning.jpg',
  'etphsc.jpg',
  'etptool4.jpg',
  'etptool5.jpg',
  'etptool6.jpg',
  'etptool7.jpg',
  'palbittool.jpg',
  'palbittool2.jpg',
  'palbittool3.jpg',
  'palbittool4.jpg',
  'palbittool5.jpg',
  'palbittool6.jpg',
  'palbittool7.jpg',
  'speroni-tool-bg.png',
  'speroni-tool1.png',
  'speroni-tool2.png',
  'speroni-tool3.png',
  'speroni-tool4.png',
  'speroni-tool5.png',
  'speroni-tool6.png',
  'tooflo-bg.jpg',
  'toolflo-bg1.jpg',
  'toolflo-bg2.jpg',
  'toolflo-tool1.jpg',
  'toolflo-tool2.jpg',
  'toolflo-tool3.jpg',
  'toolflo-tool4.jpg',
  'tungaloygrooving.jpg',
  'tungaloytool.jpg',
  'tungaloytool4.jpg',
  'tungaloytool5.jpg',
  'tungaloytool6.jpg',
  'tungaloytool7.jpg',
  'tungaloyturning.jpg',
  'economyseries2FLNRBNEM.png',
  'economyseries4FBN.png',
  'economyseries4FEMR.png',
  'economyseries4FLNRREM.png'
])]

const searchableExtensions = new Set([
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.css',
  '.scss',
  '.sass',
  '.less',
  '.json',
  '.html'
])

const ignoredDirectoryNames = new Set([
  'node_modules',
  '.git',
  'dist',
  'coverage',
  '.vercel',
  'scripts'
])

const ignoredSearchPaths = new Set([
  path.resolve(__filename),
  unusedImagesDir
])

const isDryRun = process.argv.includes('--dry-run')

function walkDirectory(directoryPath, predicate, results = []) {
  const entries = readdirSync(directoryPath, { withFileTypes: true })

  for (const entry of entries) {
    const absolutePath = path.join(directoryPath, entry.name)

    if (entry.isDirectory()) {
      if (ignoredDirectoryNames.has(entry.name) || ignoredSearchPaths.has(absolutePath)) {
        continue
      }

      walkDirectory(absolutePath, predicate, results)
      continue
    }

    if (predicate(absolutePath, entry.name)) {
      results.push(absolutePath)
    }
  }

  return results
}

function escapeForRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function findImagePathsByFileName(fileName) {
  return walkDirectory(projectRoot, (absolutePath, entryName) => {
    if (entryName !== fileName) {
      return false
    }

    return statSync(absolutePath).isFile() && !absolutePath.startsWith(`${unusedImagesDir}${path.sep}`)
  })
}

function getSearchableFiles() {
  return walkDirectory(projectRoot, absolutePath => {
    const extension = path.extname(absolutePath).toLowerCase()
    return searchableExtensions.has(extension) && !ignoredSearchPaths.has(absolutePath)
  })
}

function isImageReferenced(fileName, searchableFiles) {
  const escapedFileName = escapeForRegExp(fileName)
  const fileNamePattern = new RegExp(`(^|[^A-Za-z0-9_-])${escapedFileName}([^A-Za-z0-9_-]|$)`, 'i')

  for (const filePath of searchableFiles) {
    const content = readTextFile(filePath)

    if (fileNamePattern.test(content)) {
      return true
    }
  }

  return false
}

function readTextFile(filePath) {
  return readFileSync(filePath, 'utf8')
}

function getSafeDestinationPath(fileName) {
  const destinationPath = path.join(unusedImagesDir, fileName)

  if (!existsSync(destinationPath)) {
    return destinationPath
  }

  const extension = path.extname(fileName)
  const baseName = path.basename(fileName, extension)
  let counter = 1

  while (true) {
    const candidatePath = path.join(unusedImagesDir, `${baseName}-${counter}${extension}`)

    if (!existsSync(candidatePath)) {
      return candidatePath
    }

    counter += 1
  }
}

function moveUnusedImages() {
  mkdirSync(unusedImagesDir, { recursive: true })

  const searchableFiles = getSearchableFiles()

  for (const fileName of imageFileNames) {
    const imagePaths = findImagePathsByFileName(fileName)

    if (imagePaths.length === 0) {
      continue
    }

    if (isImageReferenced(fileName, searchableFiles)) {
      console.log(`USED: ${fileName}`)
      continue
    }

    if (isDryRun) {
      console.log(`WOULD MOVE TO UNUSED: ${fileName}`)
      continue
    }

    for (const imagePath of imagePaths) {
      const destinationPath = getSafeDestinationPath(fileName)
      renameSync(imagePath, destinationPath)
    }

    console.log(`MOVED TO UNUSED: ${fileName}`)
  }
}

moveUnusedImages()