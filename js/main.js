// JAVASCRIPT START
(() => {
    console.log('fired!');

    let teamSelect = document.querySelectorAll('.teamSelect'),
        bioLB = document.querySelector('#bioLB'),
        closeLB = document.querySelector('#close'),
        memberPic = document.querySelector('#memberPic'),
        memberName = document.querySelector('#memberName'),
        memberBio = document.querySelector('#memberBio');

    const teamMembers = [
            ["Jonathan Miller", `Jonathan Miller was born in North York, Ontario. He has been involved in creative industries for as long as he's been working. He began as a musician doing theme songs and scores for movies such as 5ive Girls and Unrivaled. He also released 2 albums under the project "Panik Attack" that were entirely self produced, recorded, and mastered. As the music industry has been more tough to be successful in, his career shifted from music to web and video. He is a soon to be graduate of Fanshawe's Interactive Media Design program in 2021. He brings a large toolbox of creative processes to enrich any projects, no matter the size.`],

            ["Bruce Wayne", `Bruce Wayne is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and first appeared in Detective Comics #27 in 1939. Originally named the "Bat-Man," the character is also referred to by such epithets as the Caped Crusader, the Dark Knight, and the World's Greatest Detective. This picture isn't even of the real Bruce Wayne, it is just a picture I found on Pexels. :)`]
    ];

    function showLightbox() {
        let member = this.array;
        bioLB.classList.toggle('hidden');
        memberPic.src = `images/${this.dataset.member}.jpg`;
        memberName.textContent = `${teamMembers[member][0]}`;
        memberBio.textContent = `${teamMembers[0][1]}`;

    }

    function closeLightbox() {
        bioLB.classList.toggle('hidden');
    }


    closeLB.addEventListener('click', closeLightbox);
    teamSelect.forEach(button => button.addEventListener('click', showLightbox));

})();