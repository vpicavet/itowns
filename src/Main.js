import * as THREE from 'three';

const PLYLoader = require('three-ply-loader');

PLYLoader(THREE);

// This is temporary, until we're able to build a vendor.js
// containing our dependencies.
// export { THREE };
// export { default as proj4 } from 'proj4';

export { default as Coordinates, UNIT } from './Core/Geographic/Coordinates';
export { default as Extent } from './Core/Geographic/Extent';
export { GeometryLayer, ImageryLayers } from './Core/Layer/Layer';
export { STRATEGY_MIN_NETWORK_TRAFFIC, STRATEGY_GROUP, STRATEGY_PROGRESSIVE, STRATEGY_DICHOTOMY } from './Core/Layer/LayerUpdateStrategy';
export { default as GlobeView, GLOBE_VIEW_EVENTS, createGlobeLayer } from './Core/Prefab/GlobeView';
export { default as GpxUtils } from './Core/Scheduler/Providers/GpxUtils';
export { default as PlanarView, createPlanarLayer } from './Core/Prefab/PlanarView';
export { default as PanoramaView, createPanoramaLayer } from './Core/Prefab/PanoramaView';
export { default as Panorama } from './Core/Prefab/Panorama/Constants';
export { default as Fetcher } from './Core/Scheduler/Providers/Fetcher';
export { MAIN_LOOP_EVENTS } from './Core/MainLoop';
export { default as View } from './Core/View';
export { VIEW_EVENTS } from './Core/View';
export { process3dTilesNode, init3dTilesLayer, $3dTilesCulling, $3dTilesSubdivisionControl, pre3dTilesUpdate } from './Process/3dTilesProcessing';
export { default as FeatureProcessing } from './Process/FeatureProcessing';
export { default as OrientedImageProcessing } from './Process/OrientedImageProcessing';
export { updateLayeredMaterialNodeImagery, updateLayeredMaterialNodeElevation } from './Process/LayeredMaterialNodeProcessing';
export { processTiledGeometryNode, initTiledGeometryLayer } from './Process/TiledNodeProcessing';
export { ColorLayersOrdering } from './Renderer/ColorLayersOrdering';
export { default as PointsMaterial } from './Renderer/PointsMaterial';
export { default as PointCloudProcessing } from './Process/PointCloudProcessing';
export { default as Feature2Mesh } from './Renderer/ThreeExtended/Feature2Mesh';
export { default as FlyControls } from './Renderer/ThreeExtended/FlyControls';
export { default as FirstPersonControls } from './Renderer/ThreeExtended/FirstPersonControls';
export { default as PlanarControls } from './Renderer/ThreeExtended/PlanarControls';
export { default as ImmersiveControls } from './Renderer/ThreeExtended/ImmersiveControls';
export { default as ControlsSwitcher } from './Renderer/ThreeExtended/ControlsSwitcher';
export { default as GeoJSON2Features } from './Renderer/ThreeExtended/GeoJSON2Features';
export { default as FeaturesUtils } from './Renderer/ThreeExtended/FeaturesUtils';
export { CONTROL_EVENTS } from './Renderer/ThreeExtended/GlobeControls';
export { default as DEMUtils } from './utils/DEMUtils';
export { default as OrientedImageHelper, oiStereopolis, oiMicMac, oiMontBlanc } from './Core/OrientedImageHelper';
export { default as format } from 'string-format';
