export const register = `mutation 
userRegistrationSimple($password: String!, $email: String!, $currency: Currency!){
    userRegistrationSimple(input: {
      password: $password,
      email: $email,
      currency: $currency
    }) {
      loginToken
      accessToken
      refreshToken
    }
}`;