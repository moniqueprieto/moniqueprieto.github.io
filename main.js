var blacker = document.getElementById('blacker')
var prieto = document.getElementById('prieto')

var threshold_distance = 300

document.addEventListener('mousemove', function(e){
	var rect = prieto.getBoundingClientRect()
	var dx = rect.left + rect.width / 2 - e.clientX
	var dy = rect.top + rect.height / 2 - e.clientY
	var dist = Math.sqrt(dx*dx+dy*dy)
	var blackness = Math.max(0, 255 - (dist / threshold_distance * 255))
	prieto.style.color = 'rgba(' + blackness + ','+ blackness + ','+ blackness + ',1)'
	blacker.style.opacity = Math.min(1 - dist / threshold_distance, 1)
})