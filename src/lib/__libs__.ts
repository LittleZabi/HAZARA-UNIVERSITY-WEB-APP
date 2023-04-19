let intersectionObserver: any;
function ensureIntersectionObserver() {
	if (intersectionObserver) return;
	intersectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const eventName: any = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
			entry.target.dispatchEvent(new CustomEvent(eventName));
		});
	});
}
export function viewport(element: HTMLElement) {
	ensureIntersectionObserver();
	intersectionObserver.observe(element);
	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	};
}
