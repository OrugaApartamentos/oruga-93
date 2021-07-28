'use strict';

// Blueprints
const blueprints = {
  general: {
    name: 'general',
    image: 'assets/planta-general.jpg',
    blueprintPoints: ['salesRoom']
  },
  firstFloor: {
    name: 'firstFloor',
    image: 'assets/planta-primer-piso.jpg',
    blueprintPoints: ['lobby']
  },
  terrace: {
    name: 'terrace',
    image: 'assets/planta-terraza.jpg',
    blueprintPoints: ['terrace2']
  },
  apartment: {
    name: 'apartment',
    image: 'assets/planta-apto-individual.jpg',
    blueprintPoints: ['lobby']
  }
};

// Images
const imageNames = {
  salesRoom: {
    name: 'SALA DE VENTAS',
    blueprint: blueprints.general
  },
  lobby: {
    name: 'LOBBY',
    blueprint: blueprints.firstFloor
  },
  terrace2: {
    name: 'TERRAZA',
    blueprint: blueprints.terrace
  },
  miniApartment: {
    name: 'APARTAMENTO',
    blueprint: blueprints.apartment
  }
};
let sceneSelected = '';

// Pannellum config
const container = document.getElementById('container');
let viewer = {};

function createViewer() {
  const width = document.body.clientWidth;
  const hfov = width < 600 ? 80 : 120;
  viewer = pannellum.viewer(container, {
    default: {
      firstScene: imageNames.salesRoom.name,
      sceneFadeDuration: 2000
    },
    scenes: {
      [imageNames.salesRoom.name]: {
        hfov,
        yaw: 200,
        type: 'multires',
        multiRes: {
          basePath: './assets/multires/salaVentas2',
          path: '/%l/%s%y_%x',
          fallbackPath: './assets/multires/salaVentas2/fallback/%s',
          extension: 'jpg',
          tileResolution: 512,
          maxLevel: 4,
          cubeResolution: 3192
        },
        blueprint: imageNames.salesRoom.blueprint,
        gap: 0,
        hotSpots: [
          {
            yaw: 115,
            pitch: 0,
            type: 'scene',
            sceneId: 'SALA DE VENTAS 2',
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Sala de ventas"
          },
          {
            yaw: -65,
            pitch: -2,
            type: 'scene',
            sceneId: 'SALA DE VENTAS 3',
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Sala de ventas"
          },
          {
            yaw: 5,
            type: 'scene',
            sceneId: imageNames.lobby.name,
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Lobby"
          },
          {
            yaw: 45,
            type: 'scene',
            sceneId: imageNames.terrace2.name,
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Terraza"
          },
          {
            yaw: 124,
            type: 'scene',
            sceneId: imageNames.miniApartment.name,
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Apartamento"
          },
          {
            yaw: 140,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Apartamento 2",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/modelo-apartamento-2.jpg'
          },
          {
            yaw: 256,
            pitch: 4,
            type: 'scene',
            sceneId: 'VISTA AEREA',
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "VISTA AÉREA"
          },
          {
            yaw: 265,
            pitch: 4,
            type: 'scene',
            sceneId: 'VISTA TERRESTRE',
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "VISTA TERRESTRE"
          },
          {
            yaw: 80,
            pitch: 6,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Terraza",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/terraza-social.jpg'
          },
          {
            yaw: 101,
            pitch: 6,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Fachada",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/fachada.jpg'
          },
          {
            yaw: 152.5,
            pitch: -3.5,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Plano primer piso",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/planta-primer-piso.jpg'
          },
          {
            yaw: 152.5,
            pitch: 4.5,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Plano segundo piso",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/planta-segundo-piso.jpg'
          },
          {
            yaw: 152.5,
            pitch: 13,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Plano terraza",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/planta-terraza.jpg'
          },
          {
            yaw: -156,
            pitch: 0,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Apartamento septimo piso",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/apartamento-septimo-piso.jpg'
          },
          {
            yaw: -156,
            pitch: 18,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Apartamento",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/Apartamento.jpg'
          },
          {
            yaw: -74,
            pitch: -2,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Lobby",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/lobby.jpg'
          },
          {
            yaw: -52,
            pitch: -2,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Coworking",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/coworking.jpg'
          },
          {
            yaw: -37,
            pitch: -2,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Lavandería",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/lavanderia.jpg'
          },
          {
            yaw: -20,
            pitch: -2,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Billar",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/billar.jpg'
          }
        ]
      },
      'SALA DE VENTAS 3': {
        hfov,
        yaw: -108,
        type: 'multires',
        multiRes: {
          basePath: './assets/multires/salaVentas3',
          path: '/%l/%s%y_%x',
          fallbackPath: './assets/multires/salaVentas3/fallback/%s',
          extension: 'jpg',
          tileResolution: 512,
          maxLevel: 4,
          cubeResolution: 3192
        },
        blueprint: imageNames.salesRoom.blueprint,
        gap: 0,
        hotSpots: [
          {
            yaw: -176,
            type: 'scene',
            sceneId: 'SALA DE VENTAS',
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Sala de ventas"
          },
          {
            yaw: 134,
            type: 'scene',
            sceneId: imageNames.lobby.name,
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: imageNames.lobby.name
          },
          {
            yaw: 149,
            type: 'scene',
            sceneId: imageNames.terrace2.name,
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: imageNames.terrace2.name
          },
          {
            yaw: -48,
            pitch: 6,
            type: 'scene',
            sceneId: 'VISTA TERRESTRE',
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: 'VISTA TERRESTRE'
          },
          {
            yaw: -82,
            pitch: 6,
            type: 'scene',
            sceneId: 'VISTA AEREA',
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: 'VISTA AÉREA'
          },
          {
            yaw: -4,
            pitch: -2,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Lobby",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/lobby.jpg'
          },
          {
            yaw: 37,
            pitch: -2,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Coworking",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/coworking.jpg'
          },
          {
            yaw: 71,
            pitch: -2,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Lavandería",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/lavanderia.jpg'
          },
          {
            yaw: 112,
            pitch: -2,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Billar",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/billar.jpg'
          }
        ]
      },
      'SALA DE VENTAS 2': {
        hfov,
        yaw: 180,
        type: 'multires',
        multiRes: {
          basePath: './assets/multires/salaVentas1',
          path: '/%l/%s%y_%x',
          fallbackPath: './assets/multires/salaVentas1/fallback/%s',
          extension: 'jpg',
          tileResolution: 512,
          maxLevel: 4,
          cubeResolution: 3192
        },
        blueprint: imageNames.salesRoom.blueprint,
        gap: 0,
        hotSpots: [
          {
            yaw: 82,
            type: 'scene',
            sceneId: 'SALA DE VENTAS',
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Sala de ventas"
          },
          {
            yaw: -105,
            type: 'scene',
            sceneId: imageNames.miniApartment.name,
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: imageNames.miniApartment.name
          },
          {
            yaw: -81,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Apartamento 2",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/apartamento-septimo-piso.jpg'
          },
          {
            yaw: 149,
            type: 'scene',
            sceneId: imageNames.terrace2.name,
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: imageNames.terrace2.name
          },
          {
            yaw: 124,
            type: 'scene',
            sceneId: imageNames.lobby.name,
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: imageNames.lobby.name
          },
          {
            yaw: -169,
            pitch: -2,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Terraza",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/terraza-social.jpg'
          },
          {
            yaw: -139,
            pitch: -2,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Fachada",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/fachada.jpg'
          },
          {
            yaw: -59,
            pitch: -5.5,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Plano primer piso",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/planta-primer-piso.jpg'
          },
          {
            yaw: -59,
            pitch: 7,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Plano general",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/planta-segundo-piso.jpg'
          },
          {
            yaw: -59,
            pitch: 19.5,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Plano terraza",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/planta-terraza.jpg'
          },
          {
            yaw: 14,
            pitch: -1,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Apartamento",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/apartamento-septimo-piso.jpg'
          },
          {
            yaw: 14,
            pitch: 20,
            type: 'info',
            cssClass: "image-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Apartamento",
            clickHandlerFunc: openImageModal,
            clickHandlerArgs: './assets/gallery/Apartamento.jpg'
          }
        ]
      },
      [imageNames.lobby.name]: {
        hfov,
        yaw: 222,
        type: 'multires',
        multiRes: {
          basePath: './assets/multires/panorama-lobby',
          path: '/%l/%s%y_%x',
          fallbackPath: './assets/multires/panorama-lobby/fallback/%s',
          extension: 'jpg',
          tileResolution: 512,
          maxLevel: 4,
          cubeResolution: 3536
        },
        blueprint: imageNames.lobby.blueprint,
        gap: 0
      },
      [imageNames.terrace2.name]: {
        hfov,
        yaw: -54,
        type: 'multires',
        multiRes: {
          basePath: './assets/multires/terraza-1',
          path: '/%l/%s%y_%x',
          fallbackPath: './assets/multires/terraza-1/fallback/%s',
          extension: 'jpg',
          tileResolution: 512,
          maxLevel: 4,
          cubeResolution: 3192
        },
        blueprint: imageNames.terrace2.blueprint,
        gap: 0,
        hotSpots: [
          {
            yaw: 100,
            type: 'scene',
            sceneId: 'TERRAZA 2',
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Terraza"
          }
        ]
      },
      'TERRAZA 2': {
        hfov,
        yaw: 23,
        type: 'multires',
        multiRes: {
          basePath: './assets/multires/terraza-2',
          path: '/%l/%s%y_%x',
          fallbackPath: './assets/multires/terraza-2/fallback/%s',
          extension: 'jpg',
          tileResolution: 512,
          maxLevel: 4,
          cubeResolution: 3192
        },
        blueprint: imageNames.terrace2.blueprint,
        gap: 0,
        hotSpots: [
          {
            yaw: -143,
            type: 'scene',
            sceneId: imageNames.terrace2.name,
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: imageNames.terrace2.name
          }
        ]
      },
      [imageNames.miniApartment.name]: {
        hfov,
        yaw: 215,
        type: 'multires',
        multiRes: {
          basePath: './assets/multires/apartamento1',
          path: '/%l/%s%y_%x',
          fallbackPath: './assets/multires/apartamento1/fallback/%s',
          extension: 'jpg',
          tileResolution: 512,
          maxLevel: 4,
          cubeResolution: 2968
        },
        blueprint: imageNames.miniApartment.blueprint,
        gap: 0,
        hotSpots: [
          {
            yaw: 41,
            type: 'scene',
            sceneId: 'PASILLO',
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: "Pasillo"
          },
          {
            yaw: 29,
            type: 'scene',
            sceneId: 'SALA DE VENTAS 2',
            cssClass: "custom-hotspot",
            createTooltipFunc: hotspot,
            createTooltipArgs: imageNames.salesRoom.name,
            targetYaw: 76
          }
        ]
      },
      'PASILLO': {
          hfov,
          yaw: 121,
          type: 'multires',
          multiRes: {
              basePath: './assets/multires/apartamento2',
              path: '/%l/%s%y_%x',
              fallbackPath: './assets/multires/apartamento2/fallback/%s',
              extension: 'jpg',
              tileResolution: 512,
              maxLevel: 4,
              cubeResolution: 3192
          },
          blueprint: imageNames.miniApartment.blueprint,
          gap: 0,
          hotSpots: [
              {
                  yaw: -13,
                  type: 'scene',
                  sceneId: imageNames.miniApartment.name,
                  cssClass: "custom-hotspot",
                  createTooltipFunc: hotspot,
                  createTooltipArgs: imageNames.miniApartment.name
              },
              {
                  yaw: 160,
                  type: 'scene',
                  sceneId: 'SALA DE VENTAS 2',
                  cssClass: "custom-hotspot",
                  createTooltipFunc: hotspot,
                  createTooltipArgs: imageNames.salesRoom.name,
                  targetYaw: 76
              }
          ]
      },
      'VISTA AEREA': {
        hfov,
        yaw: -90,
        type: 'multires',
        multiRes: {
          basePath: './assets/multires/fotografia-aerea',
          path: '/%l/%s%y_%x',
          fallbackPath: './assets/multires/fotografia-aerea/fallback/%s',
          extension: 'jpg',
          tileResolution: 512,
          maxLevel: 4,
          cubeResolution: 3176
        },
        blueprint: imageNames.salesRoom.blueprint,
        gap: 0
      },
      'VISTA TERRESTRE': {
        hfov,
        yaw: -90,
        type: 'multires',
        multiRes: {
          basePath: './assets/multires/fotografia-terrestre',
          path: '/%l/%s%y_%x',
          fallbackPath: './assets/multires/fotografia-terrestre/fallback/%s',
          extension: 'jpg',
          tileResolution: 512,
          maxLevel: 4,
          cubeResolution: 3176
        },
        blueprint: imageNames.salesRoom.blueprint,
        gap: 0
      }
    },
    showControls: false,
    autoLoad: true,
    backgroundColor: [255, 255, 255],
    hotSpotDebug: DEVELOP
  });
  sceneSelected = viewer.getScene();
  viewerEvents();
}

