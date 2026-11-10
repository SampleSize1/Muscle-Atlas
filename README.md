# Muscle Atlas

Learn the muscles of the human body, layer by layer, on an interactive 3D model.

**Use it here: [samplesize1.com/tools/muscle-atlas](https://samplesize1.com/tools/muscle-atlas/)**

Made by [@samplesize_1](https://www.instagram.com/samplesize_1/), following [Bone Atlas](https://github.com/SampleSize1/Bone-Atlas).

## What it does

- The 112 muscles an intro anatomy course asks you to know, or all 208 in the model (with the heads of the deltoid, triceps, hamstrings and others asked separately)
- The whole body or one region at a time: head, neck, torso, arm or leg
- **Study** each muscle's name and what it does
- **Practice**: find each muscle; misses come back a few questions later until you get them right
- **Test**: every muscle once, timed, no help, with your best score saved
- Layers: peel off the outer muscles, or show only the deepest ones
- Hints on or off: everyday and gym names like "Latissimus dorsi (lats)", or anatomical names only
- X-ray and peel modes to reach muscles underneath others
- Voice commands to zoom ("left leg", "back", "glutes", "whole body") in Chrome, Edge and Safari
- Progress and best scores stay in your browser: no account, nothing is sent anywhere

## Run it yourself

It's a plain web page with no build step. Browsers won't load the 3D model from a page opened straight from disk, so serve the folder with any static file server:

```sh
git clone https://github.com/SampleSize1/Muscle-Atlas.git
cd Muscle-Atlas
python3 -m http.server 8000
```

Then open http://localhost:8000.

| File | What it is |
| --- | --- |
| `index.html` | The page, and the settings that make it this atlas (zoom areas, colours, voice words) |
| `data.js` | Everything the atlas teaches: regions, names, notes, translations |
| `muscles.glb` | The 3D muscle model |
| `atlas-engine/atlas.js` | The atlas engine: the code, shared by the 3D atlases on [samplesize1.com](https://samplesize1.com/tools/) |
| `atlas-engine/atlas.css` | The styles, shared by all the 3D atlases on [samplesize1.com](https://samplesize1.com/tools/) |
| `atlas-engine/three-bundle.js` | [three.js](https://threejs.org/) r169, bundled into one file |
| `progress.js` | Saves progress in the browser (localStorage) |

## Licences and credits

- **Code**: MIT, see [LICENSE](LICENSE).
- **3D model** (`muscles.glb`): from [Z-Anatomy](https://github.com/Z-Anatomy/The-blend), based on [BodyParts3D](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/desc.html) © The Database Center for Life Science, licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). If you reuse or change the model, keep this credit and share it under the same licence.
- **three.js**: MIT, see [licenses/three.js.txt](licenses/three.js.txt).

## Updates and feedback

This repository is copied automatically from [samplesize1.com](https://samplesize1.com/tools/) whenever the tool changes, so edits made directly here would be overwritten. Found a bug or have an idea? [Open an issue](https://github.com/SampleSize1/Muscle-Atlas/issues).
