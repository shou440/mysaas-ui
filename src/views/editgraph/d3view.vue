<template>

  <div ref="container" style="width:100%; height:900px" />

</template>

<script>

import * as THREE from 'three'
import OrbitControls from 'three-orbitcontrols'
import { OBJLoader } from 'three-obj-mtl-loader'

export default {
  name: 'D3view',
  data() {
    return {
      camera: null, // 镜头
      scene: null, // 场景
      renderer: null, // 渲染器
      ambient: null, // 环境光
      shapes: null, // 所有的图形
      controls: null // 轨道条控制
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {

    /** **************************************************************************************
     *
     *      初始化3D图形显示环境
     *
     *****************************************************************************************/
    init() {
      debugger

      const container = this.$refs.container // document.getElementById('container');

      this.camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 1

      this.scene = new THREE.Scene()

      // 点光源设置
      var point = new THREE.PointLight(0xffffff)
      point.position.set(400, 200, 300) // 点光源位置
      this.scene.add(point) // 点光源添加到场景中

      // 环境光设置
      this.ambient = new THREE.AmbientLight(0x444444)
      this.scene.add(this.ambient)

      // 创建相机对象
      var width = container.clientWidth // 窗口宽度
      var height = container.clientHeight // 窗口高度
      var k = width / height // 窗口宽高比
      var s = 200 // 三维场景显示范围控制系数，系数越大，显示的范围越大
      this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
      this.camera.position.set(200, 300, 200) // 设置相机位置
      this.camera.lookAt(this.scene.position) // 设置相机方向(指向的场景对象)

      // 创建渲染器对象
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(width, height)// 设置渲染区域尺寸
      this.renderer.setClearColor(0xb9d3ff, 1) // 设置背景颜色

      // 添加到控件上
      container.appendChild(this.renderer.domElement)
      var axes = new THREE.AxisHelper(20)
      this.scene.add(axes)

      // 创建轨道控制条
      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)// 创建控件对象

      const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
      const material = new THREE.MeshNormalMaterial()
      this.mesh = new THREE.Mesh(geometry, material)
      this.scene.add(this.mesh)

      // 添加鼠标事件监听
      window.addEventListener('mousemove', this.onDocumentMouseMove, false)
      window.addEventListener('mousedown', this.onDocumentMouseMoveonDocumentMouseDown, false)
      window.addEventListener('mouseup', this.onDocumentMouseMoveonDocumentMouseUp, false)

      // 创建网格
      var gridHelper = new THREE.GridHelper(300, 10, 'red', 'gray')
      gridHelper.position.y = -100
      gridHelper.position.x = 0
      this.scene.add(gridHelper)

      // 装载Obj文件
      this.loadObjFile('1P')

      // this.disableControl();
    },

    // 关闭相机的轨道控制条
    disableControl() {
      this.controls.enablePan = false
      this.controls.enableZoom = false
      this.controls.enableRotate = false
    },

    // 装载模型文件
    loadObjFile(fileName) {
      var _this = this

      // Vue无法存储静态资源,模型要从专门的静态资源服务器上取，所以需要自定义资源下载器
      var objLoader = new THREE.OBJLoader()
      objLoader.setPath('http://www.ambcharge.com/mapfile/')
      var mtlLoader = new THREE.MTLLoader()
      mtlLoader.setPath('http://www.ambcharge.com/mapfile/')

      var fileMTL = fileName + '.mtl'
      var fileObj = fileName + '.obj'
      mtlLoader.load(fileMTL, function(materials) {
        materials.preload()

        objLoader.setMaterials(materials)

        objLoader.load(fileObj, function(object) {
          object.scale.x = object.scale.y = object.scale.z = 1
          object.rotation.y = 500
          const mesh = object
          mesh.position.y = -50
          _this.scene.add(mesh)
        })
      })
    },
    onDocumentMouseMove(event) {
      var kk = 0
    },
    onDocumentMouseDown(event) {
      var kk = 0
    },
    onDocumentMouseUp(event) {
      var kk = 0
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
    }
  }

}
</script>
<style scoped>
  #container {
    height: 400px;
  }
</style>
