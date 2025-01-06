class BackgroundAnimation {
    constructor() {
        this.canvas = document.getElementById('bg-animation');
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true
        });

        this.clock = new THREE.Clock();
        this.init();
        this.animate();
    }

    init() {
        // Configuration du renderer
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // Position de la caméra
        this.camera.position.z = 30;

        // Ajout des lumières
        const ambientLight = new THREE.AmbientLight(0xB75D69, 0.5);
        this.scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xB75D69, 1);
        pointLight.position.set(5, 5, 5);
        this.scene.add(pointLight);

        // Création de la forme futuriste
        this.createFuturisticShape();
        
        // Création des particules
        this.createParticles();

        // Event listeners
        window.addEventListener('resize', this.onWindowResize.bind(this));
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
    }

    createFuturisticShape() {
        // Création du groupe principal
        this.shape = new THREE.Group();

        // Création de l'anneau extérieur
        const torusGeometry = new THREE.TorusGeometry(10, 0.5, 16, 100);
        const torusMaterial = new THREE.MeshPhongMaterial({
            color: 0xB75D69,
            wireframe: true,
            transparent: true,
            opacity: 0.8
        });
        const torus = new THREE.Mesh(torusGeometry, torusMaterial);
        this.shape.add(torus);

        // Création de l'icosaèdre central
        const icosaGeometry = new THREE.IcosahedronGeometry(5, 0);
        const icosaMaterial = new THREE.MeshPhongMaterial({
            color: 0x774C60,
            wireframe: true,
            transparent: true,
            opacity: 0.6
        });
        const icosahedron = new THREE.Mesh(icosaGeometry, icosaMaterial);
        this.shape.add(icosahedron);

        // Ajout d'anneaux orbitaux
        for (let i = 0; i < 3; i++) {
            const orbitGeometry = new THREE.TorusGeometry(7 + i * 2, 0.1, 16, 100);
            const orbitMaterial = new THREE.MeshPhongMaterial({
                color: 0xEACDC2,
                wireframe: true,
                transparent: true,
                opacity: 0.3
            });
            const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
            orbit.rotation.x = Math.random() * Math.PI;
            orbit.rotation.y = Math.random() * Math.PI;
            this.shape.add(orbit);
        }

        // Ajout de sphères orbitales
        for (let i = 0; i < 8; i++) {
            const sphereGeometry = new THREE.SphereGeometry(0.3, 16, 16);
            const sphereMaterial = new THREE.MeshPhongMaterial({
                color: 0x372549,
                wireframe: true
            });
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            
            // Position sur une orbite aléatoire
            const angle = (i / 8) * Math.PI * 2;
            const radius = 8 + Math.random() * 4;
            sphere.position.x = Math.cos(angle) * radius;
            sphere.position.y = Math.sin(angle) * radius;
            
            this.shape.add(sphere);
        }

        // Ajout de lignes connectrices
        const linesMaterial = new THREE.LineBasicMaterial({
            color: 0xB75D69,
            transparent: true,
            opacity: 0.3
        });

        for (let i = 0; i < 8; i++) {
            const lineGeometry = new THREE.BufferGeometry();
            const points = [];
            points.push(new THREE.Vector3(0, 0, 0));
            const angle = (i / 8) * Math.PI * 2;
            const radius = 10;
            points.push(new THREE.Vector3(
                Math.cos(angle) * radius,
                Math.sin(angle) * radius,
                0
            ));
            lineGeometry.setFromPoints(points);
            const line = new THREE.Line(lineGeometry, linesMaterial);
            this.shape.add(line);
        }

        this.scene.add(this.shape);
    }

    createParticles() {
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;
        const posArray = new Float32Array(particlesCount * 3);

        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 50;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.005,
            color: 0xB75D69,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });

        this.particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        this.scene.add(this.particlesMesh);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        const elapsedTime = this.clock.getElapsedTime();

        // Animation de la forme futuriste
        if (this.shape) {
            this.shape.rotation.x = elapsedTime * 0.1;
            this.shape.rotation.y = elapsedTime * 0.15;
            
            // Animation des éléments enfants
            this.shape.children.forEach((child, index) => {
                if (child.isMesh) {
                    child.rotation.x += 0.001 * (index + 1);
                    child.rotation.y += 0.002 * (index + 1);
                }
            });
        }

        // Animation des particules
        if (this.particlesMesh) {
            this.particlesMesh.rotation.x += 0.0001;
            this.particlesMesh.rotation.y += 0.0001;
        }

        // Animation basée sur la position de la souris
        if (this.mouseX) {
            this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
            this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;
            this.camera.lookAt(this.scene.position);
        }

        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onMouseMove(event) {
        this.mouseX = (event.clientX - window.innerWidth / 2) * 0.01;
        this.mouseY = (event.clientY - window.innerHeight / 2) * 0.01;
    }
}

// Initialisation
new BackgroundAnimation();