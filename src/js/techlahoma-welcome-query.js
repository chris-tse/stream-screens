const params = new URLSearchParams(window.location.search)
const group = params.get('group')
const showMusic = params.get('showMusic') === 'on'

if (group) {
    document.querySelector('#group-name').textContent = group
}

if (showMusic) {
    document.querySelector('#music-text').classList.remove('hidden')
}
