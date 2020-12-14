let mucics = document.getElementById('audio')
    document.body.addEventListener('mousemove', function() {
        setTimeout(() => {
            mucics.play();
        }, 2000);
    }, false);