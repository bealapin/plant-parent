window.onload = function() {
    var selectLight = document.getElementById('light')
    var light = selectLight.options[selectLight.selectedIndex]
    var selectWindow = document.getElementById('windows')
    var windows = selectWindow.options[selectWindow.selectedIndex]
    var selectExp = document.getElementById('experience')
    var experience = selectExp.options[selectExp.selectedIndex]
    var selectPets = document.getElementById('pets')
    var pets = selectPets.options[selectPets.selectedIndex]
    document.getElementById('submit').onclick = function result () {
        
        // window.alert(`Results: light = ${selectLight.selectedIndex}, windows= ${selectWindow.selectedIndex}, experience= ${selectExp.selectedIndex}, pets= ${selectPets.selectedIndex}`)
        // event.preventDefault()
    }
    }
    let updatePlantCard