function viewerEvents() {
  viewer.on('load', () => {
    setBlueprintImage();
  });
  viewer.on('animatefinished', (coordinates) => {
    // const pause = document.getElementById('pause');
    // pause.style.display = 'none';
    // const play = document.getElementById('play');
    // play.style.display = 'inline-block';
  });
  viewer.on('scenechangefadedone', () => {
    setScene(viewer.getScene());
    // autoRotate = true;
    // const play = document.getElementById('play');
    // play.style.display = 'none';
    // const pause = document.getElementById('pause');
    // pause.style.display = 'inline-block';
  });
  viewer.on('animateStart', (coordinates) => {
    const path = document.getElementById('svg-guide-path');
    if (path) {
      path.setAttributeNS(null, 'd', generateSvgPath());
    }
  });
  viewer.on('scenechange', () => {
    mobileSetHfov();
  });
}

function generateSvgPath() {
  const d2r = Math.PI / 180;
  const fov = viewer.getHfov();
  let pan = viewer.getYaw();
  const config = viewer.getConfig();
  pan = config.gap + pan;
  let arcX1 = 50 * Math.cos((pan - fov / 2) * d2r);
  let arcY1 = 50 * Math.sin((pan - fov / 2) * d2r);
  let arcX2 = 50 * Math.cos((pan + fov / 2) * d2r);
  let arcY2 = 50 * Math.sin((pan + fov / 2) * d2r);
  arcX1 += 50;
  arcY1 += 50;
  arcX2 += 50;
  arcY2 += 50;
  return 'M50,50 L' + arcX1 + ',' + arcY1 + ' A 50 50 0 0 1 ' + arcX2 + ' ' + arcY2 + ' Z';
}



