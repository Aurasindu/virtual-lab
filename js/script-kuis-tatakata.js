document.addEventListener('DOMContentLoaded', function () {
    const draggables = document.querySelectorAll('.draggable');
    const dropZones = document.querySelectorAll('.drop-zone');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault(); // Agar bisa di-drop
            zone.classList.add('hovered');
        });

        zone.addEventListener('dragleave', () => {
            zone.classList.remove('hovered');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedItem = document.querySelector('.dragging');
            if (draggedItem) {
                zone.appendChild(draggedItem);
                zone.classList.remove('hovered');

                // Cek apakah drop di area benar/salah sesuai
                const category = draggedItem.getAttribute('data-category');
                const zoneId = zone.id;
                if (category === zoneId) {
                    alert('Benar!');
                } else {
                    alert('Salah!');
                }
            }
        });
    });
});
