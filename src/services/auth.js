export function signIn(email, password) {

    return new Promise((resolve, reject) => {

        if (email === 'pablodoebber28@gmail.com' && password === '123456') {
            // time is just to simulate an API
            setTimeout(() => {
                resolve({
                    token: 'shdshdiuhasdiuh78787678h78ha8ysd',
                    user: {
                        name: 'Pablo',
                        email: 'pablodoebber28@gmail.com'
                    }
                })
            }, 2000)
        } else {
            // time is just to simulate an API
            setTimeout(() => {
                reject('There was a problem with the request, invalid or missing login information.')
            }, 2000)
        }
    }) 
}