// CONTROLS FUNCTIONS
function moveUp() {
  viewer.setPitch(viewer.getPitch() + 10);
}
function moveDown() {
  viewer.setPitch(viewer.getPitch() - 10);
}
function moveLeft() {
  viewer.setYaw(viewer.getYaw() - 10);
}
function moveRight() {
  viewer.setYaw(viewer.getYaw() + 10);
}

function zoomIn() {
  viewer.setHfov(viewer.getHfov() - 10);
}
function zoomOut() {
  viewer.setHfov(viewer.getHfov() + 10);
}
function fullscreen() {
  // document.body.requestFullscreen();
  if (!document.fullscreenElement) {
    document.body.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function toggleControls() {
  const controls = document.getElementById('controls');
  const showControls = document.getElementById('show-controls');
  const banners = document.getElementById('banners');
  const actionButtons = document.getElementById('action-buttons');
  const blueprints = document.getElementById('blueprints');
  if (controls.style.display === 'none') {
    controls.style.display = 'block';
    showControls.style.display = 'none';
    banners.style.display = 'block';
    actionButtons.style.display = 'flex';
  } else {
    controls.style.display = 'none';
    showControls.style.display = 'block';
    banners.style.display = 'none';
    actionButtons.style.display = 'none';
    blueprints.style.display = 'none';
  }
}
function mobileToggleControls() {
  const actionButtons = document.getElementById('action-buttons');
  const showButton = document.getElementById('show-action-container');
  const blueprints = document.getElementById('blueprints');
  const mobileSelect = document.getElementById('mobile-select-screens');
  const cMobileUImage = document.getElementById('container-mobile-urbanization-image');
  if (actionButtons.style.display === 'none') {
    actionButtons.style.display = 'flex';
    showButton.style.display = 'none';
    mobileSelect.style.display = 'block';
    cMobileUImage.style.display = 'block';
  } else {
    actionButtons.style.display = 'none';
    showButton.style.display = 'block';
    blueprints.style.display = 'none';
    mobileSelect.style.display = 'none';
    cMobileUImage.style.display = 'none';
  }
}

// function startAutoRotate() {
//     viewer.startAutoRotate(-3, viewer.getPitch());
//     const play = document.getElementById('play');
//     play.style.display = 'none';
//     const pause = document.getElementById('pause');
//     pause.style.display = 'inline-block';
// }
// function stopAutoRotate() {
//     viewer.stopAutoRotate();
//     const pause = document.getElementById('pause');
//     pause.style.display = 'none';
//     const play = document.getElementById('play');
//     play.style.display = 'inline-block';
// }


/**
 * SCENE FUNCTIONS
 */
function toggleScreenList() {
  const screensList = document.getElementById('screens-list');
  screensList.style.display = screensList.style.display === 'none' || !screensList.style.display ? 'flow-root' : 'none';
}
function toggleMobileScreenList() {
  const screensList = document.getElementById('mobile-screens-list');
  screensList.style.display = screensList.style.display === 'none' || !screensList.style.display ? 'flow-root' : 'none';
}

function createScreenList() {
  const screensList = document.getElementById('screens-list');
  const mobileScreensList = document.getElementById('mobile-screens-list');
  const currentScene = viewer.getScene();
  for (const image in imageNames) {
    if (imageNames.hasOwnProperty(image)) {
      const element = imageNames[image];
      let div = document.createElement('div');
      div.setAttributeNS(null, 'id', element.name);
      if (currentScene === element.name) {
        div.setAttributeNS(null, 'class', 'screen-item screen-selected');
      } else {
        div.setAttributeNS(null, 'class', 'screen-item');
      }
      if (screen.width > 600) {
        div.addEventListener('click', () => loadScene(element.name) & toggleScreenList());
        screensList.appendChild(div);
      } else {
        div.addEventListener('click', () => loadScene(element.name) & toggleMobileScreenList());
        mobileScreensList.appendChild(div);
      }
      div.innerHTML += element.name;
    }
  }
  document.getElementById('screens-title').innerHTML = currentScene;
  document.getElementById('mobile-screens-title').innerHTML = currentScene;
}
function loadScene(sceneId) {
  if (sceneId !== viewer.getScene()) {
    viewer.loadScene(sceneId);
    setScene(sceneId);
  }
}
function setScene(sceneId) {
  document.getElementById('screens-title').innerHTML = sceneId;
  document.getElementById('mobile-screens-title').innerHTML = sceneId;
  const currentScene = document.getElementById(sceneSelected);
  if (currentScene) {
    currentScene.setAttributeNS(null, 'class', 'screen-item');
  }
  if (document.getElementById(sceneId)) {
    document.getElementById(sceneId).setAttributeNS(null, 'class', 'screen-item screen-selected');
  }
  sceneSelected = viewer.getScene();
}

/**
 * BLUEPRINT FUNCTIONS
 */
function createBlueprintImage() {
  const blueprints = document.getElementById('blueprints');
  let img = document.createElement('img');
  img.setAttributeNS(null, 'id', 'blueprint-image');
  blueprints.appendChild(img);
}
function setBlueprintImage() {
  const config = viewer.getConfig();
  const img = document.getElementById('blueprint-image');
  img.setAttributeNS(null, 'src', config.blueprint.image);
  for (const i in blueprints) {
    if (blueprints.hasOwnProperty(i)) {
      const blueprint = blueprints[i];
      if (blueprint.name !== config.blueprint.name) {
        // document.getElementById(blueprint.name).style.display = 'none';
      } else {
        // document.getElementById(blueprint.name).style.display = 'block';
      }
    }
  }
  // const point = document.getElementsByName(viewer.getScene());
  // const svgGuide = document.getElementById('svg-rotate-viewer');
  // svgGuide.style.left = point[0].offsetLeft - 46 + 'px';
  // svgGuide.style.top = point[0].offsetTop - 45 + 'px';
}
function addBlueprintPoints() {
  const divBlueprints = document.getElementById('blueprints');
  for (const i in blueprints) {
    if (blueprints.hasOwnProperty(i)) {
      const blueprint = blueprints[i];
      let container = document.createElement('div');
      container.setAttributeNS(null, 'id', blueprint.name);
      container.style.display = 'none';
      for (const point of blueprint.blueprintPoints) {
        let divPoint = document.createElement('div');
        divPoint.setAttributeNS(null, 'id', point);
        divPoint.setAttributeNS(null, 'name', imageNames[point].name);
        divPoint.setAttributeNS(null, 'class', 'blueprints-button');
        divPoint.addEventListener('click', () => loadScene(imageNames[point].name));
        let label = document.createElement('label');
        label.setAttributeNS(null, 'class', 'blueprints-label');
        label.innerHTML = imageNames[point].name;
        divPoint.appendChild(label);
        container.appendChild(divPoint);
      }
      divBlueprints.appendChild(container);
    }
  }
}
function toggleBlueprints() {
  const blueprints = document.getElementById('blueprints');
  if (blueprints.style.display !== 'block') {
    blueprints.style.display = 'block';
    // const point = document.getElementsByName(viewer.getScene());
    // const svgGuide = document.getElementById('svg-rotate-viewer');
    // svgGuide.style.left = point[0].offsetLeft - 46 + 'px';
    // svgGuide.style.top = point[0].offsetTop - 45 + 'px';
    // svgGuide.style.visibility = 'visible';
  } else {
    blueprints.style.display = 'none';
  }
}

/**
 * ORIENTATION FUNCTIONS
 */
function isOrientationSupported() {
  // alert(viewer.isOrientationSupported())
  if (viewer.isOrientationSupported()) {
    // document.getElementById('screens-title').innerHTML = sceneId;;
    // play.style.display = 'inline-block';
  }
}
function startOrientation() {
  if (!viewer.isOrientationActive()) {
    viewer.startOrientation();
    const orientationActive = document.getElementById('orientation-active');
    orientationActive.style.display = 'none';
    const orientationStop = document.getElementById('orientation-stop');
    orientationStop.style.display = 'inline-block';
  }
}
function stopOrientation() {
  if (viewer.isOrientationActive()) {
    viewer.stopOrientation();
    const orientationActive = document.getElementById('orientation-active');
    orientationActive.style.display = 'inline-block';
    const orientationStop = document.getElementById('orientation-stop');
    orientationStop.style.display = 'none';
  }
}

/**
 * SH FUNCTIONS
 */
function toggleShButtons() {
  const shButtons = document.getElementById('sh-buttons');
  if (shButtons.style.display !== 'block') {
    shButtons.style.display = 'block';
  } else {
    shButtons.style.display = 'none';
  }
  const blueprints = document.getElementById('blueprints');
  blueprints.style.display = 'none';
}
function shFacebook() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
}
function shTwitter() {
  window.open('https://twitter.com/intent/tweet?url=' + location.href);
}
function openIg() {
  window.open('https://www.instagram.com/arq.catalinapardo/');
}
function openLanding() {
  window.open('http://oruga94.com');
}

// Bootstrap social tooltip
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  // document.getElementById('facebook').setAttributeNS(null, 'href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href);
  // document.getElementById('twitter').setAttributeNS(null, 'href', 'https://twitter.com/intent/tweet?url=' + window.location.href);
});

