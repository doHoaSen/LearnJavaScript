'use strict';

/*
1. 동기와 비동기
 JavaScript is synchronous
 Execute the code block in order after hoisting
 hoising: var, function declaration 맨 앞에
*/

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');   
// 1 -> 3 -> 2


// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));


// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000) ;



// 3. 콜백지옥 체험하기
class UserStorage{
    loginUser(id, password, onSucess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSucess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }


    getRoles(user, onSucess, onError){
        setTimeout(() => {
            if (user === 'ellie') {
                onSucess( {name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}


// 1. 사용자에게 입력받은 아이디와 비번으로 로그인
// 2, 로그인 성공적이라면 그 아이디를 받아와 역할을 요청하기
// 3. 역할이 성공적으로 받아진다면 이들을 오브젝트로 출력하는 것

const userStorage = new UserStorage();
const id = prompt('enter your id: ');
const password = prompt('enter your password');

userStorage.loginUser(
    id,
    password,
    user => {
    userStorage.getRoles(user,
         (userWithRole) => {
        alert(
            `Hello ${userWithRole.name}, 
            you have a ${userWithRole.role} role`);
    },
     error => {
        console.log(error);
    });
}, 
    error => {
        console.log(error);});