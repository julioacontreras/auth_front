import { html } from '../../../core/adapters/html'
import { ajax } from '../../../core/adapters/ajax'
import { Endpoints } from '../domains/endpoints'

export async function register(): Promise<unknown> {
    const SELECTOR_NAME_ELEMENT = '.stackRegister input[name="name"]'
    const SELECTOR_EMAIL_ELEMENT = '.stackRegister input[name="email"]'
    const SELECTOR_PASSWORD_ELEMENT = '.stackRegister input[name="password"]'
    const name = html.findValueInDocument(SELECTOR_NAME_ELEMENT)
    const email = html.findValueInDocument(SELECTOR_EMAIL_ELEMENT)
    const password = html.findValueInDocument(SELECTOR_PASSWORD_ELEMENT)
    return ajax.post(Endpoints.login, {
        name, email, password
    }) 
}