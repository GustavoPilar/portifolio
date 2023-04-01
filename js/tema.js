function theme() {
    var data = new Date()
    var hora = data.getHours()
    var b = window.document.querySelector('body')
    var h = window.document.querySelector('header')
    var eu = window.document.querySelector('div#img')
    var icon1 = window.document.getElementsByTagName('i')[0]
    var icon2 = window.document.getElementsByTagName('i')[1]

    if (hora >= 8 && hora < 18) {
        h.style.background = 'rgb(241, 241, 241)'
        h.style.color = 'black'
        eu.style.border = '1px solid black'
        icon1.style.color = 'black'
        icon2.style.color = 'black'
    } else {
        h.style.background = 'rgb(83, 83, 83)'
        b.style.background = '#434343'
        b.style.color = 'white'
        eu.style.border = '2px solid white'
        icon1.style.color = 'white'
        icon2.style.color = 'white'
    }
}