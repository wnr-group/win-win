# Win Win Tooling - Client Feedback Implementation Design

**Date:** 2026-03-10
**Status:** Approved
**Phases:** 3

---

## Summary

This document captures client feedback received via phone call and defines the implementation approach for 8 distinct changes to the Win Win Tooling website. Changes are organized into 3 phases based on complexity and dependencies.

---

## Feedback Items

### Feedback #1: Homepage Hero Background Color
- **Issue:** Hero section looks too blueish
- **Request:** Clean white/light background with contained hero imagery
- **References:**
  - Palbit (palbit.com) - contained dark hero on white
  - school.ssms.edu.in - whitish background style client prefers
- **Phase:** 2

### Feedback #2: Add Boehlerit Brand
- **Request:** Add Boehlerit as a new brand partner
- **Website:** boehlerit.com (Austrian cutting tools/carbide manufacturer)
- **Where to add:**
  1. Homepage brand slider (logo)
  2. Products page as a brand card with write-up, images, and "Explore more products" button
- **Content:** Draft write-up based on their website
- **Button behavior:** Match existing brand pages (likely opens in new tab)
- **Phase:** 3

### Feedback #3: Add More ETP Images
- **Request:** Add more product pictures for ETP brand
- **Sources:**
  1. https://www.etp.se/en/catalog/node/cnc-metalworking
  2. https://www.etp.se/en/catalog/node/cnc-turning-metalworking
- **Phase:** 3

### Feedback #4: Brand Switching Image Bug
- **Issue:** When switching brands on products page, old brand images remain visible while new ones load
- **Problem:** Creates visual confusion - seeing Brand A images when Brand B is selected
- **Cause:** Likely reusing same component without clearing image state
- **Request:** Clear old images immediately when switching brands, show loading state or wait for new images
- **Phase:** 2

### Feedback #5: About Page - Reorder Comprehensive Tooling Solutions
- **Section:** About page - "Comprehensive Tooling Solutions" (capabilities array)
- **Request:** Change order and add "Machine Tool"
- **New order:**
  1. Solid Carbide (was "Solid Carbide End Mills")
  2. Tool Holding (was "Tool Holding Systems")
  3. Indexable Cutting (was "Indexable Cutting Tools")
  4. Machine Tool (NEW - draft content)
  5. Others follow in any order (PCD & CBN, Tool Presetting, Custom Tooling, Technical Consultation)
- **Phase:** 1

### Feedback #6: About Page - Quality Commitment (Remove Certifications)
- **Section:** About page - "Quality Commitment"
- **Issue:** Currently shows ISO 9001:2015, CE Certified badges
- **Problem:** Win Win Tooling is NOT a certified company
- **Request:** Rewrite section without certification references (focus on experience, partnerships, customer satisfaction, rigorous quality processes)
- **Phase:** 1

### Feedback #7: Prime Series Material Compatibility
- **Request:** Update material compatibility text for Prime Series
- **New text:** "P - Steel / K - Cast Iron / N - Non-Ferrous"
- **Where:**
  1. Homepage - ProductHighlights.jsx (Prime series materials array)
  2. Products page - products.json (Prime series products)
- **Phase:** 1

### Feedback #8: Series Coating Classification Update
- **Request:** Update coating info to reflect proper series classification
- **Changes:**
  - Premium Series: ALTiXiN coating (HRC 65)
  - Economy Series: ALTiSiN coating (HRC 58)
- **Where:**
  1. Homepage - ProductHighlights.jsx (series specs)
  2. Products page - products.json (product data)
- **Source data (CSV provided by client):**

| Series | HRC | Coating | Material Compatibility |
|--------|-----|---------|------------------------|
| Prime | 55 | Advanced NanoCoating | P - Steel / K - Cast Iron / N - Non-Ferrous |
| Economy | 58 | ALTiSiN | P - Steel / M - Stainless Steel / K - Cast Iron / H - Hardened Steel |
| Premium | 65 | ALTiXiN | P - Steel / M - Stainless Steel / H - Hardened Steel / S - Super Alloys / High-Speed Steel / Die Steel |
| ALU | 65 | Uncoated (Polished) | N - Aluminum / Non-Ferrous Metals / Plastics / Composites |

- **Phase:** 1

---

## Implementation Phases

### Phase 1: Text & Content Updates (Quick Fixes)

**Scope:** Changes that only require text/data updates, no visual redesign.

**Files to modify:**
- `src/pages/About.jsx` - Feedback #5, #6
- `src/components/home/ProductHighlights.jsx` - Feedback #7, #8
- `src/data/products.json` - Feedback #7, #8

**Tasks:**

