// URL 必须设置，否则3D地图不会显示
window.CESIUM_BASE_URL = '/node_modules/cesium/Build/Cesium';

import * as Cesium from 'cesium';
import { useEffect } from 'react';
import 'cesium/Build/Cesium/Widgets/widgets.css';

// 获取token网址: https://ion.cesium.com/tokens.

const CesiumComponent = () => {
  useEffect(() => {
    // const cesiumRef = useRef(null)
    Cesium.Ion.defaultAccessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NjY1NTJhZi01MmNlLTRlZjAtOWZmMi03NDA2YjNmNjBmZWMiLCJpZCI6MTI1NjgzLCJpYXQiOjE2NzY5NjQ4NTh9.vLfeV0w4te5TrUfxCgXLJ6StUdz9uE3S-J_DZareAIo';
    // 初始化 Cesium Viewer 在ID为 "cesiumContainer"的html元素上.
    const viewer = new Cesium.Viewer('cesiumContainer', {
      terrainProvider: Cesium.createWorldTerrain(),
    });
    // Add Cesium OSM Buildings, a global 3D buildings layer.
    viewer.scene.primitives.add(Cesium.createOsmBuildings());
    // Fly the camera to San Francisco at the given longitude, latitude, and height.
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
      orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-15.0),
      },
    });
  }, []);

  return (
    <div id="cesiumContainer" style={{ width: '100%', height: '400px' }}></div>
  );
};
export default CesiumComponent;
