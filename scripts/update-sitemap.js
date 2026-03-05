#!/usr/bin/env node
/**
 * Script to update sitemap.xml and robots.txt with the correct site URL
 * Run this after build with the VITE_SITE_URL environment variable set
 *
 * Usage: VITE_SITE_URL=https://your-domain.com node scripts/update-sitemap.js
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')

const SITE_URL = process.env.VITE_SITE_URL

if (!SITE_URL) {
  console.log('⚠️  VITE_SITE_URL not set, skipping sitemap/robots update')
  process.exit(0)
}

// Remove trailing slash if present
const siteUrl = SITE_URL.replace(/\/$/, '')

console.log(`🔄 Updating sitemap and robots.txt with: ${siteUrl}`)

// Update sitemap.xml
const sitemapPath = join(distDir, 'sitemap.xml')
try {
  let sitemap = readFileSync(sitemapPath, 'utf-8')
  sitemap = sitemap.replace(/SITE_URL/g, siteUrl)
  writeFileSync(sitemapPath, sitemap)
  console.log('✅ Updated sitemap.xml')
} catch (err) {
  console.error('❌ Failed to update sitemap.xml:', err.message)
}

// Update robots.txt
const robotsPath = join(distDir, 'robots.txt')
try {
  let robots = readFileSync(robotsPath, 'utf-8')
  // Uncomment and update the sitemap line
  robots = robots.replace(
    /# Sitemap: https:\/\/your-domain\.com\/sitemap\.xml/,
    `Sitemap: ${siteUrl}/sitemap.xml`
  )
  writeFileSync(robotsPath, robots)
  console.log('✅ Updated robots.txt')
} catch (err) {
  console.error('❌ Failed to update robots.txt:', err.message)
}

console.log('🎉 Done!')
