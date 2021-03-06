function Gallery(selectorToImages) {
    for (const [selector, images] of Object.entries(selectorToImages)) {
        let elem = $(selector);
        elem.click(function(_e) {
            elem.lightGallery({
                dynamic: true,
                dynamicEl: images,
                thumbnail: true,
                rotate: false,
                zoom: false,
                download: false,
                fullScreen: false,
                share: false,
            });
            return false;
        });
    }
}