// Mobile functions
function mobileSetHfov() {
  const width = document.body.clientWidth;
  if (width < 600) {
    viewer.setHfov(80);
  }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.screens-header') && !event.target.matches('.screens-toggle') && !event.target.matches('#screens-title')) {
    const screensList = document.getElementById('screens-list');
    screensList.style.display = 'none';
    const width = document.body.clientWidth;
    if (width < 600 && !event.target.matches('#mobile-screens-title') && !event.target.matches('#mobile-screens-toggle')) {
      const screensList = document.getElementById('mobile-screens-list');
      screensList.style.display = 'none';
    }
  }
  if (!event.target.matches('#sh-button') && !event.target.matches('#sh-image')) {
    const shButtons = document.getElementById('sh-buttons');
    shButtons.style.display = 'none';
  }
}

function showInstructionsModal() {
  const width = document.body.clientWidth;
  if (width > 600) {
    $('#instructions-modal').modal({});
  } else {
    $('#mobile-instructions-modal').modal({});
  }
}

$('#information-modal').modal({});
$('#information-modal').on('hidden.bs.modal', function (event) {
  showInstructionsModal();
});

createViewer();
createScreenList();
isOrientationSupported();
// addBlueprintPoints();
createBlueprintImage();
setBlueprintImage();
mobileSetHfov();