1. **About.jsx - Reorder capabilities array (Feedback #5)**
   - Current order: PCD & CBN, Solid Carbide End Mills, Indexable Cutting Tools, Tool Holding Systems, Tool Presetting Equipment, Custom Tooling Solutions, Technical Consultation
   - New order:
     1. "Solid Carbide"
     2. "Tool Holding"
     3. "Indexable Cutting"
     4. "Machine Tool" (NEW)
     5. "PCD & CBN Tool Solutions"
     6. "Tool Presetting Equipment"
     7. "Custom Tooling Solutions"
     8. "Technical Consultation"

2. **About.jsx - Rewrite Quality Commitment section (Feedback #6)**
   - Remove ISO 9001:2015, CE Certified, Quality Tested, Warranty Covered badges
   - Rewrite copy to focus on:
     - Rigorous quality processes
     - Partnership with certified global manufacturers
     - Customer satisfaction track record
     - Technical expertise and inspection processes
   - Replace certification badges with quality-focused value propositions

3. **ProductHighlights.jsx - Update Prime series materials (Feedback #7)**
   - Location: `productSeries` array, `prime` object
   - Change `materials: ['P', 'K', 'N']` (already correct)
   - Verify description mentions correct materials

4. **ProductHighlights.jsx - Update series coating info (Feedback #8)**
   - Economy series: Change coating from "TiSiN" to "ALTiSiN" in specs
   - Premium series: Verify coating shows "ALTiXiN" (currently shows "ALTiSiN" - needs fix)
   - Update features arrays to match

5. **products.json - Update product data (Feedback #7, #8)**
   - Prime products: Verify materialCompatibility = "P - Steel / K - Cast Iron / N - Non-Ferrous"
   - Economy products: Verify coating = "ALTiSiN"
   - Premium products: Verify coating = "ALTiXiN"

---

### Phase 2: Visual/UI Fixes

**Scope:** Changes requiring visual redesign or bug fixes.

**Files to modify:**
- `src/components/home/Hero.jsx` - Feedback #1
- `src/pages/Products.jsx` or `src/components/products/ExternalBrandInfo.jsx` - Feedback #4

**Tasks:**

1. **Hero.jsx - Redesign for white background (Feedback #1)**
   - Change from full-bleed dark hero to contained imagery on white background
   - Reference: school.ssms.edu.in layout
   - Key changes:
     - White/light page background
     - Hero image contained within bounds (not edge-to-edge)
     - Remove blue tint/overlay
     - Maintain text readability with proper contrast

2. **Products page - Fix brand switching image bug (Feedback #4)**
   - Investigate current implementation in Products.jsx and ExternalBrandInfo.jsx
   - Add state clearing when brand changes
   - Options:
     a. Clear images immediately on brand switch, show loading skeleton
     b. Use key prop to force component remount on brand change
     c. Add loading state management to prevent stale images
   - Recommended: Option (a) - clear and show loading state

---

### Phase 3: New Content

**Scope:** Adding new brand and images.

**Files to modify:**
- `src/components/home/BrandSlider.jsx` - Feedback #2 (logo)
- `src/data/brands.json` or equivalent - Feedback #2 (brand data)
- `src/components/products/ExternalBrandInfo.jsx` - Feedback #2 (brand page)
- ETP brand images - Feedback #3
- Assets folder - new images

**Tasks:**

1. **Add Boehlerit brand (Feedback #2)**
   - Download/create Boehlerit logo
   - Add to brand slider data
   - Create brand info content:
     - Company description (draft from boehlerit.com)
     - Product images from their website
     - "Explore more products" button linking to boehlerit.com
   - Match existing brand page pattern (ExternalBrandInfo component)

2. **Add more ETP images (Feedback #3)**
   - Source images from:
     - etp.se/en/catalog/node/cnc-metalworking
     - etp.se/en/catalog/node/cnc-turning-metalworking
   - Add to ETP brand section
   - Optimize images for web (WebP format, appropriate sizing)

---

## Architecture Notes

### Key Files Structure

```
src/
├── pages/
│   ├── Home.jsx           # Homepage container
│   ├── About.jsx          # About page (Feedback #5, #6)
│   └── Products.jsx       # Products page (Feedback #4)
├── components/
│   ├── home/
│   │   ├── Hero.jsx           # Hero section (Feedback #1)
│   │   ├── BrandSlider.jsx    # Brand logos (Feedback #2)
│   │   └── ProductHighlights.jsx  # Series info (Feedback #7, #8)
│   └── products/
│       └── ExternalBrandInfo.jsx  # Brand details (Feedback #2, #4)
└── data/
    └── products.json      # Product data (Feedback #7, #8)
```

### Current ProductHighlights Series Data (needs update)

```javascript
// Economy - line ~155-180
{
  id: 'economy',
  specs: {
    coating: 'TiSiN',  // WRONG - should be 'ALTiSiN'
  }
}

// Premium - line ~207-232
{
  id: 'premium',
  specs: {
    coating: 'ALTiSiN',  // WRONG - should be 'ALTiXiN'
  },
  features: ['ALTiSiN Coating', ...],  // WRONG - should be 'ALTiXiN Coating'
}
```

### Current About.jsx Quality Section (needs rewrite)

Location: Lines 300-337
- Remove certification badges (ISO 9001:2015, CE Certified, etc.)
- Rewrite paragraph to remove "certified manufacturers" language

---

## Success Criteria

- [ ] Phase 1: All text/data changes verified on homepage and products page
- [ ] Phase 2: Hero section displays with white background and contained imagery
- [ ] Phase 2: Brand switching no longer shows stale images
- [ ] Phase 3: Boehlerit appears in brand slider and has dedicated brand page
- [ ] Phase 3: ETP brand page has additional images from specified sources
- [ ] All changes tested across desktop and mobile viewports

---

## Notes

- Client is NOT certified - remove all certification references
- Button behavior for "Explore more products" should match existing brands
- Images should be optimized (WebP) before adding to assets
- Commit after each phase for easy rollback if needed
