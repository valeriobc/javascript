'use strict';

let obj = {};
Object.preventExtensions(obj);

// Atribuindo para uma nova propriedade de um objeto não-extensível
obj,newValue = 'new value'; // lança um erro