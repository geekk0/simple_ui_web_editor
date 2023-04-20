const selectors = {
	processList: "#processes",
	operationsList: "#operations",
	handlersList: "#handlers",
        pyFilesList: "#py-files",
        mainMenuList: "#main-menu",
	listWrap: ".list-wrap",
	list: ".list",
	listItem: ".list-item",
	btnEdit: ".edit",
	btnDelete: ".delete",
	btnSave: ".save-element",
	btnAdd: ".btn-add",
	btnCloseModal: ".close-modal",
	modal: ".modal",
	modalTitle: ".modal",
	modalContent: ".modal-content",
};

const newElements = {
	Process: {
                type: "Process",
                ProcessName: "New Process",
                PlanFactHeader: "",
                DefineOnBackPressed: false,
                hidden: false,
                login_screen: false,
                SC: false,
                Operations: []
	},
	Operation: {
                type: "Operation",
                Name: "New Screen",
                Timer: false,
                hideToolBarScreen: false,
                noScroll: false,
                handleKeyUp: false,
                noConfirmation: false,
                hideBottomBarScreen: false,
                onlineOnStart: false,
                send_when_opened: false,
                onlineOnInput: false,
                DefOnlineOnCreate: "",
                DefOnlineOnInput: "",
                DefOnCreate: "",
                DefOnInput: "",
                Elements: [],
                Handlers: [],
                onlineOnAfterStart: false
	},
	Elements: {
                Value: "",
                Variable: "",
                type: "LinearLayout",
                weight: "",
                height: "",
                width: "",
                orientation: "",
                Elements: [],
                BackgroundColor: "",
                StrokeWidth: "",
                Padding: ""
	},
	CommonHandler: {
                type: "CommonHandler",
                action: "",
                event: "onLaunch",
                method: "",
                postExecute: "",
                alias: ""
	},
	Handlers: {
                type: "Handlers",
                action: "",
                event: "onLaunch",
                method: "",
                postExecute: "",
	},
        PyFiles: {
                type: "PyFiles",
                PyFileData: '',
                file_path: '',
                PyFileKey: 'Python module'
        }
}

const constants = {
        'pyHandlersEmptyPath': '<Not selected>'
}

const listElements = {
        Processes: {
                node: selectors.processList,
                type: 'Process',
                path: '',
                rowKey: ['ProcessName', 'CVOperationName']
        },
        CommonHandlers: {
                node: selectors.handlersList,
                type: 'CommonHandler',
                path: '',
                rowKey: 'event'
        },
        PyFiles: {
                node: selectors.pyFilesList,
                type: 'PyFiles',
                path: '',
                rowKey: 'PyFileKey'
        },
        MainMenu: {
                node: selectors.mainMenuList,
                type: 'MainMenu',
                path: '',
                rowKey: 'MenuTitle'
        },
        Operations: {
                node: selectors.operationsList,
                type: 'Operation',
                path: '',
                rowKey: 'Name',
        }

        // CVFrames: 'CVFrame',
        // MainMenu: mainMenuList 'MainMenu',
        // PyFiles: 'PyFiles' ,
        // PyTimerTask: 'PyTimerTask',
        
        // Handlers: 'Handlers',
         
        // Mediafile: 'Mediafile',
}