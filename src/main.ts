export default class Main {
	constructor(message: string = "Hello World!") {
		console.log(message);
	}

	/**
	 * Add two numbers
	 * @param {number} a
	 * @param {number} b
	 * @returns {number}
	 */
	add(a: number, b: number): number {
		return a + b;
	}

	/**
	 * Substract two numbers
	 * @param {number} a
	 * @param {number} b
	 * @returns {number}
	 */
	substract(a: number, b: number): number {
		return a - b;
	}

	/**
	 * Multiply two numbers
	 * @param {number} a
	 * @param {number} b
	 * @returns {number}
	 */
	multiply(a: number, b: number): number {
		return a * b;
	}

	/**
	 * Divide two numbers
	 * @param {number} a
	 * @param {number} b
	 * @returns {number}
	 */
	divide(a: number, b: number): number {
		return a / b;
	}
}
