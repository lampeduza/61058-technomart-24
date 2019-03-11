
// modal card

var bookmarkLink = document.querySelector(".catalog-item-bookmarks");
var modalCard = document.querySelector(".modal-card");
var closeCard = modalCard.querySelector(".modal-close")

bookmarkLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalCard.classList.add("modal-show");
});

closeCard.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalCard.classList.remove("modal-show");
});

// modal feedback

var writeUsLink = document.querySelector(".write-us");
var modalFeedback = document.querySelector(".modal-feedback");
var closeFeedback = modalFeedback.querySelector(".modal-close");
var form = modalFeedback.querySelector(".feedback-form");
var login = modalFeedback.querySelector("[name=name]");
var email = modalFeedback.querySelector("[name=email]");
var storage = localStorage.getItem("login");

writeUsLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalFeedback.classList.add("modal-show");
	email.focus();
	if (storage) {
		login.value = storage;
	}
});

closeFeedback.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalFeedback.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
	if (!login.value || !email.value) {
	evt.preventDefault();
	console.log("Нужно ввести логин и пароль");
	}
});


// modal  map

var mapLink = document.querySelector(".map-link");
var modalMap = document.querySelector(".modal-map");
var closeMap = modalMap.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalMap.classList.remove("modal-show");
});