window.onload = function () {

  const carouselImages = document.getElementById('carousel-images');
  const imagesGallery = [
    'assets/gallery/coworking.jpg',
    'assets/gallery/lavanderia.jpg',
    'assets/gallery/billar.jpg',
    'assets/gallery/terraza-social.jpg',
    'assets/gallery/fachada.jpg',
    'assets/gallery/planta-terraza.jpg',
    'assets/gallery/planta-segundo-piso.jpg',
    'assets/gallery/planta-primer-piso.jpg',
    'assets/gallery/apartamento-tipo.jpg',
    'assets/gallery/apartamento-septimo-piso.jpg'
  ];
  for (const src of imagesGallery) {
    let div = document.createElement('div');
    div.setAttributeNS(null, 'id', src);
    div.setAttributeNS(null, 'class', 'carousel-item');
    let img = document.createElement('img');
    img.setAttributeNS(null, 'class', 'mw-100');
    img.src = src;
    div.appendChild(img);
    carouselImages.appendChild(div);
  }
}

// Hot spot creation function
function hotspot(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-tooltip');
  const span = document.createElement('span');
  span.innerHTML = args;
  hotSpotDiv.appendChild(span);
  span.style.width = span.scrollWidth - 20 + 'px';
  if (hotSpotDiv.offsetWidth) {
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
  } else {
    span.style.marginLeft = -(span.scrollWidth - 14.8) / 2 + 'px';
  }
  span.style.marginTop = -span.scrollHeight - 18 + 'px';
}

