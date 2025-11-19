import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// initialize the scene
const scene = new THREE.Scene()

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: "red"})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)
scene.add(cubeMesh)

const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

cubeMesh.position.x = 1
cubeMesh.position.y = 1
cubeMesh.position.z = 1

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight,
  0.1,
  30)
camera.position.z = 5



// initialize the renderer
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

// initialize the orbit controls
const controls = new OrbitControls(camera, canvas)
controls.enableDumping = true
controls.enableZoom = true
controls.autoRotate = true


window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.updateProjectionMatrix()
})

// render loop
const renderLoop = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(renderLoop)
}

renderLoop()
console.log(window.devicePixelRatio)



