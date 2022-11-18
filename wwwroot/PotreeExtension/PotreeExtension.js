class PotreeExtension extends Autodesk.Viewing.Extension {
    constructor(viewer, options) {
        super(viewer, options);
        this._group = null;
        this._pointclouds = new Map();
        this._timer = null;
        if (options && options.url) {
            this._initConfig = {
                url: options.url,
                position: null,
                scale: null
            };
            if (options.position && Array.isArray(options.position)) {
                this._initConfig.position = new THREE.Vector3(options.position[0], options.position[1], options.position[2]);
            }
            if (options.scale && Array.isArray(options.scale)) {
                this._initConfig.scale = new THREE.Vector3(options.scale[0], options.scale[1], options.scale[2]);
            }
        }
    }

    load() {
        // Setup the overlay scene
        this._group = new THREE.Group();
        if (!this.viewer.overlays.hasScene('potree-scene')) {
            this.viewer.overlays.addScene('potree-scene');
        }
        this.viewer.overlays.addMesh(this._group, 'potree-scene');

        // Update point clouds on every camera change...
        this.viewer.addEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, this.updatePointClouds.bind(this));
        // ... and also in hard-coded intervals
        this._timer = setInterval(this.updatePointClouds.bind(this), 500);

        console.log('PotreeExtension loaded.');

        if (this._initConfig) {
            this.loadPointCloud('my-pointcloud', this._initConfig.url, this._initConfig.position, this._initConfig.scale);
        }

        return true;
    }

    unload() {
        this.viewer.overlays.removeScene('potree-scene');
        console.log('PotreeExtension unloaded.');
        return true;
    }

    /**
     * Adds potree model into the scene and starts streaming its data.
     * @param {string} name Unique name of the model.
     * @param {string} url URL of the potree model main file (typically "cloud.js").
     * @param {THREE.Vector3} [position] Optional position to apply to the newly loaded pointcloud.
     * @param {THREE.Vector3} [scale] Optional scale to apply to the newly loaded pointcloud.
     * @returns {Promise<Potree.PointCloudOctree>} Potree point cloud object.
     * @example
     * const ext = viewer.getExtension('PotreeExtension');
     * const pointcloud = await ext.loadPointCloud('lion', '/potree/data/lion_takanawa/cloud.js', new THREE.Vector3(0, 0, -25), new THREE.Vector3(5, 5, 5));
     * console.log(pointcloud);
     */
    loadPointCloud(name, url, position, scale) {
        if (this._pointclouds.has(name)) {
            return Promise.resolve(this._pointclouds.get(name));
        }
        return new Promise((resolve, reject) => {
            Potree.loadPointCloud(url, name, (ev) => {
                const { pointcloud } = ev;
                const { material } = pointcloud;
                if (position) {
                    pointcloud.position.copy(position);
                }
                if (scale) {
                    pointcloud.scale.copy(scale);
                }
                material.size = 2;
                material.pointColorType = Potree.PointColorType.RGB; //RGB | DEPTH | HEIGHT | POINT_INDEX | LOD | CLASSIFICATION
                material.pointSizeType = Potree.PointSizeType.ADAPTIVE; //ADAPTIVE | FIXED
                material.shape = Potree.PointShape.CIRCLE; //CIRCLE | SQUARE
                this._group.add(pointcloud);
                this._pointclouds.set(name, pointcloud);
                this.updatePointClouds();
                resolve(pointcloud);
            });
        });
    }

    updatePointClouds() {
        const pointclouds = Array.from(this._pointclouds.values());
        if (pointclouds) {
            const camera = this.viewer.impl.camera; //.perspectiveCamera;
            const renderer = this.viewer.impl.glrenderer();
            Potree.updatePointClouds(pointclouds, camera, renderer);
        }
    }
}

Autodesk.Viewing.theExtensionManager.registerExtension('PotreeExtension', PotreeExtension);
