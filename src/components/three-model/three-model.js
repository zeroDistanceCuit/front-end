import * as THREE from "three";
import { OBJLoader, MTLLoader } from 'three-obj-mtl-loader';
// import { CSS2DRenderer, CSS2DObject } from 'three-css2drender';
const OrbitControls = require('three-orbit-controls')(THREE);
export const threeModel = {
    props: {
        modelId: Number
        // require:true
    },
    data() {
        return {
            scene: '',
            light: '',
            camera: '',
            controls: '',
            renderer: '',
        }
    },
    mounted() {
        console.log("dska")
        console.log(modelId)
    },
    methods: {
        //初始化three.js相关内容
        init() {
            this.scene = new THREE.Scene();
            this.scene.add(new THREE.AmbientLight(0x999999));//环境光
            this.light = new THREE.DirectionalLight(0xdfebff, 0.45);//从正上方（不是位置）照射过来的平行光，0.45的强度
            this.light.position.set(50, 200, 100);
            this.light.position.multiplyScalar(0.3);
            this.scene.add(this.light);
            //初始化相机
            this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
            this.camera.position.set(10, 90, 65);
            this.camera.lookAt(this.scene.position);
            //初始化控制器
            this.controls = new OrbitControls(this.camera);
            this.controls.target.set(0, 0, 0);
            this.controls.minDistance = 80;
            this.controls.maxDistance = 400;
            this.controls.maxPolarAngle = Math.PI / 3;
            this.controls.update();
            //渲染
            this.renderer = new THREE.WebGLRenderer({
                alpha: true,
            });
            this.renderer.setClearColor(0x000000);
            this.renderer.setPixelRatio(window.devicePixelRatio);//为了兼容高清屏幕
            this.renderer.setSize(window.innerWidth, window.innerHeight);

            const container = document.getElementById('container');
            container.appendChild(this.renderer.domElement);
            window.addEventListener('resize', this.onWindowResize, false);//添加窗口监听事件（resize-onresize即窗口或框架被重新调整大小）
        },
        //窗口监听函数
        onWindowResize() {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        },
        animate() {
            requestAnimationFrame(this.animate);
            this.render();
        },
        render() {
            this.renderer.render(this.scene, this.camera);
        },
        //外部模型加载函数
        loadObj() {
            //包含材质
            new MTLLoader().setPath('/static/').load('Shirley.mtl', materials => {
                console.log("materials", materials);
                materials.preload();
                new OBJLoader().setMaterials(materials).setPath('/static/').load('Shirley.obj', obj => {
                    obj.scale.set(30, 30, 30);
                    obj.position.set(0, 0, 0);
                    this.scene.add(obj);
                });
            });
        }
    },
    mounted() {
        console.log(this.modelId)
        // this.init();
        // this.loadObj();
        // this.animate();
    }
}