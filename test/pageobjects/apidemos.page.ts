export class APIDemosPage {
    static appBtn() {
        return $('//android.widget.TextView[@content-desc="App"]');
    }
    
    static searchBtn() {
        return $('//android.widget.TextView[@content-desc="Search"]');
    }

    static InvokeSearchBtn() {
        return $('//android.widget.TextView[@content-desc="Invoke Search"]');
    }

    static prefillQueryField() {
        return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/txt_query_prefill"]');
    }

    static appDataField() {
        return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/txt_query_appdata"]')
    }
}