
let noClicks = 0;

function moveNo() {
    noClicks++;

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    document.getElementById("noBtn").style.left = x + "px";
    document.getElementById("noBtn").style.top = y + "px";

    if (noClicks >= 3) {
        
        if (typeof showKittyContainer === 'function') {
            showKittyContainer();
        } else {
            document.getElementById("kitty").style.display = "block";
            document.getElementById("instruction").style.display = "block";
        }
    }
}

function sayYes() {
    const thank = document.getElementById('thankYouContainer');
    const kittyContainer = document.getElementById('kittyContainer');
    if (kittyContainer) {
        kittyContainer.style.display = 'none';
    }
    if (thank) {
        thank.style.display = 'block';
    } else {
        alert('Thank you!');
    }
}

function showKittyContainer() {
    const container = document.getElementById('kittyContainer');
    const instr = document.getElementById('instruction');
    const yesBtn = document.getElementById('yesInKitty');
    if (container) {
        container.style.display = 'flex';
    }
    if (instr) instr.style.display = 'block';
    if (yesBtn) yesBtn.style.display = 'block';
    
    document.querySelector('button[onclick="sayYes()"]').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
}
