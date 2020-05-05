const params = new URLSearchParams(window.location.search)
const group = params.get('group')
const showMusic = params.get('showMusic') === 'on'
const musicText = params.get('musicText')

if (group) {
    document.querySelector('#group-name').textContent = group
}

if (showMusic) {
    document.querySelector('#music-text').classList.remove('hidden')
}

if (musicText) {
    document.querySelector('#music-name').textContent = musicText
}
