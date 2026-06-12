# EO Data Explorer — Ecosynthra Lab (Student Edition)

A single-page interactive tool for exploring Earth Observation data over
Southeast Nigeria, built for teaching GIS/Remote Sensing students.

## Features
- Draw an Area of Interest (AOI) on the map
- Select sensor: Sentinel-2, Sentinel-1, Landsat 8/9, SRTM DEM
- Filter by date range and cloud cover
- Select bands/layers
- Search scenes (mock results with realistic metadata)
- Real-scale scene footprints drawn on the map
- AWS Open Data S3 download links, wget script, and GDAL/QGIS commands
- **Teaching Layer**: interactive band-combination guide (NDVI, EVI, NDWI,
  SWIR, Red-Edge, SAR, DEM terrain) with formulas and IAPS-specific use cases
- **GEE Script Generator**: builds a ready-to-run Google Earth Engine script
  based on the current AOI, sensor, dates, bands, and chosen indices

## Files
- `index.html` — the full application (single file, no build step needed)

## Hosting on Netlify (recommended)

### Option A — Drag and drop (fastest)
1. Go to https://app.netlify.com/drop
2. Drag `index.html` onto the page
3. Netlify gives you a live URL immediately (e.g. `random-name-123.netlify.app`)
4. To keep it permanently, create a free Netlify account and "claim" the site

### Option B — Connect to a Netlify account (recommended for ongoing edits)
1. Log in / sign up at https://app.netlify.com
2. Click **Add new site → Deploy manually**
3. Drag the folder containing `index.html` into the deploy area
4. Once deployed, go to **Site settings → General → Site details → Change site name**
   and set something memorable, e.g. `ecosynthra-eo-explorer`
5. Your tool will be live at:
   `https://ecosynthra-eo-explorer.netlify.app`

### Updating the site later
- Make edits to `index.html`
- Go to your site's **Deploys** tab → drag the new `index.html` in again
  (or set up continuous deployment from a GitHub repo for automatic updates)

## Hosting on GitHub Pages (alternative)
1. Create a new GitHub repo (e.g. `eo-data-explorer`)
2. Upload `index.html` to the repo root
3. Go to **Settings → Pages**
4. Under "Build and deployment", set **Source: Deploy from a branch**,
   branch: `main`, folder: `/ (root)`
5. Save — your site will be live at:
   `https://<your-username>.github.io/eo-data-explorer/`

## Notes for Students
- Everything runs client-side — no login or backend required
- AWS S3 links and `wget`/GDAL commands work directly with public AWS Open
  Data buckets (Sentinel-2 COGs, Landsat Collection 2) — no AWS account needed
- The "Search Scenes" results are illustrative/mock metadata for teaching
  purposes; real scene search would require connecting to the Copernicus
  Dataspace API or Google Earth Engine (see GEE Script panel for the latter)
