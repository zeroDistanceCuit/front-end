import { BaseService } from '../base/base'

export class UserServie extends BaseService {
    constructor(name) {
        super(name)
    }

    login(param, onSuccess, onError) {
        super.request('post', '/api/user/login', param, null, onSuccess, onError)
    }
}