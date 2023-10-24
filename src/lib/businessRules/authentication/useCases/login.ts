import { html } from '@/core/adapters/html'
import { ajax } from '@/core/adapters/ajax'
import { Endpoints } from '../domains/endpoints'

export async function login(): Promise<unknown> {
    const SELECTOR_EMAIL_ELEMENT = '.stackLogin input[name="email"]'
    const SELECTOR_PASSWORD_ELEMENT = '.stackLogin input[name="password"]'
    const email = html.findValueInDocument(SELECTOR_EMAIL_ELEMENT)
    const password = html.findValueInDocument(SELECTOR_PASSWORD_ELEMENT)
    return ajax.post(Endpoints.login, {
        email, password
    }) 
}
