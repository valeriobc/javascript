'use strict';

let obj1 = {};

Object.defineProperty(obj1, 'x', { value: 42, writable: false});

// atribuindo para uma propriedade não gravável
obj1.x = 9; // lança um erro