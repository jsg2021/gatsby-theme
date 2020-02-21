export default function replaceSlashes(input) {
	return input.replace(/\/\/+/g, `/`);
}
