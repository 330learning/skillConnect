export const login = profile => ({
    type : 'LOGIN',
    first: profile.first,
    last : profile.last,
    age : profile.age,
    gender: profile.gender,
    email: profile.email,
    phone: profile.phone,
    username: profile.username,
    avatar: profile.avatar,
})