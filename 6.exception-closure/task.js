﻿function parseCount(meaning) {
	let parsedNumber = Number.parseFloat(meaning);
	if (!!!parsedNumber) {
		throw new Error("Невалидное значение");
	} else {
		return parsedNumber;
	}
}

function validateCount(meaning) {
	try {
		return parseCount(meaning);
	} catch (error) {
		return error;
	}
}


class Triangle {
	constructor(a, b, c) {
		if (
			a + b < c ||
			a + c < b ||
			b + c < a
		) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}
	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const halfPerimeter = this.perimeter / 2;
		return Number(Math.sqrt(halfPerimeter *
			(halfPerimeter - this.a) *
			(halfPerimeter - this.b) *
			(halfPerimeter - this.c)).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return new(class extends Triangle {
			constructor() {
				super();
				this.errorMessage = "Ошибка! Треугольник не существует";
			}
			get area() {
				return this.errorMessage;
			}
			get perimeter() {
				return this.errorMessage;
			}
		})();
	}
}