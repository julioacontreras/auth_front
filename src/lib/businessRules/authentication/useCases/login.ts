import { browser } from '$lib/core/adapters/browser'
import { ajax } from '$lib/core/adapters/ajax'
import { Endpoints } from '../domains/endpoints'

export async function login(): Promise<unknown> {
    const SELECTOR_EMAIL_ELEMENT = '.stackLogin input[name="email"]'
    const SELECTOR_PASSWORD_ELEMENT = '.stackLogin input[name="password"]'
    const email = browser.findValueInDocument(SELECTOR_EMAIL_ELEMENT)
    const password = browser.findValueInDocument(SELECTOR_PASSWORD_ELEMENT)
    return ajax.post(Endpoints.login, {
        email, password
    }) 
}
