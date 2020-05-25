
let users = JSON.parse(localStorage.getItem('users')) || [];
    
export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            
            setTimeout(() => {

                
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    
                    let params = JSON.parse(opts.body);

                    
                    console.log(users);
                    let filteredUsers = users.filter(user => {  
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        let user = filteredUsers[0];
                    
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            first_name: user.first_name,
                            last_name: user.last_name,
                            token: 'fake-token'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        console.log("error");
                        // else return error
                        reject('Username or password is incorrect');
                    }

                    return;
                }

            

                
                if (url.endsWith('/users/register') && opts.method === 'POST') {

                    let newUser = JSON.parse(opts.body);
console.log(opts);
                    
                    let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                    if (duplicateUser) {
                        reject('Username "' + newUser.username + '" is already taken');
                        return;
                    }

                    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));


                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }

             
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}