// Função para animar a rolagem suave
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        window.scrollTo({
            behavior: "smooth",
            top: element.offsetTop
        });
    }
}

// Adicionar um evento de clique para cada link na barra de navegação
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link
        const targetId = link.getAttribute('href').substring(1); // Remove o '#' do href
        scrollToElement(targetId); // Chama a função de rolagem suave
    });
});


const links_social_media = {
    github: "gabriel-nunes-s",
    youtube: "UC2CbPk1gsEEGV2jHIPRZUvw",
    linkedin: "gabriel-n-dos-santos",
    instagram: "i_gns0o",
    twitter: "nunez_art_?t=52gCkVeBDMOQDBoMQsj32g&s=09"
}

function change_links() {
    //Ao invés de criar uma id para cada li, pegou o ul inteiro

    for (let li of social_links.children) {
        const social = li.getAttribute('class')

        if (social == "youtube") {
            li.children[0].href = `https://${social}.com/channel/${links_social_media[social]}`
            //o link do youtube tem que adicionar channel para canais comuns
        } else if (social == "linkedin") {
            li.children[0].href = `https://www.${social}.com/in/${links_social_media[social]}/`
        } else {
            li.children[0].href = `https://${social}.com/${links_social_media[social]}`
        }
        //alert(li.children[0].href)
    }
}
change_links()

function get_github_profile_info() {
    const url = `https://api.github.com/users/${links_social_media.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            user_name.textContent = data.name
            user_bio.textContent = data.bio
            user_link.href = data.html_url
            user_login.textContent = data.login
            user_image.src = data.avatar_url
        })
}
get_github_profile_info()

