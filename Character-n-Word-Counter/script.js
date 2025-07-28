function count() {
    const val = document.getElementById('text').value;
    document.getElementById('chars').textContent = val.length;
    document.getElementById('words').textContent = val.trim() ? val.trim().split(/\s+/).length : 0;
}