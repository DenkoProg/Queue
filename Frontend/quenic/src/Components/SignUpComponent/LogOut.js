export async function logOut() {
    try {
        // Invalidate the token on the server
        const response = await fetch('https://api.quenic.space/dj-rest-auth/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        })
        console.log(localStorage.getItem('token'))

        if (!response.ok) {
            throw new Error('Logout failed: ' + response.statusText);
        }

        // Remove the token from localStorage
        localStorage.removeItem('token');


    } catch (error) {
        console.error(error)
    }
}
