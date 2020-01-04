export default function({ $axios, redirect, store }) {
    $axios.onError(error => {
        if (error.response) {
            if (error.response.status === 401) {
                redirect('/admin/login?message=session');
                store.dispatch('auth/logout');
            }
            if (error.response.status === 500) {
                console.error('Server Error');
            }
        }
    });
}
