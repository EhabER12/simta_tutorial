// Component data with images and descriptions
const componentData = {
    buttons: {
        title: 'معرض بنرات سيمتا',
        images: [
            { src: 'assets/simtaGallary1.JPG', caption: 'اختر المكون من قائمة المكونات' },
            { src: 'assets/simtaGallary2.png', caption: 'قم بادخال الصور والعناوين ' },
            { src: 'assets/simtaGallary3.png', caption: 'الشكل النهائي للمكون' },
        ]
    },
    forms: {
        title: 'شريط اعلانات سيمتا',
        images: [
            { src: 'assets/simtaAd1.png', caption: 'اختر المكون من قائمة المكونات' },
            { src: 'assets/simtaAd2.png', caption: 'قم بادخال الصور والعناوين ' },
            { src: 'assets/simtaAd3.png', caption: 'الشكل النهائي للمكون' },
        ]
    },
    navigation: {
        title: 'خط فاصل سيمتا',
        images: [
            { src: 'assets/simtaLine1.png', caption: 'اختر المكون من قائمة المكونات' },
            { src: 'assets/simtaLine2.png', caption: 'قم بادخال الصور والعناوين ' },
            { src: 'assets/simtaLine3.png', caption: 'الشكل النهائي للمكون' },
        ]
    },
    cards: {
        title: 'واتساب سيمتا',
        images: [
            { src: 'assets/simtaWhats1.png', caption: 'اختر المكون من قائمة المكونات' },
            { src: 'assets/simtaWhats2.png', caption: 'قم بادخال الصور والعناوين ' },
            { src: 'assets/simtaWhats3.png', caption: 'الشكل النهائي للمكون' },
        ]
    },
    modals: {
        title: 'فئات المتجر سيمتا',
        images: [
            { src: 'assets/simtaCat1.png', caption: 'اختر المكون من قائمة المكونات' },
            { src: 'assets/simtaCat2.png', caption: 'قم بادخال الصور والعناوين ' },
            { src: 'assets/simtaCat3.png', caption: 'الشكل النهائي للمكون' },
        ]
    },
    tables: {
        title: 'شاشة تحميل سيمتا',
        images: [
            { src: 'assets/simtaLoad1.png', caption: 'اختر المكون من قائمة المكونات' },
            { src: 'assets/simtaLoad2.png', caption: 'قم بادخال الصور والعناوين ' },
            { src: 'assets/simtaLoad3.png', caption: 'الشكل النهائي للمكون' },
        ]
    },
    alerts: {
        title: 'منتجات بملصق سيمتا',
        images: [
            { src: 'assets/simtaProduct1.png', caption: 'اختر المكون من قائمة المكونات' },
            { src: 'assets/simtaProduct2.png', caption: 'قم بادخال الصور والعناوين ' },
            { src: 'assets/simtaProduct3.png', caption: 'الشكل النهائي للمكون' },
        ]
    },
    progress: {
        title: 'معرض صور سيمتا',
        images: [
            { src: 'assets/simtaSpecialGallary1.png', caption: 'اختر المكون من قائمة المكونات' },
            { src: 'assets/simtaSpecialGallary2.png', caption: 'قم بادخال الصور والعناوين ' },
            { src: 'assets/simtaSpecialGallary3.png', caption: 'الشكل النهائي للمكون' },
        ]
    },
    badges: {
        title: 'جوجل ماب سيمتا',
        images: [
            { src: 'assets/googleMap1.png', caption: 'اختر المكون من قائمة المكونات' },
            { src: 'assets/googleMap2.png', caption: 'قم بادخال الصور والعناوين ' },
            { src: 'assets/googleMap3.png', caption: 'الشكل النهائي للمكون' },
        ]
    },
    carousel: {
        title: 'منتجات مع خلفية سيمتا',
        images: [
            { src: 'assets/productsWithBg1.png', caption: 'اختر المكون من قائمة المكونات' },
            { src: 'assets/productsWithBg2.png', caption: 'قم بادخال الصور والعناوين ' },
            { src: 'assets/productsWithBg3.png', caption: 'الشكل النهائي للمكون' },
        ]
    }
};

