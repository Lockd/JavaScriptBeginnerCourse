'use strict';

// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов, 
// а возвращать – массив значений одного из полей (отсортированных в порядке возрастания):
// выходит массив у него есть ключи, нам нужен и массив и ключи
// затем мы прыгаем по объектам вытаскивая из них значения под заданным ключем и пихаем это все в новый масив который выведем потом

let usersData = [
	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
	{ 'user' : 'Bob', 'password' : 'MyNAmeIsBob' }
];
console.log(usersData.length);
let i=0;

function getFieldValues(arr, key){
	let newUsersData = [];
	while (i <= arr.length-1){
		newUsersData[i] = arr[i][key];
		i++;
	}
	return newUsersData;
}

console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob']

// ------------------------


// 2) Написать функцию, фильтрующую массив с использованием предиката:
// ------------------------

let numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

function isEven(x) {
	return x % 2 == 0;
}

//console.log(filter(numbers, isEven)); // --> [2, 8, 34]
console.log(numbers.filter(isEven));


// 3) Даны 2 строки со словами (без знаков препинания), 
// вывести те слова (по одному разу), которые встречаются в обоих строках
// ------------------------

var firstLongString = 'Load up on guns and bring your friends it is fun to lose and to pretend';
var secondLongString = 'She is over bored and self assured oh no I know a dirty word';

function findSimilarWords(a,b){
	let words1 = a.split(' ');
	let words2 = b.split(' ');
	let j = 0;
	let k = 0;
	let arrau = [];
	words1.forEach(function(item, i, arr){
			 while (j < words2.length){
				if(item == words2[j] && arrau.indexOf(item) == -1){
					arrau[k] = item;
					k++;
				}	
				j++;
			}
			j=0; 
		});
	return arrau;
}

console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and', 'is'];

// ------------------------
// 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:
// ------------------------

var IpAddress = '10.223.98.2';
var subnetMask = 28;

function generateBroadcastAndNetworsAddresses(ip, mask) {
 	if (typeof ip != 'string')
		return 'молодой человек, IP-адресс  сделайте строковым, пожалуйста';

 	let arr = ip.split('.');
 	if (arr.length != 4)
 		return 'я конечно не эксперт, но в IP-адрессе обычно 4 октета';
 
 	if (arr.some(function(num) {
 		return isNaN(parseInt(num)) || num < 0 || num > 255;
 	})) return 'чиселки только от 0 до 255';
 
 	let IpFull = 0;
 	for (let i = 0; i < 4; i++) {
 		IpFull += arr[i] << (3 - i) * 8;
 	}
 
 	let maskFull = Math.pow(2, 32) - Math.pow(2, 32 - mask); 
 	let networkFull   = IpFull & maskFull;
 	let broadcastFull = networkFull | ~maskFull;
 
 	let network   = adress(networkFull);
 	let broadcast = adress(broadcastFull);
 
 	return 'Broadcast - ' + broadcast + ', Network - ' + network;
 }
 function adress(num) {
     let byte1 = (num >>> 24);
     let byte2 = (num >>> 16) & 255;
     let byte3 = (num >>>  8) & 255;
     let byte4 = num & 255;
     return byte1 + '.' + byte2 + '.' + byte3 + '.' + byte4;
 }
 
console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); // Broadcast - 10.223.98.15, Network - 10.223.98.0

// ------------------------
// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// ------------------------

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];
let k = 0;
let j = 0;
i = 0;
function makeItClean(arr){
	let finalArr = [];
	while (k < arr.length){
		while (j < arr[k].length){
			if(finalArr.indexOf(arr[k][j]) == -1){
				finalArr[i] = arr[k][j];
				i++;
			}			
			j++;
		}
		k++;
		j = 0;
	}
	return finalArr;
}
console.log(makeItClean(totalMessArray)); // --> ['a', 'aa', 1, '1', undefined, true];

// ------------------------