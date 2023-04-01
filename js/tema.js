function theme() {
    var data = new Date()
    var hora = data.getHours()
    var h = window.document.querySelector('header')
    var b = window.document.querySelector('body')
    var a = window.document.querySelector('a')
    var icon1 = window.document.getElementsByTagName('i')[0]
    var icon2 = window.document.getElementsByTagName('i')[1]

    if (hora <= 8 && hora > 18) {
        h.style.background = 'rgb(241, 241, 241)'
        h.style.color = 'black'
    } else {
        h.style.background = 'rgb(83, 83, 83)'
        b.style.background = '#434343'
        b.style.color = 'white'
        icon1.style.color = 'white'
        icon2.style.color = 'white'
        a.style.color = 'white'
    }
}