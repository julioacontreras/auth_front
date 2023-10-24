import { browser } from '$lib/core/adapters/browser'
import { ajax } from '$lib/core/adapters/ajax'
import { Endpoints } from '../domains/endpoints'

export async function register(): Promise<unknown> {
    const SELECTOR_NAME_ELEMENT = '.stackRegister input[name="name"]'
    const SELECTOR_EMAIL_ELEMENT = '.stackRegister input[name="email"]'
    const SELECTOR_PASSWORD_ELEMENT = '.stackRegister input[name="password"]'
    const name = browser.findValueInDocument(SELECTOR_NAME_ELEMENT)
    const email = browser.findValueInDocument(SELECTOR_EMAIL_ELEMENT)
    const password = browser.findValueInDocument(SELECTOR_PASSWORD_ELEMENT)
    return ajax.post(Endpoints.login, {
        name, email, password
    }) 
}