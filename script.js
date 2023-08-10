const submit = document.getElementById('btn-share');
//vai aparecer

function show() {
    let shareInput = document.getElementById('shared');
    let share = shareInput;
    if (share.style.display === 'flex') {
        share.style.display = 'none';
    } else {
        share.style.display = 'flex';
    }
}

