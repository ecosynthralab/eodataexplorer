# EO Data Explorer

**A free, browser-based tool for finding and downloading real Earth observation data over any area of interest.**

Built by [Ecosynthra Lab](https://github.com/ecosynthralab) for teaching GIS, remote sensing, and environmental science, with a focus on West African / Nigerian landscapes.

**Live app:** [eo-data-explorer.netlify.app](https://eo-data-explorer.netlify.app)

---

## What it does

EO Data Explorer lets you draw an area of interest on a map, pick a satellite sensor or climate dataset, and get back **real, working links** to the actual imagery covering that area, sourced live from public satellite data catalogs. No account, no API key, no cost.

It also generates ready-to-run [Google Earth Engine](https://earthengine.google.com/) scripts for the same area, sensor, and date range, so you can move from browsing to analysis without writing catalog-query code by hand.

This is a teaching tool first: it's built to make the mechanics of satellite data (revisit cycles, cloud cover, tile grids, band combinations) visible and explorable for students who are new to remote sensing.

## Features

- **Draw an AOI** directly on the map (rectangle or polygon), or use the default Southeast Nigeria extent.
- **Search real scenes** for Sentinel-2, Landsat 8/9, and Sentinel-1, queried live from the [Element84 Earth Search STAC API](https://earth-search.aws.element84.com/v1) over AWS Open Data. Dates, cloud cover, tile IDs, and footprint shapes shown are genuine catalog results, not simulated.
- **See the real satellite footprint** for any scene on the map (the actual MGRS tile / WRS path-row geometry), separate from your drawn AOI, since satellite tile grids are fixed and rarely line up with a custom study area.
- **Download real files**: direct HTTPS/S3 links to individual band COGs (Cloud-Optimized GeoTIFFs), with `wget` commands and GDAL/QGIS-ready `/vsicurl/` paths, so you can pull data straight into your own workflow.
- **Elevation data** via Copernicus DEM GLO-30 (30 m), also fetched live from the same STAC catalog.
- **Climate variables** (precipitation from CHIRPS, temperature and soil moisture from TerraClimate, land surface temperature from MODIS), routed through Google Earth Engine since these datasets aren't distributed as simple per-scene files.
- **One-click GEE script generation**: visualize, export to Drive, export to an Earth Engine asset, chart a time series, or export a CSV table, pre-filled with your AOI, date range, and selected bands.
- **Band Combination Guide** ("Teaching Layer"): a reference panel explaining common band combinations (true color, false color, NDVI, etc.) and what they're used for.

## How to use it

1. Open the app and draw an AOI on the map using the polygon or rectangle tool.
2. Pick a sensor: Sentinel-2, Sentinel-1, Landsat 8/9, SRTM/Copernicus DEM, or Climate.
3. Set a date range and, for optical sensors, a maximum cloud cover.
4. Click **Search Scenes**. Real results load from the live catalog; this can take a few seconds.
5. Click a scene to expand it, then **Download** for direct file links, `wget` commands, or GDAL syntax; or click a date in a footprint's map popup to jump straight to that scene's download panel.
6. Click **GEE Script** to generate a Google Earth Engine script for the same AOI, sensor, and bands. Paste it into the [Earth Engine Code Editor](https://code.earthengine.google.com/) and run it.

## Data sources

All data is pulled live from public, open catalogs. EO Data Explorer does not host, cache, or redistribute any imagery itself; it only builds correct links and queries to existing free archives.

| Data | Source | Notes |
|---|---|---|
| Sentinel-2 L2A | [Element84 Earth Search](https://earth-search.aws.element84.com) / AWS Open Data | Copernicus Sentinel data, ESA |
| Landsat 8/9 Collection 2 L2 | Element84 Earth Search / AWS Open Data | USGS/NASA, public domain |
| Sentinel-1 GRD | Earth Search (search only); downloads via [ASF DAAC](https://search.asf.alaska.edu/) | Free account required for SAR download |
| Elevation | Copernicus DEM GLO-30, via Earth Search | ~30 m resolution |
| Precipitation | [CHIRPS](https://www.chc.ucsb.edu/data/chirps), UCSB Climate Hazards Center | Global daily, unclipped |
| Temperature, soil moisture, ET | [TerraClimate](http://www.climatologylab.org/terraclimate.html), University of Idaho | Monthly, via Google Earth Engine |
| Land surface temperature | MODIS MOD11A2, NASA | 8-day composite, via Google Earth Engine |

## Known limitations

- **Cloud-free scenes aren't always available.** If the app can't find a scene under your cloud cover ceiling near the requested date, it says so and shows the closest real match instead of pretending one exists.
- **Copernicus DEM downloads are single-tile.** For an AOI spanning more than one 1°x1° DEM tile, the download panel returns one real tile near your AOI, not a full mosaic. The GEE script tab mosaics correctly across tiles.
- **TerraClimate, MODIS, and Sentinel-1 don't have simple direct-download files.** These route through the GEE Script tab or an external portal (ASF DAAC) instead of a fabricated direct link, because no such file exists as a clean per-AOI download.
- **CHIRPS downloads are global, not clipped to your AOI.** Clip locally with GDAL, or use the GEE Script tab for a pre-clipped export.
- File sizes shown in the download panel are fetched live from the source server where possible; if that check fails (some servers block it), the panel says so rather than guessing.

## Tech stack

Single-page static app: HTML, vanilla JavaScript, [Leaflet](https://leafletjs.com/) + Leaflet.draw for the map, and the [STAC API](https://stacspec.org/) for catalog search. No backend server and no build step; it runs entirely in the browser and talks directly to public data APIs.

## Credits

Developed by **Ecosynthra Lab**, led by Dr. Chidimma C. Maduka, Department of Geography and Meteorology, Nnamdi Azikiwe University, Awka, Nigeria.

Not affiliated with ESA, NASA, USGS, Element84, or Google. All trademarks and datasets belong to their respective owners; this tool simply provides a friendlier interface to publicly available catalogs.

## Feedback

This is an active teaching tool and still evolving. Bug reports, feature requests, and classroom feedback are welcome.
Kindly send feedbacks through ecosynthralab@gmail.com.