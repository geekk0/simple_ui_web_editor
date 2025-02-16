import eel

from . import utils
from . import config
from . import dialogs


class UIOpenMode:
    NONE = 0
    CHROME = 1
    USER_DEFAULT = 2


# Setup eels root folder
eel.init(config.FRONTEND_ASSET_FOLDER)


@eel.expose
def save_configuration(data, file_path):
    try:
        utils.save_config_to_file(data, file_path)
        return {'result': 'success'}
    except Exception as e:
        return {'result': 'error', 'msg': str(e)}


@eel.expose
def load_configuration(file_path):
    return utils.get_config_from_file(file_path)


@eel.expose
def get_new_configuration():
    return utils.get_new_config()


@eel.expose
def ask_file(file_type):
    """ Ask the user to select a file """
    return dialogs.ask_file(file_type)


@eel.expose
def ask_dir():
    return dialogs.ask_dir()


@eel.expose
def get_project_config(config_data):
    return utils.get_project_config(config_data)


@eel.expose
def ask_save_file(file_type):
    """ Ask the user to select a save file """
    file_name = dialogs.ask_save_file(file_type)
    return file_name


@eel.expose
def get_qr_settings():
    return str(utils.get_qr_code_config())


@eel.expose
def get_config_ui_elements():
    return utils.get_config_ui_elements()


@eel.expose
def get_base64_from_file(file_path):
    return utils.make_base64_from_file(file_path)


@eel.expose
def save_handlers_files(handlers: dict) -> dict:
    result = {'result': 'success'}
    if handlers:
        for file_name, value in handlers.items():
            with open(config.resource_path(f'{file_name}.py'), 'w', encoding='utf-8') as f:
                content = utils.get_content_from_base64(value)
                try:
                    f.write(content)
                except Exception as e:
                    result['result'] = 'error',
                    result['msg'] = result.get('msg', {})[file_name] = str(e)

        utils.update_python_modules(handlers)

    return result


@eel.expose
def send_sql_query(query_params):
    manager = utils.SQLQueryManager(**query_params)
    return manager.send_query(**query_params)


async def get_current_file_path():
    return eel.getCurrentFilePath()()


async def set_device_host(device_host):
    return eel.setDeviceHost(device_host)


def start(open_mode):
    try:
        chrome_available = utils.can_use_chrome()
        if open_mode == UIOpenMode.CHROME and chrome_available:
            eel.start('index.html', size=(1080, 780), port=0)
        elif open_mode == UIOpenMode.USER_DEFAULT or (open_mode == UIOpenMode.CHROME and not chrome_available):
            eel.start('index.html', size=(1080, 720), port=0, mode='user default')
        else:
            port = utils.get_port()
            print('Server starting at http://localhost:' + str(port) + '/index.html')
            eel.start('index.html', size=(1080, 720), host='localhost', port=port, mode=None,
                      close_callback=lambda x, y: None)
    except (SystemExit, KeyboardInterrupt):
        pass  # This is what the bottle server raises