// Add more components data
const additionalComponents = {
    accordion: {
        title: 'معرض سيمتا2',
        images: [
            { src: 'assets/simtaGallary2_1.png', caption: 'اختر المكون من قائمة المكونات' },
            { src: 'assets/simtaGallary2_2.png', caption: 'قم بادخال الصور والعناوين ' },
            { src: 'assets/simtaGallary2_3.png', caption: 'الشكل النهائي للمكون' },
        ]
    },
    tabs: {
        title: 'معرض سيمتا 3',
        images: [
            { src: 'assets/simtaGallary3_1.png', caption: 'اختر المكون من قائمة المكونات' },
            { src: 'assets/simtaGallary3_2.png', caption: 'قم بادخال الصور والعناوين ' },
            { src: 'assets/simtaGallary3_3.png', caption: 'الشكل النهائي للمكون' },
        ]
    },
    tooltips: {
        title: 'عنوان مزخرف سيمتا',
        images: [
            { src: 'assets/specialText1.png', caption: 'اختر المكون من قائمة المكونات' },
            { src: 'assets/specialText2.png', caption: 'قم بادخال الصور والعناوين ' },
            { src: 'assets/specialText3.png', caption: 'الشكل النهائي للمكون' },
        ]
    },
    dropdowns: {
        title: 'احصائيات سيمتا',
        images: [
            { src: 'assets/simtaStats1.png', caption: 'اختر المكون من قائمة المكونات' },
            { src: 'assets/simtaStats2.png', caption: 'قم بادخال الصور والعناوين ' },
            { src: 'assets/simtaStats3.png', caption: 'الشكل النهائي للمكون' },
        ]
    },
    pagination: {
        title: 'منتج مع عرض سيمتا',
        images: [
            { src: 'assets/simtaProductOffer1.png', caption: 'اختر المكون من قائمة المكونات' },
            { src: 'assets/simtaProductOffer2.png', caption: 'قم بادخال الصور والعناوين ' },
            { src: 'assets/simtaProductOffer3.png', caption: 'الشكل النهائي للمكون' },
        ]
    },

};

// Merge all component data
Object.assign(componentData, additionalComponents);

// DOM elements
let modal, modalTitle, imagesGrid, closeBtn, componentCards;

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');

    // Initialize DOM elements
    modal = document.getElementById('galleryModal');
    modalTitle = document.getElementById('modalTitle');
    imagesGrid = document.getElementById('imagesGrid');
    closeBtn = document.getElementById('closeBtn');
    componentCards = document.querySelectorAll('.component-card');

    console.log('DOM elements found:', {
        modal: !!modal,
        modalTitle: !!modalTitle,
        imagesGrid: !!imagesGrid,
        closeBtn: !!closeBtn,
        componentCards: componentCards.length
    });

    if (!modal) {
        console.error('Modal not found! Check if galleryModal exists in HTML');
        return;
    }

    // Add click event to component cards
    componentCards.forEach(card => {
        card.addEventListener('click', function() {
            const componentType = this.getAttribute('data-component');
            console.log('Card clicked:', componentType);
            showGallery(componentType);
        });
    });

    // Close modal events
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeModal();
        }
    });
});

// Show gallery function
function showGallery(componentType) {
    const data = componentData[componentType];
    if (!data) {
        console.error(`No data found for component: ${componentType}`);
        return;
    }

    if (!modal || !modalTitle || !imagesGrid) {
        console.error('Modal elements not found');
        return;
    }

    console.log(`Loading gallery for: ${componentType}`, data);

    modalTitle.textContent = data.title;
    imagesGrid.innerHTML = '';

    data.images.forEach((image) => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.caption;
        img.loading = 'lazy';
        img.style.cursor = 'pointer';

        // Add click event to show image fullscreen
        img.onclick = function() {
            showImageFullscreen(image.src, image.caption);
        };

        // Add error handling for images
        img.onerror = function() {
            console.error(`Failed to load image: ${image.src}`);
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPtmE2YUg2YrYqtmFINiq2K3ZhdmK2YQg2KfZhNi12YjYsdipPC90ZXh0Pjwvc3ZnPg==';
            this.alt = 'لم يتم تحميل الصورة';
        };

        const caption = document.createElement('div');
        caption.className = 'image-caption';
        caption.textContent = image.caption;

        imageItem.appendChild(img);
        imageItem.appendChild(caption);
        imagesGrid.appendChild(imageItem);
    });

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Add loading effect after modal is shown
    setTimeout(addImageLoadingEffect, 100);
}

// Show image in fullscreen
function showImageFullscreen(imageSrc, imageCaption) {
    console.log('Showing fullscreen image:', imageSrc);

    // Create fullscreen overlay
    const fullscreenOverlay = document.createElement('div');
    fullscreenOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    `;

    // Create image container
    const imageContainer = document.createElement('div');
    imageContainer.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        text-align: center;
    `;

    // Create the image
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = imageCaption;
    img.style.cssText = `
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;

    // Create caption
    const caption = document.createElement('div');
    caption.textContent = imageCaption;
    caption.style.cssText = `
        color: white;
        font-size: 1.2rem;
        margin-top: 1rem;
        font-family: 'Cairo', sans-serif;
        background: rgba(0, 0, 0, 0.7);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        display: inline-block;
    `;

    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        font-size: 2rem;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    // Add elements to container
    imageContainer.appendChild(closeBtn);
    imageContainer.appendChild(img);
    imageContainer.appendChild(caption);
    fullscreenOverlay.appendChild(imageContainer);

    // Add to body
    document.body.appendChild(fullscreenOverlay);

    // Close events
    const closeFullscreen = () => {
        document.body.removeChild(fullscreenOverlay);
    };

    closeBtn.onclick = closeFullscreen;
    fullscreenOverlay.onclick = (e) => {
        if (e.target === fullscreenOverlay) {
            closeFullscreen();
        }
    };

    // Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeFullscreen();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Close modal function
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for images
function addImageLoadingEffect() {
    const images = document.querySelectorAll('.image-item img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
}
