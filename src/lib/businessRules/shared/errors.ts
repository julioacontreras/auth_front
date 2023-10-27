import { ErrorCode as AjaxCode } from '$lib/core/adapters/ajax/index'
import { ErrorCode as I18nCode } from '$lib/core/adapters/i18n/index'

export const ErrorCode = {
    ERROR_AJAX: AjaxCode.ERROR_AJAX,
    ERROR_NOT_FOUND_DICTIONARY: I18nCode.ERROR_NOT_FOUND_DICTIONARY
}
