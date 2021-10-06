const Rests = {
    user: 'user/',
    auth: 'user/auth/',
    sensor: '/sensor/',
    ping: 'ping/',
};

export default Rests;

export const AuthRests = {
    signUp: 'signUp/',
    signIn: 'signIn/',
    logOut: 'logout/',
    logOutAll: 'logout/all/',
};

export const SensorRests = {
    getAll: 'all/',
    get: (id: string) => `${id}/`,
    delete: (id: string) => `${id}/`,
    value: 'value/',
};

// export const SensorValueRests = {
//     get: (id: string) => `${id}/`,
//     delete: (id: string) => `${id}/`,
//     getAll: (id: string) => `all/${id}/`,
// };
