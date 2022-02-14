(() => {
	const $ = function (selector) {
		const elements = document.querySelectorAll(selector);
		const obj = {};
		
		obj.hide = () => {
			elements.forEach(elem => {
				elem.style.display = 'none';
			});
			return obj;
		};

		obj.show = () => {
			elements.forEach(elem => {
				elem.style.display = '';
			});
			// возвращаем из всех методов, чтобы реализовать "цепочку" вызовов
			return obj;
		};

		// возвращаем объект, чтобы можно было работать с ним из вызывающей функции
		return obj;
	};

	// теперь сможем обращаться к глобальной функции
	window.$ = $;
})();