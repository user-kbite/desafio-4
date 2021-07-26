const input = document.getElementById("senha");
const lock = document.querySelector(".key");

lock.addEventListener("click", function() {
	if (lock.classList.contains("fa-lock")) {
		input.type = "text";
		lock.classList.remove("fa-lock");
		lock.classList.add("fa-lock-open");
	} else {
		input.type = "password";
		lock.classList.remove("fa-lock-open");
		lock.classList.add("fa-lock");
	}
})