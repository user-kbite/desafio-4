const lock = document.querySelector(".lock");

lock.addEventListener("click", function() {
	if (lock.src === "./assets/image/lock.png") {
		lock.src = "./assets/image/lock.png"
	} else {
		lock.src = "./assets/image/unlock.png"
	}
	alert(lock.src)
})
