
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != "undefined" ? args[number] : match;
        });
    };
};


if (!document.__proto__.sleep) {
    document.__proto__.sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

if (!document.__proto__.cssVar) {
    document.__proto__.cssVar = (name, value) => {
        if (value) document.documentElement.style.setProperty(name, value);
        return getComputedStyle(document.documentElement).getPropertyValue(name);
    }
}

if (!document.__proto__.getTheme) {
    document.__proto__.getTheme = () => {
        return localStorage.getItem("theme");
    }
}
if (!document.__proto__.setTheme) {
    const themeChange = new Event("themeChange");
    document.__proto__.setTheme = (name) => {
        document.documentElement.setAttribute("data-theme", name);
        localStorage.setItem("theme", name);
        themeChange.data = {name};
        document.dispatchEvent(themeChange);
    }
}

if (!document.documentElement.hasAttribute("data-theme")) {
    document.setTheme(localStorage.getItem("theme"));
}


if (!document.__proto__.showLoading) {
    const showLoading = new Event("showLoading");
    document.__proto__.showLoading = () => {
        document.dispatchEvent(showLoading);
    }
}

if (!document.__proto__.hideLoading) {
    const hideLoading = new Event("hideLoading");
    document.__proto__.hideLoading = () => {
        document.dispatchEvent(hideLoading);
    }
}

if (!document.__proto__.hideAllDropDown) {
    document.__proto__.hideAllDropDown = () => {
        const els = document.getElementsByClassName("dropdown");
        Array.from(els).forEach((v, k, arr) => {
            var all_elem = v.getElementsByTagName("*");
            Array.from(all_elem).forEach((vv, kk, arrr) => {
                setTimeout(
                    () => {
                        vv.blur();
                    }, 500
                )
            })

        })
    }
}

if (!document.__proto__.kline) {
    document.__proto__.kline = {};
}

Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function (key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}