document.addEventListener('DOMContentLoaded', function() {
    // Assuming your pins have a class of 'map-pin'
    var pins = document.querySelectorAll('.map-pin');

    pins.forEach(function(pin) {
        pin.addEventListener('click', function() {
            // Get the scene ID from the pin's data attribute
            var sceneId = pin.getAttribute('data-scene-id');
            // Call the switchScene function with the found scene
            switchScene(findSceneById(sceneId));
        });
    });
});
