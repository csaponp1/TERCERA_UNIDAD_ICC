const colorPicker = document.getElementById('colorPicker');
const colorBox = document.getElementById('colorBox');

colorPicker.addEventListener('input', function() {
    colorBox.style.backgroundColor = colorPicker.value;
});
