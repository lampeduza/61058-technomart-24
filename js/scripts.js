
// modal feedback

var writeUsLink = document.querySelector(".write-us");
var modalFeedback = document.querySelector(".modal-feedback");

if (modalFeedback) {
	var closeFeedback = modalFeedback.querySelector(".modal-close");
	var form = modalFeedback.querySelector(".feedback-form");
	var login = modalFeedback.querySelector("[name=name]");
	var email = modalFeedback.querySelector("[name=email]");

	var isStorageSupport = true;
	var storage = "";

	try {
		storage = localStorage.getItem("login");
	} catch (err) {
		isStorageSupport = false;
	}

	writeUsLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		modalFeedback.classList.add("modal-show");

		if (storage) {
			login.value = storage;
			email.focus();
		} else {
			login.focus();
		}
	});

	closeFeedback.addEventListener("click", function (evt) {
		evt.preventDefault();
		modalFeedback.classList.remove("modal-show");
		modalFeedback.classList.remove("modal-error");
	});

	form.addEventListener("submit", function(evt) {
		if (!login.value || !email.value) {
			evt.preventDefault();
			modalFeedback.classList.remove("modal-error");
			modalFeedback.offsetWidth = modalFeedback.offsetWidth; // не понимаю строку кода
			modalFeedback.classList.add("modal-error");
		} else {
			if (isStorageSupport) {
				localStorage.setItem("login", login.value);
			}
		}
	});

	window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (modalFeedback.classList.contains("modal-show")) {
				modalFeedback.classList.remove("modal-show");
				modalFeedback.classList.remove("modal-error");
			}
		}
	});
}

// modal  map

var mapLink = document.querySelector(".map-link");
var modalMap = document.querySelector(".modal-map");

if (modalMap) {
	var closeMap = modalMap.querySelector(".modal-close");

	mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalMap.classList.add("modal-show");
    });

    closeMap.addEventListener("click", function (evt) {
	    evt.preventDefault();
	    modalMap.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
    	if (evt.keyCode === 27) {
    		if (modalMap.classList.contains("modal-show")) {
    			evt.preventDefault();
    			modalMap.classList.remove("modal-show");
    		}
    	}
    });
}

// modal card

var bookmarkLink = document.querySelector(".catalog-item-buy");
var modalCard = document.querySelector(".modal-card");

if (modalCard) {
	var continueShoppingLink = modalCard.querySelector(".btn-continue-shopping");
	var closeCard = modalCard.querySelector(".modal-close")

	bookmarkLink.addEventListener("click", function (evt) {
	    evt.preventDefault();
	    modalCard.classList.add("modal-show");
    });

    continueShoppingLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		modalCard.classList.remove("modal-show");
	});

    closeCard.addEventListener("click", function (evt) {
	    evt.preventDefault();
	    modalCard.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
    	if (evt.keyCode === 27) {
    		if (modalCard.classList.contains("modal-show")) {
    			evt.preventDefault();
    			modalCard.classList.remove("modal-show");
    		}
    	}
    });
}