function openImageModal(event, args) {
  const img = document.getElementById('image-modal-img');
  img.src = args;
  $('#image-modal').modal({});
}


async function postData(url = '', data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
}


function sendContact() {

  setSendButtonLoading();
  const nameInput = document.getElementById('usr');
  const phoneInput = document.getElementById('tel');
  const emailInput = document.getElementById('email');
  const acceptCheckbox = document.getElementById('accept');

  if (!nameInput.value) {
    showToastError('El nombre es requerido.');
    setSendButtonText();
  } else if (!phoneInput.value) {
    showToastError('El telefono es requerido.');
    setSendButtonText();
  } else if (!emailInput.value) {
    showToastError('El email es requerido.');
    setSendButtonText();
  } else if (!acceptCheckbox.checked) {
    showToastError('La autorización es requerida.');
    setSendButtonText();
  } else {
    let emailToSend = templateEmail;
    emailToSend = emailToSend.replace(new RegExp('{' + 'name' + '}', 'g'), document.getElementById('usr').value);
    emailToSend = emailToSend.replace(new RegExp('{' + 'tel' + '}', 'g'), document.getElementById('tel').value);
    emailToSend = emailToSend.replace(new RegExp('{' + 'email' + '}', 'g'), document.getElementById('email').value);

    const dataEmail = {
      emails: 'comercialoruga20@gmail.com',
      subject: 'Solicitar información proyecto oruga 94',
      content: emailToSend
    };

    postData(contactUrlWithPrefix + 'emails', dataEmail)
      .then(data => {
        if (data.status === 200) {
          showToastSuccess('Correo enviado exitosamente.');
          $('#information-modal').modal('hide');
        } else {
          setSendButtonText();
        }
      })
      .catch(e => {
        showToastError('No fue posible enviar el correo.');
        setSendButtonText();
      });
  }
}

function setSendButtonText() {
  contactButton.innerText = 'Solicitar información';
  contactButton.removeAttribute("disabled");
}
function setSendButtonLoading() {
  const contactButton = document.getElementById('btn-send');
  contactButton.setAttributeNS(null, 'disabled', true);
  const span = document.createElement('span');
  span.setAttributeNS(null, 'class', 'spinner-border spinner-border-sm mr-2');
  span.setAttributeNS(null, 'role', 'status');
  span.setAttributeNS(null, 'aria-hidden', 'true');
  const text = document.createElement('span');
  text.innerText = 'Cargando...';
  contactButton.innerText = '';
  contactButton.appendChild(span);
  contactButton.appendChild(text);
}

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.getElementsByClassName('needs-validation');
const contactButton = document.getElementById('btn-send');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function (form) {
  contactButton.addEventListener('click', function (event) {
    form.classList.add('was-validated');
  }, false);
});
