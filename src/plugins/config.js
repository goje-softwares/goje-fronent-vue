const config_env = {
    app_env: 'local',
    local: {
        api_base_url: 'http://localhost:8000/',
    },
    dev: {
        api_base_url: 'https://goje.herokuapp.com/',
    },
    production: {
        api_base_url: 'https://goje.herokuapp.com/',
    }
}

export let config = (key)=> {
    let app_env = config_env.app_env;
    return config_env[app_env][key]
}
